'use client';

import type { Meeting } from '@/data/meeting-fixture';

export function DownstreamSummary({ meeting }: { meeting: Meeting }) {
  const crmCount = meeting.crmProposals.length;
  const tasksCount = meeting.actionItems.length + meeting.proposedTasks.length;
  const followUpCount = meeting.followUpDraft ? 1 : 0;
  const knowledgeCount = meeting.knowledgeUpdates.length;
  const executiveReviewCount = meeting.executiveJudgment.length;
  const auditCount = meeting.transcriptExcerpts.length;

  const categories = [
    { label: 'CRM', count: crmCount, description: 'Proposed CRM updates' },
    { label: 'Tasks', count: tasksCount, description: 'Action items + proposed tasks' },
    { label: 'Follow-up', count: followUpCount, description: 'Draft email ready' },
    { label: 'Knowledge', count: knowledgeCount, description: 'Knowledge base records' },
    { label: 'Executive Review', count: executiveReviewCount, description: 'Items needing judgment' },
    { label: 'Audit', count: auditCount, description: 'Transcript excerpts' },
  ];

  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        Downstream Summary
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Counts of downstream actions derived from the meeting processing pipeline.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-lg border border-border bg-secondary/20 p-4"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-semibold text-foreground">
                {cat.count}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                {cat.label}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{cat.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] italic text-muted-foreground">
        Demo-state counts from synthetic fixture data
      </p>
    </div>
  );
}
