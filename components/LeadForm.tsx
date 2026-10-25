'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { whatsAppLink } from '@/lib/content';

export default function LeadForm({ context = 'general' }: { context?: string }) {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState(context === 'general' ? '' : context);
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      'Hi Karka team, I would like to enquire about your academy.',
      `Name: ${name.trim()}`,
      phone.trim() ? `My phone: ${phone.trim()}` : '',
      interest.trim() ? `Area of interest: ${interest.trim()}` : '',
    ].filter(Boolean).join('\n');
    setSent(true);
    window.open(whatsAppLink(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>Your name<input autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" /></label>
      <label>Phone number <span className="optional-label">(optional)</span><input type="tel" autoComplete="tel" inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Your contact number" /></label>
      <label>What are you interested in?<select value={interest} onChange={(event) => setInterest(event.target.value)}><option value="">Choose an area</option><option>Full Stack Development</option><option>AI & Data Science</option><option>Generative AI</option><option>UI/UX Design</option><option>Internship</option><option>Pay After Placement</option><option>Career counselling</option><option>Other</option></select></label>
      <button className="button button-primary form-submit" type="submit"><MessageCircle size={17} /> Continue on WhatsApp <ArrowUpRight size={16} /></button>
      {sent && <p className="form-confirmation" role="status"><CheckCircle2 size={15} /> WhatsApp opened in a new tab. Send the prepared message to complete your inquiry.</p>}
      <p className="form-privacy">This form prepares a WhatsApp message.</p>
    </form>
  );
}
