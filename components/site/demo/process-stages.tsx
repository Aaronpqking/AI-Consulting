import { cn } from '@/lib/utils';

const STAGES = [
  { num: '01', name: 'INGEST', desc: 'Transcript received' },
  { num: '02', name: 'NORMALIZE', desc: 'Speakers identified' },
  { num: '03', name: 'EXTRACT', desc: 'Items, decisions, commitments' },
  { num: '04', name: 'CLASSIFY', desc: 'Priority and type assigned' },
  { num: '05', name: 'REVIEW', desc: 'Human approval queue' },
  { num: '06', name: 'ROUTE', desc: 'Actions sent to systems' },
];

export function ProcessStages() {
  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {STAGES.map((stage, i) => (
        <div
          key={stage.num}
          className={cn(
            'relative rounded-lg border border-border bg-card p-4',
            i === 4 && 'border-accent/40 bg-accent/5'
          )}
        >
          <div className="font-mono text-xs font-semibold text-accent">
            {stage.num}
          </div>
          <div className="mt-2 font-serif text-sm font-semibold tracking-tight">
            {stage.name}
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            {stage.desc}
          </p>
          {i < STAGES.length - 1 && (
            <div className="mt-3 hidden text-center text-accent/40 lg:block">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
