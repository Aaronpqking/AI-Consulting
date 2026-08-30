import type { Metadata } from 'next';
import { Cta } from '@/components/site/cta';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { HeroVisual } from '@/components/site/hero-visual';
import { ServiceCard } from '@/components/site/service-card';
import { CaseCard } from '@/components/site/case-card';
import { CapabilityBlock } from '@/components/site/capability-block';
import { MethodologyDiagram } from '@/components/site/methodology-diagram';
import { SystemsModelDiagram } from '@/components/site/systems-model-diagram';
import { EngagementLadder } from '@/components/site/engagement-ladder';
import { OutcomesGrid } from '@/components/site/outcomes-grid';
import {
  hero,
  firmPositioning,
  services,
  engagementModes,
  systemsModel,
  outcomes,
  caseStudies,
  methodology,
  capabilities,
  finalCta,
} from '@/data/site';

export const metadata: Metadata = {
  title: 'Aaron King | AI Systems Engineering, Automation & Data Infrastructure',
  description:
    'AI systems engineering for organizations that need to connect business data, workflows, knowledge and software into reliable, governed operating infrastructure.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-page relative">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {hero.eyebrow}
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {hero.subheadline}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-4 font-serif text-lg font-medium text-foreground">
                  {hero.supporting}
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Cta
                    label={hero.primaryCta.label}
                    href={hero.primaryCta.href}
                    size="lg"
                  />
                  <Cta
                    label={hero.secondaryCta.label}
                    href={hero.secondaryCta.href}
                    variant="secondary"
                    size="lg"
                    showArrow={false}
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <HeroVisual />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FIRM POSITIONING */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow={firmPositioning.eyebrow}
            heading={firmPositioning.heading}
            intro={firmPositioning.copy}
          />
          <Reveal delay={120}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {firmPositioning.copy2}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl border-l-2 border-accent pl-4 font-serif text-lg font-medium leading-relaxed text-foreground">
              {firmPositioning.supporting}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading
            eyebrow="CAPABILITIES"
            heading="What we build"
            intro="Four core capabilities that connect information, intelligence, decisions and action across business systems."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMS MODEL */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow={systemsModel.eyebrow}
            heading={systemsModel.heading}
          />
          <div className="mt-12">
            <SystemsModelDiagram stages={systemsModel.stages} closing={systemsModel.closing} />
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading
            eyebrow="OUTCOMES"
            heading="What this changes"
            intro="The result is not a chatbot. It is operating infrastructure that handles information, applies intelligence, routes decisions and executes action."
          />
          <div className="mt-12">
            <OutcomesGrid outcomes={outcomes} />
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODES */}
      <section className="section-pad">
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

      {/* METHODOLOGY */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading
            eyebrow={methodology.eyebrow}
            heading={methodology.heading}
          />
          <div className="mt-14">
            <MethodologyDiagram stages={methodology.stages} />
          </div>
          <Reveal>
            <p className="mx-auto mt-12 max-w-2xl border-l-2 border-accent pl-4 text-center font-serif text-lg font-medium leading-relaxed text-foreground">
              {methodology.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="CAPABILITIES"
            heading="Technical surface area"
            intro="Grouped by domain. Each cluster represents hands-on applied engineering work."
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

      {/* WORK */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading
            eyebrow="SELECTED WORK"
            heading="Selected systems work"
            intro="Each case is structured around the problem, constraints, system, method, decision and result."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <CaseCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24 lg:py-28">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {finalCta.eyebrow}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.5rem]">
                {finalCta.headline}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70">
                {finalCta.copy}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        </div>
      </section>
    </>
  );
}
