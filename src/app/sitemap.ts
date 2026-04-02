import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suryansu.pro'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-02'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/stats`,
      lastModified: new Date('2026-04-02'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
