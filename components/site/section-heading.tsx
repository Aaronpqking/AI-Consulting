import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent',
            align === 'center' && 'mx-auto'
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.5rem]">
        {heading}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
