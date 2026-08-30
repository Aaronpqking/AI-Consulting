import './globals.css';
import type { Metadata } from 'next';
import { Inter, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = site.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | AI Systems Engineering, Automation & Data Infrastructure`,
    template: `%s | ${site.name}`,
  },
  description:
    'AI systems engineering for organizations that need to connect business data, workflows, knowledge and software into reliable, governed operating infrastructure.',
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | AI Systems Engineering, Automation & Data Infrastructure`,
    description:
      'AI systems engineering for organizations that need to connect business data, workflows, knowledge and software into reliable, governed operating infrastructure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | AI Systems Engineering`,
    description:
      'AI systems engineering for organizations that need to connect business data, workflows, knowledge and software into reliable, governed operating infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description:
      'AI systems engineering for organizations that need to connect business data, workflows, knowledge and software into reliable, governed operating infrastructure.',
    url: siteUrl,
    areaServed: 'Worldwide (remote)',
    knowsAbout: [
      'AI Systems Engineering',
      'Data Infrastructure',
      'Automation',
      'Systems Integration',
      'Retrieval-Augmented Generation',
      'LLM Evaluation',
      'Production Readiness',
    ],
  };

  return (
    <html
      lang="en"
      className={cn(inter.variable, sourceSerif.variable, jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
