export const SITE_URL = 'https://www.karka.academy';
export const WHATSAPP_URL = 'https://wa.me/919487530243';
export const PHONE = '+91 94875 30243';
export const PHONE_HREF = 'tel:+919487530243';
export const EMAIL = 'contact@karka.academy';
export const ADDRESS = 'Karka AI & Tech Academy, Nagercoil, Tamil Nadu, India';
export const INSTAGRAM = 'https://www.instagram.com/karka.ai/';
export const LINKEDIN = 'https://www.linkedin.com/company/karka-academy/';
export const FACEBOOK = 'https://www.facebook.com/karka.academy';

export type Course = {
  slug: string;
  title: string;
  category: 'Coding' | 'AI & Data' | 'Design' | 'Business' | 'School' | 'Internship';
  duration?: string;
  audience?: string;
  description: string;
  skills: string[];
  featured?: boolean;
};

export const courses: Course[] = [
  { slug: 'mern-fullstack', title: 'MERN Fullstack Development', category: 'Coding', duration: '6 months', audience: 'Graduates · Career switchers', description: 'Build modern web applications across the frontend, backend, database and deployment layers with MongoDB, Express, React and Node.js.', skills: ['React', 'Node.js', 'Express', 'MongoDB'], featured: true },
  { slug: 'react-java-fullstack', title: 'React + Java Full Stack Development', category: 'Coding', duration: '6 months', audience: 'Graduates · College students', description: 'Explore end-to-end application development with a React interface and a Java backend.', skills: ['React', 'Java', 'APIs', 'Databases'], featured: true },
  { slug: 'react-python-fullstack', title: 'React + Python Full Stack Development', category: 'Coding', duration: '6 months', audience: 'Graduates · College students', description: 'Develop full-stack applications by combining React interfaces with Python-powered services.', skills: ['React', 'Python', 'APIs', 'Databases'] },
  { slug: 'fullstack-internship', title: 'Full Stack Developer Internship', category: 'Internship', duration: '6 months', audience: 'College students', description: 'Pair structured MERN stack training with project work and an internship-oriented learning path.', skills: ['MERN stack', 'Git', 'Deployment', 'Teamwork'], featured: true },
  { slug: 'ai-data-science', title: 'AI & Data Science', category: 'AI & Data', duration: '6 months', audience: 'Graduates · Career switchers', description: 'Build foundations in data analysis, machine learning and the tools used to turn data into useful insights.', skills: ['Python', 'Data analysis', 'Machine learning', 'Visualization'], featured: true },
  { slug: 'genai-foundations', title: 'Generative AI Foundations', category: 'AI & Data', audience: 'Beginners · Professionals', description: 'Learn core generative AI concepts, prompt design and practical ways to work with modern AI tools.', skills: ['Generative AI', 'Prompt design', 'AI workflows'], featured: true },
  { slug: 'genai-mastery', title: 'Generative AI Mastery', category: 'AI & Data', audience: 'Graduates · Professionals', description: 'Explore advanced generative AI workflows and practical use cases. Confirm the current syllabus with the academy.', skills: ['LLM workflows', 'Prompting', 'Prototyping'] },
  { slug: 'genai-llm-developer', title: 'LLM Application Developer', category: 'AI & Data', audience: 'Developers', description: 'Explore the building blocks of applications powered by large language models and AI services.', skills: ['LLMs', 'APIs', 'Evaluation', 'Application design'] },
  { slug: 'data-analytics-ai', title: 'Data Analytics with AI', category: 'AI & Data', audience: 'Graduates · Professionals', description: 'Practice analytical thinking, data interpretation and AI-assisted workflows for business questions.', skills: ['SQL', 'Analytics', 'Visualization', 'AI tools'], featured: true },
  { slug: 'data-engineering', title: 'Data Engineering & Big Data Pipelines', category: 'AI & Data', audience: 'Graduates · Developers', description: 'Understand the foundations of data pipelines, transformation workflows and reliable data systems.', skills: ['Data pipelines', 'SQL', 'ETL concepts', 'Cloud fundamentals'] },
  { slug: 'data-science-foundation', title: 'Data Science Foundations', category: 'AI & Data', duration: '4 months', audience: 'College students', description: 'Build a foundation in data science concepts and analytical problem-solving.', skills: ['Python', 'Statistics', 'Data analysis'] },
  { slug: 'ui-ux-design', title: 'UI/UX Design', category: 'Design', audience: 'Beginners · Career switchers', description: 'Learn to research, structure and design useful digital experiences with user-centred methods.', skills: ['Research', 'Wireframes', 'Prototyping', 'Design systems'], featured: true },
  { slug: 'uiux-design-college', title: 'UI/UX Design Internship', category: 'Internship', duration: '3 months', audience: 'College students', description: 'Practice user experience thinking and interface design in an internship-oriented format.', skills: ['UX methods', 'UI design', 'Prototyping'] },
  { slug: 'web-designing', title: 'Web Designing', category: 'Design', audience: 'Beginners', description: 'Learn to design responsive web pages with a focus on visual hierarchy and usability.', skills: ['Layout', 'Responsive design', 'Web fundamentals'] },
  { slug: 'graphic-designing', title: 'Graphic Designing & Branding', category: 'Design', audience: 'Beginners · Creators', description: 'Explore visual communication, graphic composition and brand identity fundamentals.', skills: ['Composition', 'Typography', 'Brand systems'] },
  { slug: 'graphic-designing-dm', title: 'Graphic Design for Digital Media', category: 'Design', audience: 'Creators', description: 'Explore visual assets for digital campaigns, social content and multimedia publishing.', skills: ['Digital assets', 'Composition', 'Brand consistency'] },
  { slug: 'video-editing', title: 'Video Editing', category: 'Design', audience: 'Creators', description: 'Learn editing workflows for structured, clear and engaging video content.', skills: ['Editing workflow', 'Story structure', 'Audio basics'] },
  { slug: 'multimedia-animation', title: 'Multimedia & Animation', category: 'Design', audience: 'Creators', description: 'Explore motion, animation and multimedia storytelling fundamentals.', skills: ['Motion', 'Animation basics', 'Visual storytelling'] },
  { slug: 'digital-marketing', title: 'Digital Marketing', category: 'Business', audience: 'Beginners · Professionals', description: 'Learn the foundations of digital campaigns, search visibility and performance measurement.', skills: ['SEO', 'Campaign planning', 'Analytics'] },
  { slug: 'hr-finance', title: 'HR & Finance Management', category: 'Business', audience: 'Students · Professionals', description: 'Explore essential HR and finance practices for modern business operations.', skills: ['HR operations', 'Finance basics', 'Business communication'] },
  { slug: 'tally', title: 'Tally Prime & Accounting', category: 'Business', audience: 'Students · Professionals', description: 'Build familiarity with accounting workflows and digital bookkeeping tools.', skills: ['Accounting', 'Bookkeeping', 'Tally Prime'] },
  { slug: 'business-analyst', title: 'Business Analyst', category: 'Business', audience: 'Graduates · Professionals', description: 'Learn how to understand business needs, document requirements and communicate solutions.', skills: ['Requirements', 'Process mapping', 'Communication'] },
  { slug: 'python-for-kids', title: 'Python for Kids', category: 'School', duration: '3 months', audience: 'School students', description: 'An approachable introduction to programming logic through Python, simple games and creative exercises.', skills: ['Python basics', 'Logic', 'Problem solving'], featured: true },
  { slug: 'java-basics-student', title: 'Java Basics for School Students', category: 'School', duration: '4 months', audience: 'School students', description: 'Build programming fundamentals with beginner-friendly Java exercises.', skills: ['Java basics', 'Logic', 'Object-oriented concepts'] },
  { slug: 'html-css-school', title: 'HTML & CSS for Beginners', category: 'School', duration: '3 months', audience: 'School students', description: 'Create simple web pages and learn the foundations of structure, layout and styling.', skills: ['HTML', 'CSS', 'Responsive layout'] },
  { slug: 'javascript-juniors', title: 'JavaScript for Young Coders', category: 'School', duration: '3 months', audience: 'School students', description: 'Explore programming with interactive browser-based exercises and beginner-friendly projects.', skills: ['JavaScript', 'Logic', 'Interactive pages'] },
  { slug: 'python-mini-college', title: 'Python Mini Program', category: 'Internship', duration: '2 months', audience: 'College students', description: 'A compact introduction to Python programming and practical exercises for college learners.', skills: ['Python', 'Programming logic'] },
  { slug: 'java-mini-college', title: 'Java Mini Program', category: 'Internship', duration: '2 months', audience: 'College students', description: 'A focused Java learning path for college students building programming fundamentals.', skills: ['Java', 'Object-oriented programming'] },
  { slug: 'react-mini-college', title: 'React Mini Program', category: 'Internship', duration: '2 months', audience: 'College students', description: 'Learn the basics of component-based interface development with React.', skills: ['React', 'Components', 'State'] },
  { slug: 'sql-mastery-college', title: 'SQL & Database Architecture Mastery', category: 'Internship', duration: '2 months', audience: 'College students', description: 'Practice relational data modelling and querying through SQL-focused exercises.', skills: ['SQL', 'Data modelling', 'Queries'] },
];

