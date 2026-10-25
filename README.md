# Karka AI & Tech Academy — Website Redesign

## [**VIEW THE LIVE WEBSITE**](https://karkaacademywebredesign.vercel.app/)



A responsive, SEO-focused website redesign for **Karka AI & Tech Academy**, built to make its learning tracks easier to discover, explain the Pay After Placement model clearly, and connect prospective learners with the academy. The experience combines a modern visual system, custom Three.js scenes, course discovery, learner stories, analytics readiness, and search-engine-friendly page structure.

**Built with a focus on discoverability, clarity, interactive learning journeys, and responsive user experience.**

## Key Features

### 1. Clear Career-Focused Homepage

- A prominent hero section communicates the academy's learning and career-preparation proposition.
- Primary calls to action guide visitors to courses, the Pay After Placement roadmap, and contact options.
- Dedicated sections explain project-led learning, mentoring, portfolios, career preparation, and the learner journey.
- A responsive sticky header includes primary navigation, a learner-audience dropdown, a theme switch, and a mobile menu.
- Frequently asked questions use native expandable disclosure elements.

### 2. Pay After Placement — A Core Feature, Not a Footnote

- The Pay After Placement model is prominently featured on the homepage and linked from relevant page heroes.
- A visual four-step journey explains the sequence: **learn → build proof → qualifying placement → payment under the agreed terms**.
- A dedicated roadmap page explains the model and encourages visitors to request the applicable written terms.
- Eligibility and payment-condition disclaimers are visible so the website does not present the model as universally applicable.

### 3. Searchable Course Catalog and Individual Course Pages

- **30 course and learning tracks** are represented in structured content data.
- The full catalog supports category filters for Coding, AI & Data, Design, Business, School, and Internship.
- A search field matches course titles, descriptions, and listed skills; an empty-state message offers a reset action.
- Individual course pages present the course summary, category, available duration/audience details, skills to explore, project and portfolio context, mentorship information, and inquiry links.
- Five focused category pages group coding, generative AI, data/AI, design, and digital-media tracks.
- Four audience pages help school students, college students, graduates, and professionals find relevant pathways.
- Course data is centralized in `lib/content.ts`, making titles, descriptions, skills, categories, and slugs straightforward to maintain.

### 4. Technical SEO and Search-Engine Discoverability

- Page-specific titles and meta descriptions are defined for the homepage, content pages, course pages, and blog articles.
- Canonical URLs are emitted to help search engines identify the preferred URL for each page.
- Open Graph and Twitter card metadata provide social-sharing titles, descriptions, and preview images.
- JSON-LD structured data describes the academy as an `EducationalOrganization`; course detail pages also emit `Course` structured data.
- `app/robots.ts` generates `/robots.txt` with crawl rules and a sitemap reference.
- `app/sitemap.ts` generates `/sitemap.xml` from the defined pages, course records, and blog articles.
- Routes are enumerated through `generateStaticParams()` so the known content pages can be generated at build time; unsupported dynamic paths are not enabled by default.
- English (India) language metadata and Nagercoil/Tamil Nadu location metadata are included.
- Google and Bing site-verification metadata can be supplied through environment variables.

> **note:** `SITE_URL` is currently set to `https://www.karka.academy` in `lib/content.ts`.

### 5. Custom, Context-Aware Three.js Visuals

- The site includes custom animated 3D scenes for the homepage and relevant page/course categories, rather than relying only on static hero artwork.
- Scene variants cover the academy, school, college, graduate, professional, career, placement, payment, course, contact, about, insights, AI, data, design, business, internship, coding, and media themes.
- Three.js is loaded dynamically on the client for the 3D scene implementation.
- Scenes respond to container resizing and animate while visible, reducing unnecessary off-screen animation work.
- CSS fallback visuals are available if WebGL cannot initialize.
- Reduced-motion preferences are respected, including reduced or disabled animation where applicable.

### 6. Learner Stories and Placement Showcase

