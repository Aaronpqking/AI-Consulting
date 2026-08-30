import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

export function DemoFeatureCard({
  title,
  description,
  cta,
  href,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <Reveal className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Live Demonstration
          </div>
          <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <Link
            href={href}
            className="group/link mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            {cta}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-primary">
            <svg
              viewBox="0 0 400 300"
              fill="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <g opacity="0.05">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" stroke="white" strokeWidth="1" />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="white" strokeWidth="1" />
                ))}
              </g>
              {/* Flow nodes */}
              <rect x="40" y="30" width="320" height="36" rx="2" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" />
              <text x="56" y="52" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="1.5">TRANSCRIPT</text>

              <line x1="200" y1="66" x2="200" y2="84" stroke="white" strokeOpacity="0.15" />

              <rect x="40" y="84" width="320" height="36" rx="2" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" />
              <text x="56" y="106" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="1.5">EXTRACT</text>

              <line x1="200" y1="120" x2="200" y2="138" stroke="white" strokeOpacity="0.15" />

              <rect x="40" y="138" width="320" height="36" rx="2" fill="hsl(200 65% 38%)" fillOpacity="0.1" stroke="hsl(200 65% 48%)" strokeOpacity="0.35" />
              <text x="56" y="160" fill="hsl(200 65% 68%)" fontSize="9" fontFamily="monospace" letterSpacing="1.5">HUMAN REVIEW</text>

              <line x1="200" y1="174" x2="200" y2="192" stroke="white" strokeOpacity="0.15" />

              <rect x="40" y="192" width="320" height="36" rx="2" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" />
              <text x="56" y="214" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="1.5">ROUTE TO CRM · TASKS · EMAIL</text>

              <line x1="200" y1="228" x2="200" y2="246" stroke="white" strokeOpacity="0.15" />

              <rect x="40" y="246" width="320" height="36" rx="2" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" />
              <text x="56" y="268" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="1.5">EVALUATION · AUDIT TRAIL</text>
            </svg>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
