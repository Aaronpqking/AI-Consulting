import type { Meeting } from '@/data/meeting-fixture';

type KnowledgeUpdate = Meeting['knowledgeUpdates'][number];

const typeStyles: Record<KnowledgeUpdate['type'], string> = {
  'decision-record': 'bg-accent/10 text-accent',
  'commitment-record': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'relationship-note': 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  'meeting-summary': 'bg-secondary text-muted-foreground',
  'opportunity-insight': 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
};

export function KnowledgeUpdates({ meeting }: { meeting: Meeting }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        Knowledge Updates
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Structured records derived from the meeting for the organizational knowledge base.
      </p>

      <div className="mt-6 space-y-3">
        {meeting.knowledgeUpdates.map((update) => (
          <div
            key={update.id}
            className="rounded-lg border border-border bg-secondary/20 p-4"
          >
            <div className="flex items-center gap-2">
              <span
                className={`rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${typeStyles[update.type]}`}
              >
                {update.type.replace(/-/g, ' ')}
              </span>
              <span className="font-mono text-[11px] text-accent/50">{update.id}</span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-foreground/90">
              {update.description}
            </p>

            <div className="mt-3 border-l-2 border-accent/40 pl-3">
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                {update.sourceEvidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
