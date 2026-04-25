import Link from 'next/link'
import { VaultMockup, StatsMockup } from '@/components/PhoneMockup'
import { TIERS } from '@/lib/tiers'
import {
  WifiOffIcon, LockIcon, ClockIcon,
  LockIcon as EncryptIcon, UserIcon, MapPinIcon, SmartphoneIcon, FolderIcon, BarChartIcon,
} from '@/components/Icons'

const trustPillars = [
  {
    Icon: WifiOffIcon,
    color: 'text-accent bg-accent/10',
    title: 'No cloud. Ever.',
    desc: 'Your notes and photos never leave your device. There is no server, no sync, no backup. What you store stays on your iPhone — period.',
  },
  {
    Icon: LockIcon,
    color: 'text-accent bg-accent/10',
    title: 'Encrypted at rest',
    desc: 'Every item is encrypted with AES-256 before it touches storage. No other app, no OS file browser, and no one else can read your data.',
  },
  {
    Icon: ClockIcon,
    color: 'text-orange bg-orange/10',
    title: 'Deletes itself',
    desc: 'Set a timer once and forget it. Deletable handles the cleanup automatically — even while the app is closed.',
  },
]

const useCases = [
  {
    emoji: '🚗',
    title: 'Where did I park?',
    desc: 'Snap a photo of the parking level or drop a note with your spot number. It auto-deletes when you no longer need it.',
  },
  {
    emoji: '👋',
    title: 'That name you just heard',
    desc: "Met someone and don't want to forget their name? Save it with a 24-hour timer. Gone by tomorrow, without you lifting a finger.",
  },
  {
    emoji: '🛒',
    title: 'A grocery list that cleans itself up',
    desc: 'Write your list, set it to delete tonight. No more stale lists cluttering your notes app.',
  },
  {
    emoji: '📸',
    title: "Photos you'd rather not keep",
    desc: 'A whiteboard, a receipt, a document you needed once. Capture it, set an expiry, and it\'s gone. No manual cleanup required.',
  },
  {
    emoji: '🔑',
    title: 'Temporary credentials',
    desc: 'A Wi-Fi password, a one-time PIN, a locker combo. Store it long enough to use it, then let it vanish.',
  },
  {
    emoji: '📋',
    title: 'Notes from a meeting',
    desc: 'Jot down action items or sensitive details. Set them to expire after a week — nothing lingers in plain sight.',
  },
]

const features = [
  {
    Icon: EncryptIcon,
    color: 'text-accent bg-accent/10',
    title: 'AES-256 Encryption',
    desc: 'Always on — no toggle. Every note and photo is encrypted before storage. The key lives in your iOS Keychain only.',
  },
  {
    Icon: UserIcon,
    color: 'text-accent bg-accent/10',
    title: 'Face ID Lock',
    desc: 'Biometric authentication keeps prying eyes out. Configurable lock timeout from instant to never.',
  },
  {
    Icon: MapPinIcon,
    color: 'text-purple bg-purple/10',
    title: 'Location Reminders',
    desc: 'Geofence notes to a place. Get reminded when you arrive or leave — then watch them vanish.',
  },
  {
    Icon: SmartphoneIcon,
    color: 'text-blue bg-blue/10',
    title: 'Dynamic Island',
    desc: 'Live countdown to your next deletion in the Dynamic Island on iPhone 14 Pro+.',
  },
  {
    Icon: FolderIcon,
    color: 'text-blue bg-blue/10',
    title: 'Categories',
    desc: 'Organize with custom categories, colors, and icons — each with its own default deletion time.',
  },
  {
    Icon: BarChartIcon,
    color: 'text-green bg-green/10',
    title: 'Stats & Achievements',
    desc: '8 tiers of trash glory. Track bytes freed, items deleted, and rank on the global leaderboard.',
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
                Stored only on your device. Encrypted so nothing else can read it.
                Gone when you say so.
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

      {/* Trust pillars */}
      <section className="py-16 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
          {trustPillars.map((p) => (
            <div key={p.title} className="flex gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${p.color}`}>
                <p.Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Built for everyday moments</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              The things you need to remember for an hour, a day, or a week — then want completely gone.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u) => (
              <div key={u.title} className="bg-card border border-border rounded-2xl p-6 hover:border-[#3C3C3C] transition-colors">
                <div className="w-11 h-11 rounded-2xl bg-background flex items-center justify-center text-2xl mb-4 border border-border">
                  {u.emoji}
                </div>
                <h3 className="font-semibold text-white mb-1.5">{u.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="py-16 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
              <LockIcon className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Nothing leaves your phone</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Deletable has no cloud, no account, and no server that stores your content.
                Everything is encrypted with AES-256 and locked inside your device.
                Other apps can't access it. iOS can't read it. We can't see it.
                The only person who can open your vault is you — with your face.
              </p>
              <Link href="/features" className="text-accent hover:text-accent-hover font-medium text-sm transition-colors">
                See how the encryption works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Everything else it does</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">Privacy is the foundation. These are the features built on top of it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-6 hover:border-[#3C3C3C] transition-colors">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <f.Icon className="w-5 h-5" />
                </div>
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
            Free download. No account. No cloud. Nothing stored anywhere but your pocket.
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
