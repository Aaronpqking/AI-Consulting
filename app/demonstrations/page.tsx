import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';

import { pageTitle, siteDescription } from '@/data/site';

export const metadata: Metadata = {
  title: pageTitle('Demonstrations'),
  description: siteDescription,
  alternates: { canonical: '/demonstrations' },
};

const demos = [
  {
    id: 'meeting-intelligence',
    title: 'Meeting Intelligence System',
    description:
      'A working demonstration of how meeting transcripts flow through normalization, extraction, classification, human review and action routing.',
    tags: ['Meeting Processing', 'Action Items', 'Human Review', 'Audit Trail'],
    status: 'Live Demo',
  },
];

export default function DemonstrationsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="DEMONSTRATIONS"
            heading="Interactive system demonstrations"
            intro="Explore how AI systems engineering patterns work in practice. Each demonstration shows the full flow from information ingestion through governed action."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo, i) => (
              <Reveal
                key={demo.id}
                delay={i * 80}
                className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {demo.status}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight">
                  {demo.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {demo.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 border-t border-border pt-5">
                  <Link
                    href={`/demonstrations/${demo.id}`}
                    className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Launch Demo
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 rounded-lg border border-dashed border-border bg-secondary/20 p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Additional demonstrations are in development. Each will show a
                different pattern for connecting business information to governed
                action through AI systems engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
