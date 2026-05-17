import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../../data/profile'
import {
  contactFallbackEmail,
  isContactConfigured,
  openMailtoContact,
  sendContactEmail,
} from '../../lib/sendContact'
import { SectionHeader } from '../ui/SectionHeader'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const useApi = isContactConfigured()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    }

    if (!useApi) {
      try {
        openMailtoContact(payload)
        setStatus('success')
        form.reset()
      } catch {
        setStatus('error')
        setErrorMessage(`Could not open email. Contact ${contactFallbackEmail}`)
      }
      return
    }

    try {
      await sendContactEmail(payload)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage(`Send failed. Try ${contactFallbackEmail}`)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <SectionHeader
        label="Connect"
        title="Let's build something impactful together"
        description="Open to Backend Developer Intern opportunities. I typically respond within 48 hours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-xl p-8 space-y-5"
        >
          <div>
            <label htmlFor="contact-name" className="text-label-caps text-on-surface-variant block mb-2">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              required
              disabled={status === 'loading'}
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-4 py-3 text-on-surface placeholder:font-mono placeholder:text-sm focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-label-caps text-on-surface-variant block mb-2">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              required
              disabled={status === 'loading'}
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-4 py-3 text-on-surface placeholder:font-mono placeholder:text-sm focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="text-label-caps text-on-surface-variant block mb-2">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              disabled={status === 'loading'}
              rows={4}
              placeholder="Tell me about the role..."
              className="w-full rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-4 py-3 text-on-surface placeholder:font-mono placeholder:text-sm focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container resize-none disabled:opacity-60"
            />
          </div>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-sm text-primary-container">
              <CheckCircle2 size={18} />
              {useApi ? "Message sent — I'll reply soon." : 'Email opened — press Send to deliver.'}
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-start gap-2 text-sm text-error">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-container text-on-primary-container px-6 py-3 font-medium hover:brightness-110 transition-all w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Sending...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle2 size={18} /> Done
              </>
            ) : (
              <>
                <Send size={18} /> Send message
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          <p className="text-lg text-on-surface-variant">
            <a href={profile.social.email} className="text-primary-container hover:underline">
              {profile.email}
            </a>
          </p>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-on-surface-variant hover:text-primary-container transition-colors"
          >
            github.com/{profile.githubUsername}
          </a>
          <div className="font-mono text-sm text-on-surface-variant space-y-2">
            <p>
              <span className="text-secondary">status:</span> available for internship
            </p>
            <p>
              <span className="text-secondary">location:</span> Vietnam · remote OK
            </p>
            <p>
              <span className="text-secondary">response:</span> &lt; 48h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
