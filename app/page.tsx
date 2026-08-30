import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Cta } from '@/components/site/cta';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { HeroVisual } from '@/components/site/hero-visual';
import { ServiceCard } from '@/components/site/service-card';
import { CaseCard } from '@/components/site/case-card';
import { CapabilityBlock } from '@/components/site/capability-block';
import { SystemsModelGraphic } from '@/components/site/systems-model-graphic';
import { DemoFeatureCard } from '@/components/site/demo-feature-card';
import {
  hero,
  authorityBand,
  firmPositioning,
  services,
  systemsModel,
  outcomes,
  caseStudies,
  methodology,
  capabilities,
  finalCta,
  pageTitle,
  siteIdentity,
} from '@/data/site';

export const metadata: Metadata = {
  title: pageTitle(),
  description: siteIdentity.description,
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-primary text-primary-foreground lg:min-h-[640px]">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="container-page relative flex min-h-[560px] items-center py-28 lg:min-h-[640px] lg:py-36">
          <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {hero.eyebrow}
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
                  {hero.subheadline}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-5 font-serif text-base italic text-primary-foreground/50">
                  {hero.supporting}
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href={hero.primaryCta.href}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent px-7 text-base font-medium text-accent-foreground transition-all hover:bg-accent/90"
                  >
                    {hero.primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={hero.secondaryCta.href}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 px-7 text-base font-medium text-primary-foreground/80 transition-colors hover:border-primary-foreground/40 hover:text-primary-foreground"
                  >
                    {hero.secondaryCta.label}
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="hidden lg:col-span-5 lg:block">
              <Reveal delay={200}>
                <HeroVisual />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY BAND */}
      <section className="border-b border-border bg-secondary/30 py-8">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:flex-nowrap">
                {authorityBand.labels.map((label) => (
                  <span
                    key={label}
                    className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <p className="max-w-md text-center text-sm leading-relaxed text-muted-foreground lg:text-right">
                {authorityBand.statement}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 1. FROM BUSINESS PROCESS TO WORKING SYSTEM */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {firmPositioning.eyebrow}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                {firmPositioning.heading}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {firmPositioning.copy}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {firmPositioning.copy2}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SERVICES */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="PRACTICES"
            heading="What we build"
            intro="Four practices that connect information, intelligence, decisions and action across business systems."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} className="border-0" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SYSTEMS MODEL */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow={systemsModel.eyebrow}
            heading={systemsModel.heading}
            intro="A six-layer architecture that connects business information to governed action."
          />
          <div className="mt-16">
            <SystemsModelGraphic />
          </div>
          <Reveal delay={200}>
            <p className="mx-auto mt-16 max-w-2xl border-l-2 border-accent pl-5 font-serif text-lg font-medium leading-relaxed text-foreground">
              {systemsModel.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. BUSINESS OUTCOMES */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="OUTCOMES"
            heading="What this changes"
            intro="The result is operating infrastructure — not a chatbot, not a prototype."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <Reveal
                key={o.title}
                delay={i * 70}
                className="bg-card p-7"
              >
                <div className="font-mono text-xs font-semibold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold tracking-tight">
                  {o.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {o.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="SELECTED WORK"
            heading="Selected systems work"
            intro="Each engagement is structured around the problem, constraints, system, method, decision and result."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study, i) => (
              <CaseCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEMONSTRATIONS */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="DEMONSTRATIONS"
            heading="See the architecture operate."
            intro="Interactive demonstrations that show how AI systems engineering connects information to governed action."
          />
          <div className="mt-14">
            <DemoFeatureCard
              title="Meeting Intelligence"
              description="A meeting becomes structured decisions, commitments, tasks, relationship updates, follow-up drafts and review items while preserving source evidence and human approval."
              cta="Run the Demonstration"
              href="/demonstrations/meeting-intelligence"
            />
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow={methodology.eyebrow}
            heading={methodology.heading}
          />
          <div className="mt-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {methodology.stages.map((stage, i) => (
                <Reveal
                  key={stage.num}
                  delay={i * 60}
                  className="group relative rounded-lg border border-border bg-card p-7 transition-colors duration-200 hover:border-accent/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-accent transition-colors group-hover:border-accent">
                      {stage.num}
                    </span>
                    <h3 className="font-serif text-base font-semibold tracking-tight">
                      {stage.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {stage.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={200}>
            <p className="mx-auto mt-14 max-w-2xl border-l-2 border-accent pl-5 font-serif text-lg font-medium leading-relaxed text-foreground">
              {methodology.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. TECHNICAL CAPABILITY */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="CAPABILITY"
            heading="Technical surface area"
            intro="Concise and subordinate to the business proposition. Each cluster represents hands-on applied engineering work."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* 9. FINAL CTA */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="text-balance font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                {finalCta.headline}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
                {finalCta.copy}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex justify-center">
                <Link
                  href={finalCta.primary.href}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent px-8 text-base font-medium text-accent-foreground transition-all hover:bg-accent/90"
                >
                  {finalCta.primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
