import type { Metadata } from 'next';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Cta } from '@/components/site/cta';
import { caseStudies, finalCta } from '@/data/site';

import { pageTitle, siteDescription } from '@/data/site';

export const metadata: Metadata = {
  title: pageTitle('Selected Systems Engineering Work'),
  description: siteDescription,
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="SELECTED WORK"
            heading="Selected systems work"
            intro="Each case is structured around the problem, constraints, system, method, decision and result."
          />
          <Reveal>
            <p className="mt-4 max-w-2xl text-xs uppercase tracking-[0.14em] text-muted-foreground/70">
              Selected engagements are anonymized to protect client and proprietary information.
            </p>
          </Reveal>

          <div className="mt-16 space-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} id={study.id} className="scroll-mt-24">
                <Reveal>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {study.category}
                  </div>
                  <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    {study.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {study.description}
                  </p>
                </Reveal>

                <Reveal delay={100}>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <DetailCard label="Problem" value={study.problem} />
                    <DetailCard label="Constraints" value={study.constraints} />
                    <DetailCard label="System" value={study.system} />
                    <DetailCard label="Method" value={study.method} />
                    <DetailCard label="Decision" value={study.decision} />
                    <DetailCard label="Result" value={study.result} highlight />
                  </div>
                </Reveal>

                <Reveal delay={160}>
                  <div className="mt-6">
                    <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Themes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.themes.map((s) => (
                        <span
                          key={s}
                          className="rounded border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="container-page relative text-center">
          <Reveal>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {finalCta.headline}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
              {finalCta.copy}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta
                label={finalCta.primary.label}
                href={finalCta.primary.href}
                variant="secondary"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 border-0"
              />
              <Cta
                label={finalCta.secondary.label}
                href={finalCta.secondary.href}
                variant="ghost"
                size="lg"
                className="text-primary-foreground hover:text-accent"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function DetailCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-5 ${
        highlight
          ? 'border-accent/40 bg-accent/5'
          : 'border-border bg-card'
      }`}
    >
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{value}</p>
    </div>
  );
}
