import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { pageTitle } from '@/data/site';

export const metadata: Metadata = {
  title: pageTitle('Industrial Knowledge & Retrieval System'),
  description:
    'Engineering case study: a hybrid retrieval architecture combining document ingestion, OCR, structural extraction, metadata isolation, provenance and evaluation across complex product information.',
  alternates: { canonical: '/work/industrial-knowledge-system' },
};

const ARCHITECTURE_STAGES = [
  { num: '01', name: 'Sources', desc: 'Technical documentation in PDF, HTML, scanned formats with tables, diagrams and embedded structured data.' },
  { num: '02', name: 'Document Parsing / OCR / Structural Extraction', desc: 'Format detection, OCR for scanned documents, table extraction, diagram interpretation and structural parsing.' },
  { num: '03', name: 'Canonical Corpus', desc: 'Normalized representation with metadata, source provenance and access boundaries preserved.' },
  { num: '04', name: 'Metadata / Structured Objects / Embeddings', desc: 'Metadata architecture, structured object extraction and embedding generation with corpus isolation.' },
  { num: '05', name: 'SQL + Vector Retrieval', desc: 'Hybrid retrieval combining relational filtering and vector similarity search across scoped corpora.' },
  { num: '06', name: 'Retrieval / Ranking', desc: 'Candidate retrieval, reranking and grounding with explicit source citations.' },
  { num: '07', name: 'Grounded Answer', desc: 'Answer generation constrained to retrieved evidence with passage-level citations.' },
  { num: '08', name: 'Evaluation', desc: 'Retrieval quality measured against explicit criteria. Regression testing before promotion.' },
  { num: '09', name: 'Release Gate', desc: 'New processing must pass evaluation gates before replacing production. Promotion is measured, not automatic.' },
];

const ENGINEERING_DIFFICULTIES = [
  { area: 'Technical-document retrieval', desc: 'Product documentation spans hundreds of documents with cross-references, versioned revisions and inconsistent formatting.' },
  { area: 'Tables', desc: 'Critical specifications live in tables. Standard chunking destroys table structure. Extraction must preserve row-column relationships.' },
  { area: 'Diagrams', desc: 'Wiring diagrams, schematics and flowcharts contain information not available in text. Diagram interpretation requires specialized processing.' },
  { area: 'OCR', desc: 'Scanned legacy documents require OCR. OCR quality varies. Errors propagate downstream if not caught at ingestion.' },
  { area: 'Identifiers', desc: 'Product codes, part numbers and model identifiers must be extracted and indexed precisely. Ambiguous identifiers cause cross-product contamination.' },
  { area: 'Metadata isolation', desc: 'Different product lines, regions and document types require metadata-scoped access boundaries. Unscoped retrieval returns irrelevant results.' },
  { area: 'Static + dynamic data', desc: 'Some information is fixed in documents; other information changes in operational systems. The architecture must distinguish and coordinate both.' },
  { area: 'Provenance', desc: 'Every answer must cite the specific source passage. Provenance is enforced at the system level, not as an afterthought.' },
  { area: 'Retrieval evaluation', desc: 'Retrieval quality is measured against explicit test cases. Regression testing catches degradation before it reaches production.' },
  { area: 'Release discipline', desc: 'New processing pipelines are evaluated against existing production behavior. Promotion requires passing explicit gates — not just looking better in spot checks.' },
];

