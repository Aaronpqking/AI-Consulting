'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { nav, site } from '@/data/site';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="container-page flex h-[68px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
            <span className="font-serif text-sm font-bold text-primary-foreground">A</span>
          </span>
          <span className="font-serif text-[17px] font-semibold tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors',
                  active
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3.5 -bottom-px h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex h-10 items-center gap-1.5 rounded-sm bg-primary px-5 text-[13px] font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Discuss a System
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          'lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={cn(
            'absolute inset-x-0 top-[68px] origin-top border-b border-border bg-background/98 backdrop-blur-lg transition-all duration-300',
            open
              ? 'visible opacity-100 translate-y-0'
              : 'invisible opacity-0 -translate-y-3'
          )}
        >
          <div className="container-page flex flex-col py-5">
            {nav.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'border-b border-border/50 py-3.5 text-[15px] font-medium transition-colors',
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Discuss a System
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
