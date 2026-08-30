import type { Metadata } from 'next';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Cta } from '@/components/site/cta';
import { CapabilityBlock } from '@/components/site/capability-block';
import { firm, capabilities, site } from '@/data/site';

export const metadata: Metadata = {
  title: 'The Firm',
  description:
    'AI systems engineering and technology consulting practice. Architecture, implementation, evaluation and operational readiness.',
  alternates: { canonical: '/firm' },
};

export default function FirmPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* WHO WE ARE */}
      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="THE FIRM"
                heading={firm.whoWeAre.heading}
                intro={firm.whoWeAre.copy}
              />
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Profile
                  </div>
                  <div className="mt-3 font-serif text-lg font-semibold">
                    {site.name}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {site.tagline}
                  </div>
                  <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                    {site.location}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading eyebrow="PRINCIPLES" heading={firm.whatWeBelieve.heading} />
          <Reveal delay={100}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {firm.whatWeBelieve.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="font-mono mt-0.5 text-xs text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading eyebrow="PROCESS" heading={firm.howWeWork.heading} />
          <Reveal delay={100}>
            <ol className="mt-10 space-y-4">
              {firm.howWeWork.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <span className="font-mono flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90 pt-1">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading eyebrow="LEADERSHIP" heading={firm.leadership.heading} />
          <Reveal delay={100}>
            <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="font-serif text-lg font-semibold">
                    {firm.leadership.name}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {firm.leadership.role}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {firm.leadership.copy}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="CAPABILITY"
            heading={firm.capability.heading}
            intro={firm.capability.copy}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <CapabilityBlock
                key={cap.title}
                title={cap.title}
                items={cap.items}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <Reveal>
            <div className="rounded-lg border border-border bg-card p-8 text-center sm:p-12">
              <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a business process that should work differently?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Share the objective and the constraints. We can determine what
                should be automated, where AI belongs, and what architecture
                is required.
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
