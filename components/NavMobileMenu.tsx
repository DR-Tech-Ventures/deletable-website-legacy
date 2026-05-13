'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  { href: '/features', label: 'Features' },
  { href: '/guide', label: 'Guide' },
  { href: '/trash-stats', label: 'Trash Stats' },
  { href: '/help', label: 'Help' },
  { href: '/privacy', label: 'Privacy' },
]

export default function NavMobileMenu() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-card transition-colors"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {mounted && createPortal(
        <>
          {menuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
          )}
          <div
            className={`fixed top-16 left-0 right-0 z-40 bg-background border-b border-border md:hidden transition-transform duration-200 ${
              menuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
            }`}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === href
                      ? 'bg-card text-white'
                      : 'text-text-secondary hover:text-white hover:bg-card'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div
                className="mt-3 flex items-center justify-center gap-2 bg-white/20 text-white/60 text-sm font-semibold px-4 py-3 rounded-xl cursor-not-allowed"
              >
                Coming Soon
              </div>
            </nav>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