export type PageInfo = { title: string; description: string; eyebrow?: string };

export const pages: Record<string, PageInfo> = {
  '/': { title: 'Karka AI & Tech Academy | Build Skills. Build Your Career.', description: 'Explore AI-first courses, practical projects, internships and the Pay After Placement model at Karka AI & Tech Academy in Nagercoil, Tamil Nadu.', eyebrow: 'Learn by building' },
  '/courses': { title: 'Explore Career Tracks & Courses | Karka Academy', description: 'Explore Karka AI & Tech Academy courses in full-stack development, AI, data science, UI/UX design, business and school-level coding.', eyebrow: 'Find your track' },
  '/placement': { title: 'Placement Support & Career Preparation | Karka Academy', description: 'Explore Karka Academy career preparation, mock interviews, portfolio support and learner outcomes. Review program terms before enrolling.', eyebrow: 'From practice to opportunity' },
  '/roadmap': { title: 'Pay After Placement Roadmap | Karka Academy', description: 'Understand Karka Academy’s learning journey, internship practice, interview preparation and payment model before enrolling.', eyebrow: 'A clearer path forward' },
  '/about-us': { title: 'About Karka AI & Tech Academy | Nagercoil', description: 'Learn about Karka Academy’s AI-first learning approach, mentorship, mission and technology education community in Nagercoil.', eyebrow: 'Why Karka' },
  '/contact': { title: 'Contact Karka AI & Tech Academy | Nagercoil', description: 'Contact Karka Academy in Nagercoil to ask about courses, career guidance, schedules and Pay After Placement eligibility.', eyebrow: 'Let’s talk' },
  '/blog': { title: 'Tech Learning Guides & Career Insights | Karka Academy', description: 'Explore practical learning guides about web development, AI, portfolios and preparing for a technology career.', eyebrow: 'Ideas worth building' },
  '/for-school-students': { title: 'Coding Courses for School Students | Karka Academy', description: 'Explore beginner-friendly coding programs for school students, including Python, Java, HTML, CSS and JavaScript.', eyebrow: 'Start with curiosity' },
  '/for-college-students': { title: 'Internships & Courses for College Students | Karka Academy', description: 'Explore technology courses and internship-oriented learning paths for college students at Karka Academy.', eyebrow: 'Build experience early' },
  '/for-graduates': { title: 'Career Tracks for Graduates | Karka Academy', description: 'Explore full-stack, AI, data and design learning paths focused on practical skills, portfolio building and career preparation.', eyebrow: 'Turn your degree into momentum' },
  '/for-professionals': { title: 'Upskilling & Career Transition | Karka Academy', description: 'Explore flexible learning paths and career guidance for professionals looking to strengthen their technology skills.', eyebrow: 'Your next chapter' },
  '/privacy-policy': { title: 'Privacy Policy | Karka Academy', description: 'Read the privacy information for Karka AI & Tech Academy and learn how personal information may be handled.', eyebrow: 'Privacy' },
  '/terms-of-service': { title: 'Terms of Service | Karka Academy', description: 'Review the terms relating to use of the Karka AI & Tech Academy website and its published information.', eyebrow: 'Terms' },
  '/courses/category/coding': { title: 'Coding & Development Courses | Karka Academy', description: 'Explore coding and full-stack development paths at Karka AI & Tech Academy.', eyebrow: 'Coding & development' },
  '/courses/category/gen-ai': { title: 'Generative AI Courses | Karka Academy', description: 'Explore generative AI and LLM-focused learning paths at Karka AI & Tech Academy.', eyebrow: 'AI & emerging tech' },
  '/courses/category/data': { title: 'Data & AI Courses | Karka Academy', description: 'Explore AI, data science, data analytics and data engineering learning paths at Karka AI & Tech Academy.', eyebrow: 'Data, ML & AI' },
  '/courses/category/design': { title: 'Design Courses | Karka Academy', description: 'Explore UI/UX, web design, graphic design and digital creative learning paths at Karka AI & Tech Academy.', eyebrow: 'Design & creativity' },
  '/courses/category/digital-media': { title: 'Digital Media & Animation Courses | Karka Academy', description: 'Explore video editing, digital design and multimedia learning paths at Karka AI & Tech Academy.', eyebrow: 'Digital media' },
};

