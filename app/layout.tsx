import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'Deletable — auto-delete. stay clean.',
  description: 'A privacy-first iOS app for secure, time-limited storage. Everything you save deletes itself.',
  openGraph: {
    title: 'Deletable — auto-delete. stay clean.',
    description: 'A privacy-first iOS app for secure, time-limited storage. Everything you save deletes itself.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-text-primary">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
