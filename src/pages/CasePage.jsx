import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getCaseStudy } from '../data/case-studies'
import Contacts from '../components/Contacts'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './CasePage.css'

function GalleryImage({ src, eager }) {
  const ref = useScrollReveal()
  return (
    <div className="case__img-wrap reveal" ref={ref}>
      <img src={src} alt="" className="case__img" loading={eager ? 'eager' : 'lazy'} />
    </div>
  )
}

export default function CasePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const cs = getCaseStudy(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!cs) {
    return (
      <div className="case-404">
        <p>Проект не найден</p>
        <Link to="/">← На главную</Link>
      </div>
    )
  }

  return (
    <>
      <div className="case">
        {/* ── Навбар ── */}
        <header className="case-nav">
          <p className="case-nav__brand">
            ZADOROJNAIA <span>|</span> графический дизайнер
          </p>
          <div className="case-nav__right">
            <button className="case-nav__back" onClick={() => navigate(-1)} aria-label="Назад">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="case-nav__dots">
              <span className="cnav-dot cnav-dot--blue" />
              <span className="cnav-dot cnav-dot--red" />
              <span className="cnav-dot cnav-dot--yellow" />
            </div>
          </div>
        </header>

        {/* ── Контент ── */}
        <div className="case__inner">

          {/* ── Шапка: заголовок + подзаголовки ── */}
          <div className="case__head">
            <h1 className="case__title">{cs.title.toUpperCase()}</h1>
            <div className="case__subtitles">
              <p className="case__sub">{cs.subtitle1}</p>
              <p className="case__sub">{cs.subtitle2}</p>
            </div>
          </div>

          {/* ── Вертикальная галерея ── */}
          <div className="case__gallery">
            {cs.images.map((src, i) => (
              <GalleryImage key={i} src={src} eager={i < 2} />
            ))}
          </div>

          {/* ── Превью (3 карточки) ── */}
          {cs.previews?.length > 0 && (
            <div className="case__previews">
              {cs.previews.map((p, i) => (
                <div key={i} className="case__preview">
                  <div className="case__preview-img">
                    <img src={p.image} alt="" loading="lazy" />
                  </div>
                  <p className="case__preview-title">{p.title}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <Contacts />
    </>
  )
}
