'use server'

import { Resend } from 'resend'
import { getClient } from '@/lib/supabase'

type ContactState = { success: true } | { success: false; error: string } | null

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const subject = formData.get('subject')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim()
  const website = formData.get('website')?.toString() ?? ''

  // Honeypot: bots fill hidden fields, humans leave them empty
  if (website.length > 0) return { success: true }

  if (!name || !email || !message) {
    return { success: false, error: 'Name, email, and message are required.' }
  }

  const client = getClient()
  if (!client) return { success: false, error: 'Service unavailable. Please try again later.' }

  const { error: dbError } = await client.from('contact_submissions').insert({
    name,
    email,
    subject,
    message,
  })

  if (dbError) {
    console.error('Contact submission error:', dbError)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error: emailError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev',
    to: 'admin@drtechventures.com',
    replyTo: email,
    subject: subject ? `[Contact] ${subject}` : `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '(none)'}\n\nMessage:\n${message}`,
  })

  if (emailError) {
    console.error('Resend error:', emailError)
  }

  return { success: true }
}
