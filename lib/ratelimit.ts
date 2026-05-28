import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

let ratelimit: Ratelimit | null = null

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  ratelimit = new Ratelimit({
    redis: new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }),
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    prefix: 'deletable:contact',
  })
}

// Returns true if the request is allowed, false if rate limited.
// Always returns true when Upstash env vars are not configured.
export async function checkRateLimit(ip: string): Promise<boolean> {
  if (!ratelimit) return true
  const { success } = await ratelimit.limit(ip)
  return success
}
