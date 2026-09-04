/**
 * Deterministic scatter for the decorative floating elements in the alumni
 * sections.
 *
 * These used to call Math.random() inline while rendering, which meant the
 * server and the browser picked different positions for the same element — a
 * hydration mismatch — and every re-render re-rolled the whole field. Seeding
 * off the element index keeps the scatter looking random while producing the
 * identical layout on both sides.
 */

export interface Particle {
  left: string;
  top: string;
  duration: number;
  delay: number;
}

interface ParticleOptions {
  /** Shortest animation duration, in seconds. */
  baseDuration: number;
  /** How much longer than baseDuration a particle may animate. */
  durationSpread: number;
  /** Largest start delay, in seconds. */
  maxDelay: number;
}

/** Stable pseudo-random value in [0, 1) derived from a seed. */
function seeded(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function createParticles(
  count: number,
  { baseDuration, durationSpread, maxDelay }: ParticleOptions
): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    left: `${seeded(i + 1) * 100}%`,
    top: `${seeded(i + 101) * 100}%`,
    duration: baseDuration + seeded(i + 201) * durationSpread,
    delay: seeded(i + 301) * maxDelay,
  }));
}
