import { cookies } from 'next/headers'
import { LockIcon } from '@/components/Icons'
import { authenticate } from './actions'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beta — Deletable',
  robots: { index: false, follow: false },
}

// Update this once you have a TestFlight link
const TESTFLIGHT_URL = 'https://testflight.apple.com/join/tM1QscbP'


const steps = [
  {
    step: '1',
    title: 'Download TestFlight',
    desc: "TestFlight is Apple's free app for trying apps before they're released. Think of it like a special version of the App Store just for betas. You need it to install Deletable.",
    link: { label: 'Get TestFlight on the App Store →', href: 'https://apps.apple.com/us/app/testflight/id899247664' },
  },
  {
    step: '2',
    title: 'Open the beta invite',
    desc: 'Tap the "Download on TestFlight" button at the top of this page. It will open the TestFlight app with a Deletable invite ready to accept. Tap "Accept."',
  },
  {
    step: '3',
    title: 'Install Deletable',
    desc: 'After accepting, tap the blue "Install" button in TestFlight. Deletable will download and appear on your home screen just like any other app.',
  },
  {
    step: '4',
    title: 'Open Deletable and set up Face ID',
    desc: "Tap the Deletable icon on your home screen. Follow the short setup to enable Face ID — this is what locks your vault so only you can open it.",
  },
]

const usageTips = [
  {
    emoji: '✏️',
    title: 'Create a note or photo',
    desc: "Tap + to add a new item. Write a note or attach a photo, then set how long until it deletes itself — hours, days, or a custom time.",
  },
  {
    emoji: '📁',
    title: 'Use categories',
    desc: 'Organize items into categories with custom colors, icons, and a default deletion time. Great for grouping work vs. personal items.',
  },
  {
    emoji: '📍',
    title: 'Location reminders',
    desc: 'Attach a location to any item. Deletable reminds you when you arrive or leave — useful for parking spots, errands, and more.',
  },
  {
    emoji: '📊',
    title: 'Check your stats',
    desc: "Head to the Stats tab to see bytes and items deleted. Climb through 8 tiers from Trash Panda all the way to Distinguished Raccoonian.",
  },
]

const feedbackTypes = [
  {
    emoji: '🐛',
    title: 'Report a bug',
    desc: "Something crashed, behaved oddly, or didn't work as expected? Let us know.",
  },
  {
    emoji: '💡',
    title: 'Suggest a feature',
    desc: "A timer preset you'd want, a UI tweak, or a workflow improvement — share it.",
  },
  {
    emoji: '⭐️',
    title: 'General feedback',
    desc: "What do you love? What feels off? Impressions from real use matter most.",
  },
]

export default async function BetaPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  const cookieStore = await cookies()
  const isAuth = cookieStore.get('beta_auth')?.value === 'true'

  if (!isAuth) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
              <LockIcon className="w-7 h-7 text-accent" />
            </div>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Beta Access</h1>
            <p className="text-text-secondary text-sm">Enter your access code to continue.</p>
          </div>
          <form action={authenticate} className="space-y-4">
            <label htmlFor="beta-password" className="sr-only">Access code</label>
            <input
              id="beta-password"
              type="password"
              name="password"
              placeholder="Access code"
              autoComplete="current-password"
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white placeholder:text-text-tertiary focus:outline-hidden focus:border-accent focus:ring-2 focus:ring-accent/60 transition-colors"
            />
            {params.error === '1' && (
              <p role="alert" className="text-sm text-red-400">Incorrect access code. Try again.</p>
            )}
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-black font-semibold py-3 rounded-xl transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm text-accent mb-6">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            You&apos;re in the beta
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            Welcome to<br />
            <span className="text-gradient">Deletable Beta</span>
          </h1>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Thank you for testing Deletable. Your feedback directly shapes the app before it reaches the App Store.
          </p>
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-card hover:bg-[#2C2C2C] border border-border text-white font-semibold px-8 py-4 rounded-2xl transition-colors text-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on TestFlight
          </a>
          <p className="text-text-tertiary text-xs mt-3">Requires iOS 17+ · TestFlight app must be installed first</p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Getting started</h2>
          <p className="text-text-secondary mb-8">Deletable isn&apos;t on the App Store yet — it&apos;s only available through TestFlight, Apple&apos;s free beta testing app. The whole process takes about 2 minutes.</p>
          <div className="space-y-6">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent font-bold text-sm">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  {'link' in item && item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-accent hover:text-accent-hover text-sm transition-colors"
                    >
                      {item.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">How to use Deletable</h2>
          <p className="text-text-secondary mb-8">The core loop: save something, set a timer, let it vanish.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {usageTips.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-5 hover:border-[#3C3C3C] transition-colors">
                <div className="text-2xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-white mb-1.5 text-sm">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Give us feedback</h2>
          <p className="text-text-secondary mb-8">
            Found a bug? Have a suggestion? All of it helps.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {feedbackTypes.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-5">
                <div className="text-2xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-white mb-1.5 text-sm">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white mb-1">Two ways to share feedback</p>
              <p className="text-text-secondary text-sm">
                Use the TestFlight app&apos;s built-in feedback tool, or fill out our contact form. Both go directly to us.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-black font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
              >
                Contact form
              </a>
            </div>
          </div>
          <div className="mt-4 bg-card/50 border border-border rounded-2xl p-5">
            <p className="text-sm font-semibold text-white mb-1">How to use TestFlight&apos;s built-in feedback</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Open the <span className="text-white">TestFlight app</span> on your iPhone → tap <span className="text-white">Deletable</span> → tap <span className="text-white">Send Beta Feedback</span>. You can include a screenshot and a description. This is the fastest way to report a bug.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
