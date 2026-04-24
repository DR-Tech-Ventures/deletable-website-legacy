import Link from 'next/link'
import { VaultMockup, StatsMockup } from '@/components/PhoneMockup'
import { TIERS } from '@/lib/tiers'

const features = [
  {
    icon: '⏱️',
    title: 'Auto-Deleting Vault',
    desc: 'Set a timer on every note and photo. When time runs out, it\'s gone — permanently.',
    color: '#FF3B2F',
  },
  {
    icon: '🔒',
    title: 'AES-256 Encryption',
    desc: 'Every item is encrypted at rest. Your master key never leaves your device\'s Keychain.',
    color: '#30D158',
  },
  {
    icon: '👤',
    title: 'Face ID Lock',
    desc: 'Biometric authentication keeps prying eyes out. Configurable lock timeout from instant to never.',
    color: '#0A84FF',
  },
  {
    icon: '📍',
    title: 'Location Reminders',
    desc: 'Geofence notes to a place. Get reminded when you arrive or leave — then watch them vanish.',
    color: '#FF9F0A',
  },
  {
    icon: '🏝️',
    title: 'Dynamic Island',
    desc: 'See a live countdown to your next deletion right in the Dynamic Island on iPhone 14 Pro+.',
    color: '#BF5AF2',
  },
  {
    icon: '📊',
    title: 'Stats & Achievements',
    desc: '8 tiers of trash glory. Track bytes freed, items deleted, and compete on the global leaderboard.',
    color: '#FF9F0A',
  },
]

export default function Home() {
  const topTiers = TIERS.slice(5)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-sm text-text-secondary mb-6">
                <span className="w-2 h-2 rounded-full bg-green inline-block" />
                Available on the App Store
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
                auto-delete.<br />
                <span className="text-gradient">stay clean.</span>
              </h1>
              <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                A privacy-first iOS vault for notes and photos that delete themselves.
                Set a timer, lock it with Face ID, and let Deletable do the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors glow-accent-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on the App Store
                </a>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 bg-card hover:bg-[#2C2C2C] border border-border text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors"
                >
                  See all features →
                </Link>
              </div>
            </div>
            <div className="flex gap-6 items-end shrink-0">
              <div className="translate-y-4">
                <VaultMockup />
              </div>
              <div className="-translate-y-4">
                <StatsMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Built for privacy. Designed to disappear.</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">Everything you store has an expiry date. No exceptions.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-6 hover:border-[#3C3C3C] transition-colors">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white mb-1.5">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/features" className="text-accent hover:text-accent-hover font-medium transition-colors">
              View all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Tiers teaser */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Climb the trash tiers 🗑️</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Delete more, rank higher. 8 tiers from Trash Panda to Distinguished Raccoonian.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {topTiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-card border border-border rounded-2xl px-6 py-4 flex items-center gap-3 min-w-[200px]"
              >
                <span className="text-3xl">{tier.emoji}</span>
                <div>
                  <div className="font-semibold text-white text-sm">{tier.name}</div>
                  <div className="text-text-secondary text-xs">{tier.minItems}+ deleted</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tiers" className="text-accent hover:text-accent-hover font-medium transition-colors">
              See all tiers + leaderboard →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🗑️</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start deleting<br />
            <span className="text-gradient">what you don't need.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Free download. No account required. Your data never leaves your device.
          </p>
          <a
            href="https://apps.apple.com"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-2xl transition-colors glow-accent text-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download Free
          </a>
        </div>
      </section>
    </>
  )
}
