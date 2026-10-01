import type { Metadata } from 'next'
import NewsletterSignup from '../components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Contact Crave PR',
  description:
    'Get in touch with Crave PR to discuss public relations, strategic communications, or AI-era visibility for your food or agriculture brand.',
  openGraph: {
    title: 'Contact Crave PR',
    description:
      'Get in touch with Crave PR to discuss public relations, strategic communications, or AI-era visibility for your food or agriculture brand.',
    url: 'https://wearecrave.ca/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Crave PR',
    description:
      'Get in touch with Crave PR to discuss public relations, strategic communications, or AI-era visibility for your food or agriculture brand.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-navy py-20 lg:py-28" aria-label="Contact hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">Get in Touch</p>
          <h1
            className="text-5xl lg:text-6xl text-white max-w-xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let&apos;s talk about your story.
          </h1>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: copy */}
          <div>
            <h2
              id="contact-form-heading"
              className="text-3xl lg:text-4xl text-navy mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We&apos;d love to hear from you.
            </h2>
            <p className="text-charcoal/75 leading-relaxed mb-6 font-body">
              Whether you&apos;re looking for ongoing media relations support, preparing for a
              launch, navigating a complex communications challenge, or just curious about
              what Crave PR could do for your brand — reach out.
            </p>
            <p className="text-charcoal/75 leading-relaxed font-body">
              We work with food brands, agri-tech companies, commodity boards, cookbook
              authors, and organizations across the food and agriculture sector.
            </p>

            <div className="mt-10 pt-10 border-t border-charcoal/10">
              <p className="text-xs text-charcoal/50 font-body tracking-widest uppercase mb-3">Email</p>
              <a
                href="mailto:saskia@wearecrave.ca"
                className="text-navy font-body hover:text-gold transition-colors"
              >
                saskia@wearecrave.ca
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <form
              action="#"
              method="post"
              className="space-y-6"
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-body font-semibold tracking-widest uppercase text-charcoal/60 mb-2"
                  >
                    Name <span className="text-gold" aria-label="required">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-navy transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-body font-semibold tracking-widest uppercase text-charcoal/60 mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-navy transition-colors"
                    placeholder="Your company or brand"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-body font-semibold tracking-widest uppercase text-charcoal/60 mb-2"
                >
                  Email <span className="text-gold" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-navy transition-colors"
                  placeholder="you@yourbrand.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-body font-semibold tracking-widest uppercase text-charcoal/60 mb-2"
                >
                  Message <span className="text-gold" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-navy transition-colors resize-none"
                  placeholder="Tell us about your brand and what you&#39;re hoping to achieve..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy text-white py-4 text-xs font-body font-semibold tracking-widest uppercase hover:bg-gold hover:text-navy transition-colors duration-200"
              >
                Send Message
              </button>

              <p className="text-xs text-charcoal/40 font-body text-center">
                We typically respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  )
}
