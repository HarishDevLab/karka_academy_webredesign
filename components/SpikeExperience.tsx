'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Activity, ArrowUpRight, BrainCircuit, GraduationCap, Play, Sparkles, Target, UserRound, Zap } from 'lucide-react';

const SPIKE_URL = 'https://spike.karka.academy/';

const features = [
  { n: '01', icon: BrainCircuit, title: 'AI-guided learning', text: 'Ask questions and explore concepts while you learn.', tone: 'violet' },
  { n: '02', icon: Zap, title: 'Practice as you learn', text: 'Move from explanations to hands-on practice.', tone: 'lime' },
  { n: '03', icon: Target, title: 'See your progress', text: 'Keep your learning journey focused on steady improvement.', tone: 'blue' },
  { n: '04', icon: GraduationCap, title: 'Mentor-backed support', text: 'Combine AI-guided practice with guidance from Karka mentors.', tone: 'pink' },
];

const spikeHighlights = [
  { icon: BrainCircuit, title: 'AI-Powered', text: 'Smart learning assistance', tone: 'violet' },
  { icon: Activity, title: 'Real-time', text: 'Live feedback & progress', tone: 'lime' },
  { icon: UserRound, title: 'Personalized', text: 'Tailored learning experience', tone: 'blue' },
];

export default function SpikeExperience() {
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = question.trim();
    if (!value) {
      setStatus('Type a question before continuing to Spike AI.');
      return;
    }

    const spikeUrl = new URL(SPIKE_URL);
    spikeUrl.searchParams.set('prompt', value);
    window.open(spikeUrl.toString(), '_blank', 'noopener,noreferrer');
    setStatus('Spike AI opened in a new tab with your question. Sign in there if prompted.');
  }

  return (
    <section className="spike-experience" aria-labelledby="spike-preview-title">
      <div className="spike-experience-grid">
        <div className="spike-preview-panel">
          <div className="spike-preview-top"><span className="spike-live-dot"/><span>SPIKE AI</span></div>
          <div className="spike-console-title"><span className="spike-logo-glyph"><Zap size={21}/></span><div><span className="spike-micro-label">ASK A QUESTION</span><h3 id="spike-preview-title">What would you like to learn?</h3></div></div>
          <p className="spike-console-copy">Your question will be included in the Spike AI link.</p>
          <form className="spike-question-form" onSubmit={handleSubmit}>
            <label htmlFor="spike-question" className="sr-only">Type a question for Spike AI</label>
            <textarea id="spike-question" value={question} onChange={(event) => setQuestion(event.target.value)} rows={3} maxLength={500} placeholder="Type your question…" />
            <div className="spike-input-actions"><span><span className="spike-input-live"/> Prompt | Question</span><button type="submit"><span>Continue to Spike AI</span><ArrowUpRight size={17}/></button></div>
          </form>
          <p className="spike-status" aria-live="polite">{status}</p>
          <div className="spike-prompt-features">
            <div className="spike-prompt-feature-heading">
              <span className="spike-micro-label">MEET YOUR AI-POWERED LEARNING PARTNER</span>
              <h4>Transform how you <em>teach.</em><br/>Amplify how they <em>learn.</em></h4>
              <p>Build engaging programs that develop real-world skills for an AI-first world.</p>
            </div>
            <div className="spike-highlight-grid">
              {spikeHighlights.map(({ icon: Icon, title, text, tone }) => (
                <article className={`spike-highlight-card spike-highlight-${tone}`} key={title}>
                  <span className="spike-highlight-icon"><Icon size={16}/></span>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="spike-feature-side">
          <div className="spike-feature-intro"><span className="spike-section-kicker">Not just a chatbot</span><h3>Built around how<br/>you actually learn.</h3><p>Spike is an AI-guided, practice-focused and mentor-backed learning platform.</p></div>
          <div className="spike-feature-grid">{features.map(({ n, icon: Icon, title, text, tone }) => <article className={`spike-feature-card spike-tone-${tone}`} key={n} tabIndex={0}><span className="spike-feature-number">{n}</span><span className="spike-feature-icon"><Icon size={19}/></span><h4>{title}</h4><p>{text}</p><span className="spike-feature-action"></span></article>)}</div>
          <a className="spike-official-link" href={SPIKE_URL} target="_blank" rel="noopener noreferrer"><span className="spike-official-icon"><Play size={14} fill="currentColor"/></span><span><strong>Continue in Spike AI</strong><small>Open the official learning platform to use its full experience.</small></span><ArrowUpRight size={17}/></a>
        </div>
      </div>
    </section>
  );
}
