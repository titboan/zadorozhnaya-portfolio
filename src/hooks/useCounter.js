import { useEffect, useRef, useState } from 'react'

export function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)

      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [count, ref]
}
