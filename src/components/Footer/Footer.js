import "./Footer.css"
import { translations } from "../../i18n"

export default function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">{translations[language].footer}</p>
      </div>
    </footer>
  )
}
