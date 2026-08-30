import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Cta } from '@/components/site/cta';
import { ProcessStages } from '@/components/site/demo/process-stages';
import { MeetingSummary } from '@/components/site/demo/meeting-summary';
import { ReviewQueue } from '@/components/site/demo/review-queue';
import { MeetingDetails } from '@/components/site/demo/meeting-details';
import { AuditTrail } from '@/components/site/demo/audit-trail';
import { ArchitectureDiagram } from '@/components/site/demo/architecture-diagram';
import { meetingFixture } from '@/data/meeting-fixture';

export const metadata: Metadata = {
  title: 'Meeting Intelligence System — Demo',
  description:
    'Interactive demonstration of meeting transcript processing through normalization, extraction, classification, human review and action routing.',
  alternates: { canonical: '/demonstrations/meeting-intelligence' },
};

export default function MeetingIntelligenceDemoPage({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug !== 'meeting-intelligence') {
    notFound();
  }

  const meeting = meetingFixture;

  return (
    <div className="pt-24 sm:pt-28">
      {/* INTRO */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="DEMONSTRATION"
            heading="Meeting Intelligence System"
            intro="This demonstration shows how a meeting transcript flows through a full AI systems pipeline — from raw information through normalization, extraction, classification, human review and routed action — with source traceability at every step."
          />

          <Reveal delay={120}>
            <div className="mt-8 rounded-lg border border-border bg-secondary/20 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Note:</span> All
                data shown is synthetic. No real meeting data, client information
                or actual transcripts are used. The fixture demonstrates the
                system architecture and interaction patterns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS STAGES */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading eyebrow="PIPELINE" heading="Processing stages" />
          <div className="mt-10">
            <ProcessStages />
          </div>
        </div>
      </section>

      {/* MEETING SUMMARY */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading eyebrow="STEP 01–02" heading="Normalized meeting record" />
          <div className="mt-10">
            <MeetingSummary meeting={meeting} />
          </div>
        </div>
      </section>

      {/* REVIEW QUEUE */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading
            eyebrow="STEP 03–05"
            heading="Human review queue"
            intro="Extracted action items are presented for human approval before routing. Each item includes source attribution and a confidence score. Try approving and rejecting items to see how the system responds."
          />
          <div className="mt-10">
            <ReviewQueue items={meeting.actionItems} />
          </div>
        </div>
      </section>

      {/* EXTRACTED DETAILS */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="STEP 03"
            heading="Extracted decisions, commitments, questions and risks"
            intro="Beyond action items, the system extracts structured records of decisions made, commitments given, open questions and identified risks."
          />
          <div className="mt-10">
            <MeetingDetails meeting={meeting} />
          </div>
        </div>
      </section>

      {/* AUDIT TRAIL */}
      <section className="section-pad bg-secondary/20">
        <div className="container-page">
          <SectionHeading
            eyebrow="GOVERNANCE"
            heading="Source traceability"
            intro="Every extracted item links back to the specific transcript excerpt it was derived from. This is the audit trail that makes the system trustworthy."
          />
          <div className="mt-10">
            <AuditTrail meeting={meeting} />
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="ARCHITECTURE"
            heading="System architecture"
            intro="The full pipeline maps to the six-layer systems model: information, intelligence, decision, governance, action and evaluation."
          />
          <div className="mt-10">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="container-page relative text-center">
          <Reveal>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Want a system like this for your organization?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
              This is one example of how AI systems engineering connects
              information to governed action. Tell us about your business process.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex justify-center">
              <Cta
                label="Discuss a System"
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
