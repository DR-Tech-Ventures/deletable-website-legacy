import Link from 'next/link'
import Image from 'next/image'
import NavLinks from './NavLinks'
import NavMobileMenu from './NavMobileMenu'
import { AppleIcon, AndroidIcon } from './Icons'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/raccoon.png" alt="" width={32} height={32} className="object-contain" priority sizes="32px" />
          <span className="font-bold text-2xl tracking-tight">Deletable</span>
        </Link>

        <NavLinks />

        <span
          className="hidden md:inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/60 text-sm font-semibold px-4 py-2 rounded-xl cursor-not-allowed select-none"
          title="Coming soon to iOS and Android"
        >
          <AppleIcon className="w-4 h-4" />
          <AndroidIcon className="w-4 h-4" />
          Coming Soon
        </span>

        <NavMobileMenu />
      </div>
    </header>
  )
}
