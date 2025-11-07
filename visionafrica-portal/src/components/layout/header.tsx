'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#how-it-works', label: 'How it Works' },
  { href: '/#partners', label: 'Partners' },
  { href: '/shop', label: 'Shop' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/shop') {
      return pathname?.startsWith('/shop');
    }
    return href === pathname;
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-900/5 bg-white/80 px-6 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/60 dark:shadow-black/30 lg:mt-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30">
            VA
          </span>
          <div className="leading-tight text-sm font-semibold text-slate-800 dark:text-slate-100">
            <span className="block text-base">Vision Africa</span>
            <span className="block text-xs font-normal text-slate-500 dark:text-slate-300">
              Investment Group
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-200 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition hover:text-slate-900 dark:hover:text-white ${
                isActive(link.href)
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-200'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-slate-800 transition hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:text-white md:hidden"
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-4 w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-900/5 bg-white/90 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 md:hidden"
          >
            <div className="flex flex-col px-6 py-6 text-base text-slate-700 dark:text-slate-200">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-medium transition hover:text-indigo-500"
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
