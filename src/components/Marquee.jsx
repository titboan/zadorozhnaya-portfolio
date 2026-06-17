import './Marquee.css'

const tags = [
  'Логотип', 'Айдентика', 'Key Visual', 'Brandbook',
  'Полиграфия', 'SMM', 'Фирменный стиль', 'Презентации', 'Упаковка',
]

export default function Marquee() {
  const items = [...tags, ...tags]

  return (
    <div className="marquee">
      <div className="marquee__track">
        {items.map((tag, i) => (
          <span key={i} className="marquee__item">
            {tag} <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
