import { profile } from '../data/profile'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

/** Web3Forms API key — optional; without it, form uses mailto (no setup). */
export function isContactConfigured(): boolean {
  return Boolean(accessKey?.trim())
}

/** Opens Gmail / Outlook / Mail app with message pre-filled — zero config. */
export function openMailtoContact({ name, email, message }: ContactPayload): void {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`)
  const body = encodeURIComponent(
    `From: ${name}\nReply-to: ${email}\n\n${message}`,
  )
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}

/** Sends silently via Web3Forms when access key is set. */
export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!isContactConfigured()) {
    throw new Error('MISSING_ACCESS_KEY')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      message: payload.message,
      subject: `Portfolio — message from ${payload.name}`,
      from_name: 'Portfolio Contact',
      replyto: payload.email,
    }),
  })

  if (!response.ok) {
    throw new Error('NETWORK_ERROR')
  }

  const data = (await response.json()) as { success?: boolean; message?: string }
  if (!data.success) {
    throw new Error(data.message ?? 'SEND_FAILED')
  }
}

export const contactFallbackEmail = profile.email
