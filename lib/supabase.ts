import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface DeviceStat {
  device_id: string
  total_items_deleted: number
  total_notes_deleted: number
  total_photos_deleted: number
  total_bytes_freed: number
  current_tier: string
  platform: string
  app_version: string
  last_updated_at: string
}

export async function getLeaderboard(limit = 25): Promise<DeviceStat[]> {
  const { data, error } = await supabase
    .from('device_stats')
    .select('device_id, total_items_deleted, total_notes_deleted, total_photos_deleted, total_bytes_freed, current_tier, platform, app_version, last_updated_at')
    .order('total_items_deleted', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Leaderboard fetch error:', error)
    return []
  }
  return data ?? []
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function truncateId(id: string): string {
  return `${id.slice(0, 4)}…${id.slice(-4)}`
}
