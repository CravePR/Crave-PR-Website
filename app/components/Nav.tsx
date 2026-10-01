'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavSocialIcons } from './SocialLinks'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/news-distribution', label: 'News Distribution' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="font-display text-xl lg:text-2xl text-white tracking-wide hover:text-gold transition-colors"
          >
            Crave PR
          </Link>

          {/* Desktop navigation + social icons */}
          <div className="hidden md:flex items-center gap-8">
            <nav aria-label="Main navigation" className="flex items-center gap-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs font-body tracking-widest uppercase transition-colors duration-200 ${
                    pathname === href
                      ? 'text-gold'
                      : 'text-white/75 hover:text-gold'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="pl-6 border-l border-white/15">
              <NavSocialIcons />
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden flex flex-col gap-1.5 p-2 text-white"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-px bg-white transition-transform origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-transform origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav aria-label="Mobile navigation" className="md:hidden border-t border-white/10 py-6 flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  pathname === href ? 'text-gold' : 'text-white/75 hover:text-gold'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <NavSocialIcons />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
