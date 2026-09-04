import type { Metadata } from 'next'
import { campYears } from '@/data/campData'

// page.tsx is a client component and so cannot export metadata itself. Giving
// each year its own title keeps the 19 gallery pages distinguishable in search
// results instead of all reading "Gallery".
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const year = campYears.find((y) => y.id === id)

  if (!year) return { title: 'Gallery' }

  return {
    title: `${year.title} Camp Gallery`,
    description: `${year.aboutCamp.heading} — photographs from the Buraq Space Camp held in ${year.year}.`,
  }
}

export default function YearGalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
