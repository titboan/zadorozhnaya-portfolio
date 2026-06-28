import './Works.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Arrow() {
  return <span className="works__arrow">↗</span>
}

function Card({ mod, cat, children }) {
  const ref = useScrollReveal()
  return (
    <div className={`works__card works__card--${mod} reveal`} ref={ref}>
      <div className="works__head">
        <span className="works__cat">{cat}</span>
        <Arrow />
      </div>
      {children}
    </div>
  )
}

export default function Works() {
  const headingRef = useScrollReveal()

  return (
    <section className="works">
      <div className="works__inner">
        <h2 className="works__heading reveal" ref={headingRef}>МОИ<br />РАБОТЫ</h2>

        <div className="works__grid">
          {/* col 1, rows 1-2 */}
          <Card mod="logo" cat="Разработка логотипа">
            <p className="works__desc">
              Разработка логотипа как ключевого элемента целостной фирменной айдентики, гармоничное сочетание с другими бренд-коммуникациями и усиление общего имиджа
            </p>
            <div className="works__img-wrap">
              <img src="/images/work-1-logo.jpg" alt="Разработка логотипа" className="works__img" />
            </div>
          </Card>

          {/* col 2-4, row 1 */}
          <Card mod="identity" cat={<>Айдентика<br />и фирменный стиль</>}>
            <div className="works__split">
              <p className="works__desc">
                Глубокое погружение в нишу бизнеса, анализ конкурентов и проработка потенциального клиента помогают разработать айдентику, которая будет задавать нужное позицианирование бренда на рынке.
              </p>
              <div className="works__img-side">
                <img src="/images/work-2-identity.jpg" alt="Айдентика" className="works__img" />
              </div>
            </div>
          </Card>

          {/* col 2-4, row 2 */}
          <Card mod="kv" cat={<>Разработка<br />Key Visual</>}>
            <div className="works__split">
              <p className="works__desc">
                Грамотно разработанный key visual способен вызывать у целевой аудитории определённые чувства и ассоциации с брендом. Я помогу установить более глубокую эмоциональную связь с покупателями и повысить их лояльность
              </p>
              <div className="works__dual-imgs">
                <img src="/images/work-4-kv1.jpg" alt="Key Visual 1" className="works__img" />
                <img src="/images/work-5-kv2.jpg" alt="Key Visual 2" className="works__img" />
              </div>
            </div>
          </Card>

          {/* col 1, row 3 */}
          <Card mod="poly" cat="Полиграфия">
            <div className="works__split">
              <div className="works__poly-text">
                <p className="works__desc">
                  Фирменная полиграфия является неотъемлемой частью бренда, если у вас уже есть фирменная айдентика, необходимо действовать в её рамках, но при этом сделать дизайн современным и понятным для ЦА.{'\n\n'}Так же я даю рекомендации по дальнейшей постпечатной обработки ориентируясь на бюджет клиента
                </p>
                <p className="works__tags">буклеты | листовки | визитки | открытки | лифлеты | пригласительные</p>
              </div>
              <div className="works__img-side">
                <img src="/images/work-3-poly.jpg" alt="Полиграфия" className="works__img" />
              </div>
            </div>
          </Card>

          {/* col 2, row 3 */}
          <Card mod="promo" cat="Материалы для продвижения бренда">
            <p className="works__desc">Презентации | карточки для маркетплейсов | online-реклама | гайды | рекламные конструкции</p>
          </Card>

          {/* col 3, row 3 */}
          <Card mod="social" cat="Оформление социальных сетей">
            <p className="works__desc">{'Instagram | ВКонтакте | YouTube\nРазработка визуального оформления и шаблонов\n+ ведение аккаунта на постоянной основе'}</p>
          </Card>

          {/* col 4, row 3 */}
          <Card mod="web" cat="Web-дизайн">
            <p className="works__desc">Разрабатываю сайт, который полностью соответствует требованиям заказчика. Предложим экспертные рекомендации и создадим как многостраничный веб-ресурс, так и продающую одностраничную лендинг-страницу. Мобильная версия входит в стоимость</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
