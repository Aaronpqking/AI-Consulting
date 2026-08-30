import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

export function MethodologyDiagram({
  stages,
}: {
  stages: { num: string; name: string; desc: string }[];
}) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 right-0 top-[2.5rem] hidden h-px bg-border lg:block" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
        {stages.map((stage, i) => (
          <Reveal
            key={stage.num}
            delay={i * 70}
            className="group relative"
          >
            <div className="flex items-center gap-3 lg:flex-col lg:items-start">
              <div className="relative z-10 flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors duration-200 group-hover:border-accent">
                <span className="font-mono text-xs font-semibold text-accent">
                  {stage.num}
                </span>
              </div>
              <div className="lg:mt-4">
                <h3 className="font-serif text-sm font-semibold tracking-tight">
                  {stage.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {stage.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
