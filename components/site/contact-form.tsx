'use client';

import { useState, useEffect, useId } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteIdentity } from '@/data/site';

const contactEmail = siteIdentity.contactEmail;

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldBase =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

function getAttribution() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    ctaSource: params.get('source') || '',
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmContent: params.get('utm_content') || '',
    utmTerm: params.get('utm_term') || '',
    referrer: document.referrer || '',
    landingPage: sessionStorage.getItem('landing_page') || '',
    formPage: window.location.pathname,
  };
}

function generateSubmissionId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function ContactForm() {
  const reactId = useId();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [acknowledgmentSent, setAcknowledgmentSent] = useState(false);
  const [submissionId] = useState(() => generateSubmissionId());

  const fieldIds = {
    name: `${reactId}-name`,
    email: `${reactId}-email`,
    company: `${reactId}-company`,
    summary: `${reactId}-summary`,
    systems: `${reactId}-systems`,
    timeline: `${reactId}-timeline`,
    website: `${reactId}-website`,
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('landing_page')) {
      sessionStorage.setItem('landing_page', window.location.href);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const attribution = getAttribution();

    const payload = {
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      company: (formData.get('company') as string) || '',
      summary: (formData.get('summary') as string) || '',
      systems: (formData.get('systems') as string) || '',
      timeline: (formData.get('timeline') as string) || '',
      website: (formData.get('website') as string) || '',
      submissionId,
      ...attribution,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
          setStatus('idle');
        } else {
          setStatus('error');
        }
        return;
      }
      setAcknowledgmentSent(data.acknowledgmentSent === true);
      setStatus('success');
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
        gtag('event', 'contact_submit_success', {
          cta_source: attribution.ctaSource || 'direct',
          page: attribution.formPage,
        });
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="rounded-lg border border-accent/40 bg-accent/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
        <h3 className="mt-4 font-serif text-xl font-semibold">Project brief received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your brief has been received. We&apos;ll review what you shared and follow up
          with the appropriate next step.
        </p>
        {acknowledgmentSent && (
          <p className="mt-3 text-xs text-muted-foreground/70">
            A confirmation email has been sent to your address.
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === 'error' && (
        <div
          className="flex items-start gap-2.5 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            We couldn&apos;t send your project brief. Please try again, or
            email directly at{' '}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {contactEmail}
            </a>
            .
          </span>
        </div>
      )}

      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={fieldIds.website}>Website (leave empty)</label>
        <input
          id={fieldIds.website}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <label htmlFor={fieldIds.name} className="text-sm font-medium text-foreground">
              Name<span className="ml-0.5 text-accent">*</span>
            </label>
          </div>
          <input
            id={fieldIds.name}
            name="name"
            type="text"
            autoComplete="name"
            className={cn(fieldBase, errors.name && 'border-destructive')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined}
            required
          />
          {errors.name && (
            <p
              id={`${fieldIds.name}-error`}
              className="mt-1.5 text-xs font-medium text-destructive"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <label htmlFor={fieldIds.email} className="text-sm font-medium text-foreground">
              Work email<span className="ml-0.5 text-accent">*</span>
            </label>
          </div>
          <input
            id={fieldIds.email}
            name="email"
            type="email"
            autoComplete="email"
            className={cn(fieldBase, errors.email && 'border-destructive')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${fieldIds.email}-error` : undefined}
            required
          />
          {errors.email && (
            <p
              id={`${fieldIds.email}-error`}
              className="mt-1.5 text-xs font-medium text-destructive"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <label htmlFor={fieldIds.company} className="text-sm font-medium text-foreground">
            Company
          </label>
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
            Optional
          </span>
        </div>
        <input
          id={fieldIds.company}
          name="company"
          type="text"
          autoComplete="organization"
          className={fieldBase}
        />
      </div>

      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <label htmlFor={fieldIds.summary} className="text-sm font-medium text-foreground">
            What are you trying to build or improve?<span className="ml-0.5 text-accent">*</span>
          </label>
        </div>
        <textarea
          id={fieldIds.summary}
          name="summary"
          className={cn(fieldBase, 'min-h-[120px] resize-y', errors.summary && 'border-destructive')}
          aria-invalid={!!errors.summary}
          aria-describedby={errors.summary ? `${fieldIds.summary}-error` : undefined}
          required
        />
        {errors.summary && (
          <p
            id={`${fieldIds.summary}-error`}
            className="mt-1.5 text-xs font-medium text-destructive"
          >
            {errors.summary}
          </p>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <label htmlFor={fieldIds.systems} className="text-sm font-medium text-foreground">
            Systems involved
          </label>
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
            Optional
          </span>
        </div>
        <input
          id={fieldIds.systems}
          name="systems"
          type="text"
          className={fieldBase}
          placeholder="e.g. Salesforce, Gmail, internal tools, custom APIs"
        />
      </div>

      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <label htmlFor={fieldIds.timeline} className="text-sm font-medium text-foreground">
            Timeline
          </label>
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
            Optional
          </span>
        </div>
        <input
          id={fieldIds.timeline}
          name="timeline"
          type="text"
          className={fieldBase}
          placeholder="e.g. Immediate, 1–2 months, 3–6 months, Exploratory"
        />
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Send Project Brief'
          )}
        </button>
      </div>
    </form>
  );
}
