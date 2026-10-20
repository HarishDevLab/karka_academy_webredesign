'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const audienceLinks = [
  ['/for-school-students', 'School students'],
  ['/for-college-students', 'College students'],
  ['/for-graduates', 'Graduates'],
  ['/for-professionals', 'Professionals'],
] as const;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} onClick={toggleTheme}>
      {theme === 'light' ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
      <span className="theme-toggle-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [audiencesOpen, setAudiencesOpen] = useState(false);

  function closeMenus() {
    setMobileOpen(false);
    setAudiencesOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="top-ribbon"><span className="ribbon-dot" /> AI-first learning. Real projects. Career-focused mentorship. <Link href="/roadmap">See how the journey works <ArrowUpRight size={13} /></Link></div>
      <header className="site-header">
        <div className="header-inner shell">
          <Link href="/" className="brand-link" aria-label="Karka AI & Tech Academy home" onClick={closeMenus}>
            <Image src="/karka-logo.webp" alt="Karka AI Academy official logo" width={180} height={47} priority className="brand-logo" />
          </Link>
          <nav className={`primary-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <Link className={pathname === '/courses' ? 'nav-link active' : 'nav-link'} href="/courses" onClick={closeMenus}>Courses</Link>
            <div className="nav-dropdown-wrap">
              <button className={`nav-link nav-dropdown-button ${audiencesOpen ? 'active' : ''}`} type="button" aria-expanded={audiencesOpen} onClick={() => setAudiencesOpen(!audiencesOpen)}>For learners <ChevronDown size={15} /></button>
              {audiencesOpen && <div className="nav-dropdown">{audienceLinks.map(([href, label]) => <Link href={href} key={href} onClick={closeMenus}>{label}<ArrowUpRight size={14} /></Link>)}</div>}
            </div>
            <Link className={pathname === '/placement' ? 'nav-link active' : 'nav-link'} href="/placement" onClick={closeMenus}>Placements</Link>
            <Link className={pathname === '/roadmap' ? 'nav-link active' : 'nav-link'} href="/roadmap" onClick={closeMenus}>Pay After Placement</Link>
            <Link className={pathname === '/about-us' ? 'nav-link active' : 'nav-link'} href="/about-us" onClick={closeMenus}>About</Link>
            <div className="mobile-nav-tail"><ThemeToggle /><Link className="button button-primary mobile-contact" href="/contact" onClick={closeMenus}>Talk to us <ArrowUpRight size={16} /></Link></div>
          </nav>
          <div className="header-actions"><ThemeToggle /><Link className="button button-primary header-cta" href="/contact">Talk to us <ArrowUpRight size={16} /></Link></div>
          <button className="mobile-menu-toggle" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} type="button" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {mobileOpen && <button className="nav-scrim" aria-label="Close navigation" type="button" onClick={closeMenus} />}
    </>
  );
}
