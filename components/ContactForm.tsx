'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitContact } from '@/app/contact/actions'

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null)
  const successRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (state?.success) successRef.current?.focus()
  }, [state?.success])

  if (state?.success) {
    return (
      <div className="text-center py-10" role="status" aria-live="polite">
        <div className="text-5xl mb-4" aria-hidden="true">🦝</div>
        <h3 ref={successRef} tabIndex={-1} className="text-xl font-bold mb-2 focus:outline-hidden">
          Message received!
        </h3>
        <p className="text-text-secondary text-sm">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white mb-2" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-hidden focus:border-accent focus:ring-2 focus:ring-accent/60 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-hidden focus:border-accent focus:ring-2 focus:ring-accent/60 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2" htmlFor="contact-subject">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-hidden focus:border-accent focus:ring-2 focus:ring-accent/60 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what's on your mind..."
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-hidden focus:border-accent focus:ring-2 focus:ring-accent/60 transition-colors resize-none"
        />
      </div>

      {state?.success === false && (
        <p role="alert" className="text-red-400 text-sm">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold py-3 px-6 rounded-xl transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {pending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
