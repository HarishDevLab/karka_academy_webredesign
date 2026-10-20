import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { ADDRESS, EMAIL, FACEBOOK, INSTAGRAM, LINKEDIN, PHONE, PHONE_HREF, WHATSAPP_URL } from '@/lib/content';

const footerGroups = [
  { title: 'Explore', links: [['/courses', 'All courses'], ['/placement', 'Placement support'], ['/roadmap', 'Pay After Placement'], ['/blog', 'Learning guides']] },
  { title: 'For learners', links: [['/for-school-students', 'School students'], ['/for-college-students', 'College students'], ['/for-graduates', 'Graduates'], ['/for-professionals', 'Professionals']] },
  { title: 'Karka', links: [['/about-us', 'About us'], ['/contact', 'Contact'], ['/privacy-policy', 'Privacy policy'], ['/terms-of-service', 'Terms of service']] },
] as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand-col">
          <Link href="/" aria-label="Karka home" className="footer-logo-wrap"><Image src="/karka-logo.webp" alt="Karka AI Academy official logo" width={180} height={47} className="footer-logo" /></Link>
          <p className="footer-pitch">AI-first learning, real project practice and career-focused mentorship for the next generation of builders.</p>
          <div className="social-row" aria-label="Official social media">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Karka on Instagram"><Instagram size={17} /></a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Karka on LinkedIn"><Linkedin size={17} /></a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Karka on Facebook"><Facebook size={17} /></a>
          </div>
        </div>
        {footerGroups.map((group) => <div className="footer-link-group" key={group.title}><h3>{group.title}</h3>{group.links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</div>)}
        <div className="footer-contact-col">
          <h3>Let’s connect</h3>
          <a href="https://www.google.com/maps/search/?api=1&query=Karka+AI+%26+Tech+Academy+Nagercoil" target="_blank" rel="noopener noreferrer"><MapPin size={16} /> <span>{ADDRESS}</span></a>
          <a href={PHONE_HREF}><Phone size={16} /> <span>{PHONE}</span></a>
          <a href={`mailto:${EMAIL}`}><Mail size={16} /> <span>{EMAIL}</span></a>
          <a className="footer-whatsapp" href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Karka team, I would like to know more about your courses.')}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Karka AI & Tech Academy. All rights reserved.</span><span className="footer-note">Course and placement terms should be confirmed with the academy before enrollment.</span></div>
    </footer>
  );
}
