import './Works.css'

const works = [
  {
    id: 1,
    category: 'Разработка логотипа',
    desc: 'Разработка логотипа как ключевого элемента целостной фирменной айдентики',
    color: '#e4a44b',
  },
  {
    id: 2,
    category: 'Айдентика и фирменный стиль',
    desc: 'Глубокое погружение в нишу бизнеса, анализ конкурентов и проработка потенциального клиента',
    color: '#2448e4',
  },
  {
    id: 3,
    category: 'Полиграфия',
    desc: 'Буклеты, листовки, визитки, открытки, лифлеты, пригласительные',
    color: '#f0f0f0',
  },
  {
    id: 4,
    category: 'Разработка Key Visual',
    desc: 'Грамотно разработанный key visual вызывает у ЦА определённые чувства и ассоциации с брендом',
    color: '#1a1a2e',
  },
  {
    id: 5,
    category: 'Материалы для продвижения бренда',
    desc: 'Презентации | карточки для маркетплейсов | online-реклама | гайды',
    color: '#0f0f0f',
  },
  {
    id: 6,
    category: 'Оформление социальных сетей',
    desc: 'Instagram | ВКонтакте | YouTube — разработка визуального оформления и шаблонов',
    color: '#2a2a2a',
  },
]

export default function Works() {
  return (
    <section className="works">
      <div className="works__inner">
        <h2 className="works__heading">Мои<br />Работы</h2>

        <div className="works__grid">
          {works.map((w) => (
            <article key={w.id} className="works__card">
              <div className="works__card-preview" style={{ backgroundColor: w.color }} />
              <div className="works__card-info">
                <div>
                  <p className="works__card-category">{w.category}</p>
                  <p className="works__card-desc">{w.desc}</p>
                </div>
                <span className="works__card-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
