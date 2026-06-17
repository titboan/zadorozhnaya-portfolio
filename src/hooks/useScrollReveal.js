import { useEffect, useRef } from 'react'

// useRef — «указатель» на DOM-элемент. Мы передаём его в ref={} компонента,
// и тогда ref.current = реальный HTML-элемент после рендера.
//
// IntersectionObserver — браузерный API: вызывает callback когда элемент
// появляется (или исчезает) в зоне видимости окна.

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          // После первого появления — прекращаем наблюдать (анимация одноразовая)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 } // срабатывает когда 10% элемента видно на экране
    )

    observer.observe(el)

    // Cleanup: когда компонент удаляется из DOM — отключаем observer
    return () => observer.disconnect()
  }, [])

  return ref
}
