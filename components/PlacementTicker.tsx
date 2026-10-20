import { ArrowUpRight } from 'lucide-react';

const destinations = [
  { name: 'Amazon', src: '/placement-logos/amazon.webp' },
  { name: 'TCS', src: '/placement-logos/tcs.webp' },
  { name: 'HCL', src: '/placement-logos/hcl.webp' },
  { name: 'Matrimony.com', src: '/placement-logos/matrimony-com.webp' },
  { name: 'Novac', src: '/placement-logos/novac.webp' },
  { name: 'Capecom', src: '/placement-logos/capecom.webp' },
  { name: 'Flow', src: '/placement-logos/flow.webp' },
  { name: 'Sodisys', src: '/placement-logos/sodisys.webp' },
];

function LogoRun({ clone = false }: { clone?: boolean }) {
  return <div className="placement-logo-run" aria-hidden={clone ? 'true' : undefined}>{destinations.map((company) => <div className="placement-logo-tile" key={`${clone ? 'clone-' : ''}${company.name}`} title={company.name}><span className="placement-logo-image-wrap"><img src={company.src} alt={clone ? '' : `${company.name} logo`} loading="lazy" width="130" height="48" /></span><span className="placement-logo-name">{company.name}</span><ArrowUpRight size={13} aria-hidden="true" /></div>)}</div>;
}

export default function PlacementTicker() {
  return (
    <section className="placement-destinations" aria-labelledby="placement-destinations-title">
      <div className="shell placement-destinations-head"><div><span className="stories-eyebrow"><span className="stories-pulse" /> CAREER DESTINATIONS</span><h2 id="placement-destinations-title">Where our Karka graduates work<span>.</span></h2></div><p>From classrooms in Nagercoil to careers across India, our students are making their mark at leading tech companies.</p></div>
      <div className="placement-logo-marquee" aria-label="Company logos displayed in Karka's original graduate destinations section">
        <div className="placement-logo-track"><LogoRun /><LogoRun clone /></div>
      </div>
      <div className="shell placement-destinations-foot"><span>Company names and logos are taken from the supplied original Karka homepage.</span><a href="https://www.karka.academy/placement/" target="_blank" rel="noopener noreferrer">Explore placement support <ArrowUpRight size={14} /></a></div>
    </section>
  );
}
