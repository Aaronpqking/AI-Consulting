import { cn } from '@/lib/utils';
import type { Meeting } from '@/data/meeting-fixture';

type EntityResolutionItem = Meeting['entityResolution'][number];

export function EntityResolution({ meeting }: { meeting: Meeting }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        Entity Resolution
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Transcript mentions resolved to known contacts. Ambiguous mentions are flagged for human disambiguation.
      </p>

      <div className="mt-6 space-y-4">
        {meeting.entityResolution.map((item) => (
          <ResolutionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ResolutionCard({ item }: { item: EntityResolutionItem }) {
  if (item.status === 'human-review-required') {
    return <HumanReviewCard item={item} />;
  }

  return (
    <div className="rounded-lg border border-border bg-secondary/20 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              "{item.transcriptMention}"
            </span>
            <span className="text-xs text-muted-foreground">→</span>
            <span className="text-sm font-medium text-accent">
              {item.resolvedName}
            </span>
          </div>
          {item.resolvedRole && (
            <p className="mt-1 text-xs text-muted-foreground">
              Role: <span className="text-foreground">{item.resolvedRole}</span>
              {item.resolvedCompany && (
                <>
                  {' · '}Company: <span className="text-foreground">{item.resolvedCompany}</span>
                </>
              )}
            </p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
            Auto-resolved
          </span>
          <span className="text-[11px] text-muted-foreground">
            Confidence: <span className="text-accent">{Math.round(item.confidence * 100)}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function HumanReviewCard({ item }: { item: EntityResolutionItem }) {
  const isAmbiguous = item.confidence < 0.6;

  return (
    <div
      className={cn(
        'rounded-lg border p-5',
        isAmbiguous
          ? 'border-accent/40 bg-accent/5 ring-1 ring-accent/20'
          : 'border-accent/40 bg-accent/5'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              "{item.transcriptMention}"
            </span>
            {isAmbiguous && (
              <span className="rounded bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                Ambiguous
              </span>
            )}
          </div>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            Human Review Required
          </p>
        </div>
        <span className="text-[11px] text-muted-foreground">
          Confidence:{' '}
          <span className="font-semibold text-amber-600 dark:text-amber-400">
            {Math.round(item.confidence * 100)}%
          </span>
        </span>
      </div>

      <div className="mt-3 border-l-2 border-accent/40 pl-3">
        <p className="text-sm italic leading-relaxed text-foreground/80">
          {item.transcriptExcerpt}
        </p>
      </div>

      {item.candidates && item.candidates.length > 0 && (
        <div className="mt-4">
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            Candidates ({item.candidates.length})
          </h4>
          <div className="mt-2 space-y-2">
            {item.candidates.map((candidate) => (
              <div
                key={candidate.crmId}
                className="flex items-center justify-between gap-3 rounded border border-border bg-background/60 px-3 py-2"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {candidate.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {candidate.role} · {candidate.company}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="font-mono text-accent/70">{candidate.crmId}</span>
                  <span>
                    Match:{' '}
                    <span className="font-semibold text-foreground">
                      {Math.round(candidate.matchScore * 100)}%
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
