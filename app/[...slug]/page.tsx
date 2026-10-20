import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RouteContent, { routeInfo } from '@/components/RouteContent';
import { SITE_URL, pages, courses, blogPosts, courseBySlug } from '@/lib/content';

export const dynamicParams = false;

const allPaths = [
  ...Object.keys(pages).filter((path) => path !== '/'),
  ...courses.map((course) => `/courses/${course.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];

export function generateStaticParams() {
  return Array.from(new Set(allPaths)).map((path) => ({ slug: path.split('/').filter(Boolean) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${(slug || []).join('/')}`;
  const info = routeInfo(path);
  if (path.startsWith('/courses/') && !path.startsWith('/courses/category/') && !courseBySlug(path.split('/')[2])) notFound();
  const title = info.title.replace(/\s*\|\s*Karka(?: AI & Tech)? Academy$/i, '');
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description: info.description,
    alternates: { canonical: url },
    openGraph: {
      type: path.startsWith('/blog/') ? 'article' : 'website',
      siteName: 'Karka AI & Tech Academy',
      title: `${title} | Karka AI & Tech Academy`,
      description: info.description,
      url,
      images: [{ url: '/og-karka.png', width: 1200, height: 630, alt: 'Karka AI & Tech Academy — skills that build your future' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Karka AI & Tech Academy`,
      description: info.description,
      images: ['/og-karka.png'],
    },
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = `/${(slug || []).join('/')}`;
  if (!allPaths.includes(path)) notFound();
  return <RouteContent path={path} />;
}
