/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Covers all actual display sizes in the project: 24 (footer), 32 (nav), 80 (tiers empty),
    // 128 (home CTA), 144 (tiers header) — plus 2× DPR variants up the ladder
    imageSizes: [24, 32, 48, 64, 80, 96, 128, 144, 256, 384],
    deviceSizes: [640, 1080, 1920],
    remotePatterns: [],
  },
}

export default nextConfig
