'use client'

import { useState } from 'react'

export default function CraveNewsForm() {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    publication: '',
    beat: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.firstName,
          email: fields.email,
          listType: 'crave-news',
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl">
        <p
          className="text-white text-2xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Welcome to the Crave News Network. We&apos;ll be in touch.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl">
      <h3
        className="text-2xl text-white mb-8"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Join the Crave News Network
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5" aria-label="Media subscription form">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cn-first-name" className="block text-white/60 text-xs tracking-widest uppercase mb-2 font-body">
              First Name
            </label>
            <input
              id="cn-first-name"
              type="text"
              name="firstName"
              value={fields.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label htmlFor="cn-last-name" className="block text-white/60 text-xs tracking-widest uppercase mb-2 font-body">
              Last Name
            </label>
            <input
              id="cn-last-name"
              type="text"
              name="lastName"
              value={fields.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="cn-email" className="block text-white/60 text-xs tracking-widest uppercase mb-2 font-body">
            Email <span className="text-gold" aria-label="required">*</span>
          </label>
          <input
            id="cn-email"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label htmlFor="cn-publication" className="block text-white/60 text-xs tracking-widest uppercase mb-2 font-body">
            Publication or Platform <span className="normal-case text-white/30">(optional)</span>
          </label>
          <input
            id="cn-publication"
            type="text"
            name="publication"
            value={fields.publication}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label htmlFor="cn-beat" className="block text-white/60 text-xs tracking-widest uppercase mb-2 font-body">
            Beat / Coverage Area <span className="normal-case text-white/30">(optional)</span>
          </label>
          <input
            id="cn-beat"
            type="text"
            name="beat"
            value={fields.beat}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-block bg-gold text-navy px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-200 disabled:opacity-60"
          >
            {status === 'loading' ? 'Submitting…' : 'Join the Crave News Network'}
          </button>
          <p className="mt-4 text-white/35 text-xs font-body">
            For food and agriculture media, influencers, and tastemakers only.
          </p>
        </div>
        {status === 'error' && (
          <p className="text-white/60 text-xs font-body">
            Something went wrong. Please email{' '}
            <a href="mailto:saskia@wearecrave.ca" className="text-gold hover:text-gold-dark transition-colors">
              saskia@wearecrave.ca
            </a>
          </p>
        )}
      </form>
    </div>
  )
}
