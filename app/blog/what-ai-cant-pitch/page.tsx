import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "What AI Can't Pitch | Crave PR Blog",
  description:
    "AI can write the press release and find the journalist. But can it pitch? Crave PR Founder & Principal Saskia Brussaard on what public relations actually requires — and why the most powerful tool is still the one that answers the phone.",
  openGraph: {
    title: "What AI Can't Pitch | Crave PR Blog",
    description:
      "AI can write the press release and find the journalist. But can it pitch? Crave PR Founder & Principal Saskia Brussaard on what public relations actually requires — and why the most powerful tool is still the one that answers the phone.",
    url: 'https://wearecrave.ca/blog/what-ai-cant-pitch',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What AI Can't Pitch | Crave PR Blog",
    description:
      "AI can write the press release and find the journalist. But can it pitch? Crave PR Founder & Principal Saskia Brussaard on what public relations actually requires — and why the most powerful tool is still the one that answers the phone.",
  },
}

export default function WhatAICantPitchPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy py-20 lg:py-28" aria-label="Blog post hero">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-6 font-body">PR &amp; Communications</p>
          <h1
            className="text-5xl lg:text-6xl text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What AI Can&apos;t Pitch
          </h1>
          <p
            className="text-white/70 text-xl lg:text-2xl leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why the most powerful tool in media relations is still the one that answers the phone
          </p>
          <div className="flex items-center gap-4 text-white/45 text-xs font-body tracking-wide">
            <span>Saskia Brussaard</span>
            <span className="text-gold/40">—</span>
            <span>March 2026</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="bg-off-white py-16 lg:py-24" aria-label="Blog post content">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">

          {/* Gold accent line */}
          <div className="w-12 h-0.5 bg-gold mb-12" aria-hidden="true" />

          <div className="prose-content space-y-6 text-charcoal/80 leading-relaxed font-body text-base lg:text-[17px]">

            <p>
              There&apos;s a moment every publicist knows. You&apos;ve spent three days crafting
              the perfect pitch. The story is tight, the timing is right, the journalist is exactly
              right. You hit send — and nothing. Crickets. Then, two weeks later, you pick up the
              phone, catch her between meetings, say four sentences out loud, and she says:
              &ldquo;Oh, that&apos;s actually interesting. Send me more.&rdquo;
            </p>

            <p>
              That moment — that four-sentence conversation — is what no AI tool on earth can
              replicate. Not yet. Not ever, really.
            </p>

            <p>
              I say this as someone who genuinely loves technology. I was an early adopter of AI
              tools in my practice. I use them to research, to brainstorm, to stress-test a pitch
              angle before I send it into the world. They make me faster and, honestly, sharper.
              But there is a fundamental misunderstanding rippling through the communications
              industry right now, and it goes something like this: if AI can write the press
              release, find the journalist, and send the pitch — what exactly are we paying a
              publicist for?
            </p>

            <p>Let me tell you.</p>

            {/* Section header */}
            <h2
              className="text-navy text-sm tracking-widest uppercase pt-6 pb-2 font-body font-semibold"
            >
              The Rolodex on My Shelf
            </h2>

            <p>
              I still have my Rolodex. It sits on my shelf, not as a joke, but as a reminder.
              For a long time, a significant part of my value as a publicist was the ability to
              produce — quickly, confidently — the direct line of anyone who mattered in Canadian
              food media. That number wasn&apos;t in a database. It was in my Rolodex, and before
              that, in my head. It came from years of showing up, following up, and never wasting
              anyone&apos;s time.
            </p>

            <p>
              Today, AI can surface a journalist&apos;s contact information in seconds. What it
              cannot tell you is that she prefers a text to an email, that she&apos;s working on
              something big and isn&apos;t taking new pitches until March, or that the best way
              to get her attention is to lead with the consumer angle, not the industry one.
            </p>

            <p>
              That knowledge still lives where it always has: in relationships.
            </p>

            <h2
              className="text-navy text-sm tracking-widest uppercase pt-6 pb-2 font-body font-semibold"
            >
              &ldquo;You&apos;re Not Seriously Pitching Me Lentil Soup in July.&rdquo;
            </h2>

            <p>
              A few years ago, I was working with a pulse industry client — the commodity boards
              behind Canada&apos;s beans, peas, chickpeas, and lentils. Canada, it turns out, is
              one of the world&apos;s largest growers of pulses. Most Canadians have no idea.
            </p>

            <p>
              I called a food journalist I&apos;d known for years — smart, seasoned, not easily
              impressed — and she stopped me mid-pitch. &ldquo;Saskia. You&apos;re not seriously
              pitching me lentil soup in the middle of summer.&rdquo;
            </p>

            <p>Fair. But I wasn&apos;t pitching lentil soup.</p>

            <p>
              I was pitching lentil fritters at a rooftop party. Chickpea burgers at a backyard
              barbecue. A cold pulse salad with charred corn and a tahini dressing that would
              make you forget every pasta salad you&apos;d ever eaten. I was pitching the idea
              that these little flavour sponges — mild, versatile, protein-packed — could do
              almost anything you asked of them, and that most Canadians were sleeping on an
              ingredient their own farmers had been growing for decades.
            </p>

            <p>
              She wrote the story. It ran in summer. People were surprised to learn Canada grows
              more lentils than almost anywhere on earth.
            </p>

            <p>
              That pitch didn&apos;t come from a database. It came from knowing my client&apos;s
              story well enough to find the angle she didn&apos;t know she was looking for — and
              from knowing her well enough to stay on the line when she pushed back.
            </p>

            <h2
              className="text-navy text-sm tracking-widest uppercase pt-6 pb-2 font-body font-semibold"
            >
              The Connections No Algorithm Makes
            </h2>

            <p>
              Some of the work I&apos;m proudest of has nothing to do with press releases.
              It&apos;s the connections — the unexpected combinations of people and ideas that
              create a story bigger than any single brand could tell alone.
            </p>

            <p>
              There was the evening I brought a group of journalists to a dimly lit cocktail bar
              to meet the bartenders who were quietly revolutionizing sustainability behind the
              stick — and introduced them to the founders of a craft distillery making vodka from
              milk permeate, a dairy byproduct that would otherwise go to waste. Food rescue.
              Fermentation. A seriously cool spirit. The story told itself; I just put the right
              people in the room.
            </p>

            <p>
              There was the national food writing awards ceremony that had always been a lovely,
              quiet affair — until we rolled out a red carpet. Literally. A red carpet, a
              step-and-repeat, photographers. Suddenly, it felt like the Oscars of Canadian
              culinary writing. The same event, the same people, the same awards — transformed
              by a single gesture that said: this matters, and so do you.
            </p>

            <p>
              That is what strategic communications actually looks like. Not a press release.
              Not a media list. A point of view about what a moment could be — and the
              relationships to make it happen.
            </p>

            <h2
              className="text-navy text-sm tracking-widest uppercase pt-6 pb-2 font-body font-semibold"
            >
              The Automation of the Obvious
            </h2>

            <p>
              AI is extraordinarily good at the mechanics of PR. It can scan a database of
              50,000 journalists and surface the 12 most likely to care about your oat milk
              brand. It can generate a press release in 40 seconds that is grammatically correct,
              properly formatted, and entirely forgettable. It can monitor your brand mentions,
              flag a brewing crisis, and draft three response options before your morning coffee.
            </p>

            <p>
              All of this is real. All of this is useful. None of this is media relations.
            </p>

            <p>
              Media relations — real media relations — is the art of understanding what a
              journalist needs before they know they need it. That knowledge is not in a database.
              It lives in relationships, in conversations, in years of paying attention.
            </p>

            <h2
              className="text-navy text-sm tracking-widest uppercase pt-6 pb-2 font-body font-semibold"
            >
              Trust Is Not a Deliverable
            </h2>

            <p>
              Here is the other thing AI cannot do: earn trust.
            </p>

            <p>
              Not the trust of consumers — though that matters too — but the trust of the
              journalists, editors, producers, and podcasters who are the gatekeepers of public
              conversation. That trust is built over time, call by call, pitch by pitch, cup of
              coffee by cup of coffee. It is built by never wasting someone&apos;s time. By
              knowing the difference between a story and an announcement. By occasionally calling
              a journalist to say, &ldquo;I don&apos;t have anything for you right now, but I
              thought you&apos;d want to know about this&rdquo; — and meaning it.
            </p>

            <p>
              You cannot automate sincerity. You cannot prompt your way to a relationship.
            </p>

            <h2
              className="text-navy text-sm tracking-widest uppercase pt-6 pb-2 font-body font-semibold"
            >
              The Reckoning
            </h2>

            <p>
              The PR industry is having a moment of reckoning, and I think it&apos;s overdue.
              For years, too many agencies sold volume: more press releases, more pitches, more
              coverage reports with impressive-looking numbers. AI has made volume cheaper than
              ever. You can now generate more content, send more pitches, and track more mentions
              than any team could manage a decade ago.
            </p>

            <p>
              But here&apos;s what&apos;s happening at the same time: journalists are drowning.
              Newsrooms are smaller. Editors are more protective of their attention. The
              signal-to-noise ratio in their inboxes has never been worse. In that environment,
              the publicist who sends 500 AI-generated pitches a week is not gaining ground —
              she is poisoning the well.
            </p>

            <p>
              What cuts through is not volume. It is relevance, timing, and trust. And those
              things require a human being who actually knows what they&apos;re doing.
            </p>

            <h2
              className="text-navy text-sm tracking-widest uppercase pt-6 pb-2 font-body font-semibold"
            >
              What We Bring to the Table
            </h2>

            <p>
              I have spent more than two decades helping food and agriculture brands get found,
              get heard, and get remembered. The tools have changed enormously. The fundamentals
              have not.
            </p>

            <p>
              Great PR still starts with a great story. It still depends on knowing who needs
              to hear it and how to reach them in a way they&apos;ll actually receive. It still
              requires someone who understands the cultural moment, reads the room, and knows
              which door to knock on.
            </p>

            <p>My Rolodex is a relic. My relationships are not.</p>

            <p className="text-navy font-body">AI can find the doors.</p>

            <p
              className="text-navy text-xl lg:text-2xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              It takes a real human to open them.
            </p>
          </div>

          {/* Author bio */}
          <div className="mt-16 border-t border-gold/30 pt-10">
            <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">About the Author</p>
            <p className="text-charcoal/75 leading-relaxed font-body text-sm">
              Saskia Brussaard is the Founder &amp; Principal of Crave PR, a boutique public
              relations agency specializing in food, agriculture, and food-adjacent sectors.
              She helps brands get found — in newspapers, on podcasts, and increasingly, on AI.
            </p>
          </div>

          {/* Back to blog */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="text-gold text-xs tracking-widest uppercase font-body hover:text-gold-dark transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-navy py-20 text-center" aria-label="Contact CTA">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-4xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to work with a publicist who picks up the phone?
          </h2>
          <p className="text-white/60 mb-8 font-body">
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
