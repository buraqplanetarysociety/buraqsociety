import type { Metadata } from 'next'

// page.tsx is a client component and so cannot export metadata itself.
export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support Buraq Space Camp. Sponsorship keeps the camp free for every selected cadet, covering accommodation, meals and learning resources.',
}

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
