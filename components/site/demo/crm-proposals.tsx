import { cn } from '@/lib/utils';
import type { Meeting } from '@/data/meeting-fixture';

type CrmProposal = Meeting['crmProposals'][number];

const statusStyles: Record<CrmProposal['status'], string> = {
  pending: 'bg-accent/10 text-accent',
  approved: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  rejected: 'bg-destructive/10 text-destructive',
  'needs-review': 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
};

export function CrmProposals({ meeting }: { meeting: Meeting }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        CRM Proposals
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Proposed updates to CRM records derived from meeting context. Each proposal is backed by transcript evidence.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {meeting.crmProposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
}

function ProposalCard({ proposal }: { proposal: CrmProposal }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-secondary/20 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {proposal.type.replace(/-/g, ' ')}
          </span>
        </div>
        <span
          className={cn(
            'rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
            statusStyles[proposal.status]
          )}
        >
          {proposal.status.replace(/-/g, ' ')}
        </span>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-sm font-medium text-foreground">{proposal.company}</p>
        <p className="text-xs text-muted-foreground">
          Contact: <span className="text-foreground">{proposal.contact}</span>
        </p>
      </div>

      <p className="mt-3 flex-1 text-xs leading-relaxed text-foreground/80">
        {proposal.description}
      </p>

      <div className="mt-3 border-l-2 border-accent/40 pl-3">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          {proposal.sourceEvidence}
        </p>
      </div>

      <div className="mt-3 text-[11px] text-muted-foreground">
        Confidence: <span className="text-accent">{Math.round(proposal.confidence * 100)}%</span>
      </div>
    </div>
  );
}