export const audiencePages: Record<string, { headline: string; intro: string; cards: string[] }> = {
  '/for-school-students': { headline: 'Start building while you’re still curious.', intro: 'Begin with approachable programming concepts, short exercises and practical mini-projects that help make technology feel understandable.', cards: ['python-for-kids', 'java-basics-student', 'html-css-school', 'javascript-juniors'] },
  '/for-college-students': { headline: 'Turn what you study into what you can show.', intro: 'Explore focused courses and internship-oriented practice to build skills, project experience and confidence before graduation.', cards: ['fullstack-internship', 'data-science-foundation', 'uiux-design-college', 'react-mini-college', 'sql-mastery-college'] },
  '/for-graduates': { headline: 'Build proof of skills for your next opportunity.', intro: 'Choose a learning path, work through practical projects and prepare your portfolio and interviews with guidance.', cards: ['mern-fullstack', 'react-java-fullstack', 'ai-data-science', 'genai-foundations', 'ui-ux-design'] },
  '/for-professionals': { headline: 'Make your next career move deliberate.', intro: 'Build on your experience with a focused learning track, current tools and a plan for applying new skills at work.', cards: ['data-analytics-ai', 'genai-foundations', 'mern-fullstack', 'business-analyst'] },
};

export const testimonials = [
  { quote: 'The live projects were challenging but very rewarding.', context: 'Illustrative feedback theme — verify before publishing', tag: 'Project-based learning' },
  { quote: 'Mock interviews gave me a way to practise explaining my work.', context: 'Illustrative feedback theme — verify before publishing', tag: 'Interview practice' },
  { quote: 'Hands-on exercises helped make complex topics feel more approachable.', context: 'Illustrative feedback theme — verify before publishing', tag: 'Learning by doing' },
  { quote: 'Building a portfolio helped me organise and explain what I had learned.', context: 'Illustrative feedback theme — verify before publishing', tag: 'Portfolio building' },
  { quote: 'Breaking a project into smaller steps made it easier to keep improving.', context: 'Illustrative feedback theme — verify before publishing', tag: 'Project iteration' },
  { quote: 'Getting feedback helped me identify what to practise next.', context: 'Illustrative feedback theme — verify before publishing', tag: 'Mentor feedback' },
];

