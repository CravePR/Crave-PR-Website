import Image from "next/image";

const services = [
  "Message Development & Strategic Planning",
  "Public Relations & Media Relations",
  "News Distribution & Story Pitching",
  "Commodity Board Communications",
  "Crisis Communications & Reputation Management",
  "AgTech PR",
  "Content Strategy & Campaign Development",
  "Media Training & Executive Positioning",
  "Answer Engine Optimization (AEO)",
];

const segments = [
  {
    title: "Food Brands & CPG",
    description:
      "Consumer-focused visibility and shelf presence campaigns that build brand recognition and drive purchase intent.",
  },
  {
    title: "Commodity Boards & Agricultural Organizations",
    description:
      "Category-level communications addressing producers, consumers, policymakers, and trade audiences — all at once.",
  },
  {
    title: "AgTech & Food Innovation",
    description:
      "Positioning and credibility building for technology-driven companies. We translate complex innovation into narratives that land.",
  },
];

const differentiators = [
  {
    title: "Deep Sector Expertise",
    description:
      "We work exclusively in food, agriculture, and agtech. That means we already understand commodity markets, farm-to-table narratives, food safety regulations, and the media landscapes that matter to your business.",
  },
  {
    title: "Built for the Age of AI",
    description:
      "Our Answer Engine Optimization (AEO) practice ensures your brand appears in AI-generated answers — through earned media credibility, not paid placement.",
  },
  {
    title: "Research-Grounded Strategy",
    description:
      "Every recommendation is grounded in real consumer insight. We help you separate genuine demand from industry hype so your communications land with the right people.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">

      {/* Nav */}
      <header className="px-6 py-5 border-b border-stone-100">
        <span className="text-lg font-semibold tracking-tight text-stone-900">
          Crave Public Relations
        </span>
      </header>

      {/* Hero */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* Left: copy */}
        <div className="flex flex-col justify-center px-8 sm:px-14 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-6">
            Food, Agriculture and Sustainability PR
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#1a3a8f] mb-6">
            Strategic Communications for Food and Agriculture
          </h1>
          <p className="text-base font-semibold text-stone-700 mb-3">
            Strategic Communications &amp; PR for Food and Agriculture
          </p>
          <p className="text-stone-500 text-base leading-relaxed mb-3">
            We speak food and agriculture. And we know how to make your story travel.
          </p>
          <p className="text-stone-500 text-base leading-relaxed mb-10">
            Crave Public Relations is a public relations agency exclusively focused on
            food, agriculture and sustainability. We help organizations build credibility,
            shape the conversation, and reach the people who matter. All backed by deep
            sector expertise and, uniquely, our own consumer research capability.
          </p>
          <a
            href="mailto:saskia@wearecrave.ca"
            className="self-start inline-block rounded-full bg-[#1a3a8f] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#14307a] transition-colors"
          >
            Let&apos;s Talk About Your Story
          </a>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/highland-cow.webp"
            alt="Highland cow in a field"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a8f] mb-10 max-w-lg">
            A full suite of PR services, built for food and agriculture
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                <span className="text-sm text-stone-600">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="px-6 py-20 bg-stone-50 border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
            Who We Serve
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a8f] mb-10">
            Specialists in three key areas
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {segments.map((segment) => (
              <div key={segment.title} className="flex flex-col gap-3">
                <div className="w-8 h-0.5 bg-stone-400" />
                <h3 className="text-base font-semibold text-stone-900">
                  {segment.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-500">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Crave */}
      <section className="px-6 py-20 border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
            Why Crave Public Relations
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a8f] mb-10 max-w-lg">
            Sector expertise that generalist agencies can&apos;t match
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="w-8 h-0.5 bg-stone-400" />
                <h3 className="text-base font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-20 bg-[#1a3a8f] text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to tell a better story?
        </h2>
        <p className="text-blue-200 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          Let&apos;s talk about how Crave Public Relations can help you reach the
          right audiences and build lasting credibility.
        </p>
        <a
          href="mailto:saskia@wearecrave.ca"
          className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1a3a8f] hover:bg-blue-50 transition-colors"
        >
          Let&apos;s Talk About Your Story
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
        <span className="font-semibold text-stone-900">Crave Public Relations</span>
        <a href="mailto:saskia@wearecrave.ca" className="hover:text-stone-600 transition-colors">
          saskia@wearecrave.ca
        </a>
      </footer>

    </div>
  );
}
