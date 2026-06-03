import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  alternates: { canonical: 'https://deletable.app' },
}
import { StatsMockup } from '@/components/PhoneMockup'
import { TIERS } from '@/lib/tiers'
import { WifiOffIcon, LockIcon, ClockIcon, AppleIcon, AndroidIcon } from '@/components/Icons'

const trustPillars = [
  {
    Icon: WifiOffIcon,
    color: 'text-accent bg-accent/10',
    title: 'No cloud. Ever.',
    desc: 'Your notes and photos never leave your device. There is no server, no sync, no backup. What you store stays on your phone — period.',
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


export default function Home() {
  const topTiers = TIERS.slice(5)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-32 px-6">
        <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-sm text-text-secondary mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
                Coming soon to iOS &amp; Android
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
                auto-delete.<br />
                <span className="text-gradient">stay clean.</span>
              </h1>
              <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                A privacy-first vault for notes and photos that delete themselves.
                Stored only on your device. Encrypted so nothing else can read it.
                Gone when you say so.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/10 text-white/60 font-semibold px-6 py-3.5 rounded-2xl cursor-not-allowed select-none">
                  <AppleIcon className="w-5 h-5" />
                  Coming Soon to iOS
                </span>
                <span className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/10 text-white/60 font-semibold px-6 py-3.5 rounded-2xl cursor-not-allowed select-none">
                  <AndroidIcon className="w-5 h-5" />
                  Coming Soon to Android
                </span>
              </div>
              <div className="mt-4 flex justify-center lg:justify-start">
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
                >
                  See all features →
                </Link>
              </div>
            </div>
            <div className="flex gap-6 items-end shrink-0">
              <div className="translate-y-4">
                <div className="w-[220px] rounded-4xl overflow-hidden shadow-2xl border border-[#2C2C2C]">
                  <Image
                    src="/vault-screenshot.png"
                    alt="Deletable Vault"
                    width={220}
                    height={476}
                    className="w-full h-auto"
                    sizes="220px"
                    priority
                  />
                </div>
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
                Other apps can&apos;t access it. Your OS can&apos;t read it. We can&apos;t see it.
                The only person who can open your vault is you — with your face.
              </p>
              <Link href="/features" className="text-accent hover:text-accent-hover font-medium text-sm transition-colors">
                See how the encryption works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers teaser */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Climb the trash tiers 🦝</h2>
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
            <Link href="/trash-stats" className="text-accent hover:text-accent-hover font-medium transition-colors">
              See all tiers + leaderboard →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Image src="/raccoon.png" alt="" width={128} height={128} className="object-contain mx-auto mb-6" sizes="128px" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start deleting<br />
            <span className="text-gradient">what you don&apos;t need.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Free download. No account. No cloud. Nothing stored anywhere but your pocket.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/60 font-semibold px-8 py-4 rounded-2xl cursor-not-allowed select-none text-lg">
              <AppleIcon className="w-6 h-6" />
              Coming Soon to iOS
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/60 font-semibold px-8 py-4 rounded-2xl cursor-not-allowed select-none text-lg">
              <AndroidIcon className="w-6 h-6" />
              Coming Soon to Android
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
