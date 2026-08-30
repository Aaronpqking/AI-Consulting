import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

export function EngagementLadder({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <Reveal
          key={step.title}
          delay={i * 60}
          className={cn(
            'relative flex flex-col rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/30'
          )}
        >
          <div className="font-mono text-xs font-semibold text-accent">
            {String(i + 1).padStart(2, '0')}
          </div>
          <h3 className="mt-3 font-serif text-base font-semibold tracking-tight">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.desc}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
