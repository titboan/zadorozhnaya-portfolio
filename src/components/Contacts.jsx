import './Contacts.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const IconPhone = () => (
  <svg className="contacts__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
)

const IconTelegram = () => (
  <svg className="contacts__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0v5l3.5-3"/>
  </svg>
)

const IconArrowUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

export default function Contacts() {
  const headingRef = useScrollReveal()
  const listRef = useScrollReveal()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <section className="contacts">
        <div className="contacts__inner">
          <div className="contacts__top-row">
            <h2 className="contacts__heading reveal" ref={headingRef}>Контакты</h2>
            <button className="contacts__scroll-top" onClick={scrollToTop} aria-label="Наверх">
              <IconArrowUp />
            </button>
          </div>

          <div className="contacts__list reveal reveal-delay-2" ref={listRef}>
            <a href="tel:+79996208873" className="contacts__item">
              <IconPhone />
              <span className="contacts__text">+7 999 620 88 73</span>
            </a>

            <span className="contacts__divider" />

            <a href="https://t.me/zadoroshnaua" className="contacts__item" target="_blank" rel="noopener noreferrer">
              <IconTelegram />
              <span className="contacts__text">@zadoroshnaua</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer__copy">© 2026 Анастасия Задорожная</span>
      </footer>
    </>
  )
}
