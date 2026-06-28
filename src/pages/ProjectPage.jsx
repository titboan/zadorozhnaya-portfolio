import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getProject } from '../data/projects'
import Contacts from '../components/Contacts'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './ProjectPage.css'

function Arrow() {
  return (
    <svg className="pcard__arrow" viewBox="0 0 32 32" fill="none">
      <path d="M6 26L26 6M26 6H10M26 6V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PCard({ image, title, desc, sub, type = 'full', projectSlug }) {
  const Tag = projectSlug ? Link : 'div'
  const linkProps = projectSlug ? { to: `/project/${projectSlug}` } : {}
  const cardRef = useScrollReveal()

  if (type === 'side') {
    return (
      <Tag className="pcard pcard--side reveal" ref={cardRef} {...linkProps}>
        <div className="pcard__head">
          <div className="pcard__titles">
            <p className="pcard__title">{title}</p>
            {sub && <p className="pcard__sub">{sub}</p>}
          </div>
          <Arrow />
        </div>
        <div className="pcard__split">
          {desc && <p className="pcard__desc">{desc}</p>}
          {image && (
            <div className="pcard__img-side">
              <img src={image} alt="" className="pcard__img" loading="lazy" />
            </div>
          )}
        </div>
      </Tag>
    )
  }

  return (
    <Tag className="pcard reveal" ref={cardRef} {...linkProps}>
      <div className="pcard__head">
        <div className="pcard__titles">
          <p className="pcard__title">{title}</p>
          {sub && <p className="pcard__sub">{sub}</p>}
        </div>
        <Arrow />
      </div>
      {image && (
        <div className="pcard__img-wrap">
          <img src={image} alt="" className="pcard__img" loading="lazy" />
        </div>
      )}
    </Tag>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="project-404">
        <p>Проект не найден</p>
        <Link to="/">← На главную</Link>
      </div>
    )
  }

  const cards = project.cards ?? project.images.map((src) => ({ image: src, title: project.category }))
  const leftCards = cards.filter((_, i) => i % 2 === 0)
  const rightCards = cards.filter((_, i) => i % 2 !== 0)

  return (
    <>
      <div className="project">
        {/* ── Навбар ── */}
        <header className="project-nav">
          <p className="project-nav__brand">
            ZADOROJNAIA <span>|</span> графический дизайнер
          </p>
          <div className="project-nav__right">
            <button className="project-nav__back" onClick={() => navigate(-1)} aria-label="Назад">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="project-nav__dots">
              <span className="pnav-dot pnav-dot--red" />
              <span className="pnav-dot pnav-dot--yellow" />
              <span className="pnav-dot pnav-dot--blue" />
            </div>
          </div>
        </header>

        <div className="project__inner">
          {/* ── Заголовок категории ── */}
          <h1 className="project__title">{project.category.toUpperCase()}</h1>

          {/* ── 2-колоночная сетка ── */}
          <div className="project__cols">
            <div className="project__col">
              {leftCards.map((card, i) => (
                <PCard key={i} {...card} />
              ))}
            </div>
            <div className="project__col">
              {rightCards.map((card, i) => (
                <PCard key={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Contacts />
    </>
  )
}
