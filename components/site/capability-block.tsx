import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

export function CapabilityBlock({
  title,
  items,
  index,
  className,
}: {
  title: string;
  items: string[];
  index: number;
  className?: string;
}) {
  return (
    <Reveal
      delay={index * 60}
      className={cn(
        'rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/30 sm:p-7',
        className
      )}
    >
      <h3 className="font-serif text-base font-semibold tracking-tight">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
