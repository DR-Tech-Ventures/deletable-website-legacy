import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Deletable',
  description: 'How Deletable handles your data — and why almost none of it ever leaves your device.',
}

export default function PrivacyPage() {
  const lastUpdated = 'April 23, 2026'

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-text-secondary">Last updated: {lastUpdated}</p>
      </div>

      <div className="prose-custom space-y-10">

        <section className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🔒</span>
            <h2 className="text-xl font-bold">The short version</h2>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Your vault content — notes, photos, everything you store — <strong className="text-white">never leaves your device</strong>. It is encrypted with AES-256 and the key is sealed in your iOS Keychain. We collect only anonymous, aggregated usage statistics tied to a random ID that cannot be traced back to you.
          </p>
        </section>

        <Section title="1. Who we are">
          <P>Deletable is developed and published by DRTech Ventures. References to "we," "us," or "our" in this policy refer to DRTech Ventures.</P>
        </Section>

        <Section title="2. What data stays on your device">
          <P>The following data is stored <strong className="text-white">exclusively on your device</strong> and is never transmitted to our servers or any third party:</P>
          <ul className="text-text-secondary space-y-2 list-disc list-inside text-sm leading-relaxed">
            <li>All vault content: notes, photos, and any text you type</li>
            <li>Your encryption master key (stored in the iOS Keychain)</li>
            <li>Your categories, settings, and preferences</li>
            <li>Location data associated with notes</li>
            <li>Biometric authentication configuration</li>
          </ul>
        </Section>

        <Section title="3. What anonymous data we collect">
          <P>When the app is initialized and when vault activity occurs, Deletable syncs the following statistics to our Supabase backend. This data is linked to a <strong className="text-white">randomly generated UUID</strong> created at first launch — it has no connection to your Apple ID, name, email, or device serial number.</P>
          <div className="bg-background rounded-xl p-4 mt-3 text-sm font-mono space-y-1 text-text-secondary">
            <div>total_items_deleted</div>
            <div>total_notes_deleted</div>
            <div>total_photos_deleted</div>
            <div>total_bytes_freed</div>
            <div>current_tier</div>
            <div>current_notes / current_photos / current_total_items</div>
            <div>deletion_time_distribution</div>
            <div>platform / app_version / last_updated_at</div>
          </div>
          <P className="mt-3">We use this data solely to understand aggregate app usage, power the in-app statistics features, and display the anonymous global leaderboard on this website.</P>
        </Section>

        <Section title="4. Third-party services">
          <P>We use <strong className="text-white">Supabase</strong> to store the anonymous statistics described above. Supabase is a US-based service. No other third-party analytics, advertising, or tracking SDKs are included in the app.</P>
        </Section>

        <Section title="5. Permissions we request">
          <div className="space-y-3 mt-2">
            {[
              { icon: '📷', name: 'Camera', reason: 'To capture photos you choose to store in the vault.' },
              { icon: '🖼️', name: 'Photo Library', reason: 'To import photos from your library into the vault.' },
              { icon: '📍', name: 'Location (In-Use & Background)', reason: 'To attach geofence reminders to notes. Only used when you explicitly enable Location Context in Settings.' },
              { icon: '👤', name: 'Face ID / Biometrics', reason: 'To lock the app and require authentication on open.' },
              { icon: '🔔', name: 'Notifications', reason: 'To send optional expiry reminder alerts before items are deleted.' },
              { icon: '⚙️', name: 'Background App Refresh', reason: 'To purge expired items even when the app is not open.' },
            ].map(({ icon, name, reason }) => (
              <div key={name} className="flex gap-3">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <div className="text-white text-sm font-medium">{name}</div>
                  <div className="text-text-secondary text-sm">{reason}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="6. Data retention">
          <P>Anonymous statistics in Supabase are retained indefinitely to power leaderboard and aggregate features. Deleting the app removes all local data. Your Supabase record (containing only anonymous statistics) will persist but cannot be linked to you. Contact us if you would like it removed and can provide your random device UUID (visible in the app under Settings → About).</P>
        </Section>

        <Section title="7. Children">
          <P>Deletable is not directed at children under 13. We do not knowingly collect any information from children under 13.</P>
        </Section>

        <Section title="8. Changes to this policy">
          <P>We may update this policy as the app evolves. The current version is always available at this URL. Continued use of the app after changes constitutes acceptance of the updated policy.</P>
        </Section>

        <Section title="9. Contact">
          <P>Questions about this privacy policy? Open an issue on <a href="https://github.com/drtechventures/deletable/issues" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">GitHub</a> or reach out via the App Store listing.</P>
        </Section>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-3 text-white">{title}</h2>
      <div className="text-text-secondary leading-relaxed text-sm space-y-2">{children}</div>
    </section>
  )
}

function P({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-text-secondary text-sm leading-relaxed ${className}`}>{children}</p>
}
