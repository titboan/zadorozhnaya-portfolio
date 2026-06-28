import { useRef } from 'react'
import './Services.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'

const services = [
  {
    num: '01',
    title: 'Разработка\nKey Visual',
    introText: 'Работа делится на 3 этапа:',
    steps: [
      'анализируем ЦА и разбираем её "боли", предлагаем несколько вариантов KV, согласовываем основную идею с заказчиком',
      'готовим шеф-макет',
      'вносим правки и корректировки',
    ],
    priceNum: '5 000',
  },
  {
    num: '02',
    title: 'Разработка логотипа,\nGuidebook',
    desc: 'После заполнения брифа, анализа рынка и ЦА предлагается 4 варианта логотипа (шрифтовой, иллюстративный, графический или монограмма).\n\nДалее заказчик выбирает наиболее подходящий вариант и вносятся правки при необходимости.\n\nНа выходе заказчик получает исходники, все необходимые форматы и мини-гайд',
    priceNum: '15 000',
  },
  {
    num: '03',
    title: 'Brandbook',
    desc: 'Вы можете самостоятельно выбрать позиции, которые необходимы именно вашему бренду, если не подходит ни один из предложенных пакетов',
    priceNum: '30 000',
  },
  {
    num: '04',
    title: 'Верстка\nпрезентации',
    pricePlain: '1–10 слайдов — 1 200 ₽/слайд\n11–20 слайдов — 900 ₽/слайд\n21 и более — 500 ₽/слайд',
  },
  {
    num: '05',
    title: 'Оформление и ведение\nсоциальных сетей',
    desc: 'YouTube, Instagram, VK, Одноклассники, Telegram-канал.',
    pricePlain: 'Цена за пост от 800 ₽\nGuidebook 25 000 ₽',
  },
  {
    num: '06',
    title: 'Карточки\nдля маркетплейсов',
    desc: 'Wildberry, Ozon, Яндекс Маркет.',
    priceNum: '1 000',
  },
  {
    num: '07',
    title: 'Верстка\nбуклета',
    desc: 'Количество правок не ограничено. Отдаётся вместе с исходником, предпечатная подготовка входит в стоимость.',
    pricePlain: 'разворот 1 500 ₽',
  },
  {
    num: '08',
    title: 'Верстка\nполиграфии',
    desc: 'Листовки, визитки, сертификаты, открытки, вкладыши, лифлеты, бланки, календари, пригласительные и др.',
    priceNum: '2 500',
  },
  {
    num: '09',
    title: 'Рекламные\nконструкции',
    desc: 'Стелла, вывески, заборы, фотозоны, оформление навигационных панелей, перетяжка, флаги и др.',
    priceNum: '2 000',
  },
  {
    num: '10',
    title: 'Разработка\nдизайна сайта',
    desc: 'Работа делится на 3 этапа: получаем ТЗ, верстаем первые 2–3 блока для согласования стилистики, вносим правки, верстаем оставшиеся блоки.',
    pricePlain: 'за блок от 3 000 ₽',
  },
]

function ServiceItem({ s, listRef }) {
  const [count, ref] = useCounter(parseInt(s.num), 800, listRef)
  const displayNum = String(count).padStart(2, '0')

  return (
    <li ref={ref} className="services__item">
      <div className="services__left">
        <span className="services__num">{displayNum}</span>
        <h3 className="services__title">{s.title}</h3>
      </div>

      <div className="services__right">
        <div className="services__content">
          {s.introText && <p className="services__intro">{s.introText}</p>}
          {s.steps && (
            <ol className="services__steps">
              {s.steps.map((step, i) => (
                <li key={i} className="services__step">
                  <span className="services__step-circle">{i + 1}</span>
                  <span className="services__step-text">{step}</span>
                </li>
              ))}
            </ol>
          )}
          {s.desc && <p className="services__desc">{s.desc}</p>}
        </div>

        <div className="services__price">
          {s.priceNum ? (
            <>
              <span className="services__price-label">от </span>
              <strong className="services__price-value">{s.priceNum}</strong>
              <span className="services__price-label"> ₽</span>
            </>
          ) : (
            <span className="services__price-plain">{s.pricePlain}</span>
          )}
        </div>
      </div>
    </li>
  )
}

export default function Services() {
  const headingRef = useScrollReveal()
  const wrapRef = useScrollReveal()
  const scrollListRef = useRef(null)

  return (
    <section className="services">
      <div className="services__inner">
        <h2 className="services__heading reveal" ref={headingRef}>
          <span className="services__heading-black">упаковка бренда под ключ</span><br />
          от создания логотипа<br />
          до разработки рекламной кампании
        </h2>

        <div className="services__list-wrap reveal reveal-delay-1" ref={wrapRef}>
          <ul className="services__list" data-lenis-prevent ref={scrollListRef}>
            {services.map((s) => (
              <ServiceItem key={s.num} s={s} listRef={scrollListRef} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
