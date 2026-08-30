import { Reveal } from '@/components/site/reveal';

export function OutcomesGrid({
  outcomes,
}: {
  outcomes: { title: string; desc: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {outcomes.map((o, i) => (
        <Reveal
          key={o.title}
          delay={i * 60}
          className="rounded-lg border border-border bg-card p-6"
        >
          <h3 className="font-serif text-base font-semibold tracking-tight">
            {o.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {o.desc}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
