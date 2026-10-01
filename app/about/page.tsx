import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Crave PR',
  description:
    'Meet Saskia Brussaard, Founder & Principal of Crave PR — a boutique public relations agency specializing in food, agriculture, and food-adjacent sectors with 20+ years of experience.',
  openGraph: {
    title: 'About Crave PR',
    description:
      'Meet Saskia Brussaard, Founder & Principal of Crave PR — a boutique public relations agency specializing in food, agriculture, and food-adjacent sectors with 20+ years of experience.',
    url: 'https://wearecrave.ca/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Crave PR',
    description:
      'Meet Saskia Brussaard, Founder & Principal of Crave PR — a boutique public relations agency specializing in food, agriculture, and food-adjacent sectors with 20+ years of experience.',
  },
}

const values = [
  {
    title: 'Deep Sector Expertise',
    description:
      'We live and breathe food and agriculture. That means we know the journalists who cover your beat, the publications your customers read, and the nuances that make a story land.',
  },
  {
    title: 'Senior-Level Only',
    description:
      'No junior account teams. Every client works directly with an experienced practitioner who understands the landscape and brings strategic thinking to every pitch.',
  },
  {
    title: 'Built for the AI Age',
    description:
      'Media relations has evolved. We help clients get found not just in traditional press, but in the AI-powered search and discovery tools reshaping how people find information.',
  },
  {
    title: 'Relationships That Deliver',
    description:
      'Coverage starts with credibility. We\'ve spent decades building relationships with the editors, journalists, and producers who cover food, agriculture, and sustainability.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-navy py-20 lg:py-28" aria-label="About page hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">About Crave PR</p>
          <h1
            className="text-5xl lg:text-6xl text-white max-w-3xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The agency that knows food, agriculture, and the people who shape how we eat.
          </h1>
        </div>
      </section>

      {/* SASKIA SECTION */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="saskia-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT COLUMN: photo + credential block */}
          <div className="flex flex-col gap-10">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/saskia-headshot.webp"
                alt="Saskia Brussaard, Founder of Crave PR"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Recognition & Affiliations */}
            <div className="border-t border-gold/30 pt-6">
              <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">Recognition &amp; Affiliations</p>
              <ul className="space-y-2 font-body text-sm text-charcoal/75">
                <li>— IABC Ovation Award</li>
                <li>— Two CAMA Awards, Canada Agri-Food Marketing Association</li>
                <li>— Member, Women in AI (WAI)</li>
                <li>— Member, Canadian Women in Food (CWIF)</li>
                <li>— Mentor, Ontario startup accelerators</li>
                <li>— Board member, Halton food security organization</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: prose bio */}
          <div className="pt-4">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">Founder &amp; Principal</p>
            <h2
              id="saskia-heading"
              className="text-4xl lg:text-5xl text-navy mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Saskia Brussaard
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed font-body">
              <p>
                Saskia Brussaard has spent more than two decades at the intersection of food,
                agriculture, and strategic communications — building influence, shaping
                narratives, and helping organizations earn trust.
              </p>
              <p>
                A communications strategist and media relations expert, she founded Crave Public
                Relations in 2009 with a clear focus on food and agriculture — and built it into
                one of Canada&apos;s most trusted boutique agencies in the sector. Her client
                roster has spanned CPG brands and commodity boards, agri-tech and greenhouse
                growers, cookbook authors and chefs, food security advocates and local food
                movements, and international organizations entering new markets.
              </p>
              <p>
                Her work spans the full communications spectrum — earned, owned, and paid. She
                has built brand narratives, led award-winning campaigns, produced marquee industry
                events, placed op-eds that shaped public debate, and guided organizations through
                complex and high-stakes moments. She has managed reputations, built them from
                scratch, and helped restore them.
              </p>
              <p>
                She brings senior-level strategic thinking to every engagement — helping CEOs
                find their voice, brands clarify what they stand for, and organizations know
                what to say before they decide where to say it. Creativity and discipline in
                equal measure.
              </p>
              <p>
                Recognizing early the transformative potential of AI in communications, Saskia
                pivoted to co-found a technology and communications startup helping food and
                agriculture organizations harness AI-powered research, strategy, and insight.
                The experience sharpened her thinking and expanded her toolkit. She has returned
                to Crave PR to put it all into practice.
              </p>
              <p>
                Saskia lives with her family nestled between Toronto and the Niagara wine region
                — where she tends an ever-expanding garden, works toward her Master Gardener
                designation with a focus on Ontario native plants, and bakes a very good loaf
                of bread.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING & THOUGHT LEADERSHIP */}
      <section className="bg-navy py-20 lg:py-24" aria-label="Speaking and thought leadership">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-8 font-body">Speaking &amp; Thought Leadership</p>
          <p
            className="text-white text-xl lg:text-2xl leading-relaxed mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Saskia is frequently tapped as a guest speaker, guest lecturer, competition judge,
            and startup mentor — bringing expertise in strategic communications, crisis
            navigation, and communications counsel to universities and industry organizations.
          </p>
          <p className="text-white/65 leading-relaxed mb-10 font-body">
            Available for speaking engagements, media commentary, judging opportunities, and
            advisory roles across food, agriculture, communications, and innovation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* THE NETWORK */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="network-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">The Crave Network</p>
            <h2
              id="network-heading"
              className="text-4xl lg:text-5xl text-navy mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Senior experts. Whenever you need them.
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-4 font-body">
              Crave PR operates as a curated global network of specialists in media relations,
              premium events, talent representation, digital and traditional advertising, media
              buying, influencer outreach, social media management, trade shows, product seeding
              and sampling, and trade representation.
            </p>
            <p className="text-charcoal/80 leading-relaxed font-body">
              Our network spans Canada and extends globally, allowing us to support clients
              with local market knowledge whether they&apos;re pitching a Toronto food editor,
              a New York trade publication, or a UK broadcaster.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-navy py-20 lg:py-28" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">How We Work</p>
            <h2
              id="values-heading"
              className="text-4xl text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What sets us apart
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="border-t border-gold/30 pt-8">
                <h3
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {value.title}
                </h3>
                <p className="text-white/65 leading-relaxed font-body text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white py-20 text-center" aria-label="Contact CTA">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-4xl text-navy mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to work together?
          </h2>
          <p className="text-charcoal/70 mb-8 font-body">
            Tell us about your brand and what you&apos;re trying to achieve.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  )
}
