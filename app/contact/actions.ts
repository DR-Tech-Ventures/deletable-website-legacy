'use server'

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

  if (!name || !email || !message) {
    return { success: false, error: 'Name, email, and message are required.' }
  }

  const client = getClient()
  if (!client) return { success: false, error: 'Service unavailable. Please try again later.' }

  const { error } = await client.from('contact_submissions').insert({
    name,
    email,
    subject,
    message,
  })

  if (error) {
    console.error('Contact submission error:', error)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
