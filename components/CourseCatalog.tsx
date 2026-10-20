'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import type { Course } from '@/lib/content';

const filters = ['All', 'Coding', 'AI & Data', 'Design', 'Business', 'School', 'Internship'] as const;

export default function CourseCatalog({ courses, compact = false }: { courses: Course[]; compact?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => courses.filter((course) => {
    const matchesFilter = filter === 'All' || course.category === filter;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || `${course.title} ${course.description} ${course.skills.join(' ')}`.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  }), [courses, filter, query]);

  return (
    <div className="catalog-shell">
      {!compact && <div className="catalog-controls">
        <div className="filter-row" role="group" aria-label="Filter courses by category">
          {filters.map((item) => <button key={item} type="button" className={`filter-pill ${filter === item ? 'selected' : ''}`} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
        </div>
        <label className="catalog-search"><Search size={17} /><span className="sr-only">Search courses</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a skill or course" /></label>
      </div>}
      <div className={`course-grid ${compact ? 'course-grid-compact' : ''}`}>
        {filtered.map((course, index) => <article className="course-card" key={course.slug}>
          <div className={`course-card-art art-tone-${index % 4}`}>
            <span className="course-art-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="course-art-orbit orbit-a" /><div className="course-art-orbit orbit-b" />
            <span className="course-art-glyph">{course.category === 'AI & Data' ? 'AI' : course.category === 'Design' ? '✳' : course.category === 'Business' ? '↗' : course.category === 'School' ? '⌘' : course.category === 'Internship' ? '↗' : '{ }'}</span>
            <span className="course-category">{course.category}</span>
          </div>
          <div className="course-card-body">
            <div className="course-card-meta"><span>{course.audience || 'Practical learning track'}</span>{course.duration && <span>{course.duration}</span>}</div>
            <h3><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3>
            <p>{course.description}</p>
            <div className="skill-tags">{course.skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}</div>
            <Link className="course-card-link" href={`/courses/${course.slug}`}>Explore course <ArrowUpRight size={16} /></Link>
          </div>
        </article>)}
      </div>
      {filtered.length === 0 && <div className="empty-state"><Sparkles size={22} /><h3>No matching courses</h3><p>Try another search or choose a different category.</p><button className="button button-secondary" onClick={() => { setFilter('All'); setQuery(''); }} type="button">Reset filters</button></div>}
      {!compact && <p className="catalog-footnote">Course content, duration, batch availability and eligibility may change. Confirm the current details with Karka before enrolling.</p>}
      {compact && <div className="catalog-view-all"><Link className="button button-secondary" href="/courses">Explore all career tracks <ArrowRight size={16} /></Link></div>}
    </div>
  );
}
