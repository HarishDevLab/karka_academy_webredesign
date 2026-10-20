'use client';

import { useEffect, useRef } from 'react';

export type HeroVariant = 'academy' | 'school' | 'college' | 'graduate' | 'professional' | 'career' | 'placement' | 'payment' | 'course' | 'contact' | 'about' | 'insight' | 'ai' | 'data' | 'design' | 'business' | 'internship' | 'coding' | 'media';

type MotionKind = 'bob' | 'spin' | 'pulse' | 'sway';
type MotionItem = { object: import('three').Object3D; baseY: number; baseScaleY: number; kind: MotionKind; speed: number; phase: number; amplitude: number };

/** One field-specific procedural 3D composition per audience or page. */
export default function HeroScene({ variant = 'academy' }: { variant?: HeroVariant }) {
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false, frame = 0, running = false;
    let renderer: import('three').WebGLRenderer | undefined;
    let resizeObserver: ResizeObserver | undefined, intersectionObserver: IntersectionObserver | undefined;
    let scene: import('three').Scene | undefined, camera: import('three').PerspectiveCamera | undefined, rig: import('three').Group | undefined;
    const motion: MotionItem[] = [];
    const choreography: Array<(time: number) => void> = [];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setup = async () => {
      try {
        const T = await import('three');
        if (disposed || !hostRef.current) return;
        scene = new T.Scene();
        camera = new T.PerspectiveCamera(34, 1, .1, 100);
        camera.position.set(0, 0, 8.6);
        rig = new T.Group(); scene.add(rig);
        const mat = (color: number, metalness = .18) => new T.MeshStandardMaterial({ color, roughness: .29, metalness, emissive: color, emissiveIntensity: .055 });
        const purple = 0x7c3aed, lilac = 0xc4a0ff, yellow = 0xfbbf24, mint = 0x34d399, blue = 0x60a5fa, pink = 0xf472b6, ink = 0x2c1b3f;
        const add = (geometry: import('three').BufferGeometry, material: import('three').Material, x=0, y=0, z=0, scale=1, kind?: MotionKind, speed=.7, amplitude=.12) => {
          const m = new T.Mesh(geometry, material); m.position.set(x,y,z); m.scale.setScalar(scale); rig!.add(m);
          if (kind) motion.push({ object: m, baseY:y, baseScaleY:scale, kind, speed, phase:(motion.length*.91)%6.28, amplitude });
          return m;
        };
        const ring = (radius:number,color:number,rx:number,ry:number,rz:number,tube=.016,kind:MotionKind='spin') => {
          const m=add(new T.TorusGeometry(radius,tube,8,96),new T.MeshBasicMaterial({color,transparent:true,opacity:.78}),0,0,-.14,1,kind,.16,.04);m.rotation.set(rx,ry,rz);return m;
        };
        const box = (x:number,y:number,z:number,sx:number,sy:number,sz:number,color:number,bevel=false,kind?:MotionKind,speed=.7,amplitude=.1) => add(bevel ? new T.OctahedronGeometry(Math.max(sx,sy,sz)*.65,1) : new T.BoxGeometry(sx,sy,sz),mat(color),x,y,z,1,kind,speed,amplitude);
        const line = (points: [number,number,number][], color:number, opacity=.6) => {
          const geometry = new T.BufferGeometry().setFromPoints(points.map(([x,y,z])=>new T.Vector3(x,y,z)));
          const object = new T.Line(geometry,new T.LineBasicMaterial({color,transparent:true,opacity}));rig!.add(object);return object;
        };
        const node = (x:number,y:number,z:number,color:number,r=.07,kind?:MotionKind) => add(new T.SphereGeometry(r,14,10),mat(color,.1),x,y,z,1,kind,.8,.12);

        if (variant === 'school') {
          // LAUNCHPAD: playful learning blocks assemble beneath a tiny rocket.
          // The rocket rises, flame pulses, and discovery stars orbit at different rhythms.
          box(-.72,-.63,.1,.62,.36,.42,purple,false,'sway',.75,.1);
          box(-.12,-.35,.1,.56,.35,.42,mint,false,'bob',.9,.12);
          box(.48,-.58,.1,.55,.3,.42,yellow,false,'sway',.8,.08);
          box(-.1,-.04,.13,.48,.24,.42,blue,false,'bob',.7,.06);
          const rocket=add(new T.ConeGeometry(.25,.62,7),mat(pink),.42,.61,.16,1,'bob',1.25,.23);rocket.rotation.z=-.28;
          const rocketBody=add(new T.CylinderGeometry(.16,.21,.48,14),mat(lilac),.42,.25,.16,1,'sway',.85,.07);rocketBody.rotation.z=-.28;
          const finA=add(new T.ConeGeometry(.11,.24,4),mat(purple),.22,.1,.18);finA.rotation.z=Math.PI/2;
          const finB=add(new T.ConeGeometry(.11,.24,4),mat(purple),.62,.1,.18);finB.rotation.z=-Math.PI/2;
          const rocketFlame=add(new T.ConeGeometry(.095,.3,7),mat(yellow),.49,-.18,.13,1,'pulse',3.1,.38);rocketFlame.rotation.z=-.28;
          choreography.push((t)=>{const lift=.22*(.5+.5*Math.sin(t*1.08));rocket.position.y=.61+lift;rocketBody.position.y=.25+lift;finA.position.y=.1+lift;finB.position.y=.1+lift;rocketFlame.position.y=-.18+lift;rocketFlame.scale.set(.82+Math.sin(t*5.2)*.15,.72+Math.abs(Math.sin(t*4.1))*.66,.82+Math.sin(t*5.2)*.15);});
          // Dotted launch trail and small stars make this scene recognizably playful.
          for(let i=0;i<5;i++)node(.02-i*.16,-.32-i*.17,.1,i%2?yellow:mint,.035+i*.003,'pulse');
          const starShape=new T.OctahedronGeometry(.11,0);
          [[-1.28,.82,blue],[1.08,.83,yellow],[-1.12,-.02,pink],[1.25,-.43,mint]].forEach(([x,y,c],i)=>add(starShape,mat(c as number),x as number,y as number,.18,1,'spin',.8+i*.18,.05));
          ring(1.58,lilac,.14,.55,.18,.012);ring(1.28,mint,1.05,.25,-.3,.01);
        } else if (variant === 'college') {
          // BUILD LAB: an open laptop, code editor, modular project blocks and a moving data packet.
          box(-.35,-.48,.1,1.8,.15,.62,lilac);
          box(-.35,.22,0,1.48,1.18,.13,ink);
          box(-.35,.22,.08,1.29,.94,.04,blue);
          for(let i=0;i<6;i++){
            box(-.78,.55-i*.15,.13,.3+(i%3)*.13,.032,.018,[mint,yellow,lilac,blue][i%4]);
            box(.03,.55-i*.15,.13,.48-(i%2)*.13,.032,.018,[pink,mint,blue][i%3]);
          }
          box(-.35,-.58,.12,1.65,.05,.48,yellow);
          // Project modules orbit the laptop: database, API and UI building blocks.
          const module1=box(.98,.58,.16,.38,.38,.28,purple,true,'spin',.35,.04);module1.rotation.y=.35;
          box(1.08,-.03,.16,.42,.42,.28,mint,true,'bob',.75,.14);
          box(-1.18,.06,.16,.32,.32,.28,pink,true,'sway',.8,.12);
          const circuit=[[-1.48,1.08,.15],[-.88,1.32,.15],[-.25,1.18,.15],[.35,1.43,.15],[.9,1.17,.15]] as [number,number,number][];
          line(circuit,mint,.75);circuit.forEach((pt,i)=>node(pt[0],pt[1],pt[2],i%2?yellow:mint,.05,'pulse'));
          const dataPacket=node(circuit[0][0],circuit[0][1],.3,yellow,.082,'pulse');
          const circuitPath=new T.CatmullRomCurve3(circuit.map(([x,y,z])=>new T.Vector3(x,y,z+.12)));
          choreography.push((t)=>{dataPacket.position.copy(circuitPath.getPointAt((t*.095)%1));dataPacket.scale.setScalar(.78+.22*(.5+.5*Math.sin(t*4)));});
          node(-1.38,-.72,.26,yellow,.075,'bob');
          ring(1.82,blue,.75,.2,-.2,.012);ring(1.48,lilac,.22,.8,.12,.01);
        } else if (variant === 'graduate') {
          // CAREER LAUNCH: graduation cap transforms into a portfolio path with rising milestones.
          const cap=add(new T.BoxGeometry(1.18,.12,.72),mat(blue),-.12,.88,.02,1,'sway',.62,.06);cap.rotation.z=-.12;
          const capBase=add(new T.CylinderGeometry(.25,.32,.16,4),mat(purple),-.12,.76,.02);capBase.rotation.y=Math.PI/4;
          const tassel=add(new T.CylinderGeometry(.018,.018,.58,8),mat(yellow),.47,.57,.12,1,'sway',1.1,.1);tassel.rotation.z=-.42;
          node(.69,.26,.18,yellow,.065,'pulse');
          // Portfolio cards appear along an ascending route, like milestones in a career journey.
          const path=[[-1.5,-.88,.05],[-1.04,-.63,.05],[-.52,-.36,.05],[.02,-.12,.05],[.58,.19,.05],[1.18,.53,.05],[1.52,.88,.05]] as [number,number,number][];
          line(path,mint,.82);
          path.forEach((pt,i)=>node(pt[0],pt[1],pt[2],i===path.length-1?yellow:[blue,mint,purple,lilac][i%4],i===path.length-1?.12:.055,i===path.length-1?'pulse':'bob'));
          const careerBeacon=node(path[0][0],path[0][1],.24,yellow,.09,'pulse');
          const careerCurve=new T.CatmullRomCurve3(path.map(([x,y,z])=>new T.Vector3(x,y,z+.14)));
          choreography.push((t)=>{careerBeacon.position.copy(careerCurve.getPointAt((t*.14)%1));careerBeacon.scale.setScalar(.9+.42*(.5+.5*Math.sin(t*5)));});
          const card1=box(-.87,-.04,.18,.32,.43,.08,lilac,false,'sway',.55,.08);card1.rotation.z=-.25;
          const card2=box(.35,.42,.18,.34,.48,.08,pink,false,'sway',.7,.07);card2.rotation.z=.24;
          const card3=box(1.08,.88,.18,.34,.44,.08,yellow,false,'bob',.8,.06);card3.rotation.z=.2;
          // Diploma roll at the starting point.
          const scroll=add(new T.CylinderGeometry(.14,.14,.62,20),mat(lilac),-1.25,-.18,.08,1,'spin',.18,.025);scroll.rotation.z=Math.PI/2;
          ring(1.72,blue,.48,.22,.15,.012);
        } else if (variant === 'professional' || variant === 'business') {
          // CAREER GROWTH: a precision dashboard, rising KPI bars and an upward performance line.
          const heights=[.58,.9,1.22,1.58,2.02];const cols=[lilac,purple,blue,mint,yellow];const barMeshes: import('three').Mesh[]=[];
          heights.forEach((h,i)=>{const bar=box(-1.05+i*.43,-.78+h/2,.08,.27,h,.24,cols[i],false,'pulse',.55+i*.13,.11);barMeshes.push(bar);});
          line([[-1.34,-.82,.18],[1.22,-.82,.18]],lilac,.78);
          const growthPath=[[-1.32,-.82,.2],[-.82,-.43,.2],[-.34,-.31,.2],[.1,.05,.2],[.55,.16,.2],[1.12,.78,.2]] as [number,number,number][];
          line(growthPath,yellow,.95);
          growthPath.forEach((pt,i)=>node(pt[0],pt[1],.23,i===5?mint:yellow,i===5?.105:.045,i===5?'pulse':'bob'));
          const growthSignal=node(growthPath[0][0],growthPath[0][1],.32,mint,.075,'pulse');
          const growthCurve=new T.CatmullRomCurve3(growthPath.map(([x,y,z])=>new T.Vector3(x,y,z+.08)));
          choreography.push((t)=>{growthSignal.position.copy(growthCurve.getPointAt((t*.12)%1));growthSignal.scale.setScalar(.82+.38*(.5+.5*Math.sin(t*4.8)));heights.forEach((h,i)=>{const mesh=barMeshes[i];if(mesh)mesh.scale.y=.82+.18*(.5+.5*Math.sin(t*1.7+i*.48));});});
          // Briefcase anchors the career-growth metaphor without competing with the chart.
          box(.84,-.42,.25,.68,.5,.16,ink);box(.84,-.15,.25,.28,.12,.18,yellow);box(.84,-.65,.25,.6,.06,.18,lilac);
          ring(1.88,blue,.62,.28,.25,.012);ring(1.48,mint,1.1,.2,-.4,.009);
        } else if (variant === 'placement') {
          // PLACEMENT SIGNAL: portfolio -> interview -> offer -> career destination.
          // This scene is intentionally different from the learner journey and payment scenes.
          // A rising pathway connects a portfolio stack, interview dialogue, offer letter and destination beacon.
          const route: [number, number, number][] = [[-1.55,-.82,.02],[-.9,-.52,.02],[-.25,-.2,.02],[.42,.18,.02],[1.15,.58,.02],[1.52,.92,.02]];
          line(route, mint, .92);
          route.forEach((pt, i) => node(pt[0], pt[1], pt[2], [purple, blue, lilac, mint, yellow, yellow][i], i === 5 ? .13 : .055, i === 5 ? 'pulse' : 'bob'));
          const placementSignal=node(route[0][0],route[0][1],.3,yellow,.095,'pulse');
          const placementCurve=new T.CatmullRomCurve3(route.map(([x,y,z])=>new T.Vector3(x,y,z+.16)));
          choreography.push((t)=>{const progress=(t*.13)%1;placementSignal.position.copy(placementCurve.getPointAt(progress));placementSignal.scale.setScalar(.88+.42*(.5+.5*Math.sin(t*5.3)));});
          // Portfolio: layered proof cards with project lines.
          const portfolioBack = box(-1.13,.05,.08,.58,.78,.1,blue,false,'sway',.52,.055); portfolioBack.rotation.z=-.16;
          const portfolioFront = box(-.96,.02,.18,.58,.78,.1,lilac,false,'sway',.66,.045); portfolioFront.rotation.z=.08;
          for (let i=0;i<3;i++) box(-.98,.23-i*.18,.25,.31+(i%2)*.1,.035,.025,i===1?yellow:mint);
          // Interview: two facing speech panels connected by a moving signal.
          const talkA = add(new T.SphereGeometry(.31,20,14),mat(purple),-.1,.54,.14,1,'bob',.9,.08); talkA.scale.set(1.2,.78,.42);
          const talkB = box(.34,.48,.18,.52,.34,.12,mint,true,'bob',.72,.075);
          for(let i=0;i<3;i++) node(.21+i*.13,.48,.27,yellow,.025,'pulse');
          line([[-.04,.45,.2],[.1,.58,.2],[.2,.45,.2]],yellow,.85);
          // Offer letter with a visible approval seal.
          box(.91,.03,.12,.58,.82,.1,0xf4f0ff);
          box(.91,.29,.19,.34,.045,.025,purple);box(.91,.13,.19,.36,.035,.025,blue);box(.85,-.03,.19,.25,.035,.025,blue);
          const checkA=box(.95,-.22,.25,.07,.19,.06,mint);checkA.rotation.z=-.68;
          const checkB=box(1.08,-.15,.25,.07,.3,.06,mint);checkB.rotation.z=.68;
          // Destination beacon: a rising pillar and bright signal ring mark the next step.
          box(1.48,.24,.06,.18,.94,.16,yellow,false,'pulse',1.3,.13);
          ring(.42,mint,.15,.12,.18,.025,'pulse').position.set(1.48,.91,.16);
          ring(1.95,lilac,.74,.28,-.2,.012,'spin');
          node(-1.58,.72,.12,blue,.065,'pulse');node(.68,1.04,.12,mint,.07,'pulse');node(1.58,-.53,.12,yellow,.065,'pulse');
        } else if (variant === 'career') {
          // Career progression is a branching route with milestones, not a generic trophy.
          const path=[[-1.4,-.9,.05],[-.85,-.42,.05],[-.2,-.53,.05],[.25,.12,.05],[.85,.18,.05],[1.35,.82,.05]] as [number,number,number][];line(path,lilac,.82);
          path.forEach((p,i)=>{node(p[0],p[1],p[2],i===path.length-1?yellow:[blue,mint,purple,lilac][i%4],i===path.length-1?.14:.09,i===path.length-1?'pulse':'bob')});
          box(-.95,.45,.05,.34,.62,.22,blue,false,'bob');box(-.4,.62,.05,.34,.98,.22,purple,false,'bob');box(.15,.78,.05,.34,1.3,.22,mint,false,'bob');
          ring(1.6,yellow,.8,.2,.2,.014);
        } else if (variant === 'payment') {
          // Pay After Placement: learner foundations -> project proof -> qualifying job -> agreement-linked payment.
          // The golden token reaches the final payment milestone only after passing the placement stage.
          const stageXs=[-1.28,-.43,.43,1.28];
          line([[-1.56,-.92,.02],[-.9,-.92,.02],[-.2,-.92,.02],[.52,-.92,.02],[1.52,-.92,.02]],yellow,.72);
          stageXs.forEach((x,i)=>{node(x,-.92,.17,[purple,blue,mint,yellow][i],.1,i===3?'pulse':undefined);});
          // Learning folio.
          box(-1.28,.02,.04,.46,.68,.09,purple);box(-1.03,.02,.09,.46,.68,.09,lilac);box(-1.15,.02,.16,.045,.65,.05,yellow);
          for(let i=0;i<3;i++)box(-1.28,.2-i*.18,.23,.24,.025,.025,i===1?mint:blue);
          // Project proof / portfolio panel.
          box(-.43,.05,.08,.6,.8,.1,ink);box(-.43,.05,.15,.48,.66,.025,blue);for(let i=0;i<3;i++)box(-.48,.25-i*.17,.2,.28+(i%2)*.08,.035,.02,i===1?yellow:mint);
          // Qualifying placement: offer document with a visible check.
          box(.43,.04,.07,.55,.75,.08,lilac);box(.43,.3,.13,.29,.04,.025,purple);box(.43,.13,.13,.29,.035,.025,blue);box(.43,-.04,.13,.21,.035,.025,blue);
          const tick1=box(.48,-.28,.17,.09,.25,.08,mint);tick1.rotation.z=-.68;const tick2=box(.65,-.2,.17,.09,.4,.08,mint);tick2.rotation.z=.68;
          // Payment/coin appears as the final milestone, visually downstream of the offer.
          const coin=add(new T.CylinderGeometry(.29,.29,.11,36),mat(yellow,.35),1.28,.05,.2,1,'spin',.55,.025);coin.rotation.x=Math.PI/2;coin.scale.setScalar(.001);
          const coinInner=add(new T.TorusGeometry(.15,.025,8,28),new T.MeshBasicMaterial({color:0x725000}),1.28,.05,.28,1,'spin',-.3,.02);coinInner.rotation.x=Math.PI/2;coinInner.scale.setScalar(.001);
          const paymentStages: [number,number,number][] = stageXs.map((x)=>[x,-.92,.22]);
          const paymentCurve=new T.CatmullRomCurve3(paymentStages.map(([x,y,z])=>new T.Vector3(x,y,z)));
          const paymentSignal=node(paymentStages[0][0],paymentStages[0][1],.3,mint,.095,'pulse');
          choreography.push((t)=>{const progress=(t%7)/7;paymentSignal.position.copy(paymentCurve.getPointAt(progress));const reveal=Math.max(0,Math.min(1,(progress-.61)/.14));const bounce=1+Math.sin(Math.min(1,reveal)*Math.PI)*.3;const scale=Math.max(.001,reveal*bounce);coin.scale.setScalar(scale);coinInner.scale.setScalar(scale);coin.rotation.y=t*1.15;coinInner.rotation.z=-t*1.45;});
          ring(1.75,lilac,.82,.26,.14,.012);node(-1.64,.75,.12,blue,.06,'pulse');node(.05,1.02,.12,mint,.06,'pulse');node(1.56,.78,.12,yellow,.075,'pulse');
        } else if (variant === 'course') {
          // Open learning folio with layered pages, bookmark and practice markers.
          box(-.43,0,0,.92,1.48,.16,purple);box(.43,0,0,.92,1.48,.16,lilac);box(0,-.05,.1,.08,1.48,.1,yellow);
          for(let i=0;i<5;i++){box(-.46,.47-i*.22,.12,.52-(i%2)*.08,.035,.025,i===2?mint:blue);box(.4,.47-i*.22,.12,.56-(i%2)*.06,.035,.025,i===3?yellow:purple);}
          const bookmark=box(.28,.67,.17,.18,.54,.04,yellow,false,'sway',.48,.1);bookmark.rotation.z=.08;
          const pageMarker=node(-.65,.48,.25,yellow,.075,'pulse');
          const pagePath=new T.CatmullRomCurve3([
            new T.Vector3(-.65,.48,.25),new T.Vector3(-.2,.37,.25),new T.Vector3(-.65,.12,.25),
            new T.Vector3(-.2,-.08,.25),new T.Vector3(-.65,-.34,.25),new T.Vector3(.18,.42,.25),
            new T.Vector3(.65,.3,.25),new T.Vector3(.2,.05,.25),new T.Vector3(.65,-.2,.25),
          ]);
          choreography.push((time)=>{pageMarker.position.copy(pagePath.getPointAt((time*.12)%1));bookmark.rotation.z=.08+Math.sin(time*.7)*.08;});
          ring(1.7,mint,.7,.25,.1,.012);
        } else if (variant === 'contact') {
          // Chat bubbles and a live connection between learner and mentor.
          const bubble1=add(new T.SphereGeometry(.56,28,20),mat(pink),-.45,.25,0,1,'bob',.9,.13);bubble1.scale.set(1.2,.8,.38);
          const bubble2=box(.72,-.35,.08,.9,.58,.22,purple,true,'sway',.75,.1);
          for(let i=0;i<3;i++)box(.42+i*.23,-.32,.22,.11,.05,.03,[yellow,mint,lilac][i]);line([[-1.2,-.65,.05],[-.6,-.9,.05],[.3,-.9,.05],[1.4,-.5,.05]],blue,.65);
          node(-1.35,.75,.1,mint,.09,'pulse');node(1.36,.6,.1,yellow,.09,'pulse');ring(1.75,lilac,.8,.12,.2,.014);
        } else if (variant === 'about') {
          // A connected team constellation: four distinct nodes around a shared core.
          node(0,0,.1,yellow,.28,'pulse');const pts=[[-1.12,.64,.05],[1.08,.65,.05],[-1.13,-.65,.05],[1.1,-.66,.05]] as [number,number,number][];
          pts.forEach((p,i)=>{line([[0,0,.08],p],i%2?mint:lilac,.75);node(p[0],p[1],p[2],[purple,blue,mint,pink][i],.22,'bob');node(p[0]*.52,p[1]*.52,.14,yellow,.055,'pulse')});ring(1.55,lilac,.5,.32,.2,.012);
        } else if (variant === 'insight') {
          // Editorial stack with a floating graph/chart sheet.
          box(-.6,-.08,-.03,.82,1.45,.13,pink,false,'sway');box(.2,-.1,.06,.82,1.65,.13,purple,false,'sway');box(.08,.72,.15,1.12,.075,.1,yellow);
          for(let i=0;i<4;i++)box(.14,.38-i*.23,.16,.66-(i%2)*.16,.03,.025,i===1?mint:blue);ring(1.72,blue,.7,.3,.1,.012);
        } else if (variant === 'ai') {
          // A neural-network nucleus with asymmetrical links and independently pulsing nodes.
          add(new T.IcosahedronGeometry(.62,2),mat(purple,.38),0,.05,.1,1,'spin',.22,.02);add(new T.SphereGeometry(.73,24,18),new T.MeshBasicMaterial({color:lilac,wireframe:true,transparent:true,opacity:.42}),0,.05,0,1,'spin',-.18,.02);
          const pts=[[-1.3,.62,.1],[-1.1,-.55,.1],[-.25,1.2,.1],[.88,1.02,.1],[1.35,.18,.1],[.9,-.75,.1],[.08,-1.1,.1]] as [number,number,number][];
          pts.forEach((p,i)=>{line([[0,.05,.08],p],i%2?mint:lilac,.62);node(p[0],p[1],p[2],[yellow,mint,blue,pink,lilac][i%5],.085,'pulse')});ring(1.72,yellow,.7,.32,.24,.013);
        } else if (variant === 'data') {
          // Data visualization: extruded bars, axes and plotted observations.
          const heights=[.48,.82,1.2,.72,1.68,1.98];const cols=[blue,lilac,purple,mint,yellow,pink];
          heights.forEach((h,i)=>box(-1.2+i*.47,-.8+h/2,.1,.29,h,.26,cols[i],false,'pulse',.65+i*.11,.14));line([[-1.55,-.85,.15],[1.55,-.85,.15]],lilac,.75);line([[-1.5,-.85,.15],[-1.5,1.4,.15]],lilac,.75);
          const plot=[[-1.15,.1,.25],[-.65,.35,.25],[-.1,.27,.25],[.4,.72,.25],[.9,.62,.25],[1.3,1.17,.25]] as [number,number,number][];line(plot,yellow,.9);plot.forEach((p,i)=>node(p[0],p[1],p[2],i%2?mint:yellow,.055,'pulse'));
        } else if (variant === 'design') {
          // Design canvas, palette swatches and a pen/tool silhouette.
          box(-.25,0,0,1.58,1.7,.14,ink);box(-.25,0,.09,1.36,1.48,.025,lilac);box(-.58,.38,.13,.68,.62,.025,pink);box(.13,.54,.14,.43,.17,.025,yellow);box(.13,.25,.14,.43,.08,.025,purple);box(.13,.08,.14,.43,.08,.025,mint);
          const pencil=add(new T.CylinderGeometry(.07,.07,1.7,12),mat(yellow),.95,-.1,.25,1,'sway',.8,.08);pencil.rotation.z=-.56;
          [pink,purple,mint,yellow,blue].forEach((c,i)=>node(-1.12+i*.45,-.94,.2,c,.07,'pulse'));ring(1.78,lilac,.72,.2,.1,.012);
        } else if (variant === 'coding') {
          // A developer's editor: terminal window, syntax tokens, and connected code blocks.
          box(-.28,.05,0,1.8,1.45,.14,ink);box(-.28,.05,.1,1.6,1.24,.025,0x382451);
          for(let i=0;i<5;i++){box(-.78,.49-i*.22,.14,.4+(i%3)*.15,.035,.02,i===1?yellow:i===3?mint:blue);box(.15,.49-i*.22,.14,.54-(i%2)*.1,.035,.02,i===2?pink:lilac);}
          const braces=add(new T.TorusGeometry(.37,.075,8,4),mat(yellow),1.13,.15,.18,1,'sway',.8,.12);braces.rotation.z=Math.PI/2;
          const codeCursor=box(-.78,.49,.2,.035,.09,.025,yellow,false,'pulse',2.2,.25);
          choreography.push((t)=>{const row=Math.floor(t*1.15)%5;codeCursor.position.set(-.78+(row%3)*.16,.49-row*.22,.2);codeCursor.visible=(Math.floor(t*2.1)%2)===0;});
          node(-1.25,1.0,.12,mint,.08,'pulse');node(1.35,-.7,.12,pink,.08,'pulse');line([[-1.48,-.95,.1],[-.7,-1.18,.1],[.25,-1.1,.1],[1.25,-.84,.1]],blue,.65);ring(1.88,lilac,.65,.2,-.25,.012);
        } else if (variant === 'media') {
          // Media creation workstation: lens barrel, play marker and a multitrack timeline.
          const lens=add(new T.CylinderGeometry(.58,.58,.28,40),mat(ink,.35),-.5,.3,.12,1,'spin',.3,.02);lens.rotation.x=Math.PI/2;
          add(new T.TorusGeometry(.43,.075,10,48),mat(pink),-.5,.3,.31,1,'spin',-.2,.02);add(new T.SphereGeometry(.25,20,14),mat(blue),-.5,.3,.28,1,'pulse',1.1,.12);
          const play=add(new T.ConeGeometry(.3,.52,3),mat(yellow),.55,.36,.16);play.rotation.z=-Math.PI/2;
          for(let i=0;i<4;i++){box(.05,-.43-i*.2,.15,2.25,.075,.045,[mint,purple,pink,blue][i],false,'pulse',.55+i*.22,.1);node(-1.15+i*.18,-.43-i*.2,.18,yellow,.035);}
          const playhead=box(-1.0,-.73,.28,.035,.72,.035,yellow,false,'pulse',2,.1);
          choreography.push((t)=>{playhead.position.x=-1.0+((t*.28)%1.95);playhead.scale.y=.82+.18*(.5+.5*Math.sin(t*7));});
          ring(1.72,lilac,.75,.28,.17,.012);
        } else if (variant === 'internship') {
          // Production-work metaphor: laptop plus checklist and team handoff nodes.
          box(-.38,-.33,.1,1.52,.96,.12,ink);box(-.38,-.33,.17,1.32,.76,.025,blue);box(-.38,-.88,.1,1.78,.12,.4,lilac);
          for(let i=0;i<4;i++){box(-.78,.0-i*.16,.2,.45,.035,.025,i===2?yellow:mint);node(.23,.0-i*.16,.2,i===2?yellow:mint,.035)}
          const reviewCursor=node(.23,.0,.31,yellow,.075,'pulse');
          choreography.push((t)=>{const idx=Math.floor(t*1.2)%4;reviewCursor.position.set(.23,-idx*.16,.31);reviewCursor.scale.setScalar(.7+.3*(.5+.5*Math.sin(t*5)));});
          box(.92,.08,.2,.55,.82,.12,yellow,false,'bob');box(.92,.08,.28,.38,.62,.02,ink);for(let i=0;i<3;i++)box(.88,.27-i*.18,.31,.23,.025,.015,mint);
          line([[-1.45,1.15,.08],[-.7,1.37,.08],[.2,1.18,.08],[1.1,1.35,.08]],purple,.6);
        } else if (variant === 'academy') {
          // HOMEPAGE SIGNATURE: restore the original orbiting-ball animation.
          // A faceted violet core sits inside a delicate wireframe shell, with two orbital rings
          // and sixteen small brand-coloured spheres travelling around it.
          const ballMaterial = new T.MeshStandardMaterial({
            color: purple, roughness: .25, metalness: .28, flatShading: true,
            emissive: purple, emissiveIntensity: .12,
          });
          const core = add(new T.IcosahedronGeometry(1.23, 2), ballMaterial, 0, 0, 0, 1, 'spin', .95, .04);
          const shell = add(
            new T.IcosahedronGeometry(1.34, 1),
            new T.MeshBasicMaterial({ color: lilac, wireframe: true, transparent: true, opacity: .42 }),
            0, 0, 0, 1, 'spin', -.45, .03,
          );
          const outerRing = ring(2.05, lilac, .8, -.32, .15, .012, 'spin');
          const outerRingTwo = ring(2.32, yellow, 1.25, .3, -.55, .009, 'spin');

          const orbitPalette = [yellow, 0xffffff, lilac, purple];
          const satellites: Array<{ object: import('three').Object3D; angle: number; radius: number; phase: number; index: number }> = [];
          for (let i = 0; i < 16; i++) {
            const angle = (i / 16) * Math.PI * 2;
            const radius = i % 3 === 0 ? 2.14 : 1.78 + (i % 4) * .14;
            const dot = node(
              Math.cos(angle) * radius,
              Math.sin(angle) * radius * .76,
              ((i % 5) - 2) * .18,
              orbitPalette[i % orbitPalette.length],
              i % 4 === 0 ? .075 : .044,
            );
            satellites.push({ object: dot, angle, radius, phase: (i % 5) * .52, index: i });
          }
          choreography.push((time) => {
            satellites.forEach(({ object, angle, radius, phase, index }) => {
              const theta = angle + time * (.115 + (index % 4) * .012);
              object.position.set(
                Math.cos(theta) * radius,
                Math.sin(theta) * radius * .76,
                Math.sin(theta * 1.15 + phase) * .22,
              );
            });
            core.rotation.y = time * .22;
            core.rotation.x = Math.sin(time * .48) * .12;
            shell.rotation.y = -time * .14;
            shell.rotation.x = Math.sin(time * .35) * .08;
          });
        } else {
          // Safe fallback composition for any unrecognized variant.
          add(new T.IcosahedronGeometry(1.02,2),mat(purple,.28),0,0,0,1,'spin',.18,.02);
          add(new T.IcosahedronGeometry(1.12,1),new T.MeshBasicMaterial({color:lilac,wireframe:true,transparent:true,opacity:.42}),0,0,0,1,'spin',-.12,.02);
          ring(1.7,lilac,.8,-.3,.2,.014);ring(1.95,yellow,1.2,.3,-.5,.012);
          node(-1.8,.55,.1,mint,.07,'pulse');node(1.8,-.65,.1,yellow,.09,'pulse');node(.2,1.7,.1,blue,.06,'pulse');
        }

        const contentBounds=new T.Box3().setFromObject(rig);
        const contentCenter=contentBounds.getCenter(new T.Vector3());
        const contentSize=contentBounds.getSize(new T.Vector3());
        const keyLight=new T.PointLight(0xffffff,26,30);keyLight.position.set(3,3,5);scene.add(keyLight);scene.add(new T.AmbientLight(0xffffff,1.4));
        renderer=new T.WebGLRenderer({alpha:true,antialias:window.innerWidth>650,powerPreference:'low-power'});
        renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth<700?1.05:1.4));renderer.setSize(host.clientWidth,host.clientHeight);renderer.outputColorSpace=T.SRGBColorSpace;
        renderer.domElement.setAttribute('aria-hidden','true');renderer.domElement.className='hero-scene-canvas';Object.assign(renderer.domElement.style,{position:'absolute',inset:'0',width:'100%',height:'100%',display:'block',zIndex:'2',pointerEvents:'none'});host.dataset.webgl='ready';host.appendChild(renderer.domElement);
        const draw=()=>{
          if(disposed||!renderer||!scene||!camera||!rig)return;
          if(!reduced){const now=performance.now()*.001;
            // Each audience/category has its own restrained camera/rig rhythm; key objects below run their own choreography.
            if (variant === 'academy') {
              // Original homepage ball motion: continuous slow orbit with a gentle floating tilt.
              rig.rotation.y += .0032;
              rig.rotation.x = Math.sin(performance.now() * .00032) * .11;
            } else {
              const orbitSpeed = variant === 'school' ? .62 : variant === 'college' ? .34 : variant === 'graduate' ? .46 : variant === 'placement' ? .24 : variant === 'payment' ? .2 : (variant === 'professional' || variant === 'business') ? .38 : variant === 'design' ? .42 : variant === 'data' ? .5 : .36;
              const orbitAmount = variant === 'school' ? .085 : variant === 'college' ? .045 : variant === 'graduate' ? .07 : variant === 'placement' ? .035 : variant === 'payment' ? .025 : .055;
              rig.rotation.y = Math.sin(now * orbitSpeed) * orbitAmount;
              rig.rotation.x = Math.sin(now * (orbitSpeed * 1.22)) * orbitAmount * .58;
            }
            motion.forEach((item)=>{const t=now*item.speed+item.phase;const o=item.object;if(item.kind==='bob')o.position.y=item.baseY+Math.sin(t)*item.amplitude;else if(item.kind==='spin'){o.rotation.z+=.0025*item.speed;}else if(item.kind==='pulse')o.scale.y=item.baseScaleY*(1+Math.sin(t)*item.amplitude);else if(item.kind==='sway')o.rotation.z=Math.sin(t)*item.amplitude;});
            choreography.forEach((animate)=>animate(now));
          }
          renderer.render(scene,camera);if(running&&!reduced)frame=requestAnimationFrame(draw);
        };
        const resize=()=>{if(!hostRef.current||!camera||!renderer||!rig)return;const width=Math.max(1,hostRef.current.clientWidth);const height=Math.max(1,hostRef.current.clientHeight);camera.aspect=width/height;camera.updateProjectionMatrix();const distance=camera.position.z-contentBounds.max.z;const viewHeight=2*Math.tan(T.MathUtils.degToRad(camera.fov/2))*distance;const fill=width>=700?1:width>=350?.91:.86;const scale=Math.min(viewHeight*camera.aspect*fill/contentSize.x,viewHeight*fill/contentSize.y);rig.scale.setScalar(scale);rig.position.set(-contentCenter.x*scale,-contentCenter.y*scale,0);renderer.setSize(width,height,false);if(!running||reduced)renderer.render(scene!,camera);};
        resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);resize();
        intersectionObserver=new IntersectionObserver(entries=>{const visible=entries.some(e=>e.isIntersecting);if(visible&&!running){running=true;draw();}else if(!visible&&running){running=false;cancelAnimationFrame(frame);}},{threshold:.05});intersectionObserver.observe(host);
        if(reduced){choreography.forEach((animate)=>animate(0));resize();renderer.render(scene,camera);}
      } catch (error) { if (host) { host.dataset.webgl='fallback'; host.dataset.animationError='true'; } console.warn(`[Karka 3D] Could not initialize ${variant} scene; showing CSS fallback.`, error); }
    };
    void setup();
    return ()=>{disposed=true;running=false;cancelAnimationFrame(frame);resizeObserver?.disconnect();intersectionObserver?.disconnect();scene?.traverse((o)=>{const object=o as import('three').Mesh;if(object.geometry)object.geometry.dispose();const material=object.material;if(Array.isArray(material))material.forEach(x=>x.dispose());else if(material)material.dispose();});renderer?.dispose();renderer?.domElement.remove();if(hostRef.current){delete hostRef.current.dataset.webgl;delete hostRef.current.dataset.animationError;}};
  },[variant]);

  return (
    <div className={`hero-scene hero-scene-${variant}`} ref={hostRef} aria-label={`Animated 3D ${variant} learning illustration`}>
      <div className="scene-fallback" aria-hidden="true">
        <span className="fallback-core" />
        <span className="fallback-ring ring-one" />
        <span className="fallback-ring ring-two" />
        <span className="fallback-node node-one" />
        <span className="fallback-node node-two" />
        <span className="fallback-node node-three" />
      </div>
    </div>
  );
}
