const LAYERS = [
  {
    layer: 'INFORMATION',
    components: ['Meeting transcript', 'Calendar metadata', 'Participant roster'],
  },
  {
    layer: 'INTELLIGENCE',
    components: ['Speech normalization', 'Speaker identification', 'Item extraction', 'Classification'],
  },
  {
    layer: 'DECISION',
    components: ['Action items', 'Decisions', 'Commitments', 'Questions', 'Risks'],
  },
  {
    layer: 'GOVERNANCE',
    components: ['Confidence thresholds', 'Human review queue', 'Approve / reject', 'Source traceability'],
  },
  {
    layer: 'ACTION',
    components: ['CRM task creation', 'Calendar scheduling', 'Email notifications', 'Commitment tracking'],
  },
  {
    layer: 'EVALUATION',
    components: ['Extraction accuracy logs', 'Approval rate metrics', 'Override tracking', 'Feedback loop'],
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {LAYERS.map((l, i) => (
        <div key={l.layer} className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-serif text-sm font-semibold tracking-tight">
              {l.layer}
            </span>
          </div>
          <ul className="mt-3 space-y-1.5">
            {l.components.map((c) => (
              <li key={c} className="text-xs text-muted-foreground">
                {c}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
