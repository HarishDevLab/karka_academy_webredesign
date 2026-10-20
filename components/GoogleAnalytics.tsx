'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

const measurementId = process.env.NEXT_PUBLIC_GA_ID;

if (measurementId && !/^G-[A-Z0-9]+$/.test(measurementId)) {
  throw new Error('NEXT_PUBLIC_GA_ID must be a valid GA4 measurement ID, such as G-XXXXXXXXXX.');
}

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer.push(args));
    window.gtag('event', 'page_view', {
      page_path: `${pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  if (!measurementId) return null;

  return (
    <>
      <Script id="google-tag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(Array.from(arguments))};window.gtag('js',new Date());window.gtag('config','${measurementId}',{send_page_view:false});`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
