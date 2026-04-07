import { useLanguage } from "../contexts/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section className="page about-page">
      {/* HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
          minHeight: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div className="hero-copy">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            {t("about.title")}
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.95, maxWidth: "600px" }}>
            {t("about.subtitle")}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section
        style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* MISSION SECTION */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#111827",
            }}
          >
            {t("about.missionTitle")}
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#374151",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t("about.missionDesc")}
          </p>
        </div>

        {/* VISION SECTION */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#111827",
            }}
          >
            {t("about.visionTitle")}
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#374151",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t("about.visionDesc")}
          </p>
        </div>

        {/* GOALS SECTION */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#111827",
            }}
          >
            {t("about.goalsTitle")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { key: "goal1", icon: "🌍" },
              { key: "goal2", icon: "💼" },
              { key: "goal3", icon: "📱" },
              { key: "goal4", icon: "🤝" },
            ].map((goal, idx) => (
              <div
                key={idx}
                style={{
                  background:
                    "linear-gradient(135deg, #f0f4ff 0%, #fff5e6 100%)",
                  padding: "2rem",
                  borderRadius: "12px",
                  border: "2px solid #0066cc",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  {goal.icon}
                </div>
                <p
                  style={{
                    color: "#111827",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  {t(`about.${goal.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DEVELOPERS SECTION */}
        <div
          style={{
            background: "linear-gradient(135deg, #f0f4ff 0%, #fff5e6 100%)",
            padding: "3rem 2rem",
            borderRadius: "12px",
            marginTop: "4rem",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: "#111827",
            }}
          >
            {t("about.developedBy")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#0066cc", marginBottom: "0.5rem" }}>
                Raslen Berri
              </h3>
              <p
                style={{
                  color: "#ff6b35",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                {t("about.role1")}
              </p>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                {t("about.dev1Desc")}
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#0066cc", marginBottom: "0.5rem" }}>
                Firas Mehdi
              </h3>
              <p
                style={{
                  color: "#ff6b35",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                {t("about.role2")}
              </p>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                {t("about.dev2Desc")}
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
            padding: "3rem 2rem",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>{t("about.contactCTA")}</h2>
          <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
            {t("about.contactDesc")}
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:berriraslen@gmail.com"
              style={{
                background: "white",
                color: "#0066cc",
                padding: "0.75rem 2rem",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Email Raslen
            </a>
            <a
              href="mailto:firas0elmahdi@gmail.com"
              style={{
                background: "white",
                color: "#0066cc",
                padding: "0.75rem 2rem",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Email Firas
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
