import { Tier } from '@/lib/tiers'

function DumpsterSvg() {
  return (
    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style={{ width: '1em', height: '1em', display: 'inline-block', verticalAlign: '-0.125em' }}>
      {/* main body */}
      <rect x="4" y="11" width="28" height="18" rx="2" fill="#8B5CF6" />
      {/* top rim */}
      <rect x="2" y="8" width="32" height="4" rx="1.5" fill="#7C3AED" />
      {/* vertical panel lines */}
      <rect x="12" y="11" width="1.5" height="18" fill="#6D28D9" opacity="0.7" />
      <rect x="22.5" y="11" width="1.5" height="18" fill="#6D28D9" opacity="0.7" />
      {/* left leg */}
      <rect x="6" y="29" width="5" height="4" rx="1" fill="#6D28D9" />
      {/* right leg */}
      <rect x="25" y="29" width="5" height="4" rx="1" fill="#6D28D9" />
      {/* shine highlight */}
      <rect x="5" y="12" width="4" height="15" rx="1" fill="white" opacity="0.12" />
    </svg>
  )
}

export function TierIcon({ tier, className }: { tier: Tier; className?: string }) {
  if (tier.id === 'dumpster-diver') {
    return (
      <span className={className}>
        <DumpsterSvg />
      </span>
    )
  }
  return <span className={className}>{tier.emoji}</span>
}
