import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const addHover = (e) => {
      if (e.target.closest('.works__card')) {
        cursor.classList.add('cursor--hover')
      }
    }

    const removeHover = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest('.works__card')) {
        cursor.classList.remove('cursor--hover')
      }
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', addHover)
    document.addEventListener('mouseout', removeHover)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', addHover)
      document.removeEventListener('mouseout', removeHover)
    }
  }, [])

  return (
    <div className="cursor" ref={cursorRef}>
      <span className="cursor__label">СМОТРЕТЬ</span>
    </div>
  )
}
