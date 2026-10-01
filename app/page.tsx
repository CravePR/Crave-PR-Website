import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  FieldRowPattern,
  GoldDivider,
  LaurelBranch,
} from './components/Decorative'
import NewsletterStrip from './components/NewsletterStrip'

export const metadata: Metadata = {
  title: 'Crave PR — Food & Agriculture Public Relations',
  description:
    'From farm to front page. Crave PR delivers expert public relations for food and agriculture brands — including the AI platforms and publications that shape what gets discovered next.',
  openGraph: {
    title: 'Crave PR — Food & Agriculture Public Relations',
    description:
      'From farm to front page. Crave PR delivers expert public relations for food and agriculture brands — including the AI platforms and publications that shape what gets discovered next.',
    url: 'https://wearecrave.ca',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crave PR — Food & Agriculture Public Relations',
    description:
      'From farm to front page. Crave PR delivers expert public relations for food and agriculture brands — including the AI platforms and publications that shape what gets discovered next.',
  },
}

const clientLogos = [
  { src: '/logos/clients/yukon-agricultural-association.webp', alt: 'Yukon Agricultural Association' },
  { src: '/logos/clients/derlea.webp', alt: 'Derlea' },
  { src: '/logos/clients/just-vertical.webp', alt: 'Just Vertical' },
  { src: '/logos/clients/pulse-canada.webp', alt: 'Pulse Canada' },
  {
    src: '/logos/clients/canadian-food-innovation-network.webp',
    alt: 'Canadian Food Innovation Network',
  },
  { src: '/logos/clients/summer-fresh.webp', alt: 'Summer Fresh' },
  { src: '/logos/clients/usaedc.webp', alt: 'USAEDC' },
  { src: '/logos/clients/dairy-distillery.webp', alt: 'Dairy Distillery' },
  { src: '/logos/clients/grace.webp', alt: 'Grace' },
  { src: '/logos/clients/grodan.webp', alt: 'Grodan' },
  { src: '/logos/clients/loop.webp', alt: 'Loop' },
  { src: '/logos/clients/three-farmers.webp', alt: 'Three Farmers' },
]

const mediaLogos = [
  { src: '/logos/media/bbc.webp', alt: 'BBC' },
  { src: '/logos/media/bevnet.webp', alt: 'BevNet' },
  { src: '/logos/media/canadian-grocer.webp', alt: 'Canadian Grocer' },
  { src: '/logos/media/cbc.webp', alt: 'CBC' },
  { src: '/logos/media/cnn.webp', alt: 'CNN' },
  { src: '/logos/media/ctv.webp', alt: 'CTV' },
  { src: '/logos/media/food-dive.webp', alt: 'Food Dive' },
  { src: '/logos/media/food-in-canada.webp', alt: 'Food in Canada' },
  { src: '/logos/media/foodbev-media.webp', alt: 'FoodBev Media' },
  { src: '/logos/media/globe-and-mail.webp', alt: 'The Globe and Mail' },
  { src: '/logos/media/greenhouse-canada.webp', alt: 'Greenhouse Canada' },
  { src: '/logos/media/nations-restaurant-news.webp', alt: "Nation's Restaurant News" },
  { src: '/logos/media/restaurants-canada.webp', alt: 'Restaurants Canada' },
  { src: '/logos/media/the-grocer.webp', alt: 'The Grocer' },
  { src: '/logos/media/the-telegraph.webp', alt: 'The Telegraph' },
]

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Traditional Public Relations',
    description:
      'Expert story pitching to the journalists, editors, and publications your customers trust most. We build relationships, craft compelling narratives, and earn coverage that moves the needle.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: 'AI-Era Media Relations',
    description:
      'The next frontier of discovery. We help your brand get found and cited by ChatGPT, Perplexity, Claude, and other AI platforms — because what AI says about you shapes what people believe.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Strategic Communications Counsel',
    description:
      'Senior-level strategic advice when the stakes are highest. Messaging frameworks, narrative development, crisis positioning, and communications leadership for complex moments.',
  },
]

