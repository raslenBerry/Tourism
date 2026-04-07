import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t("footer.visitTunisia")}</h4>
          <p>{t("footer.tagline")}</p>
        </div>

        <div className="footer-section">
          <h4>{t("footer.explore")}</h4>
          <ul>
            <li>
              <Link to="/">{t("footer.home")}</Link>
            </li>
            <li>
              <Link to="/destinations">{t("footer.destinations")}</Link>
            </li>
            <li>
              <Link to="/experiences">{t("footer.experiences")}</Link>
            </li>
            <li>
              <Link to="/guides">{t("footer.travelInfo")}</Link>
            </li>
            <li>
              <Link to="/about">{t("footer.aboutUs")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("footer.information")}</h4>
          <ul>
            <li>
              <Link to="/guides">{t("footer.visaEntry")}</Link>
            </li>
            <li>
              <Link to="/guides">{t("footer.localGuides")}</Link>
            </li>
            <li>
              <Link to="/guides">{t("footer.accommodations")}</Link>
            </li>
            <li>
              <Link to="/guides">{t("footer.travelGuides")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("footer.contactUs")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("footer.email")}</h4>
          <ul>
            <li>
              <a href="mailto:berriraslen@gmail.com">{t("footer.email1")}</a>
            </li>
            <li>
              <a href="mailto:firas0elmahdi@gmail.com">{t("footer.email2")}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          <p style={{ margin: 0, paddingBottom: "0.5rem" }}>
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
