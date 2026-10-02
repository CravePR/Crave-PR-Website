'use client'

import { useState } from 'react'

export default function NewsletterStrip() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, listType: 'newsletter' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-navy py-16 lg:py-20" aria-label="Newsletter signup">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-gold text-xs tracking-widest uppercase mb-3 font-body">Stay Informed</p>
        <h2
          className="text-3xl lg:text-4xl text-white mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Off the Record
        </h2>
        <p className="text-white/60 font-body mb-8 text-sm">
          PR and communications insights for the food and agriculture world. Monthly. No fluff.
        </p>

        {status === 'success' ? (
          <p className="text-gold font-body">Almost in. Check your inbox to confirm.</p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Newsletter signup form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@yourbrand.com"
                aria-label="Email address"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gold text-navy px-8 py-3 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200 disabled:opacity-60 shrink-0"
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {status === 'error' && (
              <p className="mt-4 text-white/60 text-xs font-body">
                Something went wrong. Please try us at{' '}
                <a href="mailto:saskia@wearecrave.ca" className="text-gold hover:text-gold-dark transition-colors">
                  saskia@wearecrave.ca
                </a>
              </p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
