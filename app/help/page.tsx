import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Help — Deletable',
  description: 'Frequently asked questions and support for the Deletable iOS app.',
}

const faqs = [
  {
    section: 'Getting Started',
    questions: [
      {
        q: 'How do I add my first note or photo?',
        a: 'From the Vault tab, tap the + button in the bottom-right corner. Choose Note or Photo, add your content, then select a deletion timer. Tap Save and your item is encrypted and added to the vault.',
      },
      {
        q: 'What does the deletion timer mean?',
        a: 'Every item has a built-in expiry date. Once the timer runs out, the item is permanently and irrecoverably deleted — both from the vault and from your device storage. You can set timers from 60 minutes up to 6 months, or pick a custom date.',
      },
      {
        q: 'Can I change the timer after I\'ve saved an item?',
        a: 'Yes. Open the item and tap the timer badge at the top of the card to edit the expiry time.',
      },
      {
        q: 'How do I set up Face ID?',
        a: 'Go to Settings → Security → Lock App and toggle it on. Deletable will use Face ID (or Touch ID on supported devices) with your device passcode as a fallback.',
      },
    ],
  },
  {
    section: 'Deletion & Recovery',
    questions: [
      {
        q: 'Can I recover a deleted item?',
        a: 'No. Deletion is permanent and irrecoverable by design. Once an item expires or you delete it manually, there is no backup or recovery path. This is a core privacy feature, not a bug.',
      },
      {
        q: 'What happens if the app isn\'t open when an item expires?',
        a: 'Deletable registers an iOS background fetch task that runs periodically (minimum every 15 minutes, per iOS policy) to purge expired items. Your items will be deleted even when the app is closed.',
      },
      {
        q: 'Will I get a warning before something is deleted?',
        a: 'Yes, if you enable Expiry Reminders in Settings → Notifications. You can receive a push notification 1 hour or 24 hours before an item is deleted.',
      },
    ],
  },
  {
    section: 'Security & Encryption',
    questions: [
      {
        q: 'Is my data really encrypted?',
        a: 'Yes. Every note and photo is encrypted with AES-256 before being written to the local SQLite database. Your master encryption key is stored in the iOS Keychain and never leaves your device.',
      },
      {
        q: 'Does Deletable sync to the cloud?',
        a: 'Your vault content never leaves your device. Deletable only syncs anonymous, aggregated statistics (item counts, bytes freed) to our Supabase backend — tied to a random UUID, never your identity.',
      },
      {
        q: 'What data does Deletable collect?',
        a: 'We collect fully anonymous stats: total items deleted, bytes freed, current tier, and vault sizes. These are linked to a random device UUID generated at first launch — not your name, Apple ID, or any identifying information. See our Privacy Policy for full details.',
      },
      {
        q: 'What happens to my data if I delete the app?',
        a: 'All vault content is stored locally and will be removed with the app. The anonymous UUID stored in Supabase will become orphaned but contains no data that can identify you.',
      },
    ],
  },
  {
    section: 'Features',
    questions: [
      {
        q: 'How do categories work?',
        a: 'Categories let you group items with a custom name, color, and icon. You can also set a default deletion time per category, so new items added to that category automatically use that timer.',
      },
      {
        q: 'What is location context?',
        a: 'When enabled in Settings, you can tag a note with a physical location. Deletable will remind you about the note when you arrive at or leave that location via a geofence notification.',
      },
      {
        q: 'Does the Dynamic Island feature work on my device?',
        a: 'Dynamic Island live activities require iPhone 14 Pro or later. On other devices, the setting is visible but has no effect. Full Live Activity support requires an EAS (Expo Application Services) build.',
      },
      {
        q: 'How do I share my stats?',
        a: 'Go to the Stats tab and tap the Share button at the top right. Deletable generates a styled PNG image showing your tier, items deleted, bytes freed, and more — ready to share anywhere.',
      },
    ],
  },
  {
    section: 'Troubleshooting',
    questions: [
      {
        q: 'Items aren\'t being deleted in the background.',
        a: 'iOS can delay or throttle background tasks based on battery level and usage patterns. Make sure Background App Refresh is enabled for Deletable in iOS Settings → General → Background App Refresh. Opening the app occasionally helps iOS learn to run the background task more reliably.',
      },
      {
        q: 'I\'m not receiving expiry notifications.',
        a: 'Check that notifications are enabled for Deletable in iOS Settings → Notifications. Also verify that Expiry Reminders is toggled on in Deletable → Settings → Notifications.',
      },
      {
        q: 'The app asks for Face ID every time I open it.',
        a: 'This is expected if Lock App is enabled and Lock After is set to "Immediately." Change the Lock After setting in Settings → Security → Lock After to give yourself a grace period.',
      },
      {
        q: 'I found a bug or want to request a feature.',
        a: 'Please open an issue on our GitHub repository or contact us via the App Store listing. We read every report.',
      },
    ],
  },
]

export default function HelpPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Help & FAQ</h1>
        <p className="text-text-secondary text-xl max-w-xl mx-auto">
          Answers to the most common questions about Deletable.
        </p>
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap gap-2 justify-center mb-16">
        {faqs.map((section) => (
          <a
            key={section.section}
            href={`#${section.section.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
            className="bg-card border border-border hover:border-[#3C3C3C] text-text-secondary hover:text-white text-sm px-4 py-2 rounded-xl transition-colors"
          >
            {section.section}
          </a>
        ))}
      </div>

      <div className="space-y-14">
        {faqs.map((section) => (
          <div key={section.section} id={section.section.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}>
            <h2 className="text-2xl font-bold mb-6 text-gradient inline-block">{section.section}</h2>
            <div className="space-y-4">
              {section.questions.map((item) => (
                <details
                  key={item.q}
                  className="group bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-medium text-white hover:text-white">
                    {item.q}
                    <svg
                      className="w-5 h-5 text-text-tertiary shrink-0 transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed border-t border-border pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-card border border-border rounded-3xl p-8 text-center">
        <div className="text-4xl mb-3">💬</div>
        <h2 className="text-xl font-bold mb-2">Still need help?</h2>
        <p className="text-text-secondary text-sm mb-4">
          Open an issue on GitHub and we'll get back to you.
        </p>
        <a
          href="https://github.com/drtechventures/deletable/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
        >
          Open an issue on GitHub
        </a>
        <div className="mt-4">
          <Link href="/privacy" className="text-text-secondary hover:text-white text-sm transition-colors">
            Read our Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  )
}
