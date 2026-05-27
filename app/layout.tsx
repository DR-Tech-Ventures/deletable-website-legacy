import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'Deletable — auto-delete. stay clean.',
  description: 'A privacy-first app for iPhone and Android — secure, time-limited storage. Everything you save deletes itself.',
  openGraph: {
    title: 'Deletable — auto-delete. stay clean.',
    description: 'A privacy-first app for iPhone and Android — secure, time-limited storage. Everything you save deletes itself.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-card focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:border focus:border-accent"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-hidden">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
