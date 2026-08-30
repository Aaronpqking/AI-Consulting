import { Reveal } from '@/components/site/reveal';

const STAGES = [
  {
    num: '01',
    name: 'Information',
    sources: ['Meetings', 'Email', 'Documents', 'CRM', 'Commerce', 'Research'],
  },
  {
    num: '02',
    name: 'Intelligence',
    sources: ['Normalize', 'Retrieve', 'Correlate', 'Classify', 'Reason'],
  },
  {
    num: '03',
    name: 'Decision',
    sources: ['Recommendations', 'Tasks', 'Commitments', 'Exceptions'],
  },
  {
    num: '04',
    name: 'Governance',
    sources: ['Rules', 'Confidence', 'Permissions', 'Human Review'],
  },
  {
    num: '05',
    name: 'Action',
    sources: ['CRM', 'Email', 'Calendar', 'Tasks', 'Workflows'],
  },
  {
    num: '06',
    name: 'Evaluation',
    sources: ['Logs', 'Evidence', 'Outcomes', 'Feedback'],
  },
];

export function SystemsModelGraphic() {
  return (
    <div className="relative">
      {/* Horizontal connecting line on desktop */}
      <div className="pointer-events-none absolute left-0 right-0 top-[27px] hidden h-px bg-border lg:block" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
        {STAGES.map((stage, i) => (
          <Reveal key={stage.num} delay={i * 80} className="group relative">
            <div className="flex items-center gap-3 lg:flex-col lg:items-start">
              <div className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-accent">
                <span className="font-mono text-xs font-semibold text-accent">
                  {stage.num}
                </span>
              </div>
              <div className="lg:mt-5">
                <h3 className="font-serif text-base font-semibold tracking-tight">
                  {stage.name}
                </h3>
                <ul className="mt-2.5 space-y-1">
                  {stage.sources.map((s) => (
                    <li
                      key={s}
                      className="text-[11px] leading-relaxed text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {i < STAGES.length - 1 && (
              <div className="mt-3 hidden text-center text-accent/30 lg:block">
                →
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