const sectors = [
  'Food Brands & CPG',
  'Agri-Tech',
  'Food-Tech',
  'Cookbook Authors',
  'Culinary Talent',
  'Startups',
  'Non-profits & Charities',
  'Food Security Organizations',
  'Nutrition Brands',
  'Commodity Boards',
  'Restaurants & Hospitality',
  'Sustainable Agriculture',
  'Grower Associations',
  'Farms',
  'Kitchenware',
  'Greenhouse Tech',
  'Animal Health',
  'Precision Ag',
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy overflow-hidden relative" aria-label="Hero">
        <FieldRowPattern />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-stretch gap-0">
          {/* Text */}
          <div className="py-20 lg:py-28 lg:pr-16 flex flex-col justify-center relative">
            <p className="text-gold text-xs tracking-widest uppercase mb-6 font-body">
              Food &amp; Agriculture Public Relations Since 2009
            </p>
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-7"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Your story.{' '}
              <em className="text-gold not-italic">In the right hands.</em>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg font-body">
              From farm to front page — and now to the AI platforms shaping what gets
              discovered. Crave PR connects food and agriculture brands with the journalists,
              editors, and platforms that matter most. Serving food, agriculture, and agri-tech
              brands across Canada, the United States, and internationally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy px-8 py-3.5 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/services"
                className="inline-block border border-white/30 text-white px-8 py-3.5 text-sm font-body font-semibold tracking-wide hover:border-gold hover:text-gold transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Highland cow image */}
          <div className="hidden lg:block relative">
            <Image
              src="/images/highland-cow.webp"
              alt="Highland cow — a symbol of Crave PR's roots in food and agriculture"
              fill
              className="object-cover object-center"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="bg-white border-t border-charcoal/10 py-14" aria-label="Trusted by">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase text-center mb-3 font-body">
            Selected Food &amp; Agriculture Experience
          </p>
          <p
            className="text-charcoal/70 text-base text-center mb-8 font-body"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            From commodity boards to CPG — experience across the food world.
          </p>
          <GoldDivider variant="light" className="max-w-xs mx-auto mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 lg:gap-14 max-w-4xl mx-auto w-full">
            {clientLogos.map((logo) => (
              <div
                key={logo.src}
                className="relative h-[70px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 28vw, 180px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="bg-off-white py-20 lg:py-28"
        id="services"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">
              What We Do
            </p>
            <GoldDivider variant="light" className="max-w-xs mx-auto mb-5" />
            <h2
              id="services-heading"
              className="text-4xl lg:text-5xl text-navy"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Public Relations Services for Food &amp; Agriculture Brands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-navy p-8 lg:p-10 border-t-2 border-gold hover:border-t-4 transition-all duration-300"
              >
                <div className="text-gold mb-5">{service.icon}</div>
                <h3
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {service.title}
                </h3>
                <p className="text-white/65 leading-relaxed text-sm font-body">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border border-navy text-navy px-8 py-3.5 text-xs font-body font-semibold tracking-widest uppercase hover:bg-navy hover:text-white transition-colors duration-200"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* AS SEEN IN */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="media-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">
              Coverage
            </p>
            <h2
              id="media-heading"
              className="text-4xl text-navy"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Work Has Appeared In
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 max-w-4xl mx-auto w-full">
            {mediaLogos.map((logo) => (
              <div
                key={logo.src}
                className="relative h-12"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 22vw, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section
        className="bg-navy py-20 lg:py-28"
        aria-labelledby="sectors-heading"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <LaurelBranch className="h-8 w-auto mx-auto mb-5 text-gold opacity-40" />
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">
            Our Clients
          </p>
          <h2
            id="sectors-heading"
            className="text-4xl lg:text-5xl text-white mb-14"
            style={{ fontFamily: 'var(--font-display)' }}
          >
              PR for Food Brands, Agri-Tech &amp; Agriculture Organizations Across North America
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="px-5 py-2.5 border border-gold/30 text-white/80 text-sm tracking-wide font-body hover:bg-gold/10 hover:border-gold/60 transition-colors duration-200 cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CRAVE */}
      <section
        className="bg-off-white py-20 lg:py-28"
        aria-labelledby="why-crave-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">
              Why Crave
            </p>
            <h2
              id="why-crave-heading"
              className="text-4xl lg:text-5xl text-navy mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We know what AI can&apos;t do.
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed font-body">
              AI can do many things. But it cannot sit across from an editor and help them
              see the story they didn&apos;t know they were looking for. It cannot read a
              room, connect the dots, or know which door to knock on — and when.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-t-2 border-gold pt-8">
              <h3
                className="text-xl text-navy mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                The Human Edge
              </h3>
              <p className="text-charcoal/75 leading-relaxed text-sm font-body">
                A deep understanding of the food and agriculture sector. Relationships
                built over decades. Cultural fluency. Advice rooted in research and
                experience. The judgment that comes from being in the room — not just
                in the data.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-8">
              <h3
                className="text-xl text-navy mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                AI as a Tool, Not a Replacement
              </h3>
              <p className="text-charcoal/75 leading-relaxed text-sm font-body">
                We use the best tools available — Qwoted, PodPitch, Lionize, OnePitch,
                and more — to work smarter and get your story in front of the right
                people. Including on ChatGPT, Perplexity, and Claude.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-8">
              <h3
                className="text-xl text-navy mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                The Crave Collective
              </h3>
              <p className="text-charcoal/75 leading-relaxed text-sm font-body">
                A trusted network of senior communications experts across Canada, the
                US, the UK, and beyond. The right expertise for every story, every
                market, every moment.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="text-center py-10 border-y border-gold/20 mb-12">
            <p
              className="text-2xl lg:text-3xl text-gold italic leading-relaxed"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              &ldquo;AI can find the doors. It takes a real human to open them.&rdquo;
            </p>
          </blockquote>

          {/* CTA */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-charcoal/75 leading-relaxed mb-8 font-body">
              Saskia Brussaard is a communications strategist and media relations expert with
              more than two decades in food and agriculture — and the founder of one of
              Canada&apos;s most trusted boutique PR agencies in the sector. She leads Crave PR
              and a growing collective of senior communications experts across North America.
            </p>
            <Link
              href="/about"
              className="inline-block border border-navy text-navy px-8 py-3.5 text-xs font-body font-semibold tracking-widest uppercase hover:bg-navy hover:text-white transition-colors duration-200"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-28 text-center" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">
            Get in Touch
          </p>
          <GoldDivider variant="dark" className="max-w-xs mx-auto mb-6" />
          <h2
            className="text-4xl lg:text-5xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to be discovered?
          </h2>
          <p className="text-white/60 mb-10 text-lg font-body">
            Let&apos;s talk about your story and where it should be heard.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      <NewsletterStrip />
    </>
  )
}
