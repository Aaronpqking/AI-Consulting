'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Meeting } from '@/data/meeting-fixture';

type ActionItem = Meeting['actionItems'][number];

export function ReviewQueue({ items }: { items: ActionItem[] }) {
  const [actioned, setActioned] = useState<Record<string, 'approved' | 'rejected' | 'pending'>>({});

  const handleAction = (id: string, action: 'approved' | 'rejected') => {
    setActioned((prev) => ({ ...prev, [id]: action }));
  };

  const pendingCount = items.filter((item) => !actioned[item.id] || actioned[item.id] === 'pending').length;
  const approvedCount = Object.values(actioned).filter((v) => v === 'approved').length;
  const rejectedCount = Object.values(actioned).filter((v) => v === 'rejected').length;

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-4 text-sm">
        <span className="text-muted-foreground">
          <span className="font-semibold text-foreground">{pendingCount}</span> pending
        </span>
        <span className="text-muted-foreground">
          <span className="font-semibold text-accent">{approvedCount}</span> approved
        </span>
        <span className="text-muted-foreground">
          <span className="font-semibold text-destructive">{rejectedCount}</span> rejected
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const state = actioned[item.id] || 'pending';
          return (
            <div
              key={item.id}
              className={cn(
                'rounded-lg border p-4 transition-colors',
                state === 'approved' && 'border-accent/40 bg-accent/5',
                state === 'rejected' && 'border-destructive/30 bg-destructive/5 opacity-60',
                state === 'pending' && 'border-border bg-card'
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{item.task}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>Owner: <span className="text-foreground">{item.owner}</span></span>
                    <span>Due: <span className="text-foreground">{item.dueDate}</span></span>
                    <span>Source: <span className="text-foreground">{item.source}</span></span>
                    <span>Confidence: <span className="text-accent">{Math.round(item.confidence * 100)}%</span></span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                      item.priority === 'high' && 'bg-destructive/10 text-destructive',
                      item.priority === 'medium' && 'bg-accent/10 text-accent',
                      item.priority === 'low' && 'bg-muted text-muted-foreground'
                    )}
                  >
                    {item.priority}
                  </span>
                </div>
              </div>

              {state === 'pending' && (
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleAction(item.id, 'approved')}
                    className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAction(item.id, 'rejected')}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
                  >
                    Reject
                  </button>
                </div>
              )}

              {state !== 'pending' && (
                <div className="mt-3 text-xs font-medium text-muted-foreground">
                  {state === 'approved' ? 'Approved — routed to task system' : 'Rejected — excluded from routing'}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
