'use client'

import { track } from '@vercel/analytics'

interface Props {
  href: string
  className?: string
  children: React.ReactNode
}

export default function TestFlightButton({ href, className, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track('testflight_download_clicked')}
    >
      {children}
    </a>
  )
}
