import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollEffects from '@/components/ScrollEffects';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { ThemeProvider } from '@/components/ThemeProvider';
import { EMAIL, FACEBOOK, INSTAGRAM, LINKEDIN, PHONE, SITE_URL } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Karka AI & Tech Academy',
  title: { default: 'Karka AI & Tech Academy', template: '%s | Karka AI & Tech Academy' },
  description: 'AI-first learning, project practice and career-focused mentorship at Karka AI & Tech Academy in Nagercoil, Tamil Nadu.',
  keywords: [
    'Karka AI & Tech Academy',
    'technology courses in Nagercoil',
    'AI courses in Tamil Nadu',
    'coding classes in Nagercoil',
    'full stack development course',
    'data science training',
    'career-focused technology training',
  ],
  creator: 'Karka AI & Tech Academy',
  publisher: 'Karka AI & Tech Academy',
  category: 'education',
  alternates: { canonical: SITE_URL },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {}),
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Nagercoil, Tamil Nadu, India',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    type: 'website',
    siteName: 'Karka AI & Tech Academy',
    locale: 'en_IN',
    title: 'Karka AI & Tech Academy',
    description: 'Build practical skills, work on projects and prepare for your next career step.',
    url: SITE_URL,
    images: [{ url: '/og-karka.png', width: 1200, height: 630, alt: 'Karka AI & Tech Academy' }],
  },
  twitter: { card: 'summary_large_image', title: 'Karka AI & Tech Academy', description: 'Build practical skills, work on projects and prepare for your next career step.', images: ['/og-karka.png'] },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5, themeColor: '#7c3aed' };

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Karka AI & Tech Academy',
  url: SITE_URL,
  logo: `${SITE_URL}/karka-logo.webp`,
  description: 'AI-first technology education, practical projects and career-focused mentorship.',
  address: { '@type': 'PostalAddress', addressLocality: 'Nagercoil', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
  telephone: PHONE,
  email: EMAIL,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    email: EMAIL,
    contactType: 'admissions',
    areaServed: 'IN',
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: [INSTAGRAM, LINKEDIN, FACEBOOK],
  areaServed: { '@type': 'AdministrativeArea', name: 'Tamil Nadu, India' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/karka-logo.webp" type="image/webp" />
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('karka-theme');var v=t==='light'?'light':'dark';document.documentElement.dataset.theme=v;document.documentElement.style.colorScheme=v}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.style.colorScheme='dark'}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, '\\u003c') }} />
      </head>
      <body>
        <GoogleAnalytics />
        <ThemeProvider>
          <SiteHeader />
          <ScrollEffects />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
