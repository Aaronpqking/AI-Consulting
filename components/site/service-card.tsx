import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/reveal';

type Service = {
  id: string;
  num: string;
  title: string;
  label: string;
  copy: string;
  href: string;
  cta: string;
};

export function ServiceCard({
  service,
  index,
  className,
}: {
  service: Service;
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
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-semibold text-accent">
          {service.num}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {service.label}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.copy}
      </p>
      <div className="mt-6 border-t border-border pt-5">
        <Link
          href={service.href}
          className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          {service.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </Reveal>
  );
}
