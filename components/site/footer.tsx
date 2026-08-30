import Link from 'next/link';
import { Linkedin, Github, ArrowRight } from 'lucide-react';
import { nav, siteIdentity } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12 lg:gap-16">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent">
                <span className="font-serif text-sm font-bold text-accent-foreground">A</span>
              </span>
              <span className="font-serif text-[17px] font-semibold tracking-tight">
                {siteIdentity.companyName}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              {siteIdentity.footerLine}
            </p>
            <p className="mt-3 text-sm text-primary-foreground/40">
              {siteIdentity.location}
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              Connect
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${siteIdentity.contactEmail}`}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {siteIdentity.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={siteIdentity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteIdentity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} {siteIdentity.companyName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-primary-foreground/40 hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-primary-foreground/40 hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
