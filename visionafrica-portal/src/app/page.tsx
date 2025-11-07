import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import {
  heroContent,
  services,
  differentiators,
  brandsAndProducts,
  sourcingProcess,
  customOrders,
  contactSection,
  partnerships,
  logisticsHighlights,
} from '@/data/corporate';
import { ProductOrbit } from '@/components/three/product-orbit';

const serviceAccents = [
  'from-indigo-500/80 via-indigo-400/50 to-transparent',
  'from-rose-500/80 via-rose-400/50 to-transparent',
  'from-emerald-500/80 via-emerald-400/50 to-transparent',
];

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-12 md:pt-16">
      {/* Hero */}
      <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 shadow-sm shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-200">
            {heroContent.badge}
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 drop-shadow-sm dark:text-white md:text-5xl">
              {heroContent.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={heroContent.ctaPrimary.href}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {heroContent.ctaPrimary.label}
              </Link>
              <Link
                href={heroContent.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              >
                {heroContent.ctaSecondary.label}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/70 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/50">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-300">
              Highlights
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              {brandsAndProducts.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 shadow-sm shadow-white/30 dark:bg-slate-900/70 dark:shadow-black/40"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <ProductOrbit />
          <div className="rounded-3xl border border-white/10 bg-white/70 p-6 text-sm leading-relaxed text-slate-600 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300">
            <p>
              We connect desires to solutions with end-to-end sourcing, distribution, brand
              activation, and after-sales support. Vision Africa is the bridge between global
              manufacturers and everyday consumers across Nigeria and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-24 space-y-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Our Services</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
              We’re constantly in tune with what’s trending, what’s smart, and what’s next. Tap into
              trusted global partnerships and a distribution network designed for growth.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
          >
            Visit the Shop
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 shadow-xl shadow-slate-900/10 backdrop-blur-2xl transition hover:-translate-y-2 dark:border-white/10 dark:bg-slate-950/60"
            >
              <div
                className={clsx(
                  'absolute inset-0 opacity-60 transition duration-500 group-hover:opacity-90',
                  `bg-gradient-to-br ${serviceAccents[index % serviceAccents.length]}`,
                )}
              />
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={640}
                  height={420}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="relative space-y-3 p-6 text-slate-800 dark:text-slate-100">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="mt-24 grid gap-12 rounded-3xl border border-white/10 bg-white/70 p-10 shadow-xl shadow-slate-900/10 backdrop-blur-2xl lg:grid-cols-[1fr,1.1fr] dark:border-white/10 dark:bg-slate-950/60">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            {differentiators.title}
          </h2>
          {differentiators.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid gap-4 rounded-3xl border border-white/20 bg-gradient-to-br from-indigo-500/10 via-sky-400/10 to-transparent p-6 text-sm leading-relaxed text-slate-700 shadow-inner shadow-indigo-500/20 dark:border-white/10 dark:text-slate-200">
          <p>
            Vision Africa Investment Group markets and distributes famous OMNI brand products, TOGO
            solar power products, and Shile music products. We empower African communities with
            affordable, genuine, and cutting-edge smart home and office appliances — fostering
            economic growth, convenience, and sustainability.
          </p>
          <p>
            Our sourcing intelligence, factory audits, and logistics infrastructure ensure your
            projects move from idea to reality without friction.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="mt-24 space-y-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              {brandsAndProducts.title}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {brandsAndProducts.description}
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {brandsAndProducts.brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 shadow-lg shadow-slate-900/10 backdrop-blur-2xl transition hover:-translate-y-2 dark:border-white/10 dark:bg-slate-950/60"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={480}
                height={320}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
                <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="mt-24 grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-white/70 p-10 shadow-xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            {sourcingProcess.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {sourcingProcess.intro}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {sourcingProcess.checklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-slate-100/60 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm shadow-white/30 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {sourcingProcess.promise}
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-slate-900/10 to-transparent p-8 shadow-xl shadow-indigo-500/10 backdrop-blur-2xl dark:border-white/10">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {sourcingProcess.optionsHeading}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {sourcingProcess.optionsDescription}
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/75 p-8 text-base leading-relaxed text-slate-600 shadow-xl shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {customOrders.title}
            </h3>
            <p className="mt-3">{customOrders.blurb}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {customOrders.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
                  <span className="text-slate-700 dark:text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partners" className="mt-24 grid gap-10 lg:grid-cols-[1fr,1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/70 p-10 shadow-xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            {partnerships.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {partnerships.description}
          </p>
          <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            {partnerships.partners.map((partner) => (
              <li key={partner} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
                {partner}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-100/70 via-white/50 to-transparent p-10 shadow-xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            {logisticsHighlights.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {logisticsHighlights.description}
          </p>
          <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            {logisticsHighlights.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mt-24 rounded-3xl border border-white/10 bg-white/70 p-10 shadow-xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              {contactSection.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {contactSection.description}
            </p>
            <div className="rounded-2xl border border-slate-900/10 bg-slate-100/70 p-6 text-sm text-slate-700 shadow-inner shadow-white/20 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
              <p>{contactSection.whatsappCta}</p>
              <Link
                href={contactSection.whatsappLink}
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Chat on WhatsApp</span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white/80">
                  {contactSection.whatsappNumber}
                </span>
              </Link>
            </div>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                What product are you looking for?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
                placeholder="Describe the product, quantity, desired timeline, or share a reference link..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
