import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

type CaseStudy = {
  id: string;
  category: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  themes?: string[];
};

export function CaseCard({
  study,
  index,
  className,
}: {
  study: CaseStudy;
  index: number;
  className?: string;
}) {
  return (
    <Reveal
      delay={index * 80}
      className={cn(
        'group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-sm sm:p-7',
        className
      )}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
        {study.category}
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold leading-snug tracking-tight">
        {study.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {study.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
        {study.themes?.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded border border-border bg-secondary/50 px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <Link
          href={study.href}
          className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          {study.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </Reveal>
  );
}
