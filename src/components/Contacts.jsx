import './Contacts.css'

export default function Contacts() {
  return (
    <>
      <section className="contacts">
        <div className="contacts__inner">
          <h2 className="contacts__heading">Контакты</h2>

          <div className="contacts__list">
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
