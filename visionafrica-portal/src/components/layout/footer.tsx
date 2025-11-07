import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-900/10 bg-white/70 backdrop-blur-xl transition dark:border-white/10 dark:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            Vision Africa Investment Group
          </p>
          <p className="mt-1 max-w-md text-sm text-slate-600 dark:text-slate-300">
            We connect African consumers, retailers, and developers to authentic smart technology,
            solar innovations, and lifestyle products that anticipate what’s next.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
          <Link href="mailto:contact@visionafricagroup.com" className="transition hover:text-indigo-500">
            contact@visionafricagroup.com
          </Link>
          <Link href="tel:+2348122033080" className="transition hover:text-indigo-500">
            +234 812 203 3080
          </Link>
          <Link
            href="https://wa.me/2348122033080"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 px-4 py-2 text-sm transition hover:border-indigo-500 hover:text-indigo-500 dark:border-white/10"
          >
            WhatsApp Support
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-900/5 bg-white/50 py-4 text-center text-xs text-slate-500 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-400">
        © {new Date().getFullYear()} Vision Africa. All rights reserved.
      </div>
    </footer>
  );
}
