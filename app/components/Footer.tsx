import Link from 'next/link'
import { ForkWatermark } from './Decorative'
import { FooterSocialIcons } from './SocialLinks'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/news-distribution', label: 'News Distribution' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden" role="contentinfo">
      <div
        className="absolute right-8 lg:right-20 top-1/2 -translate-y-1/2 text-white opacity-[0.06] pointer-events-none select-none"
        aria-hidden="true"
      >
        <ForkWatermark className="h-40 w-auto" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 relative">

        {/* Top row: wordmark + nav links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="font-display text-2xl text-white tracking-wide hover:text-gold transition-colors">
            Crave PR
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-white/60 hover:text-gold tracking-widest uppercase transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social icons row */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <FooterSocialIcons />
        </div>

        {/* Bottom row: copyright + email */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 Crave PR. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/30 text-xs hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 text-xs hover:text-gold transition-colors">
              Terms of Use
            </Link>
            <a
              href="mailto:saskia@wearecrave.ca"
              className="text-white/40 text-xs hover:text-gold transition-colors"
            >
              saskia@wearecrave.ca
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
