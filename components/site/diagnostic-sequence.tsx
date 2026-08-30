'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const STEPS = [
  'SOURCE',
  'EXTRACTION',
  'REPRESENTATION',
  'RETRIEVAL',
  'RANKING',
  'CONTEXT',
  'GENERATION',
  'VALIDATION',
];

export function DiagnosticSequence({
  className,
}: {
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % STEPS.length);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={cn('relative', className)}
      aria-hidden="true"
    >
      <div className="flex flex-col gap-0">
        {STEPS.map((step, i) => {
          const isActive = i === active;
          const isPast = i < active;
          return (
            <div key={step} className="relative">
              <div
                className={cn(
                  'mono flex items-center gap-3 rounded-md px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-300',
                  isActive
                    ? 'bg-accent/10 text-foreground'
                    : isPast
                    ? 'text-accent/70'
                    : 'text-muted-foreground/60'
                )}
              >
                <span
                  className={cn(
                    'inline-flex h-5 w-5 items-center justify-center rounded border text-[9px] transition-colors',
                    isActive
                      ? 'border-accent bg-accent text-accent-foreground'
                      : isPast
                      ? 'border-accent/40 text-accent'
                      : 'border-border text-muted-foreground/60'
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
                {isActive && (
                  <span className="ml-auto text-[9px] uppercase tracking-[0.18em] text-accent">
                    scanning
                  </span>
                )}
              </div>
              {i < STEPS.length - 1 && (
                <div className="ml-[1.375rem] h-4 w-px">
                  <span
                    className={cn(
                      'absolute w-px transition-colors',
                      isPast ? 'bg-accent/40' : 'bg-border'
                    )}
                  />
                  {isPast && (
                    <span className="signal-dash absolute inset-0 w-px bg-accent" />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
