import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProject } from '../data/projects'
import './ProjectPage.css'

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

  return (
    <section className="project">
      <div className="project__inner">

        <button className="project__back" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <path d="M26 6L6 26M6 26H22M6 26V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Назад
        </button>

        <div className="project__header">
          <p className="project__cat">{project.category}</p>
          <p className="project__desc">{project.desc}</p>
        </div>

        <div className="project__gallery">
          {project.images.map((src, i) => (
            <div key={i} className="project__img-wrap">
              <img src={src} alt="" className="project__img" loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
