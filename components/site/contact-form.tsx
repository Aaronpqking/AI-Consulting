'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactForm } from '@/data/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldBase =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

export function ContactForm({
  defaultEngagement,
}: {
  defaultEngagement?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formState, setFormState] = useState<Record<string, unknown>>({
    engagement: defaultEngagement || '',
  });

  const update = (key: string, value: unknown) => {
    setFormState((s) => ({ ...s, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const toggleMulti = (key: string, value: string) => {
    const current = (formState[key] as string[]) || [];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    update(key, next);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrors({});

    const payload = {
      name: (formState.name as string) || '',
      email: (formState.email as string) || '',
      company: (formState.company as string) || '',
      building: (formState.building as string) || '',
      happening: (formState.happening as string[]) || [],
      stage: (formState.stage as string) || '',
      technology: (formState.technology as string) || '',
      outcome: (formState.outcome as string) || '',
      budget: (formState.budget as string) || '',
      engagement: (formState.engagement as string) || '',
      website: (formState.website as string) || '',
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
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-accent/40 bg-accent/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
        <h3 className="mt-4 font-serif text-xl font-semibold">Project brief received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {contactForm.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === 'error' && (
        <div className="flex items-start gap-2.5 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Something went wrong submitting the brief. Please try again, or
            email directly at{' '}
            <a href="mailto:aaronpqking@gmail.com" className="font-medium underline">
              aaronpqking@gmail.com
            </a>
            .
          </span>
        </div>
      )}

      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website (leave empty)</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={(formState.website as string) || ''}
          onChange={(e) => update('website', e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required error={errors.name}>
          <input
            type="text"
            className={fieldBase}
            value={(formState.name as string) || ''}
            onChange={(e) => update('name', e.target.value)}
            required
          />
        </Field>
        <Field label="Work email" required error={errors.email}>
          <input
            type="email"
            className={fieldBase}
            value={(formState.email as string) || ''}
            onChange={(e) => update('email', e.target.value)}
            required
          />
        </Field>
      </div>

      <Field label="Company" error={errors.company}>
        <input
          type="text"
          className={fieldBase}
          value={(formState.company as string) || ''}
          onChange={(e) => update('company', e.target.value)}
        />
      </Field>

      <Field label="What are you building?" required error={errors.building}>
        <SelectInput
          options={contactForm.buildingOptions}
          value={(formState.building as string) || ''}
          onChange={(v) => update('building', v)}
          placeholder="Select one"
        />
      </Field>

      <Field
        label="What is happening?"
        required
        hint="Select all that apply"
        error={errors.happening}
      >
        <MultiChip
          options={contactForm.happeningOptions}
          selected={(formState.happening as string[]) || []}
          onToggle={(v) => toggleMulti('happening', v)}
        />
      </Field>

      <Field label="Current stage" required error={errors.stage}>
        <SelectInput
          options={contactForm.stageOptions}
          value={(formState.stage as string) || ''}
          onChange={(v) => update('stage', v)}
          placeholder="Select stage"
        />
      </Field>

      <Field label="Current technology" hint="Optional">
        <input
          type="text"
          className={fieldBase}
          value={(formState.technology as string) || ''}
          onChange={(e) => update('technology', e.target.value)}
          placeholder="e.g. OpenAI, FastAPI, PostgreSQL, LangChain"
        />
      </Field>

      <Field label="What would a useful outcome look like?" required error={errors.outcome}>
        <textarea
          className={cn(fieldBase, 'min-h-[120px] resize-y')}
          value={(formState.outcome as string) || ''}
          onChange={(e) => update('outcome', e.target.value)}
          required
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget range" hint="Optional">
          <SelectInput
            options={contactForm.budgetOptions}
            value={(formState.budget as string) || ''}
            onChange={(v) => update('budget', v)}
            placeholder="Select range"
            allowEmpty
          />
        </Field>
        <Field label="Preferred engagement" hint="Optional">
          <SelectInput
            options={contactForm.engagementOptions}
            value={(formState.engagement as string) || ''}
            onChange={(v) => update('engagement', v)}
            placeholder="Select type"
            allowEmpty
          />
        </Field>
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
            'Submit Project Brief'
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-0.5 text-accent">*</span>}
        </label>
        {hint && (
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>
      )}
    </div>
  );
}

function SelectInput({
  options,
  value,
  onChange,
  placeholder,
  allowEmpty,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  allowEmpty?: boolean;
}) {
  return (
    <select
      className={cn(fieldBase, !value && 'text-muted-foreground')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
      {allowEmpty && value && (
        <option value="">— Clear selection —</option>
      )}
    </select>
  );
}

function MultiChip({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={cn(
              'rounded-md border px-2.5 py-1.5 text-xs transition-colors',
              active
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-border bg-background text-muted-foreground hover:border-accent/40 hover:text-foreground'
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
