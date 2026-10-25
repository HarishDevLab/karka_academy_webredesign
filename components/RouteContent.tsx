import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CalendarClock, Check, ChevronRight, ClipboardCheck, Code2, Compass, GraduationCap, Handshake, Layers3, Mail, MessageCircle, MapPin, ShieldCheck, Sparkles, Target, Users, Wallet } from 'lucide-react';
import CourseCatalog from './CourseCatalog';
import HeroScene, { type HeroVariant } from './HeroScene';
import LeadForm from './LeadForm';
import { ADDRESS, EMAIL, FACEBOOK, INSTAGRAM, LINKEDIN, PHONE, PHONE_HREF, WHATSAPP_URL, audiencePages, blogPosts, courseBySlug, courseGroupForRoute, courses, pages, type Course, type PageInfo, faqs, pathForCourse, whatsAppLink } from '@/lib/content';

function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="section-eyebrow"><span className="eyebrow-mark" />{children}</div>; }
function PageHero({ eyebrow, title, description, children, variant }: { eyebrow?: string; title: string; description: string; children?: React.ReactNode; variant?: HeroVariant }) {
  const heading = `${eyebrow || ""} ${title}`.toLowerCase();
  const inferred: HeroVariant = heading.includes("school") ? "school" : heading.includes("college") ? "college" : heading.includes("graduate") ? "graduate" : heading.includes("professional") ? "professional" : heading.includes("pay after") || heading.includes("payment") || heading.includes("roadmap") ? "payment" : heading.includes("career development") || heading.includes("placement") ? "placement" : heading.includes("career") ? "career" : heading.includes("spike") || heading.includes("generative ai") || heading.includes("gen ai") ? "ai" : heading.includes("data") ? "data" : heading.includes("digital media") || heading.includes("video editing") || heading.includes("animation") ? "media" : heading.includes("coding") || heading.includes("software development") ? "coding" : heading.includes("design") || heading.includes("creative") ? "design" : heading.includes("business") || heading.includes("finance") ? "business" : heading.includes("internship") ? "internship" : heading.includes("course") || heading.includes("track") ? "course" : heading.includes("contact") ? "contact" : heading.includes("about") ? "about" : heading.includes("blog") || heading.includes("insight") ? "insight" : "academy";
  const motif: HeroVariant = variant ?? inferred;
  return <section className={`page-hero shell motif-${motif}`} data-hero-variant={motif}><div className="page-hero-copy">{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h1>{title}</h1><p>{description}</p>{children}<Link className="pap-hero-callout" href="/roadmap"><span className="pap-callout-icon">✳</span><span><strong>PAY AFTER PLACEMENT</strong><small>Explore eligible programs, conditions and how the model works.</small></span><ArrowRight size={17} /></Link></div><div className="page-hero-visual"><HeroScene variant={motif} /></div></section>;
}
function ContactStrip() { return <div className="contact-strip"><span>Want help choosing a track?</span><Link href="/contact" className="text-link">Talk to the academy <ArrowUpRight size={16} /></Link></div>; }
function CourseSchema({ course }: { course: Course }) {
  const json = { '@context': 'https://schema.org', '@type': 'Course', name: course.title, description: course.description, provider: { '@type': 'EducationalOrganization', name: 'Karka AI & Tech Academy', sameAs: 'https://www.karka.academy' }, educationalLevel: course.audience || 'Professional learning', teaches: course.skills };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, '\\u003c') }} />;
}

