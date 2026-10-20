import type { MetadataRoute } from 'next';
import { SITE_URL, pages, courses, blogPosts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...Object.keys(pages),
    ...courses.map((course) => `/courses/${course.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];
  return Array.from(new Set(paths)).map((path) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/courses' || path === '/placement' || path === '/roadmap' ? 0.9 : 0.7,
  }));
}
