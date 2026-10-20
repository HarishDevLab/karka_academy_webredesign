import { BookOpenCheck, BriefcaseBusiness, CheckCircle2, Coins, FolderKanban } from 'lucide-react';

const stages = [
  { icon: BookOpenCheck, label: 'LEARN', title: 'Build skills', color: 'learn' },
  { icon: FolderKanban, label: 'BUILD', title: 'Prove your work', color: 'build' },
  { icon: BriefcaseBusiness, label: 'PLACEMENT', title: 'Qualifying role', color: 'placed' },
  { icon: Coins, label: 'THEN', title: 'Payment per terms', color: 'payment' },
];

export default function PayAfterPlacementVisual() {
  return (
    <div className="pap-journey-visual" role="img" aria-label="Pay After Placement journey: learn skills, build project proof, secure a qualifying placement, then follow payment terms in the written agreement.">
      <div className="pap-journey-rail"><span className="pap-journey-trail" /><span className="pap-journey-token">₹</span>{stages.map((stage, index) => { const Icon = stage.icon; return <span className={`pap-journey-node pap-node-${stage.color}`} key={stage.label}><Icon size={15} /></span>; })}</div>
      <div className="pap-journey-stages">{stages.map((stage, index) => { const Icon = stage.icon; return <div className={`pap-journey-stage pap-stage-${stage.color}`} key={stage.label}><span className="pap-stage-icon"><Icon size={15} /></span><span className="pap-stage-label">{stage.label}</span><strong>{stage.title}</strong>{index === 3 && <small>Subject to signed terms</small>}</div>; })}</div>
      <div className="pap-journey-status"><span className="pap-status-dot" /> Payment is linked to qualifying placement—not just course enrollment.</div>
    </div>
  );
}
