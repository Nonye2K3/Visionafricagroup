import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { LayeredBackground } from '@/components/background/layered-background';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://visionafricagroup.com'),
  title: {
    default: 'Vision Africa Group | Global Sourcing & Lifestyle Innovation',
    template: '%s | Vision Africa Group',
  },
  description:
    'Vision Africa connects African markets to global manufacturers with premium smart products, solar solutions, and bespoke sourcing services.',
  keywords: [
    'Vision Africa',
    'global sourcing',
    'solar electronics',
    'smart appliances',
    'Nigeria distribution',
    'custom product sourcing',
  ],
  openGraph: {
    title: 'Vision Africa Group',
    description:
      'Your link to what’s next in smart technology, solar innovation, and premium lifestyle products for African markets.',
    url: 'https://visionafricagroup.com',
    siteName: 'Vision Africa Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision Africa Group',
    description:
      'Your link to what’s next in smart technology, solar innovation, and premium lifestyle products for African markets.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <LayeredBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