function CourseDetail({ course }: { course: Course }) {
  return <main id="main-content" className="route-main"><CourseSchema course={course} /><div className="shell breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} /><Link href="/courses">Courses</Link><ChevronRight size={14} /><span>{course.title}</span></div>
    <section className="course-detail-hero shell"><div className="course-detail-copy"><div className="detail-chips"><span>{course.category}</span>{course.duration && <span>{course.duration}</span>}<span>{course.audience || 'Practical learning'}</span></div><h1>{course.title}<span className="hero-period">.</span></h1><p className="course-detail-intro">{course.description}</p><div className="hero-actions"><a href={whatsAppLink(`Hi Karka team, I would like to enquire about ${course.title}. Please share the current syllabus, eligibility, batch details and payment terms.`)} className="button button-primary button-large" target="_blank" rel="noopener noreferrer">Enquire about this course <ArrowUpRight size={17} /></a><Link className="button button-quiet button-large" href="/courses">Compare other tracks <ArrowRight size={16} /></Link></div><p className="hero-footnote">Ask the team about the current schedule, course prerequisites and batch availability.</p></div><div className="course-detail-art course-detail-3d"><HeroScene variant={course.category === 'School' ? 'school' : course.category === 'Internship' ? 'internship' : course.category === 'AI & Data' ? (course.slug.includes('data') ? 'data' : 'ai') : course.category === 'Design' ? (['video-editing','multimedia-animation','graphic-designing-dm'].includes(course.slug) ? 'media' : 'design') : course.category === 'Business' ? 'business' : 'coding'} /><div className="detail-art-chip chip-top">PRACTICE <Check size={13} /></div><div className="detail-art-chip chip-bottom">PROJECTS <Code2 size={13} /></div></div></section>
    <section className="section-pad shell"><div className="section-heading-row"><div><Eyebrow>Course overview</Eyebrow><h2>Learn the concepts.<br /><span className="text-purple">Practice the craft.</span></h2></div><p>This page is for understanding the track. The academy may confirm the current curriculum, schedule, instructor details and any prerequisites with you directly.</p></div><div className="detail-content-grid"><article className="detail-panel"><span className="panel-icon"><Layers3 size={21} /></span><h3>Skills you can explore</h3><p>Topics referenced for this track include:</p><div className="skill-list">{course.skills.map((skill) => <span key={skill}><Check size={15} />{skill}</span>)}</div></article><article className="detail-panel"><span className="panel-icon"><BriefcaseBusiness size={21} /></span><h3>Practice and portfolio</h3><p>Karka’s Apply the skills from this track through practical projects and use your work to build a portfolio.</p><Link href="/placement" className="text-link">Explore career support <ArrowUpRight size={16} /></Link></article><article className="detail-panel"><span className="panel-icon"><Handshake size={21} /></span><h3>Mentorship and guidance</h3><p>Discuss the teaching format, mentor access, feedback cadence and the support available during projects before making a decision.</p><Link href="/about-us" className="text-link">About the academy <ArrowUpRight size={16} /></Link></article></div></section>
    {/*<section className="section-pad section-soft"><div className="shell"><div className="section-heading-row"><div><Eyebrow>What to look for in learner feedback</Eyebrow><h2>Make progress you can<br/>explain and demonstrate<span className="hero-period">.</span></h2></div><p>Use these review prompts to ask about the {course.title} experience. They are illustrative themes, not verified student testimonials.</p></div><div className="course-review-prompts">{['Was the project brief realistic and clearly scoped?','Did feedback help you improve the work?','Could you explain the final project and your contribution?'].map((prompt,i)=><article className="testimonial-card course-review-prompt" key={prompt}><div className="testimonial-stars" aria-hidden="true">✳ ✳ ✳ ✳ ✳</div><blockquote>“{prompt}”</blockquote><div className="testimonial-divider"/><div className="testimonial-bottom"><span className={`testimonial-avatar avatar-${i}`}>{['P','F','S'][i]}</span><span><strong>Review prompt {String(i+1).padStart(2,'0')}</strong><small>Questions to verify with current learners</small></span></div></article>)}</div><p className="review-note">We do not publish invented student reviews or ratings. Add authentic, permissioned feedback from learners for this course when available.</p></div></section>*/}
    <section className="course-detail-cta"><div className="shell course-detail-cta-inner"><div><Eyebrow>Take the next step</Eyebrow><h2>Is this the right track for you?</h2><p>Talk with the team about your goals, course fit and the details to consider before enrolling.</p></div><div className="course-detail-cta-actions"><a href={whatsAppLink(`Hi Karka team, I am interested in ${course.title}. Can we discuss course fit, prerequisites and the applicable fee terms?`)} className="button button-primary" target="_blank" rel="noopener noreferrer">Discuss this track <MessageCircle size={16} /></a><Link href="/courses" className="button button-secondary">Browse all tracks</Link></div></div></section>
  </main>;
}

