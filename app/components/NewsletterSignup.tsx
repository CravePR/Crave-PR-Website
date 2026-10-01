'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, listType: 'newsletter' }),
      })
      if (res.ok) {
        setStatus('success')
        setFirstName('')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-white border-t border-charcoal/10 py-20 lg:py-24" aria-labelledby="newsletter-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
        <div>
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-body">Stay Informed</p>
          <h2
            id="newsletter-heading"
            className="text-3xl lg:text-4xl text-navy mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Off the Record
          </h2>
          <p className="text-charcoal/70 leading-relaxed font-body">
            Get insights on PR, marketing, and growth in food and agriculture — delivered straight
            to your inbox.
          </p>
        </div>

        <div>
          {status === 'success' ? (
            <p className="text-navy font-body text-lg" style={{ fontFamily: 'var(--font-display)' }}>
              You&apos;re in. Watch your inbox.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Newsletter signup form">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nl-first-name" className="block text-xs font-body font-semibold tracking-widest uppercase text-charcoal/60 mb-2">
                    First Name
                  </label>
                  <input
                    id="nl-first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-navy transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="nl-email" className="block text-xs font-body font-semibold tracking-widest uppercase text-charcoal/60 mb-2">
                    Email <span className="text-gold" aria-label="required">*</span>
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-navy transition-colors"
                    placeholder="you@yourbrand.com"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-block bg-gold text-navy px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                </button>
                <p className="text-xs text-charcoal/40 font-body">No spam. Unsubscribe anytime.</p>
              </div>
              {status === 'error' && (
                <p className="text-charcoal/60 text-xs font-body">
                  Something went wrong. Please try us at{' '}
                  <a href="mailto:saskia@wearecrave.ca" className="text-gold hover:text-gold-dark transition-colors">
                    saskia@wearecrave.ca
                  </a>
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
