import { useEffect, useState } from 'react'

export function useTypingEffect(phrases: readonly string[], typingMs = 80, deletingMs = 40, pauseMs = 2000) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex] ?? ''

    if (!isDeleting && text === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
      },
      isDeleting ? deletingMs : typingMs,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingMs, deletingMs, pauseMs])

  return text
}
