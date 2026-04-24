import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗑️</span>
          <span className="font-semibold text-sm">Deletable</span>
          <span className="text-text-tertiary text-sm ml-2">auto-delete. stay clean.</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-text-secondary">
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/tiers" className="hover:text-white transition-colors">Tiers</Link>
          <Link href="/help" className="hover:text-white transition-colors">Help</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        </nav>
        <p className="text-text-tertiary text-sm">© {new Date().getFullYear()} DRTech Ventures</p>
      </div>
    </footer>
  )
}
