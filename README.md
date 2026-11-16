# Karka AI & Tech Academy Website Redesign

## [**VIEW THE LIVE WEBSITE**](https://karkaacademywebredesign.vercel.app/)

A conversion-focused marketing site for Karka AI & Tech Academy, built with Next.js and designed to highlight career tracks, project-based learning, and the Pay After Placement model.

The current project focuses on:
- clear course discovery and audience-specific pathways
- strong SEO and metadata coverage for public pages
- lead capture via WhatsApp inquiry flows
- responsive UX with dark mode and accessible interactions
- scalable content management via central content data



## Overview

This redesign is aimed at making the academy easier to understand and easier to explore:
- prospective learners can quickly discover relevant tracks
- each course is presented with clear context, audience, duration, and skills
- the Pay After Placement journey is explained with reusable visual storytelling
- structured content pages support discoverability and shareability
- the site is designed for a modern marketing and admissions funnel rather than a simple portfolio page

## Key features

### Course and audience discovery
- searchable, filterable course catalog
- category and audience landing pages for school, college, graduate, and professional learners
- centralized course data in `lib/content.ts`
- route-driven content pages for courses, blog posts, legal pages, and support content

### Conversion-oriented landing experience
- homepage messaging built around learning outcomes, mentorship, and career readiness
- attention on the Pay After Placement model with clear CTA flows
- WhatsApp lead forms that prepare a message for the user to review and send
- external links to academy/support resources and platform handoffs

### SEO and metadata
- page-level metadata and canonical URLs
- Open Graph / social sharing metadata
- generated `robots.txt` and `sitemap.xml`
- structured data for educational content and course pages

### UX and accessibility
- responsive layout for desktop, tablet, and mobile
- light and dark theme support
- sticky navigation, scroll progress, and back-to-top behavior
- semantic HTML and reduced-motion handling

### Visual experience
- custom 3D/scene-based visual treatment
- animated placement ticker and learner story sections
- gallery, testimonial, and course highlight sections for higher engagement

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Three.js for visual scenes
- Lucide React icons
- Custom CSS for design system and responsive styling

## Repository structure

```text
.
├── app/
│   ├── [...slug]/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── CourseCatalog.tsx
│   ├── GoogleAnalytics.tsx
│   ├── HomePage.tsx
│   ├── LeadForm.tsx
│   ├── LearnerReviews.tsx
│   ├── LearnerVideos.tsx
│   ├── PayAfterPlacementVisual.tsx
│   ├── PlacementTicker.tsx
│   ├── RouteContent.tsx
│   ├── ScrollEffects.tsx
│   ├── SiteFooter.tsx
│   ├── SiteHeader.tsx
│   ├── SpikeExperience.tsx
│   └── ThemeProvider.tsx
├── lib/
│   └── content.ts
├── public/
│   ├── karka-logo.webp
│   ├── og-karka.png
│   └── placement-logos/
├── next.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```


## Optional configuration

The project supports optional analytics and verification integration via environment variables, but no secret credentials are required for standard local development.

Typical examples include:
```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
GOOGLE_SITE_VERIFICATION=your-google-verification-token
BING_SITE_VERIFICATION=your-bing-verification-token
```

Use these only if you are configuring the live deployment or search-console verification.

## Notes

- Inquiry flows are designed to open a WhatsApp message for the user to confirm and send.
- Some content and claims should be verified against the academy’s current official program terms before production publishing.
- The site is structured to be easy to update by changing data in `lib/content.ts` and route content files.
- Spike AI is linked as an external service.


---
