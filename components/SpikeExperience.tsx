'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, BrainCircuit, Clipboard, GraduationCap, Play, Sparkles, Target, Zap } from 'lucide-react';

const SPIKE_URL = 'https://spike.karka.academy/';
const prompts = [
  'Explain React hooks with a simple example…',
  'Help me understand a Python loop…',
  'How should I approach this project?…',
];

const features = [
  { n: '01', icon: BrainCircuit, title: 'AI-guided learning', text: 'Ask questions and explore concepts while you learn.', tone: 'violet' },
  { n: '02', icon: Zap, title: 'Practice as you learn', text: 'Move from explanations to hands-on practice.', tone: 'lime' },
  { n: '03', icon: Target, title: 'See your progress', text: 'Keep your learning journey focused on steady improvement.', tone: 'blue' },
  { n: '04', icon: GraduationCap, title: 'Mentor-backed support', text: 'Combine AI-guided practice with guidance from Karka mentors.', tone: 'pink' },
];

export default function SpikeExperience() {
  const [question, setQuestion] = useState('');
  const [focused, setFocused] = useState(false);
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = question.trim();
    if (!value) {
      setStatus('Type a question first, then open Spike AI to continue.');
      return;
    }
    window.open(SPIKE_URL, '_blank', 'noopener,noreferrer');
    try {
      await navigator.clipboard.writeText(value);
      setStatus('Question copied. Paste it into the Spike AI tab to continue.');
    } catch {
      setStatus('Spike AI opened. Use Copy question to copy this prompt, then paste it into Spike.');
    }
  }

  async function copyQuestion() {
    const value = question.trim();
    if (!value) {
      setStatus('Type a question first so you can copy it into Spike AI.');
      return;
    }
    try {
      await navigator.clipboard.writeText(value);
      setStatus('Copied. Paste your question into Spike AI in the new tab.');
    } catch {
      setStatus('Select and copy your question, then paste it into Spike AI.');
    }
  }

  return (
    <section className="spike-experience" aria-labelledby="spike-preview-title">
      <div className="spike-experience-grid">
        <div className="spike-preview-panel">
          <div className="spike-preview-top"><span className="spike-live-dot"/><span>SPIKE AI · LEARNING COMPANION</span><span className="spike-top-spark"><Sparkles size={15}/></span></div>
          <div className="spike-console-orbit orbit-a"/><div className="spike-console-orbit orbit-b"/>
          <div className="spike-console-title"><span className="spike-logo-glyph"><Zap size={21}/></span><div><span className="spike-micro-label">YOUR LEARNING SIDEKICK</span><h3 id="spike-preview-title">Think it through<br/><em>with Spike.</em></h3></div></div>
          <p className="spike-console-copy">Start with a question. Keep control of your learning. Take the next step with AI-guided practice and mentor support.</p>
          <form className={`spike-question-form ${focused || question ? 'is-editing' : ''}`} onSubmit={handleSubmit}>
            <label htmlFor="spike-question" className="sr-only">Type a question for Spike AI</label>
            {!focused && !question && <button className="spike-placeholder-overlay" type="button" onClick={() => document.getElementById('spike-question')?.focus()} aria-label="Start typing a question"><span>{prompts[0]}</span><span className="spike-blinking-caret" aria-hidden="true"/></button>}
            <textarea id="spike-question" value={question} onChange={(event) => setQuestion(event.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} rows={2} maxLength={500} placeholder="Ask Spike anything you're learning…" />
            <div className="spike-input-actions"><span><span className="spike-input-live"/> Your question</span><button type="submit" aria-label="Open Spike AI with this question"><ArrowUpRight size={17}/></button></div>
          </form>
          <div className="spike-copy-row"><button type="button" className="spike-copy-button" onClick={copyQuestion}><Clipboard size={14}/> Copy question</button><a href={SPIKE_URL} target="_blank" rel="noopener noreferrer" className="spike-open-link">Open Spike AI <ArrowUpRight size={14}/></a></div>
          <p className="spike-status" aria-live="polite">{status || 'This preview does not send your question to an AI service. Open Spike AI to continue there.'}</p>
          <div className="spike-console-footer"><span>ASK BETTER QUESTIONS</span><span>LEARN · PRACTISE · GROW</span></div>
        </div>
        <div className="spike-feature-side"><div className="spike-feature-intro"><span className="spike-section-kicker">A learning loop, not just a chatbot</span><h3>Built around how<br/>you actually learn.</h3><p>Karka describes Spike as an AI-guided, practice-focused and mentor-backed learning platform.</p></div>
          <div className="spike-feature-grid">{features.map(({ n, icon: Icon, title, text, tone }) => <article className={`spike-feature-card spike-tone-${tone}`} key={n} tabIndex={0}><span className="spike-feature-number">{n}</span><span className="spike-feature-icon"><Icon size={19}/></span><h4>{title}</h4><p>{text}</p><span className="spike-feature-action"><span>Explore feature</span><ArrowUpRight size={14}/></span></article>)}</div>
          <a className="spike-official-link" href={SPIKE_URL} target="_blank" rel="noopener noreferrer"><span className="spike-official-icon"><Play size={14} fill="currentColor"/></span><span><strong>Continue in Spike AI</strong><small>Open the official learning platform to use its full experience.</small></span><ArrowUpRight size={17}/></a>
        </div>
      </div>
    </section>
  );
}