export const heroStats = [
  { value: '1000+', label: 'learners supported' },
  { value: '6 months', label: 'project-driven tracks' },
  { value: '1:1', label: 'mentor feedback loops' },
  { value: '90%', label: 'portfolio-first learning' },
];

export const learningSignals = [
  { title: 'Career-first curriculum', description: 'Each track is shaped around real work outputs, portfolio proof and role readiness.' },
  { title: 'Mentor-guided learning', description: 'Learners get feedback loops, weekly review and practical next steps instead of isolated theory.' },
  { title: 'Practical project flow', description: 'The experience blends concept, build, critique and final showcase into one journey.' },
];

//export const workstreams = [
//  { title: 'Landing page storytelling', status: 'live', detail: 'Homepage messaging, trust signals and conversion-focused structure.' },
//  { title: 'Course discovery system', status: 'planned', detail: 'Dynamic program filtering and audience-specific pages for future course marketing.' },
//  { title: 'Lead capture flow', status: 'in progress', detail: 'Lead form, CRM follow-up and intake process for future enrollment pipeline.' },
//];

export const faqs = [
  { question: 'What does Pay After Placement mean?', answer: 'We want you to focus entirely on your learning without worrying about upfront costs. You only share your success (and the fees) after you land a tech job with a guaranteed minimum salary. It\'s our way of saying we\'re in this together.' },
  { question: 'Is a job guaranteed?', answer: 'While no one can strictly \'guarantee\' a job, our Pay After Placement model means we are as invested in your career as you are. We don\'t succeed unless you do, which is why we go the extra mile to ensure you are job-ready.' },
  { question: 'Do I need previous coding experience?', answer: 'Absolutely not! We\'ve designed our curriculum to take you from a curious beginner to a confident professional. Whether you\'re from arts, science, or are a complete career-switcher, we\'ve got you covered.' },
  { question: 'Will I work on projects?', answer: 'Yes! A significant part of our curriculum involves working on live projects and simulations. You will gain hands-on experience that mimics a real corporate environment.' },
  { question: 'How do I choose a course?', answer: 'Compare the course goal, prerequisites, duration, tools covered and learning outcomes. You can also message the academy to request career guidance before selecting a track.' },
];