- A continuously moving placement-destination ticker displays eight company logos included in the project assets.
- Six course-specific learner-feedback cards provide a dedicated review section.
- An interactive eight-person learner-video gallery lets visitors select a profile and view its configured video, Instagram Reel, or fallback placeholder.
- Media URLs and learner-card content are editable in `components/LearnerVideos.tsx`. For now the videos are fetched from original Karka website dynamically.
### 7. Inquiry and Contact Conversion Flows

- Reusable inquiry forms collect a required name, optional phone number, and area of interest.
- Submitting a form opens WhatsApp with a pre-filled message; the site does **not** automatically send the message on the user's behalf.
- Course pages provide course-specific inquiry links with the course name included in the message.
- Phone, email, location/map, WhatsApp, and social profile links appear in relevant contact areas and the site footer.
- Links to external destinations are opened with appropriate `rel` attributes where applicable.

### 8. Spike AI Learning-Platform Handoff

- A dedicated homepage section introduces the Spike AI learning experience and its key learning concepts.
- Visitors can type a question and continue to the external Spike AI platform with that prompt included in the destination URL.
- The feature acts as a handoff to `https://spike.karka.academy/`.

### 9. Theme, Navigation, and Reading Experience

- Light and dark themes are supported, and the selected theme is stored in browser local storage.
- The header uses a translucent, blurred visual treatment and remains available while scrolling.
- A scroll-progress indicator helps users understand their position on long pages.
- A back-to-top control appears after the user scrolls down the page.
- Layouts adapt to desktop, tablet, and mobile widths, including the course catalog, reviews, video gallery, header navigation, and Pay After Placement journey.

### 10. Accessibility and Motion Preferences

- Semantic landmarks and heading structure are used throughout the main pages.
- A skip-to-content link, descriptive labels, selected-state attributes, and accessible names are provided for key controls.
- Keyboard focus styles are defined for interactive elements.
- `prefers-reduced-motion` is handled in the stylesheet and 3D scene implementation.
- Video elements include controls and accessible labels. (Instagram embeds use descriptive iframe titles).

### 11. Analytics, Security Headers, and Runtime Optimization

- **Google Analytics 4 is integration-ready.** When `NEXT_PUBLIC_GA_ID` is configured, the Google tag is loaded after the page becomes interactive and page-view events are sent as the route changes.
- Google and Bing verification tags can be injected from environment variables for site ownership verification.
- Response headers include `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Strict-Transport-Security`, `X-DNS-Prefetch-Control`, and a restrictive `Permissions-Policy` for camera, microphone, and geolocation.
- Next.js compression is enabled and the default powered-by header is disabled.
- Three.js rendering uses resize/intersection observers, caps the renderer pixel ratio, and disposes scene resources during cleanup.

### 12. Learning Guides and Essential Information Pages

- Three detailed blog articles cover developer portfolios, learning with AI tools, and planning a first full-stack project.
- Dedicated pages cover placement support, the Pay After Placement roadmap, the academy, contact information, privacy policy, and terms of service.
- Blog and course pages receive their own titles, descriptions, canonical URLs, and social metadata.

## Page and Content Coverage

The project is configured for **51 known routes**: the homepage, 17 additional general/category pages, 30 course detail pages, and 3 blog articles.

| Page group | What it includes |
|---|---|
| Homepage | Main brand story, Pay After Placement, featured tracks, Spike AI, FAQs, learner stories, and inquiry form |
| Course catalog | Search, category filters, empty state, and course cards |
| Course detail pages | Individual track summaries, skill lists, project/portfolio context, and inquiry actions |
| Course categories | Coding, generative AI, data/AI, design, and digital media |
| Learner audiences | School students, college students, graduates, and professionals |
| Career support | Placement guidance and Pay After Placement roadmap |
| Academy/contact | About, contact information, social links, and inquiry form |
| Learning guides | Blog index plus three full articles(Reference Only) |
| Essential information | Privacy policy and terms of service(Just Demo) |
| Search discovery | Generated `robots.txt`, `sitemap.xml`, page metadata, and structured data |

