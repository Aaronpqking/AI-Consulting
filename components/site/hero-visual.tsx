'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const STAGES = [
  { label: 'INFORMATION', sub: 'meetings · email · docs · CRM' },
  { label: 'INTELLIGENCE', sub: 'normalize · retrieve · reason' },
  { label: 'DECISION', sub: 'recommendations · tasks · exceptions' },
  { label: 'GOVERNANCE', sub: 'rules · permissions · human review' },
  { label: 'ACTION', sub: 'CRM · email · calendar · workflows' },
  { label: 'EVALUATION', sub: 'logs · evidence · outcomes · feedback' },
];

export function HeroVisual({ className }: { className?: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % STAGES.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg border border-border bg-card p-5 sm:p-7',
        className
      )}
      aria-hidden="true"
    >
      <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          system_flow.v2
        </span>
        <span className="font-mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          ACTIVE
        </span>
      </div>

      <div className="relative space-y-2">
        {STAGES.map((node, i) => {
          const isActive = i === active;
          const isPast = i < active;
          return (
            <div key={node.label}>
              <div
                className={cn(
                  'relative flex items-center gap-3 rounded-md border px-3 py-2.5 transition-all duration-300',
                  isActive
                    ? 'border-accent/50 bg-accent/5'
                    : isPast
                    ? 'border-border bg-secondary/30'
                    : 'border-border/70 bg-background/40'
                )}
              >
                <span
                  className={cn(
                    'font-mono flex h-6 w-6 shrink-0 items-center justify-center rounded text-[10px] font-semibold transition-colors',
                    isActive
                      ? 'bg-accent text-accent-foreground'
                      : isPast
                      ? 'bg-accent/15 text-accent'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex min-w-0 flex-1 items-baseline gap-2">
                  <span
                    className={cn(
                      'font-mono text-xs font-semibold tracking-wide transition-colors',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {node.label}
                  </span>
                  <span className="font-mono truncate text-[10px] text-muted-foreground/70">
                    {node.sub}
                  </span>
                </div>
                {isActive && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                    processing
                  </span>
                )}
              </div>
              {i < STAGES.length - 1 && (
                <div className="ml-[1.125rem] h-2 w-px">
                  <span
                    className={cn(
                      'block w-px transition-colors',
                      i < active ? 'bg-accent/40' : 'bg-border'
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
        {[
          { label: 'RETRIEVAL', value: 'VERIFIED' },
          { label: 'GOVERNANCE', value: 'CONTROLLED' },
          { label: 'EVALUATION', value: 'ACTIVE' },
        ].map((chip) => (
          <span
            key={chip.label}
            className="font-mono inline-flex items-center gap-1.5 rounded border border-border bg-background/60 px-2 py-1 text-[9px] uppercase tracking-[0.12em]"
          >
            <span className="text-muted-foreground">{chip.label}</span>
            <span className="text-accent">{chip.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
