export type HeroVariant = 'academy' | 'school' | 'college' | 'graduate' | 'professional' | 'career' | 'placement' | 'payment' | 'course' | 'contact' | 'about' | 'insight' | 'ai' | 'data' | 'design' | 'business' | 'internship' | 'coding' | 'media';

type ArtifactCopy = {
  label: string;
  title: string;
  detail: string;
  note: string;
  steps: [string, string, string];
};

const artifacts: Record<HeroVariant, ArtifactCopy> = {
  academy: {
    label: 'Project practice',
    title: 'A project takes shape',
    detail: 'Start with a clear brief. Build, review and explain the decisions behind your work.',
    note: 'Keep the thinking visible.',
    steps: ['Understand', 'Build', 'Explain'],
  },
  school: {
    label: 'First steps',
    title: 'Start with a question',
    detail: 'Learn the basics, try an idea and see what your first lines of code can do.',
    note: 'Small experiments count.',
    steps: ['Explore', 'Try', 'Share'],
  },
  college: {
    label: 'Coursework',
    title: 'Turn study into practice',
    detail: 'Connect technical foundations with work you can refine and talk through.',
    note: 'Show how you got there.',
    steps: ['Learn', 'Apply', 'Review'],
  },
  graduate: {
    label: 'Career change',
    title: 'Make your skills visible',
    detail: 'Build practical experience and describe your contribution with clarity.',
    note: 'Evidence over buzzwords.',
    steps: ['Learn', 'Build', 'Present'],
  },
  professional: {
    label: 'Continuing learning',
    title: 'Choose a useful next step',
    detail: 'Explore a focused skill, apply it in practice and plan what comes next.',
    note: 'Start from your goal.',
    steps: ['Focus', 'Practice', 'Progress'],
  },
  career: {
    label: 'Career preparation',
    title: 'Prepare with proof',
    detail: 'Bring your projects, decisions and experience into the next conversation.',
    note: 'Make your part clear.',
    steps: ['Build', 'Explain', 'Prepare'],
  },
  placement: {
    label: 'Placement support',
    title: 'Make preparation repeatable',
    detail: 'Work on your portfolio, communication and interview readiness.',
    note: 'Practice with purpose.',
    steps: ['Review', 'Practice', 'Prepare'],
  },
  payment: {
    label: 'Pay After Placement',
    title: 'Understand every step',
    detail: 'Review eligibility and the written terms for the program before enrolling.',
    note: 'Read the agreement.',
    steps: ['Check', 'Confirm', 'Decide'],
  },
  course: {
    label: 'Course directory',
    title: 'Find a track that fits',
    detail: 'Compare learning areas, then confirm current curriculum and schedule.',
    note: 'Ask what is current.',
    steps: ['Explore', 'Compare', 'Ask'],
  },
  contact: {
    label: 'Start a conversation',
    title: 'Bring your questions',
    detail: 'Ask about course options, current batches, projects or eligibility.',
    note: 'Clarity comes first.',
    steps: ['Ask', 'Discuss', 'Decide'],
  },
  about: {
    label: 'The Karka approach',
    title: 'Learn by making',
    detail: 'Build foundations, practice through projects and prepare for next steps.',
    note: 'Connect learning to doing.',
    steps: ['Learn', 'Build', 'Grow'],
  },
  insight: {
    label: 'Learning notes',
    title: 'Ideas worth putting to work',
    detail: 'Practical guides for choosing what to learn, build and explain.',
    note: 'Keep asking why.',
    steps: ['Read', 'Try', 'Reflect'],
  },
  ai: {
    label: 'AI & data',
    title: 'Use tools with intent',
    detail: 'Ask better questions, test what you learn and check the result.',
    note: 'Verify the answer.',
    steps: ['Question', 'Practice', 'Check'],
  },
  data: {
    label: 'Data practice',
    title: 'Make information useful',
    detail: 'Explore data, look for patterns and explain what the evidence says.',
    note: 'Let evidence lead.',
    steps: ['Collect', 'Analyze', 'Explain'],
  },
  design: {
    label: 'Design practice',
    title: 'Design from a real need',
    detail: 'Understand the problem, sketch a response and refine the experience.',
    note: 'Begin with people.',
    steps: ['Observe', 'Prototype', 'Refine'],
  },
  business: {
    label: 'Business skills',
    title: 'Connect tools to the work',
    detail: 'Build useful foundations for day-to-day business and operations.',
    note: 'Make the task clearer.',
    steps: ['Understand', 'Practice', 'Apply'],
  },
  internship: {
    label: 'Internship learning',
    title: 'Practice with a purpose',
    detail: 'Develop skills through guided learning and project-oriented practice.',
    note: 'Show your contribution.',
    steps: ['Learn', 'Contribute', 'Reflect'],
  },
  coding: {
    label: 'Software development',
    title: 'Build from the first line',
    detail: 'Connect interface, application logic and data through project work.',
    note: 'Test each assumption.',
    steps: ['Plan', 'Build', 'Test'],
  },
  media: {
    label: 'Digital media',
    title: 'Make ideas clear',
    detail: 'Practice visual communication, editing and thoughtful composition.',
    note: 'Every choice has a reason.',
    steps: ['Frame', 'Create', 'Refine'],
  },
};

export default function LearningArtifact({ variant }: { variant: HeroVariant }) {
  const artifact = artifacts[variant];

  return (
    <div className={`learning-artifact learning-artifact-${variant}`} aria-hidden="true">
      <div className="artifact-topline">
        <span>Karka / Field notes</span>
        <span>Learning studio</span>
      </div>
      <div className="artifact-sheet">
        <div className="artifact-sheet-copy">
          <span className="artifact-kicker">{artifact.label}</span>
          <h2>{artifact.title}</h2>
          <p>{artifact.detail}</p>
        </div>
        <aside className="artifact-margin-note">
          <span>MARGIN NOTE</span>
          {artifact.note}
        </aside>
      </div>
      <span className="artifact-margin-rule" />
      <div className="artifact-steps">
        {artifact.steps.map((step, index) => (
          <div className="artifact-step" key={step}>
            <small>0{index + 1}</small>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
      <div className="artifact-bottomline">
        <span>Learn / Build / Explain</span>
        <span>Project-led practice</span>
      </div>
    </div>
  );
}
