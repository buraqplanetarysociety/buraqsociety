import type { Metadata } from 'next'

// page.tsx is a client component and so cannot export metadata itself.
export const metadata: Metadata = {
  // A plain string here would end the title template chain, leaving the
  // per-year pages below without the site suffix.
  title: {
    default: 'Gallery',
    template: '%s | Buraq Space Camp',
  },
  description:
    'Photographs from every Buraq Space Camp since 1994 — nineteen years of cadets, launches, laboratories and night skies.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
