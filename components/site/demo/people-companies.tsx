import { cn } from '@/lib/utils';
import type { Meeting } from '@/data/meeting-fixture';

type Company = Meeting['companies'][number];

const companyTypeStyles: Record<Company['type'], string> = {
  Client: 'bg-accent/10 text-accent',
  Partner: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  Prospect: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  Vendor: 'bg-secondary text-muted-foreground',
  Competitor: 'bg-destructive/10 text-destructive',
};

export function PeopleCompanies({ meeting }: { meeting: Meeting }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
        People &amp; Companies
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Entities identified from the meeting transcript and CRM context.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            People ({meeting.people.length})
          </h4>
          <div className="mt-3 space-y-2">
            {meeting.people.map((person) => (
              <div
                key={person.id}
                className="flex items-start justify-between gap-3 rounded border border-border bg-secondary/20 px-3 py-2"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{person.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {person.role}
                    {person.company && (
                      <>
                        {' · '}<span className="text-foreground">{person.company}</span>
                      </>
                    )}
                  </p>
                </div>
                {person.mentionedInTranscript && (
                  <span className="shrink-0 rounded bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                    In transcript
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            Companies ({meeting.companies.length})
          </h4>
          <div className="mt-3 space-y-2">
            {meeting.companies.map((company) => (
              <div
                key={company.id}
                className="rounded border border-border bg-secondary/20 px-3 py-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-foreground">{company.name}</p>
                  <span
                    className={cn(
                      'shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                      companyTypeStyles[company.type]
                    )}
                  >
                    {company.type}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  {company.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
