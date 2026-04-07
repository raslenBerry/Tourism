import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function Navbar() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" },
    { code: "ro", name: "Română" },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <div className="brand-icon">✈</div>
        <div>
          <h1>Visit Tunisia</h1>
        </div>
      </NavLink>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("navbar.home")}
        </NavLink>
        <NavLink
          to="/destinations"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("navbar.destinations")}
        </NavLink>
        <NavLink
          to="/guides"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("navbar.guides")}
        </NavLink>
        <NavLink
          to="/experiences"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("navbar.experiences")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("navbar.about")}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("navbar.contact")}
        </NavLink>
      </nav>
      <div className="nav-cta">
        <div className="language-selector">
          <button
            className="language-btn"
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            title="Select Language"
          >
            <span className="lang-code">{language.toUpperCase()}</span>
          </button>
          {showLanguageMenu && (
            <div className="language-menu">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`language-option ${language === lang.code ? "active" : ""}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/contact")}
        >
          {t("navbar.contactBtn")}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
