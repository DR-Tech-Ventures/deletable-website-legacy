import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/raccoon.png" alt="" width={32} height={32} className="object-contain" sizes="32px" />
          <span className="font-semibold text-xl">Deletable</span>
          <span className="text-text-tertiary text-sm ml-2">auto-delete. stay clean.</span>
        </div>
        <nav aria-label="Footer" className="flex items-center gap-x-6 gap-y-1 flex-wrap justify-center text-sm text-text-secondary">
          <Link href="/features" className="py-2 hover:text-white transition-colors">Features</Link>
          <Link href="/guide" className="py-2 hover:text-white transition-colors">Guide</Link>
          <Link href="/trash-stats" className="py-2 hover:text-white transition-colors">Trash Stats</Link>
          <Link href="/help" className="py-2 hover:text-white transition-colors">Help</Link>
          <Link href="/privacy" className="py-2 hover:text-white transition-colors">Privacy</Link>
        </nav>
        <p className="text-text-tertiary text-sm">© {new Date().getFullYear()} DR Tech Ventures LLC</p>
      </div>
    </footer>
  )
}
