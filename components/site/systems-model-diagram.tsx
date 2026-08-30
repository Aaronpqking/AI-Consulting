import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

type Stage = {
  num: string;
  name: string;
  label: string;
  items: string[];
};

export function SystemsModelDiagram({
  stages,
  closing,
}: {
  stages: Stage[];
  closing: string;
}) {
  return (
    <div className="relative">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {stages.map((stage, i) => (
          <Reveal
            key={stage.num}
            delay={i * 70}
            className={cn(
              'group relative rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/30'
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-accent">
                {stage.num}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {stage.label}
              </span>
            </div>
            <h3 className="mt-3 font-serif text-base font-semibold tracking-tight">
              {stage.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {stage.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-border bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mx-auto mt-12 max-w-2xl border-l-2 border-accent pl-4 text-center font-serif text-lg font-medium leading-relaxed text-foreground">
          {closing}
        </p>
      </Reveal>
    </div>
  );
}
