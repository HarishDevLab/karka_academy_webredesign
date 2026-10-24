'use client';

import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Instagram, Play, Video } from 'lucide-react';

const INSTAGRAM_PROFILE = 'https://www.instagram.com/karka.ai/';
const VERIFIED_GABRIEL_VIDEO = 'https://www.karka.academy/videos/gabrielsamraj.mp4';

type VideoStory = { name: string; course: string; role?: string; videoUrl: string; reelUrl: string; initials: string; color: string; sourceNote?: string };

// Update ACCORDINGLY :
const videoStories: VideoStory[] = [
  { name: 'Gabriel Samraj', course: 'UI/UX Design', role: 'Frontend Developer', videoUrl: 'https://www.karka.academy/videos/gabrielsamraj.mp4', reelUrl: '', initials: 'GS', color: 'violet', sourceNote: 'Hosted video present in the supplied original-site snapshot.' },
  { name: 'Prabin Raj', course: 'Full Stack Developer', videoUrl: 'https://www.karka.academy/videos/pabinraj.mp4', reelUrl: '', initials: 'PR', color: 'lime' },
  { name: 'Shiju Mon', course: 'Graphic Designer', videoUrl: 'https://www.karka.academy/videos/shijumon.mp4', reelUrl: '', initials: 'SM', color: 'blue' },
  { name: 'Kishore', course: 'UI/UX Designer', videoUrl: 'https://www.karka.academy/videos/kishore.mp4', reelUrl: '', initials: 'KI', color: 'pink' },
  { name: 'Sridevi', course: 'UI/UX Designer', videoUrl: 'https://www.karka.academy/videos/sridevi.mp4', reelUrl: '', initials: 'SR', color: 'orange' },
  { name: 'Harish', course: 'Data Analyst', videoUrl: 'https://www.karka.academy/videos/harish.mp4 ', reelUrl: '', initials: 'HR', color: 'mint' }, //that is my name i not added any video or reel link so i added my name and  random course
  { name: 'Lal', course: 'APK Developer', videoUrl: 'https://www.karka.academy/videos/lal.mp4', reelUrl: '', initials: 'LA', color: 'violet' },
  { name: 'Sree', course: 'Electron App Builder', videoUrl: 'https://www.karka.academy/videos/sree.mp4', reelUrl: '', initials: 'SR', color: 'lime' },
];

function instagramEmbedUrl(url: string) {
  const clean = url.trim().replace(/\?.*$/, '').replace(/\/$/, '');
  return `${clean}/embed/`;
}

export default function LearnerVideos() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const selected = videoStories[selectedIndex];
  const hasReel = Boolean(selected.reelUrl && /^https?:\/\/(www\.)?instagram\.com\/(reel|p)\//.test(selected.reelUrl));
  const hasVideo = Boolean(selected.videoUrl.trim());

  function choose(index: number) {
    setSelectedIndex(index);
    setVideoError(false);
  }

  return (
    <section className="learner-videos section-pad" id="learner-videos" aria-labelledby="learner-videos-title">
      <div className="shell">
        <div className="learner-videos-heading">
          <div><span className="stories-eyebrow"><span className="stories-pulse" /> EIGHT VIDEO SPOTLIGHTS · REAL PEOPLE, REAL JOURNEYS</span><h2 id="learner-videos-title">Hear it in their<br /><em>own words.</em></h2></div>
          <div className="videos-heading-aside"><p>A video gallery for learner journeys. Choose a person to preview their video.Videos loaded from original karka website.</p><a className="stories-instagram-link" href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> Follow @karka.ai <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="learner-video-layout">
          <div className="learner-video-player" aria-live="polite">
            <div className="video-player-chrome"><span><span className="video-live-dot" /> LEARNER SPOTLIGHT / 0{selectedIndex + 1}</span><span>{hasVideo || hasReel ? 'VIDEO READY' : 'LINK TO BE ADDED'}</span></div>
            {hasVideo && !videoError ? (
              <div className="learner-video-frame"><video key={selected.videoUrl} src={selected.videoUrl} controls playsInline preload="metadata" aria-label={`Learner story video: ${selected.name}`} onError={() => setVideoError(true)} /></div>
            ) : hasReel ? (
              <div className="learner-video-frame learner-reel-frame"><iframe key={selected.reelUrl} src={instagramEmbedUrl(selected.reelUrl)} title={`Instagram Reel featuring ${selected.name}`} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" /><a className="learner-video-external" href={selected.reelUrl} target="_blank" rel="noopener noreferrer">Open original Reel <ExternalLink size={14} /></a></div>
            ) : (
              <div className={`learner-video-placeholder video-placeholder-${selected.color}`}>
                <div className="placeholder-play-orbit"><span><Play size={24} fill="currentColor" /></span></div>
                <span className="placeholder-kicker">VIDEO SLOT 0{selectedIndex + 1} / 08</span>
                <h3>{selected.name}</h3><p>{selected.course}</p>
                <div className="placeholder-link-note">This slot is ready for Instagram Reel URL.</div>
              </div>
            )}
            <div className="learner-video-detail"><span className={`video-person-avatar video-avatar-${selected.color}`}>{selected.initials}</span><div><strong>{selected.name}</strong><small>{selected.course}{selected.role ? ` · ${selected.role}` : ''}</small></div><a href={selected.reelUrl || (selected.videoUrl || INSTAGRAM_PROFILE)} target="_blank" rel="noopener noreferrer" className="video-open-link">{hasReel ? 'Open Reel' : hasVideo ? 'Open video' : 'Visit Instagram'} <ArrowUpRight size={15} /></a></div>
            {videoError && <p className="video-error-note">The video could not load from this address. Check the URL in <code>components/LearnerVideos.tsx</code>.</p>}
          </div>
          <div className="learner-video-roster" role="list" aria-label="Choose one of eight learner videos">
            {videoStories.map((story, index) => {
              const ready = Boolean(story.videoUrl || story.reelUrl);
              return <button type="button" className={`video-roster-card ${selectedIndex === index ? 'is-selected' : ''}`} key={`${story.name}-${index}`} onClick={() => choose(index)} aria-pressed={selectedIndex === index}>
                <span className={`video-person-avatar video-avatar-${story.color}`}>{story.initials}</span><span className="video-roster-copy"><strong>{story.name}</strong><small>{story.course}</small></span><span className={`video-status ${ready ? 'is-ready' : ''}`}>{ready ? <Play size={12} fill="currentColor" /> : '+'}</span>
              </button>;
            })}
          </div>
        </div>
        <p className="video-source-note">Editable slots in <code>components/LearnerVideos.tsx</code>.</p>
      </div>
    </section>
  );
}
