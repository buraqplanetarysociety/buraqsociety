import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buraq Space Camp - Pakistan\'s Premier Space Education Program',
  description: 'Join Pakistan\'s most innovative space education program. A 10-day transformative journey in Islamabad, where future leaders are forged through innovation, collaboration, and cutting-edge space technology.',
  keywords: 'space camp, pakistan, space education, STEM, technology, aerospace, satellite, innovation',
  authors: [{ name: 'Buraq Space Camp' }],
  openGraph: {
    title: 'Buraq Space Camp - Launch Your Future in Space Technology',
    description: 'Transform your future with Pakistan\'s premier space education program. Apply now for our 10-day intensive program.',
    type: 'website',
    url: 'https://buraqspacecamp.pk',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Buraq Space Camp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buraq Space Camp - Pakistan\'s Premier Space Education Program',
    description: 'Join Pakistan\'s most innovative space education program. Apply now!',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        <Toaster />
      </body>
    </html>
  )
}