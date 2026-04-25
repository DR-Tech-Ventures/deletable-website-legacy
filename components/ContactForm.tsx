'use client'

import { useActionState } from 'react'
import { submitContact } from '@/app/contact/actions'

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null)

  if (state?.success) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🦝</div>
        <h3 className="text-xl font-bold mb-2">Message received!</h3>
        <p className="text-text-secondary text-sm">
          Thanks for reaching out — we'll get back to you soon.
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
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
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
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
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
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
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
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {state?.success === false && (
        <p className="text-red-400 text-sm">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors"
      >
        {pending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
