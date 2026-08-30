import type { Meeting } from '@/data/meeting-fixture';

export function FollowUpDraft({ meeting }: { meeting: Meeting }) {
  const { followUpDraft, commitments } = meeting;

  const sourceCommitments = followUpDraft.sourceCommitments
    .map((id) => commitments.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);

  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        Follow-up Draft
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Draft email generated from meeting commitments. Awaiting review before sending.
      </p>

      <div className="mt-6 overflow-hidden rounded-lg border border-border bg-background">
        <div className="border-b border-border bg-secondary/30 px-5 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
              <span>
                To: <span className="font-medium text-foreground">{followUpDraft.recipient}</span>
              </span>
              <span>
                Status:{' '}
                <span className="font-medium text-accent">{followUpDraft.status}</span>
              </span>
            </div>
            <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              Draft
            </span>
          </div>
          <p className="mt-2 text-sm font-medium text-foreground">
            {followUpDraft.subject}
          </p>
        </div>

        <div className="px-5 py-4">
          <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed text-foreground/90">
            {followUpDraft.body}
          </pre>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
          Source Commitments
        </h4>
        <div className="mt-3 space-y-2">
          {sourceCommitments.map((c) => (
            <div
              key={c.id}
              className="flex items-start gap-3 rounded border border-border bg-secondary/20 px-3 py-2"
            >
              <span className="font-mono text-[11px] text-accent/70">{c.id}</span>
              <div className="flex-1">
                <p className="text-xs font-medium text-foreground">{c.commitment}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {c.party} · Due {c.deadline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
