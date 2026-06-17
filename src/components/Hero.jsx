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

      {/* photo-1: left 388px (20.21%), top 1px, width 1144px (59.58%) */}
      <div className="hero__photo-wrap" ref={photoRef}>
        <img
          src="/images/hero-photo.jpg"
          alt="Анастасия Задорожная"
          className="hero__photo"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      {/* Rectangle56: gradient overlay, left -59px, width 960px */}
      <div className="hero__overlay" />

      <div className="hero__content hero-fade-in">

        {/* "ваш": left 97px, top 130.5px, translateY(-50%) */}
        <span className="hero__label-top">Ваш</span>

        {/* Линия: left 97px, top 181px, height 465px */}
        <div className="hero__line" />

        {/* Заголовок: left 97px, top 776px, translateY(-50%), 90px medium */}
        <h1 className="hero__heading">
          <span className="hero__word" style={{ '--d': '0.15s' }}>графический</span>
          <br />
          <span className="hero__word" style={{ '--d': '0.4s' }}>дизайнер</span>
        </h1>

        {/* Имя: left 1363px, top 730px, translateY(-50%) */}
        <p className="hero__name">анастасия<br />задорожная</p>

        {/* "уже N лет": left 122px, top 986.5px, translateY(-50%) */}
        <p className="hero__years" ref={yearsRef}>уже {years} лет</p>

        {/* Описание: left calc(50%+403px)=1363px, top 902.5px, width 409px */}
        <p className="hero__desc">
          Опыт работы в маркетинге с 2019 года | профильное высшее образование
          по специальности графический дизайн | работа с крупными брендами
        </p>

        {/* Group4 — три цветных круга: left 1363px=70.99vw, top 987px=51.4vw */}
        <div className="hero__dots">
          <span className="hero__dot hero__dot--blue" />
          <span className="hero__dot hero__dot--yellow" />
          <span className="hero__dot hero__dot--red" />
        </div>

      </div>

    </header>
  )
}
