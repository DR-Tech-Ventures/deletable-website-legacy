import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://deletable.app',
      lastModified: new Date('2026-05-15'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://deletable.app/features',
      lastModified: new Date('2026-04-23'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deletable.app/guide',
      lastModified: new Date('2026-04-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://deletable.app/help',
      lastModified: new Date('2026-04-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://deletable.app/trash-stats',
      lastModified: new Date('2026-05-15'),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://deletable.app/privacy',
      lastModified: new Date('2026-04-23'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
