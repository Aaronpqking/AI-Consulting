import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, AlertTriangle } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { pageTitle } from '@/data/site';

export const metadata: Metadata = {
  title: pageTitle('AI Knowledge & Data Infrastructure'),
  description:
    'Data and knowledge infrastructure beyond ordinary RAG: document ingestion, OCR, structural extraction, metadata governance, hybrid retrieval, provenance and evaluation.',
  alternates: { canonical: '/services/data-knowledge' },
};

const CAPABILITIES = [
  {
    title: 'Information Sources',
    desc: 'Documents, databases, research, operational data and unstructured content ingested with metadata preserved.',
    items: ['PDFs', 'Word', 'HTML', 'Spreadsheets', 'Databases', 'APIs', 'Scanned documents'],
  },
  {
    title: 'Document Ingestion',
    desc: 'Batch and streaming ingestion with format detection, structural parsing and provenance capture.',
    items: ['Format detection', 'Structural parsing', 'Batch ingestion', 'Streaming ingestion', 'Provenance capture'],
  },
  {
    title: 'OCR & Structural Extraction',
    desc: 'Scanned documents, tables, diagrams and embedded structured data extracted into usable formats.',
    items: ['Scanned document OCR', 'Table extraction', 'Diagram interpretation', 'Embedded data extraction'],
  },
  {
    title: 'Metadata & Corpus Governance',
    desc: 'Metadata architecture, access boundaries and corpus isolation prevent cross-contamination between sources.',
    items: ['Metadata architecture', 'Access boundaries', 'Corpus isolation', 'Source governance'],
  },
  {
    title: 'Structured + Unstructured Retrieval',
    desc: 'Hybrid retrieval combining relational queries and vector similarity search across structured and unstructured content.',
    items: ['Relational queries', 'Vector similarity', 'Hybrid search', 'Reranking'],
  },
  {
    title: 'SQL + Vector Retrieval',
    desc: 'Coordinate SQL filtering with vector retrieval for precise, scoped results across large corpora.',
    items: ['SQL filtering', 'Vector retrieval', 'Scoped search', 'Identifier retrieval'],
  },
  {
    title: 'Citations & Provenance',
    desc: 'Every answer links to the specific source passage it was derived from. No ungrounded output.',
    items: ['Source citations', 'Passage linking', 'Provenance metadata', 'Audit trail'],
  },
  {
    title: 'Evaluation & Regression Testing',
    desc: 'Retrieval quality measured against explicit criteria before promotion. New processing does not automatically replace production.',
    items: ['Retrieval evaluation', 'Regression testing', 'Release gates', 'Measured promotion'],
  },
];

const BREAKAGE_POINTS = [
  'Tables',
  'Diagrams',
  'OCR quality',
  'Identifier ambiguity',
  'Metadata leakage',
  'Cross-product contamination',
  'Citation failures',
  'Unscoped retrieval',
];

export default function DataKnowledgePage() {
  return (
    <div className="pt-[68px]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="container-page relative">
          <Reveal>
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              DATA &amp; KNOWLEDGE INFRASTRUCTURE
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Knowledge infrastructure beyond ordinary retrieval.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              We build data and knowledge systems that handle complex documents, structured data, provenance and evaluation — not just vector search over plain text.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <Link
                href="/contact?source=data-knowledge"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent px-7 text-base font-medium text-accent-foreground transition-all hover:bg-accent/90"
              >
                Discuss a Knowledge System
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="CAPABILITIES"
            heading="What the system handles"
            intro="Each capability represents a distinct engineering concern — not a single RAG pipeline applied to everything."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap, i) => (
              <Reveal
                key={cap.title}
                delay={i * 60}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-serif text-base font-semibold tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE ORDINARY RETRIEVAL BREAKS */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="WHERE ORDINARY RETRIEVAL BREAKS"
            heading="The hard cases"
            intro="Standard RAG pipelines work on plain text. Real business documents are not plain text."
          />
          <Reveal delay={100}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {BREAKAGE_POINTS.map((point, i) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-5"
                >
                  <AlertTriangle className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 font-serif text-lg font-medium leading-relaxed text-foreground">
              Newer processing should not automatically replace production. Promotion should depend on measured system behavior and explicit evaluation gates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDY LINK */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <div className="rounded-lg border border-accent/30 bg-card p-8 sm:p-12">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                RELATED CASE STUDY
              </div>
              <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Industrial Knowledge &amp; Retrieval System
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A substantive engineering case study covering document ingestion, hybrid retrieval, metadata isolation, provenance and release discipline across complex product information.
              </p>
              <div className="mt-7">
                <Link
                  href="/work/industrial-knowledge-system"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Read the Case Study
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
              Have a knowledge or retrieval problem?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70">
              Tell us about the documents, data sources and retrieval requirements. We can determine what architecture is required.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex justify-center">
              <Link
                href="/contact?source=data-knowledge"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent px-8 text-base font-medium text-accent-foreground transition-all hover:bg-accent/90"
              >
                Discuss a Knowledge System
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