## Technology Stack

- **Framework:** Next.js App Router (`next` 16.4.2)
- **UI:** React 19 and TypeScript
- **3D graphics:** Three.js
- **Icons:** Lucide React
- **Styling:** Custom CSS in `app/globals.css`
- **Analytics:** Google Analytics 4 integration (optional configuration)
- **Deployment compatibility:** Designed for Next.js hosting platforms such as Vercel

## Run Locally

### Requirements

Install a Node.js version supported by the installed Next.js release and npm.

### 1. Clone the repository

```bash
git clone https://github.com/HarishDevLab/karka_academy_webredesign.git
cd karka_academy_webredesign
```



### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables (optional)

Create a `.env.local` file in the project root if you want to enable analytics or site-verification metadata:

```dotenv
# Google Analytics  measurement ID. Use your own ID.
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional verification tokens from the relevant webmaster tools.
GOOGLE_SITE_VERIFICATION=your-google-verification-token
BING_SITE_VERIFICATION=your-bing-verification-token
```



### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed by Next.js in your terminal.

### 5. Run checks and create a production build

```bash
npm run typecheck
npm run build
npm start
```

`npm run start` serves the production build after `npm run build` has completed.

## Project Structure

```text
.
├── app/
│   ├── [...slug]/page.tsx       # Predefined secondary routes and page metadata
│   ├── globals.css              # Design system, layouts, responsive and motion rules
│   ├── layout.tsx               # Shared layout, metadata, organization JSON-LD
│   ├── page.tsx                 # Homepage route and metadata
│   ├── robots.ts                # Generated robots.txt rules
│   └── sitemap.ts               # Generated sitemap.xml
├── components/
│   ├── CourseCatalog.tsx        # Searchable and filterable course listing
│   ├── GoogleAnalytics.tsx      # Optional GA4 integration and route page views
│   ├── HeroScene.tsx             # Three.js animated 3D scenes and fallback
│   ├── HomePage.tsx              # Homepage sections and content composition
│   ├── LeadForm.tsx               # WhatsApp inquiry handoff
│   ├── LearnerReviews.tsx        # Learner-feedback cards
│   ├── LearnerVideos.tsx         # Selectable learner-video gallery
│   ├── PayAfterPlacementVisual.tsx # Pay After Placement journey graphic
│   ├── PlacementTicker.tsx       # Animated placement-destination logos
│   ├── RouteContent.tsx          # Course, audience, blog, legal, and support pages
│   ├── ScrollEffects.tsx         # Reading progress and back-to-top control
│   ├── SiteFooter.tsx            # Footer navigation and contact links
│   ├── SiteHeader.tsx            # Responsive header, menus, and theme toggle
│   ├── SpikeExperience.tsx       # Prompt handoff to the external Spike AI site
│   └── ThemeProvider.tsx         # Persistent light/dark theme state
├── lib/
│   └── content.ts                # Site URL, course catalog, routes, FAQs, and content data
├── public/
│   ├── karka-logo.webp           # Brand logo
│   ├── og-karka.png              # Open Graph/social-sharing image
│   └── placement-logos/           # Placement-destination logo assets
├── next.config.ts                # Next.js configuration and response headers
├── package.json                  # Scripts and dependencies
└── tsconfig.json                 # TypeScript configuration
```


##  Project Notes

- Course lengths, eligibility, availability, placement outcomes, and Pay After Placement conditions are not confirmed with the academy and its current written program terms(applied based on publically available information or just demo files).
- The WhatsApp inquiry form prepares a message for the visitor to review and send(it is not a backend lead database or automatic message sender).
- Google Analytics and search-engine ownership verification require the relevant IDs/tokens. Their integration points are present, but service-side setup must be completed separately.
- Spike AI is linked as an external service.

---


