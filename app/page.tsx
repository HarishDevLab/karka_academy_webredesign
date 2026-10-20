import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { SITE_URL } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Skills That Build Your Future',
  description: 'Explore AI-first career tracks, practical projects, internships and Pay After Placement at Karka AI & Tech Academy in Nagercoil, Tamil Nadu.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Skills That Build Your Future',
    description: 'Explore AI-first career tracks, practical projects and career-focused mentorship at Karka Academy.',
    url: SITE_URL,
    images: [{ url: '/og-karka.png', width: 1200, height: 630, alt: 'Karka AI & Tech Academy — skills that build your future' }],
  },
};

export default function Home() { return <HomePage />; }
