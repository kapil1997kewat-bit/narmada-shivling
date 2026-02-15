import { MetadataRoute } from 'next'
import { blogs } from '../../data/blogs'

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = 'https://shubhamnarmadashivling.com'

  const staticPages = [
    '',
    '/about',
    '/blog',
    '/product',
    '/FAQ',
    '/terms-conditions',
    '/privacy-policy',
    '/shipping-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...blogPages]
}

