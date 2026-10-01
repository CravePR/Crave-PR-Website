import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Crave PR — Food & Agriculture Public Relations',
  description:
    'Crave PR offers traditional public relations, AI-era discoverability, and strategic communications counsel for food, agriculture, and agri-tech brands across Canada and North America.',
  openGraph: {
    title: 'Services | Crave PR — Food & Agriculture Public Relations',
    description:
      'Crave PR offers traditional public relations, AI-era discoverability, and strategic communications counsel for food, agriculture, and agri-tech brands across Canada and North America.',
    url: 'https://wearecrave.ca/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Crave PR — Food & Agriculture Public Relations',
    description:
      'Crave PR offers traditional public relations, AI-era discoverability, and strategic communications counsel for food, agriculture, and agri-tech brands across Canada and North America.',
  },
}

const services = [
  {
    number: '01',
    title: 'Traditional Public Relations',
    tagline: 'The right story. The right journalist. The right moment.',
    description:
      'Media relations is both art and science — and in food and agriculture, it requires knowing the territory. We pitch to the journalists, editors, producers, and bloggers who shape what your customers read, watch, and trust.',
    details: [
      'Story development and narrative positioning',
      'Targeted media list building across trade and consumer press',
      'Proactive pitching and reactive media handling',
      'Press release writing and distribution',
      'Interview preparation and spokesperson coaching',
      'Campaign-based and always-on retainer programs',
      'Coverage tracking and reporting',
    ],
    ideal:
      'Food brands seeking sustained earned media, product launches, seasonal campaigns, and issues requiring third-party credibility.',
  },
  {
    number: '02',
    title: 'AI-Era Media Relations',
    tagline: 'Be found where the next generation of discovery happens.',
    description:
      'The way people discover brands is changing. ChatGPT, Perplexity, Claude, and other AI tools now answer millions of questions a day — and what they say about your brand matters. We help clients build the digital footprint and earned authority that gets them cited on these platforms.',
    details: [
      'AI visibility auditing — what are AI tools saying about your brand today?',
      'Content and coverage strategy for LLM discoverability',
      'Authoritative source building and citation-worthy content',
      'Integration of traditional media with AI-era visibility',
      'Ongoing monitoring and optimization',
      'Education and counsel for leadership teams navigating this shift',
    ],
    ideal:
      'Brands in food, agri-tech, and nutrition wanting to stay ahead of the curve as AI reshapes how consumers find and evaluate products.',
  },
  {
    number: '03',
    title: 'Strategic Communications Counsel',
    tagline: 'Senior thinking when the stakes are high.',
    description:
      'Sometimes you need more than execution — you need a trusted strategic partner. We provide senior-level counsel for complex communications challenges: messaging development, narrative architecture, reputation management, and leadership communications.',
    details: [
      'Communications strategy and planning',
      'Messaging frameworks and brand narrative development',
      'Crisis communications preparedness and response',
      'Stakeholder mapping and engagement strategy',
      'Issues management and proactive positioning',
      'Executive and spokesperson communications',
      'Communications audits and gap analysis',
    ],
    ideal:
      'Commodity boards, trade associations, agri-tech companies, and food brands navigating significant change, market entry, or reputational challenges.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-navy py-20 lg:py-28" aria-label="Services hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">What We Do</p>
          <h1
            className="text-5xl lg:text-6xl text-white max-w-2xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Three ways to put your story in the spotlight.
          </h1>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      {services.map((service, index) => (
        <section
          key={service.number}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-off-white' : 'bg-white'}`}
          aria-labelledby={`service-${service.number}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <p
                  className="text-7xl lg:text-8xl font-display text-navy/10 leading-none mb-4 select-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                  aria-hidden="true"
                >
                  {service.number}
                </p>
                <h2
                  id={`service-${service.number}`}
                  className="text-3xl lg:text-4xl text-navy mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {service.title}
                </h2>
                <p className="text-gold text-sm font-body mb-6 italic">
                  {service.tagline}
                </p>
                <p className="text-charcoal/75 leading-relaxed font-body">
                  {service.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="border-t-2 border-gold pt-8 mb-8">
                  <h3
                    className="text-sm text-navy font-body font-semibold tracking-widest uppercase mb-6"
                  >
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-charcoal/75 font-body text-sm">
                        <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-navy/5 px-6 py-5">
                  <p className="text-xs text-navy/50 font-body tracking-widest uppercase mb-2">Ideal For</p>
                  <p className="text-charcoal/80 font-body text-sm leading-relaxed">
                    {service.ideal}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-28 text-center" aria-label="Contact CTA">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-gold text-xs tracking-widest uppercase mb-6 font-body">Start a Conversation</p>
          <h2
            className="text-4xl lg:text-5xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Not sure where to start?
          </h2>
          <p className="text-white/60 mb-10 font-body">
            We&apos;ll help you figure out the right combination of services for your goals.
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
