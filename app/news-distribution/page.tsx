import type { Metadata } from 'next'
import Link from 'next/link'
import CraveNewsForm from '../components/CraveNewsForm'

export const metadata: Metadata = {
  title: 'Crave News Distribution | Food & Agriculture News Wire',
  description:
    'Crave News reaches thousands of journalists, editors, influencers, and tastemakers across Canada, the US, and food media around the globe. Distribute your food and agriculture news where it matters.',
  openGraph: {
    title: 'Crave News Distribution | Food & Agriculture News Wire',
    description:
      'Crave News reaches thousands of journalists, editors, influencers, and tastemakers across Canada, the US, and food media around the globe. Distribute your food and agriculture news where it matters.',
    url: 'https://wearecrave.ca/news-distribution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crave News Distribution | Food & Agriculture News Wire',
    description:
      'Crave News reaches thousands of journalists, editors, influencers, and tastemakers across Canada, the US, and food media around the globe. Distribute your food and agriculture news where it matters.',
  },
}

const brandFeatures = [
  {
    title: 'Targeted Distribution',
    description:
      'Your news goes to the contacts most relevant to your story — consumer media, trade press, regional outlets, and specialized food and agriculture media.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Global Food Media Network',
    description:
      'Reach journalists and influencers across Canada, the United States, and food media around the world — from national broadcasters to niche trade titles.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Influencers & Tastemakers',
    description:
      'Go beyond traditional media. Crave News reaches the bloggers, content creators, and culinary voices shaping what people eat, buy, and talk about.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const mediaFeatures = [
  {
    title: 'Relevant to Your Beat',
    description:
      'Food, agriculture, agri-tech, sustainability, nutrition, food security, culinary — receive news that matches what you cover.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Direct from the Source',
    description:
      'News comes straight from brands, organizations, and PR teams — no aggregators, no noise.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Free to Subscribe',
    description:
      'Joining the Crave News network is completely free for media, influencers, and tastemakers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

const stats = [
  { stat: 'Thousands of Contacts', label: 'Journalists, editors & writers' },
  { stat: 'Global Reach', label: 'Canada, the US & food media worldwide' },
  { stat: 'Consumer & Trade', label: 'Across print, digital & broadcast' },
  { stat: 'Influencers & Tastemakers', label: 'The voices that shape food culture' },
]

export default function NewsDistributionPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy py-20 lg:py-28" aria-label="Crave News Distribution hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">Crave News Distribution</p>
          <h1
            className="text-5xl lg:text-6xl text-white max-w-3xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Your news. In the hands of the people who matter.
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed font-body mb-10">
            Crave News is a proprietary news distribution network reaching thousands of journalists,
            editors, freelance writers, influencers, tastemakers, and changemakers across Canada,
            the United States, and food media around the globe. From consumer press to trade media,
            from bloggers to broadcasters — we put your story where it needs to be.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#brands"
              className="inline-block bg-gold text-navy px-8 py-4 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200"
            >
              Distribute Your News
            </a>
            <a
              href="#media"
              className="inline-block border border-white/40 text-white px-8 py-4 text-sm font-body font-semibold tracking-wide hover:border-white hover:bg-white/10 transition-colors duration-200"
            >
              Subscribe to Receive News
            </a>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-navy/95 border-t border-white/10 py-14" aria-label="Network stats">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((item) => (
              <div key={item.stat} className="text-center lg:border-r lg:border-white/10 last:border-0 px-4">
                <p
                  className="text-gold text-xl lg:text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.stat}
                </p>
                <p className="text-white/50 text-xs font-body tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR BRANDS */}
      <section id="brands" className="bg-off-white py-20 lg:py-28" aria-labelledby="brands-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">For Brands &amp; Organizations</p>
            <h2
              id="brands-heading"
              className="text-4xl lg:text-5xl text-navy mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get your news in front of the right people.
            </h2>
            <p className="text-charcoal/75 leading-relaxed font-body">
              Whether you&apos;re launching a product, announcing a milestone, sharing research,
              or responding to an issue — Crave News ensures your story reaches the journalists,
              editors, and influencers who cover food, agriculture, and everything in between.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {brandFeatures.map((feature) => (
              <div key={feature.title} className="border-t-2 border-gold pt-8">
                <div className="text-gold mb-5">{feature.icon}</div>
                <h3
                  className="text-xl text-navy mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-sm font-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* FOR MEDIA */}
      <section id="media" className="bg-navy py-20 lg:py-28" aria-labelledby="media-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">For Media, Influencers &amp; Tastemakers</p>
            <h2
              id="media-heading"
              className="text-4xl lg:text-5xl text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Stay ahead of the story.
            </h2>
            <p className="text-white/65 leading-relaxed font-body">
              Crave News delivers food and agriculture news directly to your inbox — press releases,
              product launches, research findings, industry announcements, and more. Curated for
              journalists, editors, freelance writers, bloggers, influencers, and anyone who covers
              or creates content about food, agriculture, nutrition, and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {mediaFeatures.map((feature) => (
              <div key={feature.title} className="border-t-2 border-gold/50 pt-8">
                <div className="text-gold mb-5">{feature.icon}</div>
                <h3
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm font-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <CraveNewsForm />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white py-20 text-center" aria-label="Contact CTA">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-4xl text-navy mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to make your news travel?
          </h2>
          <p className="text-charcoal/70 mb-8 font-body">
            Let&apos;s talk about your next announcement.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200"
          >
            Contact Crave PR
          </Link>
        </div>
      </section>
    </>
  )
}
