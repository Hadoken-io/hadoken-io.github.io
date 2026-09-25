import { useEffect, useRef, useState } from 'react'

// Ties an element's visibility to an IntersectionObserver so it can
// fade/slide in the first time it's scrolled into view. Respects
// prefers-reduced-motion by starting (and staying) visible.
export default function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, visible]
}
