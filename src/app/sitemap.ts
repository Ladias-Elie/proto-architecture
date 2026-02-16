import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://proto-architecture.fr'

  // Static pages with real last-modified dates
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: '2026-02-16',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/architecte-renovation-lyon`,
      lastModified: '2026-02-16',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/renovation-appartement-lyon`,
      lastModified: '2026-02-16',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/renovation-maison-lyon`,
      lastModified: '2026-02-16',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/extension-maison-lyon`,
      lastModified: '2026-02-16',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mobilier-sur-mesure-lyon`,
      lastModified: '2026-02-16',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified: '2026-02-06',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: '2026-02-06',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projets/${project.slug}`,
    lastModified: '2026-02-06',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages]
}
