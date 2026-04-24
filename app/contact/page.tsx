'use client'

import { useActionState, useRef } from 'react'
import { submitContact } from './actions'

export default function ContactPage() {
  const [state, action, pending] = useActionState(submitContact, null)
  const formRef = useRef<HTMLFormElement>(null)

  if (state?.success) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🦝</div>
        <h1 className="text-3xl font-bold mb-3">Message received!</h1>
        <p className="text-text-secondary mb-8">
          Thanks for reaching out — we'll get back to you soon.
        </p>
        <a href="/contact" className="text-accent hover:text-accent-hover transition-colors text-sm">
          Send another message
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-text-secondary text-xl">
          Questions, feedback, or just want to say hi — we&apos;re all ears.
        </p>
      </div>

      <div className="bg-card border border-border rounded-3xl p-8">
        <form ref={formRef} action={action} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell us what's on your mind..."
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          {state?.error && (
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
      </div>
    </div>
  )
}
