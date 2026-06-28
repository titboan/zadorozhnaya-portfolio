import { Link } from 'react-router-dom'
import './Works.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Card({ slug, mod, children }) {
  const ref = useScrollReveal()
  return (
    <Link to={`/case/${slug}`} className={`works__item works__item--${mod} reveal`} ref={ref} onClick={() => window.scrollTo(0, 0)}>
      {children}
    </Link>
  )
}

function Arrow({ lg }) {
  return (
    <svg
      className={`works__arrow${lg ? ' works__arrow--lg' : ''}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 26L26 6M26 6H10M26 6V22"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Works() {
  const headingRef = useScrollReveal()

  return (
    <section className="works">
      <div className="works__inner">
        <h2 className="works__heading reveal" ref={headingRef}>
          МОИ<br />РАБОТЫ
        </h2>

        <div className="works__items">

          {/* ── Top: левая + правая колонки ── */}
          <div className="works__top">

            {/* Левая колонка */}
            <div className="works__col">

              {/* Разработка логотипа */}
              <Card slug="logo" mod="logo">
                <Arrow lg />
                <div className="works__text">
                  <p className="works__cat">Разработка логотипа</p>
                  <p className="works__desc">
                    Разработка логотипа как ключевого элемента целостной фирменной айдентики, гармоничное сочетание с другими бренд-коммуникациями и усиливание общего имиджа
                  </p>
                </div>
                <div className="works__img-wrap works__img-wrap--logo">
                  <img src="/images/work-1-logo.jpg" alt="Разработка логотипа" className="works__img" />
                </div>
              </Card>

              {/* Полиграфия */}
              <Card slug="poly" mod="poly">
                <Arrow />
                <div className="works__split">
                  <div className="works__text">
                    <p className="works__cat">Полиграфия</p>
                    <p className="works__desc">{'Фирменная полиграфия является неотъемлемой частью бренда, если у вас уже есть фирменная айдентика, необходимо действовать в ее рамках, но при этом сделать дизайн современным и понятным для ЦА.\n\nТак же я даю рекомендации по дальнейшей постпечатной обработки ориентируясь на бюджет клиента\n\nбуклеты | листовки | визитки | открытки\n| лифлеты | пригласительные'}</p>
                  </div>
                  <div className="works__img-side">
                    <img src="/images/work-3-poly.jpg" alt="Полиграфия" className="works__img" />
                  </div>
                </div>
              </Card>

            </div>

            {/* Правая колонка */}
            <div className="works__col works__col--right">

              {/* Айдентика */}
              <Card slug="identity" mod="identity">
                <Arrow />
                <div className="works__split">
                  <div className="works__text">
                    <p className="works__cat">Айдентика<br />и фирменный стиль</p>
                    <p className="works__desc">
                      Глубокое погружение в нишу бизнеса, анализ конкурентов и проработка потенциального клиента помогают разработать айдентику, которая будет задавать необходимое позицианирование бренда на рынке.
                    </p>
                  </div>
                  <div className="works__img-side">
                    <img src="/images/work-2-identity.jpg" alt="Айдентика" className="works__img" />
                  </div>
                </div>
              </Card>

              {/* Key Visual */}
              <Card slug="kv" mod="kv">
                <Arrow lg />
                <div className="works__text">
                  <p className="works__cat">Разработка<br />Key Visual</p>
                  <p className="works__desc">
                    Грамотно разработанный key visual способен вызывать у целевой аудитории определенные чувства и ассоциации с брендом. Я помогу установить более глубокую эмоциональную связь с покупателями и повысить их лояльность
                  </p>
                </div>
                <div className="works__dual-imgs">
                  <div className="works__img-wrap">
                    <img src="/images/work-4-kv1.jpg" alt="Key Visual 1" className="works__img" />
                  </div>
                  <div className="works__img-wrap">
                    <img src="/images/work-5-kv2.jpg" alt="Key Visual 2" className="works__img" />
                  </div>
                </div>
              </Card>

            </div>
          </div>

          {/* ── Bottom: 3 равные колонки ── */}
          <div className="works__bottom">

            <Card slug="promo" mod="promo">
              <Arrow />
              <div className="works__text">
                <p className="works__cat">Материалы для продвижения бренда</p>
                <p className="works__desc">Презентации | карточки для маркетплейсов | online-реклама | гайды | рекламные конструкции</p>
              </div>
            </Card>

            <Card slug="social" mod="social">
              <Arrow />
              <div className="works__text">
                <p className="works__cat">Оформление социальных сетей</p>
                <p className="works__desc">{'Instagram | ВКонтакте | YouTube\nРазработка визуального оформления и шаблонов\n+ ведение аккаунта на постоянной основе'}</p>
              </div>
            </Card>

            <Card slug="web" mod="web">
              <Arrow />
              <div className="works__text">
                <p className="works__cat">Web-дизайн</p>
                <p className="works__desc">Разрабатываем сайт, который полностью соответствует требованиям заказчика. Предложим экспертные рекомендации и создадим как многостраничный веб-ресурс, так и продающую одностраничную лендинг-страницу. Мобильная версия входит в стоимость</p>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
