# Deletable — Marketing Website

Marketing site for **Deletable**, a privacy-first iOS app for auto-deleting notes and photos. Built with Next.js 15 App Router, Tailwind CSS, and Supabase.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, trust pillars, use cases, features |
| `/features` | Full feature breakdown |
| `/guide` | User guide / how-to |
| `/help` | Help & FAQ |
| `/tiers` | Achievement tiers + live anonymous leaderboard |
| `/contact` | Contact form (submissions saved to Supabase) |
| `/privacy` | Privacy policy |

## Tech stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** — dark theme with custom design tokens in [`tailwind.config.ts`](tailwind.config.ts)
- **Supabase** — anonymous leaderboard + contact form storage
- **Vercel Analytics** — page view tracking

## Getting started

```bash
npm install
cp .env.example .env.local
# fill in your Supabase credentials (see Environment Variables below)
npm run dev
```

The site runs at `http://localhost:3000`.

## Environment variables

Create a `.env.local` file (never commit it):

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Both variables are public (read-only anon key). They are safe to expose in the browser but should still be kept out of version control.

## Supabase setup

Two tables are required:

### `device_stats` — leaderboard

| Column | Type | Notes |
|---|---|---|
| `device_id` | `text` | Anonymous UUID from the iOS app |
| `total_items_deleted` | `int8` | Leaderboard sort key |
| `total_notes_deleted` | `int8` | |
| `total_photos_deleted` | `int8` | |
| `total_bytes_freed` | `int8` | |
| `current_tier` | `text` | Tier slug, e.g. `"landfill-legend"` |
| `platform` | `text` | e.g. `"ios"` |
| `app_version` | `text` | |
| `last_updated_at` | `timestamptz` | |

The leaderboard query is read-only and orders by `total_items_deleted` descending. Rows are written by the iOS app, not the website.

### `contact_submissions` — contact form

| Column | Type |
|---|---|
| `name` | `text` |
| `email` | `text` |
| `subject` | `text` |
| `message` | `text` |

Written by the `/contact` page server action ([`app/contact/actions.ts`](app/contact/actions.ts)).

## Key files

```
app/
  layout.tsx          # Root layout — Nav, Footer, Analytics
  page.tsx            # Home / landing page
  tiers/page.tsx      # Tiers + leaderboard (ISR, revalidates every 5 min)
  contact/
    page.tsx          # Contact form UI
    actions.ts        # Server action: validates + inserts to Supabase

components/
  Nav.tsx             # Top navigation bar
  Footer.tsx          # Site footer
  PhoneMockup.tsx     # iPhone mockup illustrations used in hero
  TierIcon.tsx        # Renders the emoji/icon for a given tier

lib/
  tiers.ts            # Tier definitions (8 tiers) + getTierForCount()
  supabase.ts         # Supabase client, getLeaderboard(), formatBytes(), truncateId()
```

## Adding or editing tiers

Tiers are defined in [`lib/tiers.ts`](lib/tiers.ts). Each entry has:

```ts
{ id, name, emoji, minItems, description, color }
```

`minItems` is the threshold for the tier. `getTierForCount(n)` returns the highest tier a user with `n` deletions qualifies for. The tiers page and home page both import from this file — changing it updates both.

## Styling

The color palette and font stack live in [`tailwind.config.ts`](tailwind.config.ts). All custom tokens:

| Token | Value | Usage |
|---|---|---|
| `background` | `#0A0A0A` | Page background |
| `card` | `#1C1C1C` | Card / surface |
| `accent` | `#FF3B2F` | Primary CTA red |
| `border` | `#2C2C2C` | Dividers |
| `text-secondary` | `#A0A0A0` | Muted text |
| `green` | `#30D158` | "Available" indicator |

Global CSS (gradients, glow utilities) is in [`app/globals.css`](app/globals.css).

## Deployment

The site is deployed on Vercel. Add the two environment variables above in the Vercel project settings under **Settings → Environment Variables**. No other configuration is needed — Vercel auto-detects Next.js.

```bash
npm run build   # verify the build locally before pushing
```
