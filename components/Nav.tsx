'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/features', label: 'Features' },
  { href: '/guide', label: 'Guide' },
  { href: '/tiers', label: 'Trash Tiers' },
  { href: '/help', label: 'Help' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🗑️</span>
          <span className="font-bold text-lg tracking-tight">Deletable</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? 'bg-card text-white'
                  : 'text-text-secondary hover:text-white hover:bg-card'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          href="https://apps.apple.com"
          className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download
        </a>
      </div>
    </header>
  )
}
