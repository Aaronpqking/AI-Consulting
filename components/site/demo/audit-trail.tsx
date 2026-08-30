import type { Meeting } from '@/data/meeting-fixture';

export function AuditTrail({ meeting }: { meeting: Meeting }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        Source Traceability
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Every extracted item is linked to the transcript excerpt it was derived from.
      </p>

      <div className="mt-6 space-y-4">
        {meeting.transcriptExcerpts.map((excerpt) => {
          const linkedAction = meeting.actionItems.find((a) => a.id === excerpt.linkedItemId);
          const linkedDecision = meeting.decisions.find((d) => d.id === excerpt.linkedItemId);
          const linkedQuestion = meeting.questions.find((q) => q.id === excerpt.linkedItemId);
          const linkedCommitment = meeting.commitments.find((c) => c.id === excerpt.linkedItemId);

          const linkedLabel = linkedAction
            ? `Action Item: ${linkedAction.task}`
            : linkedDecision
            ? `Decision: ${linkedDecision.decision}`
            : linkedQuestion
            ? `Question: ${linkedQuestion.question}`
            : linkedCommitment
            ? `Commitment: ${linkedCommitment.commitment}`
            : 'Linked item';

          return (
            <div key={excerpt.id} className="border-l-2 border-accent/40 pl-4">
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="font-mono text-accent">{excerpt.timestamp}</span>
                <span>{excerpt.speaker}</span>
              </div>
              <p className="mt-1.5 text-sm italic leading-relaxed text-foreground/80">
                "{excerpt.text}"
              </p>
              <p className="mt-2 text-[11px] text-muted-foreground">
                → <span className="text-accent">{linkedLabel}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