export const blogPosts = [
  { slug: 'building-a-developer-portfolio', category: 'Career prep', read: '6 min read', title: 'A portfolio should show how you think, not only what you built', summary: 'A practical checklist for explaining the problem, trade-offs, implementation and lessons behind a project.' },
  { slug: 'ai-tools-for-learning', category: 'AI learning', read: '5 min read', title: 'Use AI as a learning partner—not as a shortcut', summary: 'A workflow for asking better questions, validating answers and building durable technical understanding.' },
  { slug: 'first-full-stack-project', category: 'Web development', read: '7 min read', title: 'What to include in your first full-stack project', summary: 'Think through user needs, API design, data, errors, accessibility and deployment before polishing the interface.' },
];

export function pathForCourse(slug: string) { return `/courses/${slug}`; }
export function whatsAppLink(message: string) { return `${'https://wa.me/919487530243'}?text=${encodeURIComponent(message)}`; }

export function courseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function courseGroupForRoute(path: string): Course[] {
  if (path === '/courses/category/coding') return courses.filter(c => c.category === 'Coding');
  if (path === '/courses/category/gen-ai') return courses.filter(c => ['genai-foundations','genai-mastery','genai-llm-developer'].includes(c.slug));
  if (path === '/courses/category/data') return courses.filter(c => c.category === 'AI & Data');
  if (path === '/courses/category/design') return courses.filter(c => c.category === 'Design');
  if (path === '/courses/category/digital-media') return courses.filter(c => ['video-editing','graphic-designing-dm','multimedia-animation'].includes(c.slug));
  return courses;
}
