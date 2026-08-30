'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Meeting } from '@/data/meeting-fixture';

type ActionItem = Meeting['actionItems'][number];

type ReviewState = 'pending' | 'approved' | 'rejected' | 'deferred' | 'editing';

export function ReviewQueue({ items }: { items: ActionItem[] }) {
  const [actioned, setActioned] = useState<Record<string, ReviewState>>({});
  const [editedTasks, setEditedTasks] = useState<Record<string, string>>({});

  const handleAction = (id: string, action: Exclude<ReviewState, 'editing' | 'pending'>) => {
    setActioned((prev) => ({ ...prev, [id]: action }));
  };

  const handleEdit = (id: string) => {
    setActioned((prev) => ({ ...prev, [id]: 'editing' }));
  };

  const handleCancelEdit = (id: string) => {
    setActioned((prev) => ({ ...prev, [id]: 'pending' }));
  };

  const handleSaveEdit = (id: string, text: string) => {
    setEditedTasks((prev) => ({ ...prev, [id]: text }));
    setActioned((prev) => ({ ...prev, [id]: 'approved' }));
  };

  const pendingCount = items.filter(
    (item) => !actioned[item.id] || actioned[item.id] === 'pending'
  ).length;
  const approvedCount = Object.values(actioned).filter((v) => v === 'approved').length;
  const rejectedCount = Object.values(actioned).filter((v) => v === 'rejected').length;
  const deferredCount = Object.values(actioned).filter((v) => v === 'deferred').length;

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
        <span className="text-muted-foreground">
          <span className="font-semibold text-foreground">{deferredCount}</span> deferred
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const state = actioned[item.id] || 'pending';
          const taskText = editedTasks[item.id] ?? item.task;
          return (
            <div
              key={item.id}
              className={cn(
                'rounded-lg border p-4 transition-colors',
                state === 'approved' && 'border-accent/40 bg-accent/5',
                state === 'rejected' && 'border-destructive/30 bg-destructive/5 opacity-60',
                state === 'deferred' && 'border-border bg-muted/30',
                (state === 'pending' || state === 'editing') && 'border-border bg-card'
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{taskText}</p>
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
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handleAction(item.id, 'approved')}
                    className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEdit(item.id)}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAction(item.id, 'rejected')}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
                  >
                    Reject
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAction(item.id, 'deferred')}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                  >
                    Defer
                  </button>
                </div>
              )}

              {state === 'editing' && (
                <EditingRow
                  itemId={item.id}
                  initialText={taskText}
                  onSave={handleSaveEdit}
                  onCancel={handleCancelEdit}
                />
              )}

              {state === 'approved' && (
                <div className="mt-3 text-xs font-medium text-muted-foreground">
                  Approved — routed to task system
                </div>
              )}

              {state === 'rejected' && (
                <div className="mt-3 text-xs font-medium text-muted-foreground">
                  Rejected — excluded from routing
                </div>
              )}

              {state === 'deferred' && (
                <div className="mt-3 text-xs font-medium text-muted-foreground">
                  Deferred — held for later review
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EditingRow({
  itemId,
  initialText,
  onSave,
  onCancel,
}: {
  itemId: string;
  initialText: string;
  onSave: (id: string, text: string) => void;
  onCancel: (id: string) => void;
}) {
  const [text, setText] = useState(initialText);

  return (
    <div className="mt-4 space-y-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent/60"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onSave(itemId, text)}
          className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Save &amp; Approve
        </button>
        <button
          type="button"
          onClick={() => onCancel(itemId)}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
