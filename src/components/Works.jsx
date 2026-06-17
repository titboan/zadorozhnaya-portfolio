import './Works.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const works = [
  {
    id: 1,
    category: 'Разработка логотипа',
    desc: 'Разработка логотипа как ключевого элемента целостной фирменной айдентики',
    image: '/images/work-1-logo.jpg',
  },
  {
    id: 2,
    category: 'Айдентика и фирменный стиль',
    desc: 'Глубокое погружение в нишу бизнеса, анализ конкурентов и проработка потенциального клиента',
    image: '/images/work-2-identity.jpg',
  },
  {
    id: 3,
    category: 'Полиграфия',
    desc: 'Буклеты, листовки, визитки, открытки, лифлеты, пригласительные',
    image: '/images/work-3-poly.jpg',
  },
  {
    id: 4,
    category: 'Разработка Key Visual',
    desc: 'Грамотно разработанный key visual вызывает у ЦА определённые чувства и ассоциации с брендом',
    image: '/images/work-4-kv1.jpg',
  },
  {
    id: 5,
    category: 'Материалы для продвижения бренда',
    desc: 'Презентации | карточки для маркетплейсов | online-реклама | гайды',
    image: '/images/work-5-kv2.jpg',
  },
  {
    id: 6,
    category: 'Оформление социальных сетей',
    desc: 'Instagram | ВКонтакте | YouTube — разработка визуального оформления и шаблонов',
    image: '/images/work-1-logo.jpg',
  },
]

function WorkCard({ work: w }) {
  const ref = useScrollReveal()
  return (
    <article className={`works__card reveal reveal-delay-${w.id}`} ref={ref}>
      <div className="works__card-preview">
        <img src={w.image} alt={w.category} className="works__card-img" />
      </div>
      <div className="works__card-info">
        <div>
          <p className="works__card-category">{w.category}</p>
          <p className="works__card-desc">{w.desc}</p>
        </div>
        <span className="works__card-arrow">↗</span>
      </div>
    </article>
  )
}

export default function Works() {
  const headingRef = useScrollReveal()

  return (
    <section className="works">
      <div className="works__inner">
        <h2 className="works__heading reveal" ref={headingRef}>Мои<br />Работы</h2>
        <div className="works__grid">
          {works.map((w) => (
            <WorkCard key={w.id} work={w} />
          ))}
        </div>
      </div>
    </section>
  )
}
