import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { Cta } from '@/components/site/cta';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { EngagementLadder } from '@/components/site/engagement-ladder';
import { services, engagementModes } from '@/data/site';

import { pageTitle, siteDescription } from '@/data/site';

export const metadata: Metadata = {
  title: pageTitle('AI Systems Engineering Services'),
  description: siteDescription,
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="SERVICES"
            heading="What we build"
            intro="Four core capabilities that connect information, intelligence, decisions and action across business systems."
          />

          <div className="mt-16 space-y-20">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <Reveal>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-semibold text-accent">
                          {service.num}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {service.label}
                        </span>
                      </div>
                      <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {service.copy}
                      </p>
                      <div className="mt-6">
                        <Cta
                          label={service.cta}
                          href={service.href}
                          size="default"
                        />
                      </div>
                    </Reveal>
                  </div>
                  <div className="lg:col-span-7">
                    <Reveal delay={120}>
                      <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          Applications
                        </h3>
                        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {service.applications.map((app) => (
                            <li
                              key={app}
                              className="flex items-start gap-2 text-sm text-foreground/90"
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODES */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading
            eyebrow="HOW TO ENGAGE"
            heading="Engagement modes"
            intro="From architecture and discovery through ongoing optimization and support."
          />
          <div className="mt-12">
            <EngagementLadder steps={engagementModes} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <div className="rounded-lg border border-accent/30 bg-card p-8 text-center sm:p-12">
              <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Not sure where to start?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Tell us about the business process. We can determine what should
                be automated, where AI belongs, and what architecture is required.
              </p>
              <div className="mt-6 flex justify-center">
                <Cta label="Discuss a System" href="/contact" size="lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
