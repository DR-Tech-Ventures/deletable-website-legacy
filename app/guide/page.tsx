import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'User Guide — Deletable',
  description: 'A complete guide to using Deletable — creating notes and photos, setting timers, organizing with categories, and more.',
}

const steps = [
  {
    number: '01',
    title: 'Add your first item',
    body: 'Tap the + button in the bottom-right corner of the Vault tab. Choose Note or Photo, add your content, then pick a deletion timer. Tap Save — your item is encrypted and placed in the vault.',
  },
  {
    number: '02',
    title: 'Pick a deletion timer',
    body: 'Every item needs a timer. Choose from 13 presets — 60 minutes up to 6 months — or pick an exact date and time. When the timer hits zero, the item is permanently and irrecoverably deleted, even if the app is closed.',
  },
  {
    number: '03',
    title: 'Extend or edit anytime',
    body: 'Changed your mind? Open any item and tap the timer badge at the top of the card to choose a new expiry time. You can also edit note content at any time — your changes are re-encrypted on save.',
  },
]

const sections = [
  {
    id: 'notes',
    icon: '📝',
    heading: 'Writing Notes',
    steps: [
      {
        title: 'Create a note',
        body: 'Tap + → Note. Give it a title (optional) and write your content. A toolbar above the keyboard lets you apply Bold, Italic, Underline, Strikethrough, Headings (H1 / H2), Bullet lists, and Numbered lists.',
      },
      {
        title: 'Use a template',
        body: "When creating a new note, tap the template icon to start from a blank page, Title + Bullets, Title + Sub-bullets, or a Numbered List layout — so you're never staring at an empty screen.",
      },
      {
        title: 'Adjust the font',
        body: 'Tap the font controls to change the text size (12–32 pt), font family, or text color. These settings apply to the current note only.',
      },
      {
        title: 'Save & close',
        body: 'Tap Save. The note is AES-256 encrypted and stored locally. A short preview (first 80 characters) appears on the vault card so you can identify it at a glance.',
      },
    ],
  },
  {
    id: 'photos',
    icon: '📸',
    heading: 'Storing Photos',
    steps: [
      {
        title: 'Add a photo',
        body: 'Tap + → Photo, then choose Camera to capture a new shot or Library to import one from your device. Deletable encrypts the full image and generates an encrypted thumbnail immediately.',
      },
      {
        title: 'View & share',
        body: 'Tap any photo card in the vault to open the full-size viewer. From there you can share the photo to other apps, or tap the timer badge to extend its expiry.',
      },
      {
        title: 'Deletion is total',
        body: 'When a photo expires, both the encrypted file and its thumbnail are permanently removed from device storage — not just hidden.',
      },
    ],
  },
  {
    id: 'timers',
    icon: '⏱️',
    heading: 'Deletion Timers',
    steps: [
      {
        title: 'Preset durations',
        body: '60 min · 3 h · 6 h · 12 h · 24 h · 3 days · 5 days · 7 days · 14 days · 30 days · 6 months. Tap any preset to apply it instantly.',
      },
      {
        title: 'Custom date & time',
        body: 'Need something more precise? Tap Custom to open a date/time picker and set an exact moment for deletion — useful for things that need to vanish after a specific event.',
      },
      {
        title: 'Background purge',
        body: 'Deletable registers an iOS background fetch task that checks for expired items every 15 minutes — even when the app is closed. Enable Background App Refresh for Deletable in iOS Settings to keep this running reliably.',
      },
      {
        title: 'Color-coded countdowns',
        body: 'Each vault card shows a live countdown. Green means plenty of time remains; yellow / orange means expiry is approaching; red means deletion is imminent.',
      },
    ],
  },
  {
    id: 'categories',
    icon: '🗂️',
    heading: 'Categories',
    steps: [
      {
        title: 'Create a category',
        body: 'Go to the Categories tab and tap +. Give the category a name, choose a color (red, orange, green, blue, purple, and more), and pick an icon from a set of SF Symbols.',
      },
      {
        title: 'Set a default timer per category',
        body: 'Each category can have its own default deletion time. Items added to that category automatically use that timer — no need to choose one every time.',
      },
      {
        title: 'Filter the vault',
        body: 'In the Vault tab, tap a category name in the filter bar at the top to show only items in that group. Tap All to return to the full vault.',
      },
      {
        title: 'Delete a category',
        body: 'Long-press a category to delete it. The category is removed but its items stay in the vault — they just become uncategorized.',
      },
    ],
  },
  {
    id: 'security',
    icon: '🔐',
    heading: 'Security & Lock Screen',
    steps: [
      {
        title: 'AES-256 encryption',
        body: "Encryption is always on — there's no toggle to disable it. Every note and photo is encrypted before being written to the local SQLite database. Your master key is stored in the iOS Keychain and never leaves your device.",
      },
      {
        title: 'Enable Face ID / Touch ID',
        body: 'Go to Settings → Security → Lock App and turn it on. Deletable will require Face ID (or Touch ID / device passcode as a fallback) every time you open the app.',
      },
      {
        title: 'Configure the lock timeout',
        body: 'Under Settings → Security → Lock After, choose how long Deletable waits before re-locking: Immediately, 1 minute, 5 minutes, 15 minutes, or Never. "Never" keeps the app unlocked until you close it.',
      },
      {
        title: 'No cloud sync of content',
        body: 'Your vault never leaves your device. Only anonymous, aggregated statistics (deletion counts, bytes freed) are synced — linked to a random UUID, not your identity.',
      },
    ],
  },
  {
    id: 'notifications',
    icon: '🔔',
    heading: 'Notifications & Reminders',
    steps: [
      {
        title: 'Expiry reminders',
        body: 'Enable Expiry Reminders in Settings → Notifications to receive a push notification before an item is deleted. Choose to be notified 1 hour before, 24 hours before, or a custom interval.',
      },
      {
        title: 'Deletion confirmation',
        body: "When an item is automatically deleted, Deletable can send a confirmation notification containing the item's title. Toggle this in Settings → Notifications.",
      },
      {
        title: 'Location-based reminders',
        body: 'When Location Context is enabled, you can tag a note with a physical place. Deletable creates a 150 m geofence and notifies you when you arrive at or leave that location.',
      },
      {
        title: 'Dynamic Island (iPhone 14 Pro+)',
        body: 'On supported devices, a Live Activity in the Dynamic Island shows a countdown to your next expiring item. Toggle this in Settings → Display → Dynamic Island.',
      },
    ],
  },
  {
    id: 'vault',
    icon: '⚙️',
    heading: 'Vault Layout & Search',
    steps: [
      {
        title: 'Switch between 1 and 2 columns',
        body: 'Tap the grid toggle in the top-right of the Vault tab to switch between a single-column list and a two-column grid. Your preference is saved automatically.',
      },
      {
        title: 'Sort your items',
        body: 'Tap the sort button to toggle between "Soonest" (items closest to deletion appear first) and "Newest" (most recently created items appear first).',
      },
      {
        title: 'Search',
        body: 'Pull down on the vault list or tap the search icon to reveal the search bar. Deletable searches note titles and content previews in real time — case insensitive.',
      },
    ],
  },
  {
    id: 'stats',
    icon: '🏆',
    heading: 'Stats & Achievement Tiers',
    steps: [
      {
        title: 'View your stats',
        body: 'The Stats tab shows your total items deleted, notes deleted, photos deleted, total storage freed, and an estimate of time saved. A progress bar shows how close you are to the next tier.',
      },
      {
        title: 'Achievement tiers',
        body: 'Delete items to climb through 8 tiers: Trash Panda → Bin Raider → Compost Connoisseur → Average Raccoon → Dumpster Diver → Route Raider → Landfill Legend → Distinguished Raccoonian (1,000+ items deleted).',
      },
      {
        title: 'Share your stats',
        body: 'Tap the Share button on the Stats tab to generate a styled PNG card showing your tier, items deleted, bytes freed, and more. Share it to social media, Messages, or anywhere else.',
      },
    ],
  },
  {
    id: 'settings',
    icon: '🛠️',
    heading: 'Settings Overview',
    steps: [
      {
        title: 'Default deletion time',
        body: 'Set a global default timer applied to every new item. You can override it per category or choose "Ask every time" to always be prompted when creating an item.',
      },
      {
        title: 'Theme',
        body: 'Choose Dark, Light, or System in Settings → Appearance. "System" follows your iOS appearance setting automatically.',
      },
      {
        title: 'Analytics',
        body: 'Anonymous stats sync is on by default but can be reviewed in Settings → Privacy. No personally identifiable information is ever collected.',
      },
      {
        title: 'Location context',
        body: 'Toggle location features on or off in Settings → Privacy → Location Context. Disabling this removes all geofence-related prompts and background tracking.',
      },
    ],
  },
]

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">User Guide</h1>
        <p className="text-text-secondary text-xl max-w-xl mx-auto">
          Everything you need to know to get the most out of Deletable.
        </p>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 justify-center mb-16">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="bg-card border border-border hover:border-[#3C3C3C] text-text-secondary hover:text-white text-sm px-4 py-2 rounded-xl transition-colors"
          >
            {s.icon} {s.heading}
          </a>
        ))}
      </div>

      {/* Getting started */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-gradient inline-block">Getting Started</h2>
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="bg-card border border-border rounded-2xl p-6 flex gap-5">
              <span className="text-accent font-bold text-lg tabular-nums shrink-0">{step.number}</span>
              <div>
                <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature sections */}
      <div className="space-y-16">
        {sections.map((section) => (
          <div key={section.id} id={section.id}>
            <h2 className="text-2xl font-bold mb-6 text-gradient inline-block">
              {section.icon} {section.heading}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.steps.map((step) => (
                <div key={step.title} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 bg-card border border-border rounded-3xl p-10 text-center">
        <div className="text-5xl mb-4">🗑️</div>
        <h2 className="text-3xl font-bold mb-2">Ready to start deleting?</h2>
        <p className="text-text-secondary mb-6">Free download. No account. No compromise.</p>
        <a
          href="https://apps.apple.com"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
        <div className="mt-4 flex justify-center gap-4">
          <Link href="/help" className="text-text-secondary hover:text-white text-sm transition-colors">
            Help & FAQ →
          </Link>
          <Link href="/features" className="text-text-secondary hover:text-white text-sm transition-colors">
            All Features →
          </Link>
        </div>
      </div>
    </div>
  )
}
