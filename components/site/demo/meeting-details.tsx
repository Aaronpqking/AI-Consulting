import { cn } from '@/lib/utils';
import type { Meeting } from '@/data/meeting-fixture';

export function MeetingDetails({ meeting }: { meeting: Meeting }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <DetailBlock title="Decisions" accent>
        {meeting.decisions.map((d) => (
          <div key={d.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
            <p className="text-sm font-medium text-foreground">{d.decision}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{d.context}</p>
            <div className="mt-2 flex gap-3 text-[11px] text-muted-foreground">
              <span>By: <span className="text-foreground">{d.decidedBy}</span></span>
              <span>Confidence: <span className="text-accent">{Math.round(d.confidence * 100)}%</span></span>
            </div>
          </div>
        ))}
      </DetailBlock>

      <DetailBlock title="Commitments">
        {meeting.commitments.map((c) => (
          <div key={c.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
            <p className="text-sm font-medium text-foreground">{c.commitment}</p>
            <div className="mt-2 flex gap-3 text-[11px] text-muted-foreground">
              <span>Party: <span className="text-foreground">{c.party}</span></span>
              <span>Deadline: <span className="text-foreground">{c.deadline}</span></span>
              <span>Confidence: <span className="text-accent">{Math.round(c.confidence * 100)}%</span></span>
            </div>
          </div>
        ))}
      </DetailBlock>

      <DetailBlock title="Open Questions">
        {meeting.questions.map((q) => (
          <div key={q.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
            <p className="text-sm font-medium text-foreground">{q.question}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{q.context}</p>
            <div className="mt-2">
              <span
                className={cn(
                  'rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                  q.addressed ? 'bg-accent/10 text-accent' : 'bg-muted text-muted-foreground'
                )}
              >
                {q.addressed ? 'Addressed' : 'Unaddressed'}
              </span>
            </div>
          </div>
        ))}
      </DetailBlock>

      <DetailBlock title="Risks">
        {meeting.risks.map((r) => (
          <div key={r.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
            <p className="text-sm font-medium text-foreground">{r.risk}</p>
            <div className="mt-2 flex gap-3 text-[11px] text-muted-foreground">
              <span>Noted by: <span className="text-foreground">{r.notedBy}</span></span>
              <span>
                Severity:{' '}
                <span
                  className={cn(
                    r.severity === 'high' && 'text-destructive',
                    r.severity === 'medium' && 'text-accent',
                    r.severity === 'low' && 'text-muted-foreground'
                  )}
                >
                  {r.severity}
                </span>
              </span>
            </div>
          </div>
        ))}
      </DetailBlock>
    </div>
  );
}

function DetailBlock({
  title,
  accent,
  children,
}: {
  title: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('rounded-lg border p-6', accent ? 'border-accent/30 bg-accent/5' : 'border-border bg-card')}>
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        {title}
      </h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}
