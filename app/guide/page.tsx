import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FileTextIcon, CameraIcon, ClockIcon, FolderIcon,
  LockIcon, BellIcon, SlidersIcon, TrophyIcon, ToolIcon,
  AppleIcon, AndroidIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'User Guide — Deletable',
  description: 'A complete guide to using Deletable — creating notes and photos, setting timers, organizing with folders, and more.',
}

type IconComponent = React.ComponentType<{ className?: string }>

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
    body: "Changed your mind? Open any item and tap the timer badge at the top of the card to choose a new expiry time. You can also edit note content at any time — your changes are re-encrypted on save.",
  },
]

const sections: {
  id: string
  Icon: IconComponent
  color: string
  heading: string
  steps: { title: string; body: string }[]
}[] = [
  {
    id: 'notes',
    Icon: FileTextIcon,
    color: 'text-blue bg-blue/10',
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
      {
        title: 'Share from another app',
        body: 'In Safari, Chrome, or any app that shares URLs or text, tap the Share button and choose Deletable. On iOS this routes through a native share extension; on Android it uses the system share sheet (ACTION_SEND). Both open the same timer + folder picker and save the content as an encrypted note — no need to open the app first.',
      },
    ],
  },
  {
    id: 'photos',
    Icon: CameraIcon,
    color: 'text-blue bg-blue/10',
    heading: 'Storing Photos',
    steps: [
      {
        title: 'Add a photo',
        body: 'Tap + → Photo, then choose Camera to capture a new shot or Library to import one from your device. Deletable encrypts the full image and generates an encrypted thumbnail immediately.',
      },
      {
        title: 'Share from the Photos app',
        body: 'In the iOS Photos app or Android Gallery, select any photo, tap the Share button, and choose Deletable. The share flow lets you set a deletion timer and save the photo directly into your vault without opening the app first.',
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
    Icon: ClockIcon,
    color: 'text-orange bg-orange/10',
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
        body: "Deletable registers a background fetch task that checks for expired items every ~15 minutes — even when the app is closed. On iOS, enable Background App Refresh for Deletable in Settings; on Android, make sure battery optimization isn't restricting Deletable so the OS keeps running the task reliably.",
      },
      {
        title: 'Color-coded countdowns',
        body: 'Each vault card shows a live countdown. Green means plenty of time remains; yellow / orange means expiry is approaching; red means deletion is imminent.',
      },
    ],
  },
  {
    id: 'categories',
    Icon: FolderIcon,
    color: 'text-blue bg-blue/10',
    heading: 'Folders',
    steps: [
      {
        title: 'Create a folder',
        body: 'Tap the folder icon in the Vault tab and then +. Give it a name, choose from 24 colors across 6 groups, and pick an icon from a set of SF Symbols.',
      },
      {
        title: 'Set a default timer per folder',
        body: 'Each folder can have its own default deletion time. Items added to that folder automatically use that timer — no need to choose one every time.',
      },
      {
        title: 'Filter the vault',
        body: 'Tap a folder name in the filter bar at the top of the Vault tab to show only items in that group. Tap All to return to the full vault.',
      },
      {
        title: 'Delete a folder',
        body: 'Long-press a folder to delete it. The folder is removed but its items stay in the vault — they just become unorganized.',
      },
    ],
  },
  {
    id: 'security',
    Icon: LockIcon,
    color: 'text-accent bg-accent/10',
    heading: 'Security & Lock Screen',
    steps: [
      {
        title: 'AES-256 encryption',
        body: "Encryption is always on — there's no toggle to disable it. Every note and photo is encrypted before being written to the local SQLite database. Your master key is stored in the iOS Keychain or Android Keystore and never leaves your device.",
      },
      {
        title: 'Enable biometric unlock or a passcode',
        body: 'Go to Settings → Security → Lock App and turn it on. Deletable uses Face ID or Touch ID on iOS and fingerprint on Android by default. To use a 4-digit PIN instead, tap Lock Method and select Passcode. Both options lock the app on the same unlock screen.',
      },
      {
        title: 'Configure the lock timeout',
        body: 'Under Settings → Security → Lock After, choose how long Deletable waits before re-locking: Immediately, 1 minute, 5 minutes, 15 minutes, or Never. "Never" keeps the app unlocked until you close it.',
      },
      {
        title: 'Privacy shield',
        body: "When you switch apps, Deletable hides your vault contents. iOS shows a privacy overlay with just the app logo; Android sets FLAG_SECURE so the OS blanks the preview and blocks system screenshots while Deletable is backgrounded.",
      },
      {
        title: 'No cloud sync of content',
        body: 'Your vault never leaves your device. Only anonymous, aggregated statistics (deletion counts, bytes freed) are synced — linked to a random UUID, not your identity.',
      },
    ],
  },
  {
    id: 'notifications',
    Icon: BellIcon,
    color: 'text-orange bg-orange/10',
    heading: 'Notifications & Reminders',
    steps: [
      {
        title: 'Expiry reminders',
        body: 'Enable Expiry Reminders in Settings → Notifications to receive a push notification before an item is deleted. Choose to be notified 1 hour before, 24 hours before, or a custom interval.',
      },
      {
        title: 'Deletion confirmation',
        body: 'When an item is automatically deleted, Deletable can send a confirmation notification. The alert uses a generic message to avoid leaking your note titles on the lock screen. Toggle this in Settings → Notifications.',
      },
      {
        title: 'Location-based reminders',
        body: 'When Location Context is enabled, you can tag a note with a physical place. Deletable creates a 150 m geofence and notifies you when you arrive at or leave that location.',
      },
      {
        title: 'Dynamic Island (iPhone 14 Pro+)',
        body: 'On supported iPhones, a Live Activity in the Dynamic Island shows a countdown to your next expiring item. Toggle this in Settings → Display → Dynamic Island.',
      },
      {
        title: 'Home-screen countdown widget (Android)',
        body: "On Android, add the Deletable widget to your home screen for a live countdown to your soonest-to-expire item. It refreshes every ~15 minutes from the same background task that runs the auto-deletion sweep.",
      },
    ],
  },
  {
    id: 'vault',
    Icon: SlidersIcon,
    color: 'text-blue bg-blue/10',
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
    Icon: TrophyIcon,
    color: 'text-green bg-green/10',
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
    Icon: ToolIcon,
    color: 'text-text-secondary bg-card',
    heading: 'Settings Overview',
    steps: [
      {
        title: 'Default deletion time',
        body: 'Set a global default timer applied to every new item. You can override it per category or choose "Ask every time" to always be prompted when creating an item.',
      },
      {
        title: 'Theme',
        body: 'Choose Dark, Light, or System in Settings → Appearance. "System" follows your device appearance setting automatically.',
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
            className="flex items-center gap-2 bg-card border border-border hover:border-[#3C3C3C] text-text-secondary hover:text-white text-sm px-4 py-2.5 rounded-xl transition-colors"
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center ${s.color}`}>
              <s.Icon className="w-3 h-3" />
            </div>
            {s.heading}
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
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${section.color}`}>
                <section.Icon className="w-4.5 h-4.5" />
              </div>
              <h2 className="text-2xl font-bold text-gradient inline-block">{section.heading}</h2>
            </div>
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
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/60 font-semibold px-6 py-3.5 rounded-2xl cursor-not-allowed select-none">
            <AppleIcon className="w-5 h-5" />
            Coming Soon to iOS
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/60 font-semibold px-6 py-3.5 rounded-2xl cursor-not-allowed select-none">
            <AndroidIcon className="w-5 h-5" />
            Coming Soon to Android
          </span>
        </div>
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
