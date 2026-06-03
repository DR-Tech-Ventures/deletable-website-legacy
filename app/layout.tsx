import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const siteUrl = 'https://deletable.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Deletable — auto-delete. stay clean.',
  description: 'A privacy-first app for iPhone and Android — secure, time-limited storage. Everything you save deletes itself.',
  openGraph: {
    title: 'Deletable — auto-delete. stay clean.',
    description: 'A privacy-first app for iPhone and Android — secure, time-limited storage. Everything you save deletes itself.',
    type: 'website',
    url: siteUrl,
    locale: 'en_US',
    siteName: 'Deletable',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deletable — auto-delete. stay clean.',
    description: 'A privacy-first app for iPhone and Android — secure, time-limited storage. Everything you save deletes itself.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DR Tech Ventures LLC',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Deletable',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'UtilitiesApplication',
  description: 'A privacy-first app for iPhone and Android — secure, time-limited storage. Everything you save deletes itself.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'DR Tech Ventures LLC',
    url: siteUrl,
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
