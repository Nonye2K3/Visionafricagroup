import type { Metadata } from 'next';
import Link from 'next/link';
import {
  shopHero,
  productCollections,
  shopperExperience,
  quoteSection,
  assuranceSection,
} from '@/data/shop';
import { ProductOrbit } from '@/components/three/product-orbit';
import { ProductCard } from '@/components/shop/product-card';

export const metadata: Metadata = {
  title: 'Shop Omni • TOGO • Shile | Vision Africa Shop',
  description:
    'Shop Omni smart appliances, Versa solar lighting, To-Go power storage, and curated lifestyle products directly from Vision Africa’s trusted factory partners.',
};

export default function ShopPage() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-12 md:pt-16">
      {/* Hero */}
      <section className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 shadow-sm shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-200">
            {shopHero.badge}
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 drop-shadow-sm dark:text-white md:text-5xl">
            {shopHero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {shopHero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={shopHero.ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              {shopHero.ctaPrimary.label}
            </Link>
            <Link
              href={shopHero.ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            >
              {shopHero.ctaSecondary.label}
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <ProductOrbit />
          <div className="rounded-3xl border border-white/10 bg-white/70 p-6 text-sm leading-relaxed text-slate-600 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300">
            <p>
              Access a curated inventory of Omni, Versa, Shile, and To-Go products — available for
              immediate purchase, special orders, or enterprise-scale deployments. Every item is
              factory-verified and ready for African conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="mt-24 space-y-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Collections</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Retain the power of choice: shop ready-to-ship technology, book priority production
              slots, or customise the specs you need for large developments.
            </p>
          </div>
          <Link
            href="#quote"
            className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
          >
            Request availability
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productCollections.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Shopper Experience */}
      <section className="mt-24 grid gap-10 rounded-3xl border border-white/10 bg-white/70 p-10 shadow-xl shadow-slate-900/10 backdrop-blur-2xl lg:grid-cols-[1.1fr,0.9fr] dark:border-white/10 dark:bg-slate-950/60">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            {shopperExperience.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Every deal is guided by sourcing specialists who manage the entire lifecycle – from
            availability confirmation to delivery and installation.
          </p>
          <Link
            href="#quote"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            Plan your order
          </Link>
        </div>
        <div className="grid gap-6">
          {shopperExperience.points.map((point) => (
            <div
              key={point.heading}
              className="rounded-3xl border border-white/10 bg-white/75 p-6 text-sm leading-relaxed text-slate-600 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {point.heading}
              </h3>
              <p className="mt-2">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assurance */}
      <section className="mt-24 space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            {assuranceSection.title}
          </h2>
          <Link
            href="mailto:contact@visionafricagroup.com"
            className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
          >
            contact@visionafricagroup.com
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {assuranceSection.points.map((point) => (
            <div
              key={point.heading}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent p-6 text-sm leading-relaxed text-slate-600 shadow-xl shadow-indigo-500/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {point.heading}
              </h3>
              <p className="mt-3">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section
        id="quote"
        className="mt-24 rounded-3xl border border-white/10 bg-white/70 p-10 shadow-xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              {quoteSection.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {quoteSection.description}
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              {quoteSection.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://wa.me/2348122033080"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              WhatsApp +234 812 203 3080
            </Link>
          </div>
          <form className="space-y-5">
            <div>
              <label htmlFor="company" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Company / Buyer Name
              </label>
              <input
                id="company"
                name="company"
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
                placeholder="Vision Africa Retail Partner"
                required
              />
            </div>
            <div>
              <label htmlFor="contact" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email or Phone
              </label>
              <input
                id="contact"
                name="contact"
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
                placeholder="you@example.com / +234..."
                required
              />
            </div>
            <div>
              <label htmlFor="product" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Product interest
              </label>
              <input
                id="product"
                name="product"
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
                placeholder="Example: Omni Smart Solar Fan (50 units)"
                required
              />
            </div>
            <div>
              <label htmlFor="notes" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Notes / Delivery timeline
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
                placeholder="Preferred delivery date, location, project context..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Submit quote request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
