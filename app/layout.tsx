import type { Viewport, Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://printical.fi"),
  openGraph: {
    siteName: "Printical",
    type: "website",
    locale: "fi_FI"
  },
  title: 'Printical',
  description: 'Finnish on demand 3D design, 3D printing and manufacturing company.',
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://printical.fi/rss.xml"
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='lg:bg-printicalBG bg-orange font-rubik tracking-[0.075em]'>{children}<Footer/></body>
    </html>
  )
}
