import type { Metadata } from 'next'
import {
  FileTextIcon, CameraIcon, FolderIcon, SearchIcon, SlidersIcon,
  ClockIcon, CalendarIcon, RefreshIcon, BellIcon,
  LockIcon, UserIcon, EyeOffIcon, BarChartIcon,
  MapPinIcon, SmartphoneIcon, MoonIcon, ZapIcon,
  TrophyIcon, UploadIcon, GlobeIcon,
  AppleIcon, AndroidIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Features — Deletable',
  description: 'Everything Deletable can do: encrypted vault, auto-delete, biometric unlock, location reminders, Dynamic Island on iOS, home-screen widget on Android, and more.',
  alternates: { canonical: 'https://deletable.app/features' },
}

type IconComponent = React.ComponentType<{ className?: string }>

const sections: {
  heading: string
  features: { Icon: IconComponent; color: string; title: string; desc: string }[]
}[] = [
  {
    heading: 'The Vault',
    features: [
      {
        Icon: FileTextIcon,
        color: 'text-blue bg-blue/10',
        title: 'Encrypted Notes',
        desc: 'Write notes with rich text formatting — bold, italic, underline, strikethrough. Every character encrypted with AES-256 before hitting disk.',
      },
      {
        Icon: CameraIcon,
        color: 'text-blue bg-blue/10',
        title: 'Encrypted Photos',
        desc: 'Capture from camera or import from your library. Thumbnails and full images are encrypted; nothing is stored in plain text.',
      },
      {
        Icon: FolderIcon,
        color: 'text-blue bg-blue/10',
        title: 'Categories',
        desc: 'Organize items into custom categories with your own colors and icons. Set a default deletion time per category.',
      },
      {
        Icon: SearchIcon,
        color: 'text-blue bg-blue/10',
        title: 'Search',
        desc: 'Full-text search across all your notes and photo titles. Hidden by default — reveal with a tap or a pull-down swipe.',
      },
      {
        Icon: SlidersIcon,
        color: 'text-blue bg-blue/10',
        title: 'Layout Options',
        desc: 'Switch between 1 or 2 columns per row. Sort by soonest-to-delete or most recently created.',
      },
    ],
  },
  {
    heading: 'Deletion',
    features: [
      {
        Icon: ClockIcon,
        color: 'text-orange bg-orange/10',
        title: '13 Preset Timers',
        desc: 'Choose from 60 minutes, 3 h, 6 h, 12 h, 24 h, 3 days, 5 days, 7 days, 14 days, 30 days, 6 months — or set a fully custom duration.',
      },
      {
        Icon: CalendarIcon,
        color: 'text-orange bg-orange/10',
        title: 'Pick an Exact Date',
        desc: 'Choose a specific date and time for precise expiry. Perfect for things that need to vanish after a meeting or event.',
      },
      {
        Icon: RefreshIcon,
        color: 'text-orange bg-orange/10',
        title: 'Background Purge',
        desc: "Expired items are scrubbed automatically even when the app is closed, via the OS's background fetch task (checks every 15 min on both iOS and Android).",
      },
      {
        Icon: BellIcon,
        color: 'text-orange bg-orange/10',
        title: 'Expiry Reminders',
        desc: "Optional push notifications 1 hour or 24 hours before an item is deleted, so you can act before it's gone.",
      },
    ],
  },
  {
    heading: 'Security & Privacy',
    features: [
      {
        Icon: LockIcon,
        color: 'text-accent bg-accent/10',
        title: 'AES-256 Encryption',
        desc: "Always on — there's no toggle. Every note and photo is encrypted before storage. The master key is sealed in the iOS Keychain or Android Keystore.",
      },
      {
        Icon: UserIcon,
        color: 'text-accent bg-accent/10',
        title: 'Face ID, Touch ID & Fingerprint',
        desc: 'Require biometric unlock to open the app — Face ID or Touch ID on iOS, fingerprint on Android, with a passcode fallback. Configure the lock timeout: immediate, 1 min, 5 min, 15 min, or never.',
      },
      {
        Icon: EyeOffIcon,
        color: 'text-accent bg-accent/10',
        title: 'No Account Required',
        desc: 'Zero sign-up, zero cloud sync for your content. Everything stays on your device. We only collect anonymous, aggregated usage stats.',
      },
      {
        Icon: BarChartIcon,
        color: 'text-green bg-green/10',
        title: 'Anonymous Analytics',
        desc: 'We track deletion counts and vault sizes tied to a random UUID — never your name, email, or any identifying information.',
      },
    ],
  },
  {
    heading: 'Platform Integrations',
    features: [
      {
        Icon: MapPinIcon,
        color: 'text-purple bg-purple/10',
        title: 'Location Context',
        desc: 'Tag notes with a geofence on iOS or Android. Get reminded when you arrive at or leave a location — then the note deletes on schedule.',
      },
      {
        Icon: MoonIcon,
        color: 'text-purple bg-purple/10',
        title: 'Dark / Light / System Theme',
        desc: 'Follows your system appearance, or lock it to dark or light mode in Settings.',
      },
      {
        Icon: SmartphoneIcon,
        color: 'text-purple bg-purple/10',
        title: 'Dynamic Island (iOS)',
        desc: 'On iPhone 14 Pro and later, a Live Activity in the Dynamic Island shows a countdown to your next expiring item.',
      },
      {
        Icon: ZapIcon,
        color: 'text-purple bg-purple/10',
        title: 'Home Screen Quick Actions (iOS)',
        desc: 'Long-press the Deletable icon on your home screen to instantly add a Note or Photo — no need to open the full app first.',
      },
      {
        Icon: ClockIcon,
        color: 'text-purple bg-purple/10',
        title: 'Home Screen Countdown Widget (Android)',
        desc: 'A native Android widget shows a live countdown to your soonest-to-expire item, refreshed every ~15 minutes from the background task.',
      },
      {
        Icon: EyeOffIcon,
        color: 'text-purple bg-purple/10',
        title: 'App-Switcher Privacy',
        desc: 'iOS blurs vault content in the app switcher; Android sets FLAG_SECURE so the OS hides previews and blocks system screenshots while backgrounded.',
      },
      {
        Icon: UploadIcon,
        color: 'text-purple bg-purple/10',
        title: 'Share Into the Vault',
        desc: 'Save into Deletable from anywhere — a native share extension on iOS and ACTION_SEND on Android both route into the same timer + folder picker.',
      },
    ],
  },
  {
    heading: 'Stats & Achievements',
    features: [
      {
        Icon: TrophyIcon,
        color: 'text-green bg-green/10',
        title: '8 Achievement Tiers',
        desc: 'From Trash Panda (3 items) to Distinguished Raccoonian (1,000 items). Each tier unlocks a new title and emoji pile.',
      },
      {
        Icon: UploadIcon,
        color: 'text-green bg-green/10',
        title: 'Shareable Stats Card',
        desc: 'Generate a beautiful dark-themed PNG of your stats — tier badge, items deleted, bytes freed — and share it anywhere.',
      },
      {
        Icon: GlobeIcon,
        color: 'text-green bg-green/10',
        title: 'Global Leaderboard',
        desc: 'Anonymous rankings of top deleters worldwide. See how your trash game stacks up.',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Everything Deletable does</h1>
        <p className="text-text-secondary text-xl max-w-xl mx-auto">
          Privacy-first features built for iPhone and Android, designed to make sensitive data disappear on your terms.
        </p>
      </div>

      <div className="space-y-16">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-2xl font-bold mb-6 text-gradient inline-block">{section.heading}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.features.map((f) => (
                <div key={f.title} className="bg-card border border-border rounded-2xl p-6 flex gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${f.color}`}>
                    <f.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bg-card border border-border rounded-3xl p-10">
        <div className="text-5xl mb-4">🗑️</div>
        <h2 className="text-3xl font-bold mb-2">Ready to clean up?</h2>
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
      </div>
    </div>
  )
}