export default function IndustrialKnowledgeSystemPage() {
  return (
    <div className="pt-[68px]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="container-page relative">
          <Reveal>
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              CASE STUDY · DATA · KNOWLEDGE · RETRIEVAL
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Industrial Knowledge &amp; Retrieval System
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              A hybrid retrieval architecture combining document ingestion, structured data, advanced retrieval, source governance and evaluation across complex product information.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="CONTEXT"
                heading="Technical knowledge at industrial scale"
                intro="Engineering teams needed reliable answers from complex product documentation — but retrieval was inconsistent, ungrounded and difficult to trust."
              />
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">Domain</div>
                    <div className="mt-1 text-sm text-foreground">Industrial product documentation and technical knowledge</div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">Engagement type</div>
                    <div className="mt-1 text-sm text-foreground">Architecture and implementation</div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">Practice</div>
                    <div className="mt-1 text-sm text-foreground">Data &amp; Knowledge Infrastructure</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS PROBLEM */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="BUSINESS / OPERATING PROBLEM"
            heading="Answers that could not be trusted"
            intro="Technical teams spent significant time searching for information scattered across hundreds of documents. When they found answers, they could not verify whether the information was current, correct or from the right source."
          />
          <Reveal delay={120}>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
              The cost was not just search time. It was decisions made on ungrounded information, specifications pulled from outdated documents and cross-product confusion when retrieval returned results from the wrong product line.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TECHNICAL CHALLENGE */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="TECHNICAL CHALLENGE"
            heading="Documents are not plain text"
            intro="Standard RAG approaches assume clean, chunkable text. Real technical documentation contains tables, diagrams, scanned pages, identifiers and cross-references that break naive chunking."
          />
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="ARCHITECTURE"
            heading="Sources to release gate"
            intro="The system connects document ingestion through retrieval, grounding, evaluation and a release gate that controls what reaches production."
          />
          <div className="mt-14 space-y-px overflow-hidden rounded-lg border border-border bg-border">
            {ARCHITECTURE_STAGES.map((stage, i) => (
              <Reveal
                key={stage.num}
                delay={i * 40}
                className="group flex items-start gap-5 bg-card p-6 transition-colors hover:bg-card/80 sm:p-7"
              >
                <span className="font-mono flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-accent transition-colors group-hover:border-accent">
                  {stage.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-base font-semibold tracking-tight">
                    {stage.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {stage.desc}
                  </p>
                </div>
                {i < ARCHITECTURE_STAGES.length - 1 && (
                  <div className="hidden text-accent/30 lg:block">↓</div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING DIFFICULTIES */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="ENGINEERING DIFFICULTIES"
            heading="Where the hard work was"
            intro="Each area required specific engineering attention. None of them are solved by simply choosing a better embedding model."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENGINEERING_DIFFICULTIES.map((d, i) => (
              <Reveal
                key={d.area}
                delay={i * 50}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-serif text-sm font-semibold tracking-tight text-foreground">
                  {d.area}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVALUATION */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="EVALUATION"
            heading="Measured, not assumed"
            intro="Retrieval quality is evaluated against explicit test cases. Regression testing catches degradation before it reaches production."
          />
          <Reveal delay={120}>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Evaluation was built before the surface area expanded. This meant that every change to ingestion, retrieval or ranking could be measured against known-good behavior — not just judged by whether the answers looked better in spot checks.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DECISION */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="DECISION"
            heading="Retrieval and grounding as explicit boundaries"
            intro="The key architectural decision was to make retrieval quality and source governance first-class system boundaries rather than emergent prompt behavior."
          />
          <Reveal delay={120}>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Provenance is enforced at the system level. Every answer links to the specific source passage it was derived from. Metadata isolation prevents cross-product contamination. The system does not rely on the model to self-cite correctly — it is constrained to retrieved evidence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="OUTCOME"
            heading="A retrieval architecture built for production"
            intro="The result is a system where source governance, evaluation and production discipline are first-class concerns — not afterthoughts."
          />
          <Reveal delay={120}>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
              New processing does not automatically replace production. Promotion depends on measured system behavior and explicit evaluation gates. The architecture preserves the ability to improve retrieval quality without risking regression in production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LESSONS */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="LESSONS"
            heading="What this engagement reinforced"
          />
          <Reveal delay={100}>
            <ul className="mt-10 space-y-4">
              {[
                'Retrieval quality is an architectural concern, not a model concern. The system must be designed for it.',
                'Provenance must be enforced at the system level. Relying on the model to self-cite correctly is insufficient.',
                'Metadata isolation prevents the most common production failure: returning results from the wrong context.',
                'Evaluation must precede surface area expansion. Building evaluation first means every change can be measured.',
                'Newer processing should not automatically replace production. Promotion should depend on measured behavior and explicit gates.',
              ].map((lesson, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <span className="font-mono flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90 pt-1">
                    {lesson}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="ARCHITECTURE DIAGRAM"
            heading="System flow"
          />
          <Reveal delay={100}>
            <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card p-6 sm:p-8">
              <svg viewBox="0 0 800 420" fill="none" className="h-full w-full" aria-hidden="true">
                {/* Sources */}
                <rect x="20" y="20" width="760" height="50" rx="2" fill="hsl(200 65% 38%)" fillOpacity="0.06" stroke="hsl(200 65% 48%)" strokeOpacity="0.2" strokeWidth="1" />
                <text x="40" y="42" fill="hsl(200 65% 38%)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">SOURCES</text>
                <text x="40" y="58" fill="hsl(215 35% 15%)" fontSize="11" fontFamily="serif">PDFs · HTML · Scanned · Spreadsheets · APIs</text>

                <line x1="400" y1="70" x2="400" y2="85" stroke="hsl(215 12% 88%)" strokeWidth="1" />
                <circle cx="400" cy="85" r="3" fill="hsl(200 65% 48%)" />

                {/* Parsing */}
                <rect x="20" y="90" width="760" height="50" rx="2" fill="hsl(215 35% 15%)" fillOpacity="0.04" stroke="hsl(215 12% 88%)" strokeWidth="1" />
                <text x="40" y="112" fill="hsl(215 10% 42%)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">PARSING / OCR / EXTRACTION</text>
                <text x="40" y="128" fill="hsl(215 35% 15%)" fontSize="11" fontFamily="serif">Format detection · OCR · Table extraction · Diagram interpretation</text>

                <line x1="400" y1="140" x2="400" y2="155" stroke="hsl(215 12% 88%)" strokeWidth="1" />
                <circle cx="400" cy="155" r="3" fill="hsl(200 65% 48%)" />

                {/* Corpus */}
                <rect x="20" y="160" width="760" height="50" rx="2" fill="hsl(215 35% 15%)" fillOpacity="0.04" stroke="hsl(215 12% 88%)" strokeWidth="1" />
                <text x="40" y="182" fill="hsl(215 10% 42%)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">CANONICAL CORPUS</text>
                <text x="40" y="198" fill="hsl(215 35% 15%)" fontSize="11" fontFamily="serif">Metadata · Structured objects · Embeddings · Provenance</text>

                <line x1="400" y1="210" x2="400" y2="225" stroke="hsl(215 12% 88%)" strokeWidth="1" />
                <circle cx="400" cy="225" r="3" fill="hsl(200 65% 48%)" />

                {/* Retrieval */}
                <rect x="20" y="230" width="760" height="50" rx="2" fill="hsl(200 65% 38%)" fillOpacity="0.08" stroke="hsl(200 65% 48%)" strokeOpacity="0.3" strokeWidth="1" />
                <text x="40" y="252" fill="hsl(200 65% 38%)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">SQL + VECTOR RETRIEVAL</text>
                <text x="40" y="268" fill="hsl(215 35% 15%)" fontSize="11" fontFamily="serif">Hybrid search · Reranking · Identifier retrieval · Metadata scoping</text>

                <line x1="400" y1="280" x2="400" y2="295" stroke="hsl(215 12% 88%)" strokeWidth="1" />
                <circle cx="400" cy="295" r="3" fill="hsl(200 65% 48%)" />

                {/* Grounded answer */}
                <rect x="20" y="300" width="760" height="50" rx="2" fill="hsl(215 35% 15%)" fillOpacity="0.04" stroke="hsl(215 12% 88%)" strokeWidth="1" />
                <text x="40" y="322" fill="hsl(215 10% 42%)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">GROUNDED ANSWER</text>
                <text x="40" y="338" fill="hsl(215 35% 15%)" fontSize="11" fontFamily="serif">Constrained generation · Passage-level citations</text>

                <line x1="400" y1="350" x2="400" y2="365" stroke="hsl(215 12% 88%)" strokeWidth="1" />
                <circle cx="400" cy="365" r="3" fill="hsl(200 65% 48%)" />

                {/* Evaluation + Gate */}
                <rect x="20" y="370" width="370" height="40" rx="2" fill="hsl(200 65% 38%)" fillOpacity="0.08" stroke="hsl(200 65% 48%)" strokeOpacity="0.3" strokeWidth="1" />
                <text x="40" y="388" fill="hsl(200 65% 38%)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">EVALUATION</text>
                <text x="40" y="402" fill="hsl(215 35% 15%)" fontSize="10" fontFamily="serif">Regression testing · Measured behavior</text>

                <rect x="410" y="370" width="370" height="40" rx="2" fill="hsl(200 65% 38%)" fillOpacity="0.08" stroke="hsl(200 65% 48%)" strokeOpacity="0.3" strokeWidth="1" />
                <text x="430" y="388" fill="hsl(200 65% 38%)" fontSize="10" fontFamily="monospace" letterSpacing="1.5">RELEASE GATE</text>
                <text x="430" y="402" fill="hsl(215 35% 15%)" fontSize="10" fontFamily="serif">Explicit promotion criteria</text>
              </svg>
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
                href="/contact"
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
