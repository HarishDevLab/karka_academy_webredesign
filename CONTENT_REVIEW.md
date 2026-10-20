# Karka content and SEO review notes

## Inputs inspected

The supplied archive includes 19 downloaded HTML pages: homepage, about, blog, contact, course catalogue, six course detail pages, four learner audience pages, placement, roadmap, privacy policy and terms of service.

The archive preserves page content and styles, and includes the official logo as an inline WebP data URI. It does not include original JavaScript files or script tags, so interactive behaviors must be reconstructed.

## Items to fix or validate

- **Canonical URLs:** the snapshot uses relative `./index.html` canonicals. Use consistent canonical absolute URLs that match the final deployed route format.
- **Open Graph consistency:** several course pages show course-specific HTML titles but generic OG titles and descriptions. Metadata in the redesign is generated per route.
- **Social preview:** use a consistent 1200×630 branded OG image with the original logo; do not point every course page at an unrelated generic image.
- **Course routes:** the archive links to additional course and category routes which were not all included in the ZIP. This reconstruction includes the referenced course slugs and category routes to avoid dead internal paths.
- **Placement statistics:** the archived page metadata and course content contain conflicting claims (including 95% vs 100% placement rate and different hiring-partner counts). The redesign does not amplify those numbers until the academy confirms the cohort, period, formula and evidence.
- **Pay After Placement:** the archived public roadmap lists ₹40,000 after placement, while eligibility and other terms require clear program-specific wording. Confirm the signed current agreement before launch.
- **Student and project proof:** verify every testimonial's original source, speaker attribution and consent. The current project art illustrates process only and is not labelled as real student work.
- **Privacy and legal copy:** legal wording was restructured from the supplied site snapshot for readability, but must be checked against the academy's current approved versions before publishing.
- **No artificial ratings:** no third-party ratings or star counts are fabricated. Add only verified review embeds/API data or clearly attributed links to the original platform.

## External reference URLs

- https://www.karka.academy/
- https://www.karka.academy/courses.html
- https://www.karka.academy/placement.html
- https://www.karka.academy/roadmap
- https://www.instagram.com/karka.ai/
- https://www.linkedin.com/company/karka-academy/


## V4 learner-story source note

The current public Karka homepage identifies Gabriel Samraj in a hosted video testimonial and publishes learner review cards with the names Priya, Arun, Vikram, Rahul, Karthik, Divya, Sneha, Anitha and Sandeep. The V4 selector uses Gabriel plus five named entries whose visible quote explicitly references the learning/course topic: Arun (ReactJS), Rahul (Python), Karthik (SQL & Data Analytics), Sneha (Advanced Java & Spring Boot), and Sandeep (mock-interview / placement preparation). These names and quotes are transcribed from the official site's publicly visible testimonial section; verify the correct course attribution and permission with the academy before using in a live marketing site.

The downloaded source contains only the official Instagram profile link (`https://www.instagram.com/karka.ai/`), not individual Reel URLs. Only the hosted video link visible in the original site is wired for actual playback by default. Paste the direct, approved Reel permalink into each story's `reelUrl` field in `components/LearnerStories.tsx` to enable Instagram embed playback for that story.


## V5 additions / editorial checks

- The six learner review cards and their course labels are sourced from feedback text present in the supplied homepage snapshot. Confirm permission/attribution before republishing.
- The eight-person video gallery uses the one hosted Gabriel Samraj video confirmed in the snapshot, four other names listed in the original site story selector, and three explicitly editable placeholder slots. Fill the seven outstanding media URLs and any missing names/course metadata before production.
- The infinite company logo scroller reproduces the eight company logo assets from the original homepage section: Amazon, TCS, HCL, Matrimony.com, Novac, Capecom, Flow and Sodisys. Treat these as names/logo displayed by the original site, not independently verified proof of individual placements. Confirm accuracy and usage rights before launch. No city-level placement data was present in the archived destination strip.
- Pay After Placement now has a distinct animated visual that explains the order of learning, portfolio/project evidence, qualifying placement and payment according to the written agreement. It must not imply a job guarantee or that all courses have identical terms.
