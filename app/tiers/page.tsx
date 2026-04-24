import type { Metadata } from 'next'
import { TIERS, getTierForCount } from '@/lib/tiers'
import { getLeaderboard, formatBytes, truncateId } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Tiers & Leaderboard — Deletable',
  description: 'See all 8 achievement tiers and the global anonymous leaderboard of top deleters.',
}

export const revalidate = 300 // refresh leaderboard every 5 min

const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32']

export default async function TiersPage() {
  const leaderboard = await getLeaderboard(25)

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Trash Tiers 🗑️</h1>
        <p className="text-text-secondary text-xl max-w-xl mx-auto">
          Delete more to rank higher. 8 tiers stand between you and Distinguished Raccoonian.
        </p>
      </div>

      {/* Tier cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {TIERS.map((tier, i) => (
          <div
            key={tier.id}
            className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#3C3C3C] transition-colors"
          >
            <div className="text-5xl mb-3">{tier.emoji}</div>
            <div className="font-bold text-white mb-1">{tier.name}</div>
            <div
              className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
              style={{ backgroundColor: `${tier.color}22`, color: tier.color }}
            >
              {tier.minItems}+ items
            </div>
            <div className="text-text-secondary text-xs leading-relaxed">{tier.description}</div>
            {i === TIERS.length - 1 && (
              <div className="mt-2 text-xs text-purple font-medium">✨ Max tier</div>
            )}
          </div>
        ))}
      </div>

      {/* Progress guide */}
      <div className="bg-card border border-border rounded-3xl p-8 mb-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Your path to the top</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-4 pl-14">
            {TIERS.map((tier) => (
              <div key={tier.id} className="relative flex items-center gap-4">
                <div
                  className="absolute -left-8 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{ backgroundColor: tier.color }}
                >
                  <span className="text-[10px]">{tier.emoji}</span>
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <span className="font-semibold text-white text-sm">{tier.name}</span>
                  <span className="text-text-tertiary text-xs">—</span>
                  <span className="text-text-secondary text-xs">{tier.description}</span>
                </div>
                <span
                  className="text-xs font-mono shrink-0"
                  style={{ color: tier.color }}
                >
                  {tier.minItems >= 1000 ? `${tier.minItems / 1000}k` : tier.minItems}+
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Global Leaderboard</h2>
          <p className="text-text-secondary">
            Anonymous rankings — device IDs only, no personal data ever stored.
          </p>
        </div>

        {leaderboard.length === 0 ? (
          <div className="text-center py-16 text-text-secondary">
            <div className="text-5xl mb-4">🦝</div>
            <p>No data yet — be the first to climb the ranks.</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-3xl overflow-hidden">
            <div className="grid grid-cols-[2rem_1fr_auto_auto_auto] gap-4 px-6 py-3 border-b border-border text-text-tertiary text-xs font-semibold uppercase tracking-wider">
              <span>#</span>
              <span>Device</span>
              <span className="text-right">Tier</span>
              <span className="text-right">Deleted</span>
              <span className="text-right">Freed</span>
            </div>
            {leaderboard.map((row, i) => {
              const tier = getTierForCount(row.total_items_deleted)
              return (
                <div
                  key={row.device_id}
                  className={`grid grid-cols-[2rem_1fr_auto_auto_auto] gap-4 px-6 py-4 items-center ${
                    i < leaderboard.length - 1 ? 'border-b border-border' : ''
                  } hover:bg-[#242424] transition-colors`}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: i < 3 ? medalColors[i] : '#505050' }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-mono text-xs text-text-secondary truncate">
                      {truncateId(row.device_id)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="text-base">{tier.emoji}</span>
                    <span className="text-xs text-text-secondary hidden sm:inline">{tier.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-right text-white">
                    {row.total_items_deleted.toLocaleString()}
                  </span>
                  <span className="text-xs text-text-secondary text-right">
                    {formatBytes(row.total_bytes_freed)}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        <p className="text-center text-text-tertiary text-xs mt-4">
          Leaderboard refreshes every 5 minutes. Rankings are fully anonymous.
        </p>
      </div>
    </div>
  )
}