function CoursesPage({ path }: { path: string }) {
  const info = pages[path] || pages['/courses'];
  const currentCourses = path === '/courses' ? courses : courseGroupForRoute(path);
  return <main id="main-content" className="route-main"><PageHero variant={path === '/courses/category/design' ? 'design' : path === '/courses/category/digital-media' ? 'media' : path === '/courses/category/data' ? 'data' : path === '/courses/category/gen-ai' ? 'ai' : path === '/courses/category/coding' ? 'coding' : 'course'} eyebrow={info.eyebrow} title={path === '/courses' ? 'Find the track that fits your next move.' : info.title.replace(' | Karka Academy', '.')} description={path === '/courses' ? 'Explore practical learning paths across software, AI, data, design, business and beginner coding. Compare the focus, then ask about the current syllabus and schedule.' : info.description}><div className="hero-actions"><Link href="/contact" className="button button-primary">Get course guidance <ArrowUpRight size={16} /></Link><Link href="/roadmap" className="button button-quiet">Pay After Placement details <ArrowRight size={16} /></Link></div></PageHero><section className="section-pad shell"><div className="section-heading-row"><div><Eyebrow>Course directory</Eyebrow><h2>Choose what you want<br />to get better at<span className="hero-period">.</span></h2></div><p>Details can change between batches, so confirm them with Karka before enrolling.</p></div><CourseCatalog courses={currentCourses} /></section><section className="section-pad section-soft"><div className="shell split-cta"><div><Eyebrow>Not sure where to start?</Eyebrow><h2>Start with your goal,<br />not a course title.</h2><p>Tell the academy about your current skills, interests and preferred career direction. Use that conversation to compare routes before deciding.</p></div><div className="split-cta-action"><Link className="button button-primary button-large" href="/contact">Request career guidance <ArrowRight size={16} /></Link><p>Share your interests and experience so the team can help you compare learning paths.</p></div></div></section></main>;
}

function AudiencePage({ path }: { path: string }) {
  const item = audiencePages[path];
  const info = pages[path];
  const targetCourses = item.cards.map((slug) => courseBySlug(slug)).filter((course): course is Course => Boolean(course));
  return <main id="main-content" className="route-main"><PageHero variant={path === '/for-school-students' ? 'school' : path === '/for-college-students' ? 'college' : path === '/for-graduates' ? 'graduate' : 'professional'} eyebrow={info.eyebrow} title={item.headline} description={item.intro}><div className="hero-actions"><Link href="/courses" className="button button-primary">Explore courses <ArrowRight size={16} /></Link><Link href="/contact" className="button button-quiet">Talk to a mentor <ArrowUpRight size={16} /></Link></div></PageHero><section className="section-pad shell"><div className="section-heading-row"><div><Eyebrow>Suggested starting points</Eyebrow><h2>Explore these learning paths<span className="hero-period">.</span></h2></div><p>These are starting points rather than a personalised recommendation. Confirm the syllabus, eligibility and learning format with the academy.</p></div><CourseCatalog courses={targetCourses} compact /></section><section className="section-pad section-soft"><div className="shell audience-benefits"><div><Eyebrow>Make the learning count</Eyebrow><h2>Skills are stronger<br />when you can show them.</h2></div><div className="benefit-list"><div><span><Check size={17} /></span><div><h3>Work through practical tasks</h3><p>Building and doing over passive learning. Moving past abstract definitions to create tangible proof of your skills.</p></div></div><div><span><Check size={17} /></span><div><h3>Ask for feedback</h3><p>Leveraging your training network. Utilizing external eyes to point out blind spots and validate structural health before submission.</p></div></div><div><span><Check size={17} /></span><div><h3>Plan your next step</h3><p>Transitioning from student/Professional to job candidate. Packaging training artifacts into a commercial format that appeals directly to hiring teams.</p></div></div></div></div></section></main>;
}

