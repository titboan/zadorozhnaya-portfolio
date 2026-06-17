import './Services.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'

const services = [
  {
    num: '01',
    title: 'Разработка\nKey Visual',
    desc: 'Работа делится на 3 этапа: анализируем ЦА и разбираем её «боли», предлагаем несколько вариантов KV, согласовываем основную идею с заказчиком, готовим шеф-макет, вносим правки и корректировки.',
    price: 'от 7 000 ₽',
  },
  {
    num: '02',
    title: 'Разработка логотипа,\nGuidebook',
    desc: 'После заполнения брифа, анализа рынка и ЦА предлагается 4 варианта логотипа (шрифтовой, иллюстративный, графический или монограмма). На выходе — исходники, все необходимые форматы и мини-гайд.',
    price: 'от 15 000 ₽',
  },
  {
    num: '03',
    title: 'Brandbook',
    desc: 'Предлагается 3 варианта наполнения: guidebook | brandbook. Вы можете самостоятельно выбрать позиции, которые необходимы именно вашему бренду, если не подходит ни один из предложенных пакетов.',
    price: 'от 30 000 ₽',
  },
  {
    num: '04',
    title: 'Верстка\nпрезентации',
    desc: 'Цена за слайд зависит от объёма презентации.',
    price: '1–10 слайдов — 1 200 ₽/слайд\n11–20 слайдов — 900 ₽/слайд\n21 и более — 500 ₽/слайд',
  },
  {
    num: '05',
    title: 'Оформление и ведение\nсоциальных сетей',
    desc: 'YouTube, Instagram, VK, Одноклассники, Telegram-канал.',
    price: 'Цена за пост от 800 ₽\nGuidebook 25 000 ₽',
  },
  {
    num: '06',
    title: 'Карточки\nдля маркетплейсов',
    desc: 'Wildberry, Ozon, Яндекс Маркет.',
    price: 'от 1 000 ₽',
  },
  {
    num: '07',
    title: 'Верстка\nбуклета',
    desc: 'Количество правок не ограничено. Отдаётся вместе с исходником, предпечатная подготовка входит в стоимость.',
    price: 'разворот 1 500 ₽',
  },
  {
    num: '08',
    title: 'Верстка\nполиграфии',
    desc: 'Листовки, визитки, сертификаты, открытки, вкладыши, лифлеты, бланки, календари, пригласительные и др.',
    price: 'от 2 500 ₽',
  },
  {
    num: '09',
    title: 'Рекламные\nконструкции',
    desc: 'Стелла, вывески, заборы, фотозоны, оформление навигационных панелей, перетяжка, флаги и др.',
    price: 'от 2 000 ₽',
  },
  {
    num: '10',
    title: 'Разработка\nдизайна сайта',
    desc: 'Работа делится на 3 этапа: получаем ТЗ, верстаем первые 2–3 блока для согласования стилистики, вносим правки, верстаем оставшиеся блоки.',
    price: 'за блок от 3 000 ₽',
  },
]

function ServiceItem({ s }) {
  const [count, ref] = useCounter(parseInt(s.num), 800)
  const displayNum = String(count).padStart(2, '0')

  return (
    <li ref={ref} className="services__item">
      <span className="services__num">{displayNum}</span>
      <h3 className="services__title">{s.title}</h3>
      <div className="services__right">
        <p className="services__desc">{s.desc}</p>
        <span className="services__price">{s.price}</span>
      </div>
    </li>
  )
}

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

        <div className="services__list-wrap reveal reveal-delay-1" ref={listRef}>
          <ul className="services__list" data-lenis-prevent>
            {services.map((s) => (
              <ServiceItem key={s.num} s={s} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
