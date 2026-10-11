import type { Metadata } from 'next'

// page.tsx is a client component and so cannot export metadata itself.
export const metadata: Metadata = {
  title: 'Apply Now',
  description:
    'Applications for the 20th Buraq Space Camp have now closed. Applications are under review, and shortlisted candidates will be contacted by email.',
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