function PlacementPage() {
  const supports = [
    { icon: <ClipboardCheck size={21} />, title: 'Resume and portfolio review', text: 'Organise your projects, clarify your contributions and describe your skills with evidence.' },
    { icon: <MessageCircle size={21} />, title: 'Mock interviews', text: 'Practice explaining your approach, answering questions and learning from mistakes.' },
    { icon: <Target size={21} />, title: 'Career preparation', text: 'Work on communication, interview readiness and a consistent application routine.' },
    { icon: <Users size={21} />, title: 'Mentor guidance', text: 'Discuss gaps, clarify technical concepts and plan the next useful learning step.' },
  ];
  return (
    <main id="main-content" className="route-main">
      <PageHero
        variant="placement"
        eyebrow="Career development"
        title="Prepare for opportunity—with proof of what you can do."
        description="Karka offers career mentoring, portfolio building, mock interviews and placement support."
      >
        <div className="hero-actions">
          <Link href="/roadmap" className="button button-primary">Understand Pay After Placement <ArrowRight size={16} /></Link>
          <Link href="/contact" className="button button-quiet">Ask the team a question <ArrowUpRight size={16} /></Link>
        </div>
      </PageHero>
      <section className="section-pad shell">
        <div className="section-heading-row">
          <div>
            <Eyebrow>Support that goes beyond class</Eyebrow>
            <h2>Make your preparation<br />visible and repeatable.</h2>
          </div>
          <p>Strong career support is a process—not a single number.</p>
        </div>
        <div className="support-grid">
          {supports.map((support, i) => (
            <article className="support-card" key={support.title}>
              <span className={`support-icon support-icon-${i}`}>{support.icon}</span>
              <span className="support-index">0{i + 1}</span>
              <h3>{support.title}</h3>
              <p>{support.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad shell">
        <div className="section-heading-row">
          <div>
            <Eyebrow>Questions about placement?</Eyebrow>
            <h2>Start with clarity.</h2>
          </div>
          <p>These questions are worth settling before you make a course decision.</p>
        </div>
        <div className="faq-list">
          {faqs.slice(0, 3).map((faq, i) => (
            <details className="faq-item" key={faq.question} open={i === 0}>
              <summary><span className="faq-index">0{i + 1}</span><span>{faq.question}</span><span className="faq-plus">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

function RoadmapPage() {
  const steps = [
    { n: '01', icon: <Compass size={22} />, title: 'Clarify your goal', text: 'Discuss background, track fit, eligibility and expectations before joining.' },
    { n: '02', icon: <BookOpen size={22} />, title: 'Learn the foundations', text: 'Build confidence with the core concepts, tools and guided practice.' },
    { n: '03', icon: <Code2 size={22} />, title: 'Practice through projects', text: 'Apply concepts in project work and clarify what can be used in your portfolio.' },
    { n: '04', icon: <GraduationCap size={22} />, title: 'Prepare for interviews', text: 'Work on resume presentation, communication and mock interviews.' },
    { n: '05', icon: <BriefcaseBusiness size={22} />, title: 'Explore opportunities', text: 'Use the academy’s placement support and follow relevant openings.' },
    { n: '06', icon: <Wallet size={22} />, title: 'Pay After Placement', text: 'We don\'t make a single rupee until you secure an eligible placement. Train in with complete peace of mind.' },
  ];
  return <main id="main-content" className="route-main"><PageHero variant="payment" eyebrow="Pay After Placement" title="A clearer path from learning to earning." description="Karka offers no upfront tuition fees on eligible programs."><div className="hero-actions"><a href={whatsAppLink('Hi Karka team, please share the current Pay After Placement eligibility and written terms.')} className="button button-primary" target="_blank" rel="noopener noreferrer">Ask about eligibility <MessageCircle size={16} /></a><Link href="/contact" className="button button-quiet">Contact the academy <ArrowUpRight size={16} /></Link></div></PageHero><section className="section-pad shell"><div className="section-heading-row"><div><Eyebrow>Your roadmap</Eyebrow><h2>Six clear steps.<br /><span className="text-purple">No guesswork.</span></h2></div><p>Follow the learning and career-support journey, and review the current program terms with the academy before enrolling.</p></div><div className="roadmap-grid">{steps.map((step) => <article className="roadmap-card" key={step.n}><div className="roadmap-card-top"><span>{step.n}</span><span className="roadmap-icon">{step.icon}</span></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section><section className="section-pad section-soft"><div className="shell payment-layout"><div><Eyebrow>Payment transparency</Eyebrow><h2>Know the details<br />before you say yes.</h2><p className="body-large">Public information lists ₹40,000 payable after placement for the described program.</p><div className="payment-amount"><span>Public roadmap amount</span><strong>₹40,000</strong><small>Confirm eligibility and payment details in the written agreement.</small></div></div><div className="payment-checklist"><h3>Your written agreement sets out</h3>{['Which programs are covered by Pay After Placement', 'The job conditions that qualify for the placement payment', 'The payment amount, trigger and due date', 'How the terms apply if a qualifying placement has not yet occurred', 'The attendance, assessment and participation requirements for your program'].map((item) => <div key={item}><ShieldCheck size={18} />{item}</div>)}<a className="button button-primary" href={whatsAppLink('Hi Karka team, please send me the current written Pay After Placement terms, eligibility criteria and payment conditions.')} target="_blank" rel="noopener noreferrer">Request written terms <ArrowUpRight size={16} /></a></div></div></section><section className="section-pad shell"><div className="commitment-banner"><div className="commitment-icon"><CalendarClock size={23} /></div><div><h2>Ask for a schedule that matches your situation.</h2><p>Discuss live sessions, practice expectations, time commitment and current batch availability directly with the academy.</p></div><Link href="/contact" className="button button-secondary">Talk to the team <ArrowRight size={16} /></Link></div></section></main>;
}

function AboutPage() {
  return <main id="main-content" className="route-main"><PageHero variant="about" eyebrow="About Karka" title="Technology education should connect learning with doing." description="Explore Karka’s approach to practical technology education, project work and career preparation."><div className="hero-actions"><Link href="/courses" className="button button-primary">Explore programs <ArrowRight size={16} /></Link><Link href="/contact" className="button button-quiet">Connect with Karka <ArrowUpRight size={16} /></Link></div></PageHero><section className="section-pad shell mission-grid"><div className="mission-main"><Eyebrow>Our mission</Eyebrow><h2>Bridge the gap between learning and real-world practice.</h2><p className="body-large">The Karka model brings technical foundations, practical projects, mentoring and career preparation into one learning journey.</p></div><div className="mission-side"><article><span>01</span><h3>Learn with context</h3><p>Make the purpose behind tools and concepts clear.</p></article><article><span>02</span><h3>Practice intentionally</h3><p>Build and refine work instead of stopping at theory.</p></article><article><span>03</span><h3>Prepare for next steps</h3><p>Develop the portfolio and communication habits that help explain your skills.</p></article></div></section><section className="section-pad section-soft"><div className="shell mentor-layout"><div className="mentor-art"><div className="mentor-initials">"*"</div><span className="mentor-caption">MENTORSHIP · PRACTICE · GROWTH</span><div className="mentor-orbit orbit-a"/><div className="mentor-orbit orbit-b"/></div><div className="mentor-copy"><Eyebrow>Mentorship</Eyebrow><h2>Learn from people who know the work.</h2><p>Karka’s mentor Sateesh Kumar with more than 18 years of technology-industry experience, including work with Flow Global, Wipro and Yatra.com.</p><a href="https://www.linkedin.com/company/karka-academy/" className="text-link" target="_blank" rel="noopener noreferrer">Visit Karka on LinkedIn <ArrowUpRight size={16} /></a><div className="mentor-facts"><span><Check size={15} /> Industry perspective</span><span><Check size={15} /> Practical guidance</span><span><Check size={15} /> Career readiness</span></div></div></div></section><section className="section-pad shell"><div className="section-heading-row"><div><Eyebrow>Part of the ecosystem</Eyebrow><h2>Learning, projects<br />and community.</h2></div><p>Explore Karka’s learning platform and student competition experience through their official channels.</p></div><div className="about-platform-links"><a href="https://spike.karka.academy/" target="_blank" rel="noopener noreferrer"><span className="about-platform-icon"><Sparkles size={22}/></span><span><strong>Spike AI</strong><small>AI-guided learning platform</small></span><ArrowUpRight size={17}/></a><a href="https://infini.karka.academy/" target="_blank" rel="noopener noreferrer"><span className="about-platform-icon about-platform-yellow"><Target size={22}/></span><span><strong>InfiniAI</strong><small>Student competition platform</small></span><ArrowUpRight size={17}/></a></div></section></main>;
}

function ContactPage() {
  return <main id="main-content" className="route-main"><PageHero variant="contact" eyebrow="Contact Karka" title="Tell us what you want to learn next." description="Ask about career tracks, current batches, project work, internship details or Pay After Placement eligibility. Start a conversation before deciding."><div className="hero-actions"><a href={whatsAppLink('Hi Karka team, I would like to speak with someone about your academy.')} className="button button-primary" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <MessageCircle size={16} /></a><a href={PHONE_HREF} className="button button-quiet">Call {PHONE} <ArrowUpRight size={16} /></a></div></PageHero><section className="section-pad shell contact-layout"><div className="contact-info"><Eyebrow>Reach out</Eyebrow><h2>Real answers,<br />direct from the team.</h2><p>Use the contact details below for course, admissions and partnership questions.</p><a className="contact-detail" href={PHONE_HREF}><span><MessageCircle size={18}/></span><div><small>Phone / WhatsApp</small><strong>{PHONE}</strong></div><ArrowUpRight size={16}/></a><a className="contact-detail" href={`mailto:${EMAIL}`}><span><MailIcon /></span><div><small>Email</small><strong>{EMAIL}</strong></div><ArrowUpRight size={16}/></a><a className="contact-detail" href="https://www.google.com/maps/search/?api=1&query=Karka+AI+%26+Tech+Academy+Nagercoil" target="_blank" rel="noopener noreferrer"><span><MapPin size={18}/></span><div><small>Location</small><strong>{ADDRESS}</strong></div><ArrowUpRight size={16}/></a><div className="contact-socials"><span>Follow the academy</span><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14}/></a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={14}/></a></div></div><div className="contact-form-card"><div className="contact-form-top"><span className="form-heading-icon"><MessageCircle size={19}/></span><div><h2>Start an inquiry</h2><p>Share a few details and continue in WhatsApp.</p></div></div><LeadForm /></div></section><section className="section-pad section-soft"><div className="shell contact-note-grid"><div><Eyebrow>Before you visit</Eyebrow><h2>Check the details first.</h2></div><p>Confirm office hours, current location, batch schedules and whether an appointment is needed before travelling to the academy.</p></div></section></main>;
}

function MailIcon() { return <Mail size={18} />; }

function BlogPage() {
  return <main id="main-content" className="route-main"><PageHero variant="insight" eyebrow="Karka insights" title="Ideas for learning, building and moving forward." description="Practical guides can help you make better decisions about what to learn, what to build and how to explain your work."/><section className="section-pad shell"><div className="blog-grid">{blogPosts.map((post, i) => <article className="blog-card" key={post.slug}><Link className={`blog-art blog-art-${i}`} href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><span>{['CAREER NOTES','AI LEARNING','BUILD GUIDE'][i]}</span><div className="blog-art-symbol">{['↗','✳','{ }'][i]}</div><ArrowUpRight size={19}/></Link><div className="blog-card-meta"><span>{post.category}</span><span>{post.read}</span></div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.summary}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read guide <ArrowRight size={15}/></Link></article>)}</div><p className="catalog-footnote">These articles are for general reference. Confirm current course details and guidance directly with the academy.</p></section></main>;
}

function BlogArticle({ slug }: { slug: string }) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return <div className="shell section-pad"><h1>Article not found</h1><Link href="/blog">Back to insights</Link></div>;
  const content: Record<string, { intro: string; sections: { h: string; p: string }[] }> = {
    'building-a-developer-portfolio': {
      intro: 'A useful developer portfolio is more than a gallery of finished screens. It helps a reviewer understand the problem, the decisions you made, your contribution and what you learned while building.',
      sections: [
        { h: 'Choose projects that show range and depth', p: 'Two or three complete, well-explained projects are usually more persuasive than a long list of unfinished demos. Choose work that demonstrates different strengths—perhaps a polished interface, an API-backed application and a tool that solves a problem you know well. Make your own contribution clear when a project was collaborative or tutorial-based.' },
        { h: 'Start each case study with the problem', p: 'Give the project a short introduction: who it is for, what they need and why your solution is useful. State the main goal before listing features. For example, explain how a booking tool helps a small team manage requests rather than simply saying that it has a calendar and a form.' },
        { h: 'Explain your decisions, not just your tools', p: 'Mention the important technical choices and the alternatives you considered. Explain why you chose a particular data model, component structure or API approach, and what trade-offs came with it. A concise explanation shows how you reason about constraints instead of turning the case study into a list of framework names.' },
        { h: 'Make your contribution and evidence easy to verify', p: 'Describe what you personally designed, implemented and tested. Include a working demo when available, a readable repository, a few purposeful screenshots and setup instructions. Check that links work, the repository does not expose secrets, and the README tells someone how to run the project.' },
        { h: 'Include the difficult parts and what you learned', p: 'Describe one real challenge, how you investigated it and what changed as a result. Be honest about limitations and unfinished areas, then name a sensible next improvement. This makes the story credible and gives you specific material to discuss in an interview.' },
        { h: 'Use a clear, repeatable case-study structure', p: 'For each project, cover the problem, your role, the approach, a challenge, the outcome and the next step. Keep paragraphs short and use images only when they add context. Before publishing, ask someone unfamiliar with the project to explain what it does after a quick read; revise anything they find unclear.' },
      ],
    },
    'ai-tools-for-learning': {
      intro: 'AI can act as a patient study partner: it can rephrase a concept, suggest practice questions or help you inspect an error. It is not a reliable source of truth by itself, so learning still depends on checking, practicing and explaining ideas in your own words.',
      sections: [
        { h: 'Set a learning goal before you prompt', p: 'Decide what you want to understand or be able to do. Share the topic, your current level and what you have already tried. A focused request such as “give me a small exercise on JavaScript array methods without showing the solution yet” is more useful for practice than asking for a broad summary.' },
        { h: 'Use questions that keep you involved', p: 'Ask for a hint, a simpler explanation, a counterexample or one step at a time instead of immediately requesting a complete solution. You can also ask the tool to quiz you and wait for your answer before revealing feedback. This keeps the work and decision-making with you.' },
        { h: 'Verify explanations and generated code', p: 'AI can mix up details, invent APIs or overlook edge cases. Compare important claims with official documentation or course materials, and run code in a safe local project. Check assumptions, inputs and error behavior rather than treating a successful example as proof that the approach is correct.' },
        { h: 'Debug with evidence', p: 'When you need help with an error, provide the smallest relevant code sample, the exact message and what you expected to happen. Ask what the error means and how to investigate it before asking for a rewrite. Avoid sharing passwords, API keys, personal data or private project code you are not allowed to disclose.' },
        { h: 'Turn assistance into independent practice', p: 'After an explanation, close it and solve a small variation from memory. Change the requirements, predict the result and test your reasoning. If you cannot explain why the code works or make a small modification without help, revisit the concept instead of moving on.' },
        { h: 'Keep a record of what you learned', p: 'Write a brief note in your own words: the concept, one example, a mistake you corrected and a question that remains. For project or assessment work, follow the relevant rules on AI assistance and disclose its use when required. The goal is to build understanding you can demonstrate independently.' },
      ],
    },
    'first-full-stack-project': {
      intro: 'A first full-stack project is a chance to connect the user interface, server logic and data into one dependable experience. Keep the scope small: a complete, tested application that solves one clear problem teaches more than a large collection of unfinished features.',
      sections: [
        { h: 'Choose one user and one core task', p: 'Start with a problem you can describe in a sentence and a user you can picture. A simple appointment tracker, reading list or event sign-up flow can be enough. Write down the primary task and the smallest useful version before choosing extra features; this gives you a clear way to decide what not to build.' },
        { h: 'Sketch the data and the main journey', p: 'List the information the application needs to save and how the user creates, views or changes it. Draw the basic flow from opening the page to completing the task. Decide which fields are required and what should happen when data is missing, duplicated or no longer available.' },
        { h: 'Give the frontend and backend clear responsibilities', p: 'Let the interface collect input, show useful feedback and call the server through a defined API. Let the backend validate requests and apply the rules before data is saved or returned. Keep the first version of the API small, use meaningful status codes and return errors the interface can handle without exposing internal details.' },
        { h: 'Build the complete flow before adding extras', p: 'Implement one end-to-end path first: submit a valid form, save the record, retrieve it and display the result. Then add editing or deletion if the core experience works. Test from both the interface and the API so you catch mismatches between what the browser sends and what the server expects.' },
        { h: 'Handle the states beyond the happy path', p: 'Show clear loading, success, empty and failure states. Validate inputs on the server even if the browser also checks them. Consider what happens when a user submits twice, enters invalid data or loses the network. Make controls keyboard-accessible, label form fields and ensure text remains readable at different screen sizes.' },
        { h: 'Test, deploy and document the project', p: 'Test the main user journey and a few likely failures, then deploy the application and check it on the live URL. Document the stack, setup steps, environment variables and known limitations in the README; never commit secret values. Add a short explanation of the architecture and a few screenshots so another developer can understand and run your work.' },
        { h: 'Polish based on what you observe', p: 'Ask someone to try the project without coaching them. Notice where they hesitate or misunderstand, then fix the most important issue first. Keep a short list of future improvements—such as authentication, search or stronger test coverage—rather than expanding the initial scope before the main flow is dependable.' },
      ],
    },
  };
  const article = content[slug];
  return <main id="main-content" className="route-main"><div className="shell breadcrumb"><Link href="/">Home</Link><ChevronRight size={14}/><Link href="/blog">Insights</Link><ChevronRight size={14}/><span>{post.category}</span></div><article className="article-body shell"><div className={`article-cover blog-art-${blogPosts.findIndex((item) => item.slug === slug)}`}><span>{post.category.toUpperCase()}</span><strong>{post.title}</strong><span className="article-cover-glyph">✳</span></div><div className="article-meta"><span>{post.read}</span><span>Learning guide</span></div><h1>{post.title}</h1><p className="article-lead">{article.intro}</p>{article.sections.map((section) => <section key={section.h}><h2>{section.h}</h2><p>{section.p}</p></section>)}<div className="article-endnote"><Sparkles size={20}/><div><h3>Keep building</h3><p>Explore Karka’s course tracks or talk to the academy about the skills you want to develop.</p><Link href="/courses" className="text-link">Browse courses <ArrowRight size={15}/></Link></div></div><Link href="/blog" className="back-link"><ArrowLeft size={15}/> Back to insights</Link></article></main>;
}

function LegalPage({ path }: { path: string }) {
  const privacy = path === '/privacy-policy';
  const sections = privacy ? [
    ['1. Information We Collect', 'When you submit an enrollment inquiry, contact form, or newsletter signup on this site, we collect the information you provide directly — such as your name, email address, phone/WhatsApp number, and the course or program you are interested in.'],
    ['2. How We Use Your Information', 'We use the details you share to respond to your enquiry, provide course counseling, process admissions, and send relevant updates about our programs, placements, and events. The published policy states that personal information is not sold to third parties.'],
    ['3. Data Sharing', 'Your information may be shared internally with admissions and placement teams, and — where relevant to placement support — with hiring partners you have consented to be introduced to. Third-party services may be used to deliver enquiry-related notifications.'],
    ['4. Cookies & Analytics', 'The current published policy describes the use of Google Analytics to understand how visitors use the site.'],
    ['5. Your Rights', 'The published policy says you can request access to, correction of, or deletion of personal data by contacting the academy.'],
    ['6. Contact Us', `For privacy-related questions, contact ${EMAIL} or call ${PHONE}.`],
  ] : [
    ['1. Acceptance of Terms', 'By accessing this website or submitting an enrollment inquiry, you agree to the Terms of Service. If you do not agree, discontinue use of the site.'],
    ['2. Enrollment & Admissions', 'Submitting an inquiry does not guarantee a seat in a program. Admission is confirmed only after the counselling and admission process is completed in line with the specific program requirements.'],
    ['3. Pay After Placement Terms', 'Where offered, the Pay After Placement model is subject to a separate admission agreement signed at enrollment, which specifies eligibility conditions, payment triggers and program-specific terms. The general website description is for informational purposes.'],
    ['4. Intellectual Property', 'Website content, course curricula, branding, graphics and text are subject to the academy’s applicable intellectual property rights and may not be reproduced without permission.'],
    ['5. Placement Assistance Disclaimer', 'Placement statistics and hiring-partner figures reflect reported historical outcomes and do not constitute a guarantee of employment for any individual student. Confirm current published metrics and definitions directly with the academy.'],
    ['6. Contact Us', `Questions about these terms can be sent to ${EMAIL} or by calling ${PHONE}.`],
  ];
  return <main id="main-content" className="route-main"><PageHero variant="about" eyebrow={privacy ? 'Privacy' : 'Terms of use'} title={privacy ? 'Privacy Policy' : 'Terms of Service'} description={privacy ? 'Information about enquiries, the use of personal data and how to contact the academy about privacy.' : 'The terms that relate to website use, course enquiries, enrollment and program-specific agreements.'} /><article className="legal-content shell"><p className="legal-updated">Last updated in the archived site: 30 July 2026. Confirm this policy has been reviewed and approved before production use.</p>{sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<div className="legal-contact"><MailIcon /><div><strong>Questions?</strong><p><a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href={PHONE_HREF}>{PHONE}</a></p></div></div></article></main>;
}

export default function RouteContent({ path }: { path: string }) {
  if (path === '/courses' || path.startsWith('/courses/category/')) return <CoursesPage path={path} />;
  if (path.startsWith('/courses/')) {
    const slug = path.split('/')[2];
    const course = courseBySlug(slug);
    if (course) return <CourseDetail course={course} />;
  }
  if (audiencePages[path]) return <AudiencePage path={path} />;
  if (path === '/placement') return <PlacementPage />;
  if (path === '/roadmap') return <RoadmapPage />;
  if (path === '/about-us') return <AboutPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/blog') return <BlogPage />;
  if (path.startsWith('/blog/')) return <BlogArticle slug={path.split('/')[2]} />;
  if (path === '/privacy-policy' || path === '/terms-of-service') return <LegalPage path={path} />;
  return <main id="main-content" className="route-main"><div className="shell section-pad not-found"><span className="not-found-mark">404</span><h1>Looks like this path took a wrong turn.</h1><p>Head back to the course directory or contact Karka for the right destination.</p><div className="hero-actions"><Link href="/courses" className="button button-primary">Explore courses <ArrowRight size={16} /></Link><Link href="/" className="button button-quiet">Back to home</Link></div></div></main>;
}

export function routeInfo(path: string): PageInfo {
  if (pages[path]) return pages[path];
  if (path.startsWith('/courses/')) {
    const course = courseBySlug(path.split('/')[2]);
    if (course) return { title: `${course.title} | Karka Academy`, description: `${course.description} Explore the course and confirm the current syllabus, duration and terms with Karka AI & Tech Academy.`, eyebrow: course.category };
  }
  if (path.startsWith('/blog/')) {
    const post = blogPosts.find((item) => item.slug === path.split('/')[2]);
    if (post) return { title: post.title, description: post.summary, eyebrow: post.category };
  }
  return { title: 'Karka AI & Tech Academy', description: 'Explore practical learning paths, AI-first technology training and career-focused mentoring at Karka Academy.' };
}
