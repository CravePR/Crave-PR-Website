import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Crave PR',
  description: 'Privacy Policy for Crave Public Relations — how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Crave PR',
    description: 'Privacy Policy for Crave Public Relations — how we collect, use, and protect your personal information.',
    url: 'https://wearecrave.ca/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Crave PR',
    description: 'Privacy Policy for Crave Public Relations — how we collect, use, and protect your personal information.',
  },
}

const sections = [
  {
    title: '1. Information We Collect',
    content: (
      <>
        <p>We collect personal information only when you voluntarily provide it to us. This includes:</p>
        <ul>
          <li>Your name, company name, and email address when you fill out our contact form</li>
          <li>Your name, publication or platform, and email address when you subscribe to our newsletter or the Crave News Distribution network</li>
          <li>Any additional information you choose to include in a message to us</li>
        </ul>
        <p>We do not collect sensitive personal information. We do not use cookies for advertising or tracking purposes.</p>
      </>
    ),
  },
  {
    title: '2. How We Use Your Information',
    content: (
      <>
        <p>We use your personal information to:</p>
        <ul>
          <li>Respond to your inquiries and communicate with you about our services</li>
          <li>Send you our newsletter, Off the Record, if you have subscribed</li>
          <li>Distribute food and agriculture news to media, influencers, and tastemakers who have subscribed to Crave News</li>
          <li>Improve our website and services</li>
        </ul>
        <p>We will never sell, rent, or trade your personal information to third parties.</p>
      </>
    ),
  },
  {
    title: '3. Email Communications',
    content: (
      <p>If you subscribe to our newsletter or Crave News Distribution, you will receive periodic emails from Crave PR. Every email includes an unsubscribe link. You may opt out at any time.</p>
    ),
  },
  {
    title: '4. Data Storage and Security',
    content: (
      <p>Your information is stored securely. We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure.</p>
    ),
  },
  {
    title: '5. Third-Party Services',
    content: (
      <p>Our website may use third-party services including Vercel (hosting), Contentful (blog content management), and email marketing platforms. These services have their own privacy policies and data practices.</p>
    ),
  },
  {
    title: '6. Your Rights',
    content: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Withdraw consent for communications at any time</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:saskia@wearecrave.ca" className="text-gold hover:text-gold-dark transition-colors">saskia@wearecrave.ca</a>.</p>
      </>
    ),
  },
  {
    title: '7. Contact',
    content: (
      <address className="not-italic">
        <p>For any privacy-related questions or concerns:</p>
        <p className="mt-2">Crave Public Relations<br />
        <a href="mailto:saskia@wearecrave.ca" className="text-gold hover:text-gold-dark transition-colors">saskia@wearecrave.ca</a><br />
        wearecrave.ca</p>
      </address>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28" aria-label="Privacy policy hero">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">Legal</p>
          <h1
            className="text-5xl lg:text-6xl text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="bg-off-white py-16 lg:py-24" aria-label="Privacy policy content">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="w-12 h-0.5 bg-gold mb-10" aria-hidden="true" />

          <p className="text-charcoal/50 text-xs font-body tracking-wide mb-10">Last updated: April 2026</p>

          {/* Introduction */}
          <div className="space-y-4 text-charcoal/75 leading-relaxed font-body mb-12">
            <p>
              Crave Public Relations (&ldquo;Crave PR&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
              or &ldquo;our&rdquo;) is committed to protecting your personal information. This
              Privacy Policy explains what information we collect, how we use it, and your rights
              regarding your data. This policy applies to wearecrave.ca and all services offered
              by Crave PR.
            </p>
            <p>
              Crave PR is based in Ontario, Canada and operates in compliance with Canada&apos;s
              Personal Information Protection and Electronic Documents Act (PIPEDA).
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
                <div className="text-charcoal/75 leading-relaxed font-body space-y-3 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:pl-4 [&_ul>li]:before:content-['—'] [&_ul>li]:before:text-gold [&_ul>li]:before:mr-2">
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
