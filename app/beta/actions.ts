'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function authenticate(formData: FormData) {
  const password = formData.get('password') as string
  const correct = process.env.BETA_PASSWORD

  if (correct && password === correct) {
    const cookieStore = await cookies()
    cookieStore.set('beta_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    })
    redirect('/beta')
  }

  redirect('/beta?error=1')
}
