import './Services.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    num: '01',
    title: 'Разработка\nKey Visual',
    desc: 'Анализируем ЦА и разбираем её «боли», предлагаем несколько вариантов KV, согласовываем основную идею с заказчиком, готовим шеф-макет, вносим правки.',
    price: 'от 5 000 ₽',
  },
  {
    num: '02',
    title: 'Разработка логотипа,\nGuidebook',
    desc: 'После анализа рынка и ЦА предлагается 4 варианта логотипа. На выходе — исходники, все необходимые форматы и мини-гайд.',
    price: 'от 15 000 ₽',
  },
  {
    num: '03',
    title: 'Brandbook',
    desc: 'Вы можете самостоятельно выбрать позиции, которые необходимы именно вашему бренду, если не подходит ни один из предложенных пакетов.',
    price: 'от 30 000 ₽',
  },
  {
    num: '04',
    title: 'Разработка\nфирменного стиля',
    desc: 'Комплексная разработка фирменного стиля бренда под ключ.',
    price: 'от 15 000 ₽',
    blurred: true,
  },
]

export default function Services() {
  const headingRef = useScrollReveal()
  const listRef = useScrollReveal()

  return (
    <section className="services">
      <div className="services__inner">
        <h2 className="services__heading reveal" ref={headingRef}>
          <span className="services__heading-black">упаковка бренда под ключ</span><br />
          от создания логотипа<br />
          до разработки рекламной кампании
        </h2>

        <ul className="services__list reveal reveal-delay-1" ref={listRef}>
          {services.map((s) => (
            <li key={s.num} className={`services__item${s.blurred ? ' services__item--blurred' : ''}`}>
              <span className="services__num">{s.num}</span>
              <h3 className="services__title">{s.title}</h3>
              <div className="services__right">
                <p className="services__desc">{s.desc}</p>
                <span className="services__price">{s.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
