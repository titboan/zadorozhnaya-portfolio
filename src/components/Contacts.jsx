import './Contacts.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contacts() {
  const headingRef = useScrollReveal()
  const listRef = useScrollReveal()

  return (
    <>
      <section className="contacts">
        <div className="contacts__inner">
          <h2 className="contacts__heading reveal" ref={headingRef}>Контакты</h2>

          <div className="contacts__list reveal reveal-delay-2" ref={listRef}>
            <a href="tel:+79996208873" className="contacts__item">
              <span className="contacts__icon">📞</span>
              <span className="contacts__text">+7 999 620 88 73</span>
            </a>

            <span className="contacts__divider" />

            <a href="https://t.me/zadoroshnaua" className="contacts__item" target="_blank" rel="noopener noreferrer">
              <span className="contacts__icon">✈</span>
              <span className="contacts__text">@zadoroshnaua</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer__copy">© 2024 TZ</span>
      </footer>
    </>
  )
}
