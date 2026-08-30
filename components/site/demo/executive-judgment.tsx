import { cn } from '@/lib/utils';
import type { Meeting } from '@/data/meeting-fixture';

type JudgmentItem = Meeting['executiveJudgment'][number];

const statusStyles: Record<JudgmentItem['status'], string> = {
  pending: 'bg-accent/10 text-accent',
  approved: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  rejected: 'bg-destructive/10 text-destructive',
  escalated: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
};

export function ExecutiveJudgment({ meeting }: { meeting: Meeting }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        Executive Judgment
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Items that require human judgment before downstream automation can proceed.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {meeting.executiveJudgment.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-lg border border-accent/30 bg-accent/5 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-foreground">{item.item}</p>
              <span
                className={cn(
                  'shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                  statusStyles[item.status]
                )}
              >
                {item.status}
              </span>
            </div>

            <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
              {item.context}
            </p>

            <div className="mt-3 border-t border-accent/20 pt-3">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                Required Action
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">
                {item.requiredAction}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
