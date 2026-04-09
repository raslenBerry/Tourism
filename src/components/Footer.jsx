import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Main Info */}
        <div className="footer-column">
          <h3>Visit Tunisia</h3>
          <p>
            Discover authentic Mediterranean and Sahara experiences with our
            carefully curated travel destinations and guides.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div className="footer-column">
          <h4>Explore</h4>
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

        {/* Column 3: Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to="/guides">Travel Information</Link>
            </li>
            <li>
              <Link to="/contact">Contact Support</Link>
            </li>
            <li>
              <a href="mailto:berriraslen@gmail.com">Get in Touch</a>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="tel:+21658138146">Call Us</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div className="footer-column">
          <h4>Get in Touch</h4>
          <div className="footer-contact">
            <p>Nabeul, Tunisia</p>
            <p>
              <a href="tel:+21658138146">+216 58 138 146</a>
            </p>
            <p>
              <a href="mailto:berriraslen@gmail.com">berriraslen@gmail.com</a>
            </p>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
        <p>A Tunisia tourism platform by Raslen Berri & Firas Mehdi</p>
      </div>
    </footer>
  );
}

export default Footer;
