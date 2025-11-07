'use client';

import { useTheme } from 'next-themes';
import { MoonStar, SunMedium } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!resolvedTheme) {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition dark:bg-slate-900/40 dark:text-white/60">
        <SunMedium className="h-4 w-4" />
      </span>
    );
  }

  const isDark = (theme ?? resolvedTheme) === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/80 text-slate-900 shadow ring-1 ring-slate-900/10 transition hover:scale-105 hover:shadow-lg dark:bg-slate-900/80 dark:text-white dark:ring-white/10"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <MoonStar className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <SunMedium className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
