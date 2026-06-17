import { useEffect, useRef } from 'react'
import './Hero.css'
import { useCounter } from '../hooks/useCounter'

export default function Hero() {
  const photoRef = useRef(null)
  const [years, yearsRef] = useCounter(7, 1200)

  useEffect(() => {
    const handleScroll = () => {
      const photo = photoRef.current
      if (!photo) return
      photo.style.transform = `translateY(${window.scrollY * 0.25}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="hero">

      <nav className="hero__nav">
        <div className="hero__logo-wrap">
          <img src="/images/logo.svg" alt="Zadorozhnaya" className="hero__logo" onError={(e) => { e.target.style.display = 'none' }} />
          <span className="hero__divider" />
          <span className="hero__subtitle-nav">графический дизайнер</span>
        </div>
      </nav>

      <div className="hero__photo-wrap" ref={photoRef}>
        <img src="/images/hero-photo.jpg" alt="Анастасия Задорожная" className="hero__photo" onError={(e) => { e.target.style.display = 'none' }} />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content hero-fade-in">
        <span className="hero__label-top">ваш</span>
        <div className="hero__line" />

        <h1 className="hero__heading">
          <span className="hero__word" style={{ '--d': '0.15s' }}>графический</span>
          <br />
          <span className="hero__word" style={{ '--d': '0.4s' }}>дизайнер</span>
        </h1>

        <p className="hero__name">анастасия<br />задорожная</p>

        <p className="hero__years" ref={yearsRef}>уже {years} лет</p>

        <p className="hero__desc">
          Опыт работы в маркетинге с 2019 года | профильное высшее образование по специальности графический дизайн | работа с крупными брендами
        </p>
      </div>

    </header>
  )
}
