import type { Metadata } from 'next';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Cta } from '@/components/site/cta';
import { CapabilityBlock } from '@/components/site/capability-block';
import { firm, capabilities, siteIdentity, pageTitle, siteDescription } from '@/data/site';

export const metadata: Metadata = {
  title: pageTitle('The Firm'),
  description: siteDescription,
  alternates: { canonical: '/firm' },
};

export default function FirmPage() {
  return (
    <div className="pt-[68px]">
      {/* THE FIRM */}
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
                    {siteIdentity.companyName}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {siteIdentity.tagline}
                  </div>
                  <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                    {siteIdentity.location}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATED APPROACH */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="INTEGRATED APPROACH"
            heading={firm.integratedApproach.heading}
            intro={firm.integratedApproach.copy}
          />
          <Reveal delay={120}>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {firm.integratedApproach.pillars.map((pillar, i) => (
                <div
                  key={pillar.name}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <div className="font-mono text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-3 font-serif text-base font-semibold tracking-tight">
                    {pillar.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 rounded-lg border border-accent/30 bg-accent/5 px-10 py-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Result
                </div>
                <div className="font-serif text-xl font-semibold tracking-tight">
                  {firm.integratedApproach.result}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section-pad">
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

      {/* LEADERSHIP */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading eyebrow="LEADERSHIP" heading={firm.leadership.heading} />
          <div className="mt-10 space-y-8">
            {firm.leadership.profiles.map((profile) => (
              <Reveal key={profile.name} delay={100}>
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <div className="rounded-lg border border-border bg-card p-6">
                      <div className="font-serif text-lg font-semibold">
                        {profile.name}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {profile.role}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {profile.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="EXPERIENCE"
            heading={firm.experience.heading}
            intro={firm.experience.copy}
          />
          <Reveal delay={100}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {firm.experience.categories.map((cat, i) => (
                <div
                  key={cat.name}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <div className="font-mono text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-2 font-serif text-sm font-semibold tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="ENGAGEMENT MODEL"
            heading={firm.engagementModel.heading}
          />
          <Reveal delay={100}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {firm.engagementModel.items.map((item, i) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="font-serif text-sm font-semibold tracking-tight text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OPERATING CONTEXTS */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="WHERE THESE SYSTEMS APPLY"
            heading={firm.operatingContexts.heading}
            intro={firm.operatingContexts.copy}
          />
          <Reveal delay={100}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {firm.operatingContexts.contexts.map((ctx, i) => (
                <div
                  key={ctx.name}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="font-serif text-sm font-semibold tracking-tight text-foreground">
                    {ctx.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {ctx.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY */}
      <section className="section-pad bg-secondary/40">
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
      <section className="section-pad">
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
