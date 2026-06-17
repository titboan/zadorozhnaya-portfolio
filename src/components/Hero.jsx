import './Hero.css'

export default function Hero() {
  return (
    <header className="hero">
      <nav className="hero__nav">
        <div className="hero__logo-wrap">
          <img src="/images/logo.svg" alt="Zadorozhnaya" className="hero__logo" onError={(e) => { e.target.style.display = 'none' }} />
          <span className="hero__divider" />
          <span className="hero__subtitle-nav">графический дизайнер</span>
        </div>
      </nav>

      <div className="hero__photo-wrap">
        <img src="/images/hero-photo.jpg" alt="Анастасия Задорожная" className="hero__photo" onError={(e) => { e.target.style.display = 'none' }} />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <span className="hero__label-top">ваш</span>
        <div className="hero__line" />
        <h1 className="hero__heading">
          графический<br />дизайнер
        </h1>
        <p className="hero__name">анастасия<br />задорожная</p>
        <p className="hero__years">уже 7 лет</p>
        <p className="hero__desc">
          Опыт работы в маркетинге с 2019 года | профильное высшее образование по специальности графический дизайн | работа с крупными брендами
        </p>
      </div>
    </header>
  )
}
