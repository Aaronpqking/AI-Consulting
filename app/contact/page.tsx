import type { Metadata } from 'next';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { Cta } from '@/components/site/cta';
import { ContactForm } from '@/components/site/contact-form';
import { contactForm, site } from '@/data/site';
import { Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Submit a project brief. A concise description of the business process, current systems and desired outcome is enough to start.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { engagement?: string };
}) {
  const engagement = searchParams.engagement;

  return (
    <div className="pt-24 sm:pt-28">
      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="CONTACT"
                heading={contactForm.heading}
                intro={contactForm.subheading}
              />
              <Reveal delay={120}>
                <div className="mt-8 space-y-4 rounded-lg border border-border bg-card p-6">
                  <div>
                    <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      Direct email
                    </h3>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
                    >
                      <Mail className="h-4 w-4" />
                      {site.email}
                    </a>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      Location
                    </h3>
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {site.location}
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      What happens next
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Your brief is reviewed and you receive the most appropriate
                      next step. If an architecture discovery session is the
                      right starting point, we will schedule it directly.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="rounded-lg border border-border bg-card/50 p-6 sm:p-8">
                  <ContactForm defaultEngagement={engagement} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
