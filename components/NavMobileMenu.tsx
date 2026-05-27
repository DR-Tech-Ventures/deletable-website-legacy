'use client'

import { useState, useEffect, useRef, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AppleIcon, AndroidIcon } from './Icons'

const links = [
  { href: '/features', label: 'Features' },
  { href: '/guide', label: 'Guide' },
  { href: '/trash-stats', label: 'Trash Stats' },
  { href: '/help', label: 'Help' },
  { href: '/privacy', label: 'Privacy' },
]

const emptySubscribe = () => () => {}

export default function NavMobileMenu() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  // Client-only gate for the portal (document.body is absent during SSR).
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    firstLinkRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      <button
        ref={buttonRef}
        className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-lg hover:bg-card transition-colors"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span aria-hidden="true" className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span aria-hidden="true" className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span aria-hidden="true" className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
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
            id="mobile-menu"
            inert={!menuOpen}
            className={`fixed top-16 left-0 right-0 z-40 bg-background border-b border-border md:hidden transition-transform duration-200 ${
              menuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
            }`}
          >
            <nav aria-label="Mobile" className="flex flex-col px-6 py-4 gap-1">
              {links.map(({ href, label }, i) => (
                <Link
                  key={href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === href
                      ? 'bg-card text-white'
                      : 'text-text-secondary hover:text-white hover:bg-card'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2 bg-white/20 text-white/60 text-sm font-semibold px-4 py-3 rounded-xl cursor-not-allowed">
                  <AppleIcon className="w-4 h-4" />
                  Coming Soon to iOS
                </div>
                <div className="flex items-center justify-center gap-2 bg-white/20 text-white/60 text-sm font-semibold px-4 py-3 rounded-xl cursor-not-allowed">
                  <AndroidIcon className="w-4 h-4" />
                  Coming Soon to Android
                </div>
              </div>
            </nav>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
