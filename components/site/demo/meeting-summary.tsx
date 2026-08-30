import type { Meeting } from '@/data/meeting-fixture';

export function MeetingSummary({ meeting }: { meeting: Meeting }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-serif text-xl font-semibold tracking-tight">
            {meeting.title}
          </h2>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span>{meeting.date}</span>
            <span>{meeting.duration}</span>
            <span>{meeting.participants.length} participants</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {meeting.status}
        </span>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-foreground/90">
        {meeting.summary}
      </p>

      <div className="mt-6">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
          Participants
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {meeting.participants.map((p) => (
            <span
              key={p}
              className="rounded border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
          Key Topics
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {meeting.keyTopics.map((t) => (
            <span
              key={t}
              className="rounded border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
