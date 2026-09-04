import type { Metadata } from 'next'

// page.tsx is a client component and so cannot export metadata itself.
export const metadata: Metadata = {
  title: 'Apply Now',
  description:
    'Apply to Buraq Space Camp. Open to candidates aged 14 to 17, with Early Decision and Regular Decision application rounds.',
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
