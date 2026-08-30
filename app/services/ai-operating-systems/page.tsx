import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { pageTitle, siteIdentity } from '@/data/site';

export const metadata: Metadata = {
  title: pageTitle('AI Operating Systems & Infrastructure'),
  description:
    'Turn fragmented business information into coordinated action. We design and implement systems that connect meetings, email, documents, CRM, research and operational data to decisions, review workflows and systems of record.',
  alternates: { canonical: '/services/ai-operating-systems' },
};

const SOURCES = [
  'Meetings', 'Email', 'Documents', 'CRM', 'Research', 'Commerce', 'Internal systems',
];

const ARCHITECTURE = [
  { num: '01', name: 'Trigger', desc: 'A business event initiates the workflow — a meeting ends, an email arrives, a record changes.' },
  { num: '02', name: 'Ingestion', desc: 'Information is captured from the source system with metadata and provenance preserved.' },
  { num: '03', name: 'Normalization', desc: 'Raw information is structured into canonical records — speakers identified, entities extracted, context preserved.' },
  { num: '04', name: 'Reasoning', desc: 'AI applies extraction, classification and reasoning to produce proposed actions, decisions and updates.' },
  { num: '05', name: 'Proposed Action', desc: 'The system generates proposed tasks, CRM updates, commitments, follow-ups and review items.' },
  { num: '06', name: 'Human Review', desc: 'Ambiguous or high-risk items enter a review queue. Confidence thresholds determine what requires human judgment.' },
  { num: '07', name: 'System of Record', desc: 'Approved actions are written to the systems of record — CRM, task system, email, calendar.' },
  { num: '08', name: 'Evaluation', desc: 'Every action is logged with source evidence, confidence and outcome for audit and continuous improvement.' },
];

const CAPABILITIES = [
  'Meeting-to-action workflows',
  'Executive review queues',
  'Decision tracking',
  'Commitment tracking',
  'CRM intelligence',
  'Relationship intelligence',
  'Research ingestion',
  'Executive briefings',
  'Workflow orchestration',
  'Institutional knowledge',
];

export default function AIOperatingSystemsPage() {
  return (
    <div className="pt-[68px]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="container-page relative">
          <Reveal>
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              AI SYSTEMS &amp; OPERATING INFRASTRUCTURE
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Turn fragmented business information into coordinated action.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              We design and implement systems that connect meetings, email, documents, CRM, research and operational data to decisions, review workflows and systems of record.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent px-7 text-base font-medium text-accent-foreground transition-all hover:bg-accent/90"
              >
                Discuss an Operating System
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE OPERATING PROBLEM */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="THE OPERATING PROBLEM"
            heading="Business information is distributed across disconnected tools and conversations."
            intro="Meetings, email threads, documents, CRM records and research exist in separate systems. The result is lost context, duplicated effort and decisions that never reach execution."
          />
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3">
              {SOURCES.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE OPERATING ARCHITECTURE */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="THE OPERATING ARCHITECTURE"
            heading="Trigger to evaluation"
            intro="The system connects a business event to a governed action through a defined pipeline."
          />
          <div className="mt-14 space-y-px overflow-hidden rounded-lg border border-border bg-border">
            {ARCHITECTURE.map((step, i) => (
              <Reveal
                key={step.num}
                delay={i * 50}
                className="group flex items-start gap-5 bg-card p-6 transition-colors hover:bg-card/80 sm:p-7"
              >
                <span className="font-mono flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-accent transition-colors group-hover:border-accent">
                  {step.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-base font-semibold tracking-tight">
                    {step.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
                {i < ARCHITECTURE.length - 1 && (
                  <div className="hidden text-accent/30 lg:block">↓</div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TYPICAL CAPABILITIES */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="TYPICAL CAPABILITIES"
            heading="What the system does"
          />
          <Reveal delay={100}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={cap}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-5"
                >
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{cap}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI VS DETERMINISTIC */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="AI VS DETERMINISTIC LOGIC"
                heading="Reasoning where useful. Determinism where correctness matters."
              />
              <Reveal delay={120}>
                <div className="mt-8 space-y-4">
                  <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
                    <h3 className="font-serif text-base font-semibold text-accent">
                      AI handles
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Reasoning, extraction, interpretation, classification and
                      summarization — tasks where judgment and language
                      understanding add value.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-serif text-base font-semibold">
                      Deterministic systems handle
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Controlled execution, authorization, transaction state,
                      routing, validation and other correctness-sensitive
                      operations where reliability is non-negotiable.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div>
              <SectionHeading
                eyebrow="HUMAN JUDGMENT"
                heading="Ambiguity stays in review."
              />
              <Reveal delay={120}>
                <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                  Actions that are ambiguous, high-risk or authority-sensitive
                  remain in a human review queue. The system proposes; a person
                  decides. Confidence thresholds determine what can be
                  automated and what requires explicit approval.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  This is not autopilot. It is structured collaboration between
                  AI reasoning, deterministic rules and human judgment — with
                  every decision traceable to its source.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION RELIABILITY */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="PRODUCTION RELIABILITY"
            heading="Built for observable operation"
            intro="Systems are designed for production from the start — not retrofitted after deployment."
          />
          <Reveal delay={100}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Logging', desc: 'Every action and decision recorded with source evidence.' },
                { label: 'Retries', desc: 'Transient failures handled with backoff and idempotency.' },
                { label: 'Idempotency', desc: 'Duplicate events do not produce duplicate state.' },
                { label: 'Permissions', desc: 'Access control enforced at the action boundary.' },
                { label: 'Failure handling', desc: 'Observable failure modes, not silent errors.' },
                { label: 'Observability', desc: 'System behavior visible through metrics and logs.' },
                { label: 'Evaluation', desc: 'Outputs verified against explicit criteria.' },
                { label: 'Workflow state', desc: 'Every item has a known state at every step.' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEMONSTRATION */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <Reveal>
            <div className="rounded-lg border border-accent/30 bg-card p-8 sm:p-12">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                DEMONSTRATION
              </div>
              <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Meeting Intelligence
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                See how a meeting becomes structured decisions, commitments,
                tasks, relationship updates and follow-up drafts — with source
                evidence and human approval at every step.
              </p>
              <div className="mt-7">
                <Link
                  href="/demonstrations/meeting-intelligence"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Run the Demonstration
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="container-page relative text-center">
          <Reveal>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a process that should operate differently?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70">
              Tell us about the business process. We can determine what should
              be automated, where AI belongs and what architecture is required.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent px-8 text-base font-medium text-accent-foreground transition-all hover:bg-accent/90"
              >
                Discuss an Operating System
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
