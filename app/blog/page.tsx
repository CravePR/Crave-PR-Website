import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Insights on Food & Agriculture PR',
  description:
    'Perspectives on food and agriculture public relations, AI-era communications, and strategic PR from the Crave PR team.',
  openGraph: {
    title: 'Blog — Insights on Food & Agriculture PR',
    description:
      'Perspectives on food and agriculture public relations, AI-era communications, and strategic PR from the Crave PR team.',
    url: 'https://wearecrave.ca/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Insights on Food & Agriculture PR',
    description:
      'Perspectives on food and agriculture public relations, AI-era communications, and strategic PR from the Crave PR team.',
  },
}

const posts = [
  {
    slug: 'what-ai-cant-pitch',
    title: "What AI Can't Pitch",
    excerpt:
      "AI can write the press release and find the journalist. But can it pitch? On what media relations actually requires — and why the most powerful tool is still the one that answers the phone.",
    author: 'Saskia Brussaard',
    date: 'March 2026',
    category: 'PR & Communications',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-navy py-20 lg:py-28" aria-label="Blog hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">Perspectives</p>
          <h1
            className="text-5xl lg:text-6xl text-white max-w-2xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Thinking about food, media, and what gets covered.
          </h1>
        </div>
      </section>

      {/* POSTS */}
      <section className="bg-off-white py-20 lg:py-28" aria-label="Blog posts">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border-t-2 border-gold flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">
                    {post.category}
                  </p>
                  <h2
                    className="text-2xl text-navy mb-4 leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-charcoal/70 text-sm leading-relaxed font-body mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-charcoal/10">
                    <div className="text-charcoal/45 text-xs font-body">
                      <span>{post.author}</span>
                      <span className="mx-2 text-gold/40">—</span>
                      <span>{post.date}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gold text-xs tracking-widest uppercase font-body hover:text-gold-dark transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
