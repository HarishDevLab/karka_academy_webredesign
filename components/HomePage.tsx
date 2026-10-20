import Link from 'next/link';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, GraduationCap, MessageCircle, Sparkles, Target, Workflow } from 'lucide-react';
import HeroScene from './HeroScene';
import CourseCatalog from './CourseCatalog';
import LeadForm from './LeadForm';
import SpikeExperience from './SpikeExperience';
import LearnerReviews from './LearnerReviews';
import LearnerVideos from './LearnerVideos';
import PlacementTicker from './PlacementTicker';
import PayAfterPlacementVisual from './PayAfterPlacementVisual';
import { courses, faqs, heroStats, learningSignals, workstreams, WHATSAPP_URL } from '@/lib/content';

function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="section-eyebrow"><span className="eyebrow-mark" />{children}</div>; }

export default function HomePage() {
  const featuredCourses = courses.filter((course) => course.featured);
  return (
    <main id="main-content">
      <section className="hero-section shell">
        <div className="hero-copy">
          <div className="hero-announcement"><span className="live-indicator" /> A new way to learn tech <ArrowUpRight size={14} /></div>
          <h1>Skills that build your future<span className="hero-period">.</span><br /><span className="hero-highlight">Careers you can prove.</span></h1>
          <p className="hero-description">Learn with an AI-first mindset, build real projects and prepare for the next step in your career—with mentors in your corner.</p>
          <div className="hero-actions">
            <Link href="/courses" className="button button-primary button-large">Find your career track <ArrowRight size={17} /></Link>
            <Link href="/roadmap" className="button button-quiet button-large">How Pay After Placement works <ArrowUpRight size={17} /></Link>
          </div>
          <div className="hero-stat-grid" aria-label="Karka learning snapshot">
            {heroStats.map((item) => (
              <div key={item.label} className="hero-stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-proofline"><span><Check size={15} /> Project-led learning</span><span><Check size={15} /> Mentor guidance</span><span><Check size={15} /> Career preparation</span></div>
          <p className="hero-footnote">Pay After Placement is available on eligible programs and is subject to written program terms.</p>
        </div>
        <div className="hero-visual-wrap">
          <div className="hero-visual-burst burst-one" /><div className="hero-visual-burst burst-two" />
          <div className="hero-visual-kicker kicker-top"><span className="kicker-icon"><Code2 size={15} /></span><span><strong>Learn by doing</strong><small>Practice meets purpose</small></span></div>
          <HeroScene variant="academy" />
          <div className="hero-visual-kicker kicker-bottom"><span className="kicker-icon kicker-yellow"><Sparkles size={15} /></span><span><strong>Build your proof</strong><small>Projects · Portfolio · Growth</small></span></div>
          
        </div>
        <div className="hero-side-note"><span>01</span><span className="side-note-line" /><span>YOUR NEXT CHAPTER STARTS HERE</span></div>
      </section>

      <PlacementTicker />

      <section className="signal-strip" aria-label="Karka learning principles">
        <div className="shell signal-strip-inner"><span>LEARN WITH PURPOSE</span><span className="signal-separator">✳</span><span>BUILD REAL THINGS</span><span className="signal-separator">✳</span><span>GROW WITH GUIDANCE</span><span className="signal-separator">✳</span><span>SHOW YOUR WORK</span></div>
      </section>

      <section className="pap-feature shell" aria-labelledby="pap-feature-title"><div className="pap-feature-mark" aria-hidden="true">₹</div><div className="pap-feature-copy"><span className="pap-feature-eyebrow"><span className="live-indicator"/> CAREER-FOCUSED LEARNING MODEL</span><h2 id="pap-feature-title">Pay After Placement<span>.</span></h2><p>Learn, build proof of your skills and prepare for a qualifying role. On eligible programs, payment follows the placement trigger and written agreement—not simply enrollment.</p><div className="pap-feature-visible-tag"><span className="pap-visible-dot"/> A key part of Karka’s advertised model</div></div><PayAfterPlacementVisual/><div className="pap-feature-action"><Link href="/roadmap" className="button button-primary button-large">See how it works <ArrowRight size={17}/></Link><small>Eligibility, qualifying placement and payment conditions apply.</small></div></section>

      <section className="section-pad shell" id="career-tracks">
        <div className="section-heading-row"><div><Eyebrow>Choose your direction</Eyebrow><h2>A track for where<br className="desktop-break" /> you want to go<span className="hero-period">.</span></h2></div><p>From your first line of code to a new career chapter, start with a learning path built around useful skills and practical work.</p></div>
        <CourseCatalog courses={featuredCourses} compact />
      </section>

      <section className="approach-section">
        <div className="shell approach-grid">
          <div className="approach-copy"><Eyebrow>The Karka approach</Eyebrow><h2>Learn the skill.<br /><span className="text-purple">Make it real.</span></h2><p>It’s easier to explain what you know when you have something to show. Karka’s public learning model emphasizes practice, project work, mentorship and career readiness—not theory alone.</p><Link href="/about-us" className="text-link">Explore the Karka approach <ArrowUpRight size={17} /></Link><div className="approach-note"><span className="note-symbol">✳</span><span>Build for the real world, one useful project at a time.</span></div></div>
          <div className="approach-steps">
            <article className="approach-step"><span className="step-index">01</span><div className="step-icon violet"><Code2 size={22} /></div><div><h3>Learn with context</h3><p>Understand the tools and the problem they help solve.</p></div><ArrowDownRight className="step-arrow" size={21} /></article>
            <article className="approach-step"><span className="step-index">02</span><div className="step-icon yellow"><Workflow size={22} /></div><div><h3>Build through practice</h3><p>Turn concepts into work you can review, refine and explain.</p></div><ArrowDownRight className="step-arrow" size={21} /></article>
            <article className="approach-step"><span className="step-index">03</span><div className="step-icon lilac"><Target size={22} /></div><div><h3>Prepare for opportunity</h3><p>Strengthen your portfolio, communication and interview skills.</p></div><ArrowDownRight className="step-arrow" size={21} /></article>
            <article className="approach-step"><span className="step-index">04</span><div className="step-icon ink"><BriefcaseBusiness size={22} /></div><div><h3>Keep moving forward</h3><p>Use feedback and mentoring to keep growing beyond a certificate.</p></div><ArrowUpRight className="step-arrow" size={21} /></article>
          </div>
        </div>
      </section>

      <section className="section-pad shell">
        <div className="section-heading-row"><div><Eyebrow>What we’re building</Eyebrow><h2>Momentum across the learner journey<span className="hero-period">.</span></h2></div><p>These are the core learning experiences and product workstreams currently shaping the student journey.</p></div>
        <div className="signal-grid">
          {learningSignals.map((signal) => (
            <article key={signal.title} className="signal-card">
              <span className="signal-card-mark">✳</span>
              <h3>{signal.title}</h3>
              <p>{signal.description}</p>
            </article>
          ))}
        </div>
        <div className="workstream-grid">
          {workstreams.map((work) => (
            <article key={work.title} className="workstream-card">
              <div className="workstream-meta"><span>{work.status}</span><span className="status-dot" /></div>
              <h3>{work.title}</h3>
              <p>{work.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad shell">
        <div className="section-heading-row"><div><Eyebrow>Project-first learning</Eyebrow><h2>Go beyond “I learned it.”<br /><span className="text-purple">Show what you built.</span></h2></div><p>Karka’s website highlights internship-oriented practice, real client projects and portfolio building. Ask the team about current project briefs, mentor involvement and what you can share in your portfolio.</p></div>
        <div className="project-grid">
          <article className="project-card project-card-dark"><div className="project-card-top"><span className="project-number">FIELD NOTE / 01</span><span className="project-mini-icon"><Code2 size={18} /></span></div><div className="project-visual project-visual-code"><div className="code-window"><div className="code-window-dots"><i /><i /><i /></div><span className="code-line line-purple" /><span className="code-line line-short" /><span className="code-line line-yellow" /><span className="code-line line-medium" /><span className="code-line line-short line-purple" /></div><div className="project-float-chip">Build <ArrowUpRight size={13} /></div></div><h3>From brief to build</h3><p>Work through a problem, map the solution and turn the plan into a working build.</p><span className="project-tag">Build with intent</span></article>
          <article className="project-card project-card-lilac"><div className="project-card-top"><span className="project-number">FIELD NOTE / 02</span><span className="project-mini-icon"><Sparkles size={18} /></span></div><div className="project-visual project-visual-portfolio"><div className="portfolio-sheet sheet-back" /><div className="portfolio-sheet sheet-front"><div className="portfolio-swatch" /><span /><span /><span /></div><span className="portfolio-star">✳</span></div><h3>Make your work visible</h3><p>Organize your contribution, explain your decisions and build a portfolio you can discuss.</p><span className="project-tag">Show your process</span></article>
          <article className="project-card project-card-yellow"><div className="project-card-top"><span className="project-number">FIELD NOTE / 03</span><span className="project-mini-icon"><GraduationCap size={18} /></span></div><div className="project-visual project-visual-feedback"><div className="feedback-orbit orbit-large" /><div className="feedback-orbit orbit-small" /><div className="feedback-core"><Check size={30} /></div><span className="feedback-bubble bubble-one">Review</span><span className="feedback-bubble bubble-two">Refine</span></div><h3>Grow with feedback</h3><p>Use review and mentorship to improve the way you think, build and present your work.</p><span className="project-tag">Improve every iteration</span></article>
        </div>
        <div className="project-disclaimer"><Sparkles size={16} /><p>These visuals illustrate the learning process, not specific student projects. Ask Karka for verified project examples and permission-cleared student work.</p><Link href="/contact">Ask about projects <ArrowRight size={15} /></Link></div>
      </section>

      <section className="platform-section">
        <div className="shell"><div className="section-heading-row platform-heading"><div><Eyebrow>Beyond the classroom</Eyebrow><h2>More ways to learn<br />and get involved<span className="hero-period">.</span></h2></div><p>Karka’s public ecosystem also includes AI-assisted learning and student competition experiences.</p></div>
          <SpikeExperience />
          <div className="platform-grid platform-grid-single">
            <article className="platform-card platform-infini"><div className="platform-stamp"><Sparkles size={21} /></div><div className="platform-label">STUDENT COMPETITIONS</div><h3>Karka InfiniAI</h3><p>A competition platform for students to showcase ideas, technical ability, design and problem-solving through challenges.</p><div className="infini-tiles"><span>Idea presentation</span><span>Technical quiz</span><span>Bug hunt</span><span>Website build</span><span>Poster design</span><span>Video creation</span></div><a className="button button-light" href="https://infini.karka.academy/" target="_blank" rel="noopener noreferrer">Explore InfiniAI <ArrowUpRight size={16} /></a></article>
          </div>
        </div>
      </section>


      <section className="placement-band">
        <div className="shell placement-band-inner"><div className="placement-band-copy"><Eyebrow>Career support</Eyebrow><h2>Build your skills with<br />the next step in mind.</h2><p>Explore portfolio support, mock interviews, resume guidance and placement preparation. The goal is to help you show what you can do—not promise an outcome no one can guarantee.</p><div className="placement-chips"><span><Check size={15} /> Portfolio guidance</span><span><Check size={15} /> Mock interviews</span><span><Check size={15} /> Career mentoring</span></div><div className="hero-actions"><Link href="/placement" className="button button-primary">Explore placement support <ArrowRight size={16} /></Link><Link href="/roadmap" className="button button-quiet">Read the payment roadmap <ArrowUpRight size={16} /></Link></div></div><div className="placement-card"><div className="placement-card-top"><span>PAY AFTER PLACEMENT</span><span className="placement-card-star">✳</span></div><p className="placement-card-amount">₹0<span> upfront tuition on eligible programs</span></p><div className="placement-flow"><span>Learn</span><i /><span>Build</span><i /><span>Get hired</span></div><p className="placement-card-foot">The public roadmap currently lists ₹40,000 payable after placement. Confirm current fees, eligibility, qualifying salary, triggers and conditions in the written program agreement.</p><Link href="/roadmap" className="placement-card-link">Understand the model <ArrowUpRight size={16} /></Link></div></div>
      </section>

      <section className="section-pad shell faq-section"><div className="section-heading-row"><div><Eyebrow>Good questions first</Eyebrow><h2>Know what you’re<br />signing up for.</h2></div><p>A useful decision begins with clear course expectations, support details and payment terms.</p></div><div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary><span className="faq-index">0{index + 1}</span><span>{faq.question}</span><span className="faq-plus">+</span></summary><p>{faq.answer}</p></details>)}</div><div className="faq-bottom"><span>Still have questions? Ask the team directly.</span><a href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Karka team, I have a question about courses and Pay After Placement.')}`} className="text-link" target="_blank" rel="noopener noreferrer">Talk to Karka <ArrowUpRight size={17} /></a></div></section>

      <LearnerReviews />
      <LearnerVideos />

      <section className="final-cta-section"><div className="shell final-cta-grid"><div><span className="final-cta-eyebrow"><span /> START WHERE YOU ARE</span><h2>Your next step can<br />start with a conversation<span className="final-cta-dot">.</span></h2><p>Tell us where you want to go. We’ll help you explore the course options and questions to ask before you decide.</p><div className="final-cta-actions"><Link href="/courses" className="button button-light">Browse courses <ArrowRight size={16} /></Link><Link href="/contact" className="button button-outline-light">Contact the academy <ArrowUpRight size={16} /></Link></div></div><div className="final-cta-form-wrap"><div className="final-cta-form-heading"><div className="form-heading-icon"><MessageCircle size={19} /></div><div><h3>Start a conversation</h3><p>No pressure—just get your questions answered.</p></div></div><LeadForm /></div></div></section>
    </main>
  );
}
