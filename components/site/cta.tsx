import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CtaProps = {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg';
  className?: string;
  showArrow?: boolean;
};

export function Cta({
  label,
  href = '/contact',
  variant = 'primary',
  size = 'default',
  className,
  showArrow = true,
}: CtaProps) {
  const isExternal = href.startsWith('http');

  const styles: Record<string, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'border border-border bg-card text-foreground hover:bg-secondary',
    ghost: 'text-foreground hover:text-accent',
  };

  const sizes: Record<string, string> = {
    default: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-7 text-base',
  };

  const base =
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

  const content = (
    <>
      {label}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, styles[variant], sizes[size], 'group', className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(base, styles[variant], sizes[size], 'group', className)}
    >
      {content}
    </Link>
  );
}
