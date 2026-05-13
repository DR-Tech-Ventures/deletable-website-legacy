'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/features', label: 'Features' },
  { href: '/guide', label: 'Guide' },
  { href: '/trash-stats', label: 'Trash Stats' },
  { href: '/help', label: 'Help' },
  { href: '/privacy', label: 'Privacy' },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
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
  )
}
