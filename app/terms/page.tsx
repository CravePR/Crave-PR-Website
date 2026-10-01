import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Crave PR',
  description: 'Terms of Use for wearecrave.ca — the conditions governing your use of the Crave PR website.',
  openGraph: {
    title: 'Terms of Use | Crave PR',
    description: 'Terms of Use for wearecrave.ca — the conditions governing your use of the Crave PR website.',
    url: 'https://wearecrave.ca/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Crave PR',
    description: 'Terms of Use for wearecrave.ca — the conditions governing your use of the Crave PR website.',
  },
}

const sections = [
  {
    title: '1. Intellectual Property',
    content: (
      <p>All content on this Site — including text, blog posts, images, graphics, logos, and design — is the property of Crave Public Relations and is protected by Canadian and international copyright laws. You may not reproduce, distribute, or use any content from this Site without prior written permission from Crave PR.</p>
    ),
  },
  {
    title: '2. Permitted Use',
    content: (
      <p>You may access and use this Site for personal, non-commercial informational purposes. You may share links to content on this Site, provided you clearly attribute Crave PR as the source.</p>
    ),
  },
  {
    title: '3. Blog Content',
    content: (
      <p>Blog posts and articles published on this Site represent the opinions and expertise of Crave PR and its contributors. They are intended for informational purposes only and do not constitute professional legal, financial, or business advice.</p>
    ),
  },
  {
    title: '4. External Links',
    content: (
      <p>This Site may contain links to third-party websites. Crave PR is not responsible for the content, privacy practices, or accuracy of any external sites. Links are provided for convenience only.</p>
    ),
  },
  {
    title: '5. Disclaimer of Warranties',
    content: (
      <p>This Site is provided &ldquo;as is&rdquo; without warranties of any kind. Crave PR makes no representations about the accuracy, completeness, or suitability of the information on this Site for any purpose.</p>
    ),
  },
  {
    title: '6. Limitation of Liability',
    content: (
      <p>To the fullest extent permitted by law, Crave PR shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this Site or its content.</p>
    ),
  },
  {
    title: '7. Changes to These Terms',
    content: (
      <p>We reserve the right to update these Terms of Use at any time. Changes will be posted on this page with an updated date. Continued use of the Site following any changes constitutes acceptance of the new terms.</p>
    ),
  },
  {
    title: '8. Governing Law',
    content: (
      <p>These Terms of Use are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>
    ),
  },
  {
    title: '9. Contact',
    content: (
      <address className="not-italic">
        <p>For any questions about these Terms of Use:</p>
        <p className="mt-2">Crave Public Relations<br />
        <a href="mailto:saskia@wearecrave.ca" className="text-gold hover:text-gold-dark transition-colors">saskia@wearecrave.ca</a><br />
        wearecrave.ca</p>
      </address>
    ),
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28" aria-label="Terms of use hero">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">Legal</p>
          <h1
            className="text-5xl lg:text-6xl text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Terms of Use
          </h1>
        </div>
      </section>

      <section className="bg-off-white py-16 lg:py-24" aria-label="Terms of use content">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="w-12 h-0.5 bg-gold mb-10" aria-hidden="true" />

          <p className="text-charcoal/50 text-xs font-body tracking-wide mb-10">Last updated: April 2026</p>

          {/* Introduction */}
          <div className="space-y-4 text-charcoal/75 leading-relaxed font-body mb-12">
            <p>
              By accessing or using wearecrave.ca (the &ldquo;Site&rdquo;), you agree to be bound
              by these Terms of Use. If you do not agree, please do not use this Site. These terms
              apply to all visitors and users of the Site.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="border-t border-charcoal/10 pt-8">
                <h2
                  className="text-navy text-sm tracking-widest uppercase mb-4 font-body font-semibold"
                >
                  {section.title}
                </h2>
                <div className="text-charcoal/75 leading-relaxed font-body">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
