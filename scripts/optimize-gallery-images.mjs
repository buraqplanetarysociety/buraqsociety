#!/usr/bin/env node
/**
 * Converts a folder of raw camp photos (HEIC from iPhones, JPEG from WhatsApp,
 * PNG exports) into web-ready images for the gallery.
 *
 *   node scripts/optimize-gallery-images.mjs public/images/gallery/2025 --prefix buraq-2025
 *
 * Originals are moved out of public/ (into ./originals by default) so they are
 * never deployed, rather than deleted.
 *
 * Options:
 *   --prefix <name>     Base name for output files (default: source folder name)
 *   --format <fmt>      webp | jpeg            (default: webp)
 *   --max-width <px>    Longest-edge cap       (default: 2000)
 *   --quality <1-100>   Encoder quality        (default: 80)
 *   --out <dir>         Output folder          (default: same as source)
 *   --originals <dir>   Where to move sources  (default: originals/<source path>)
 *   --keep-names        Slugify original names instead of numbering them
 *   --dry-run           Print what would happen, write nothing
 */

import { execFile } from 'node:child_process'
import { readdir, mkdir, mkdtemp, rename, rm, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'
import sharp from 'sharp'

const execFileAsync = promisify(execFile)

const SOURCE_EXTENSIONS = new Set([
  '.heic',
  '.heif',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.tif',
  '.tiff',
])

function parseArgs(argv) {
  const [dir, ...rest] = argv
  if (!dir) {
    console.error('Usage: node scripts/optimize-gallery-images.mjs <folder> [options]')
    process.exit(1)
  }

  const opts = {
    dir,
    format: 'webp',
    maxWidth: 2000,
    quality: 80,
    keepNames: false,
    dryRun: false,
  }

  for (let i = 0; i < rest.length; i += 1) {
    const flag = rest[i]
    const value = rest[i + 1]
    switch (flag) {
      case '--prefix': opts.prefix = value; i += 1; break
      case '--format': opts.format = value; i += 1; break
      case '--max-width': opts.maxWidth = Number(value); i += 1; break
      case '--quality': opts.quality = Number(value); i += 1; break
      case '--out': opts.out = value; i += 1; break
      case '--originals': opts.originals = value; i += 1; break
      case '--keep-names': opts.keepNames = true; break
      case '--dry-run': opts.dryRun = true; break
      default:
        console.error(`Unknown option: ${flag}`)
        process.exit(1)
    }
  }

  if (!['webp', 'jpeg'].includes(opts.format)) {
    console.error(`--format must be webp or jpeg, got "${opts.format}"`)
    process.exit(1)
  }

  opts.prefix ??= path.basename(path.resolve(opts.dir))
  opts.out ??= opts.dir
  opts.originals ??= path.join('originals', opts.dir.replace(/^public\//, ''))
  return opts
}

function slugify(name) {
  return path
    .basename(name, path.extname(name))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * sharp reports HEIF as a readable format but the prebuilt libvips ships without
 * the HEVC decoder, so decoding throws "Support for this compression format has
 * not been built in". macOS `sips` decodes HEIC natively, so fall back to it and
 * hand sharp a PNG. Returns a path to feed sharp, plus a temp dir to clean up.
 */
async function resolveDecodableSource(sourcePath) {
  const ext = path.extname(sourcePath).toLowerCase()
  if (ext !== '.heic' && ext !== '.heif') return { input: sourcePath }

  try {
    await sharp(sourcePath).toBuffer()
    return { input: sourcePath }
  } catch {
    if (process.platform !== 'darwin') {
      throw new Error(
        `Cannot decode ${path.basename(sourcePath)}: this sharp build has no HEIC ` +
          'decoder. Convert the file to JPEG first, or run this script on macOS.'
      )
    }
    const tempDir = await mkdtemp(path.join(tmpdir(), 'gallery-heic-'))
    const decoded = path.join(tempDir, 'decoded.png')
    await execFileAsync('sips', ['-s', 'format', 'png', sourcePath, '--out', decoded])
    return { input: decoded, tempDir }
  }
}

function formatBytes(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)}MB`
    : `${Math.round(bytes / 1024)}KB`
}

async function main() {
  const opts = parseArgs(process.argv.slice(2))
  const outExt = opts.format === 'jpeg' ? '.jpg' : '.webp'

  const entries = await readdir(opts.dir, { withFileTypes: true })
  const sources = entries
    .filter((e) => e.isFile() && SOURCE_EXTENSIONS.has(path.extname(e.name).toLowerCase()))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))

  if (sources.length === 0) {
    console.log(`No convertible images found in ${opts.dir}`)
    return
  }

  console.log(
    `${opts.dryRun ? '[dry run] ' : ''}${sources.length} image(s) in ${opts.dir} ` +
      `-> ${opts.format} @ ${opts.maxWidth}px / q${opts.quality}\n`
  )

  if (!opts.dryRun) {
    await mkdir(opts.out, { recursive: true })
    await mkdir(opts.originals, { recursive: true })
  }

  const pad = String(sources.length).length
  let totalBefore = 0
  let totalAfter = 0
  const results = []

  for (const [index, name] of sources.entries()) {
    const sourcePath = path.join(opts.dir, name)
    const outName = opts.keepNames
      ? `${slugify(name)}${outExt}`
      : `${opts.prefix}-${String(index + 1).padStart(pad, '0')}${outExt}`
    const outPath = path.join(opts.out, outName)

    const before = (await stat(sourcePath)).size
    totalBefore += before

    if (opts.dryRun) {
      console.log(`  ${name}  ->  ${outName}  (${formatBytes(before)})`)
      continue
    }

    const { input, tempDir } = await resolveDecodableSource(sourcePath)

    // Encode to a buffer first: source and destination can be the same folder,
    // and sharp will not stream a file onto itself.
    const pipeline = sharp(input, { failOn: 'none' })
      .rotate() // bake in EXIF orientation before metadata is dropped
      .resize({
        width: opts.maxWidth,
        height: opts.maxWidth,
        fit: 'inside',
        withoutEnlargement: true,
      })

    const buffer =
      opts.format === 'jpeg'
        ? await pipeline.jpeg({ quality: opts.quality, mozjpeg: true }).toBuffer()
        : await pipeline.webp({ quality: opts.quality }).toBuffer()

    await sharp(buffer).toFile(outPath)
    if (tempDir) await rm(tempDir, { recursive: true, force: true })

    const { width, height } = await sharp(outPath).metadata()
    const after = (await stat(outPath)).size
    totalAfter += after
    results.push({ outName, width, height })

    console.log(
      `  ${name}\n    -> ${outName}  ${width}x${height}  ` +
        `${formatBytes(before)} -> ${formatBytes(after)}`
    )

    await rename(sourcePath, path.join(opts.originals, name))
  }

  if (opts.dryRun) return

  console.log(
    `\nDone. ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} ` +
      `(${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`
  )
  console.log(`Originals moved to ${opts.originals}/`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
