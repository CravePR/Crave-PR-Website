import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-off-white flex-1 py-32 lg:py-48 text-center" aria-label="Page not found">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-gold text-xs tracking-widest uppercase mb-6 font-body">404</p>
        <h1
          className="text-4xl lg:text-5xl text-navy mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          This page seems to have gone to pasture.
        </h1>
        <p className="text-charcoal/65 mb-10 font-body">
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-navy text-white px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-navy/80 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
