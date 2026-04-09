import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

function Experiences() {
  const { t } = useLanguage();
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const experiences = [
    {
      id: 1,
      titleKey: "exp1_title",
      descKey: "exp1_desc",
      category: "Adventure",
      price: "From $60",
      image: "/images/camel.jpg",
      duration: "4-8 hours",
      groupSize: "1-8 people",
      highlights: [
        "Camel rides across golden dunes",
        "Sunset photography opportunities",
        "Traditional Bedouin camp experience",
        "Stargazing in pristine skies",
        "Light refreshments included",
      ],
    },
    {
      id: 2,
      titleKey: "exp2_title",
      descKey: "exp2_desc",
      category: "Cultural",
      price: "From $50",
      image: "/images/Tunisia-Cooking-Class-Woman-1024x683.jpg.webp",
      duration: "3-4 hours",
      groupSize: "2-8 people",
      highlights: [
        "Prepare traditional couscous",
        "Learn maklouba and tajine recipes",
        "Local spice market tour",
        "Enjoy cooked meals with wine",
        "Recipe cards to take home",
      ],
    },
    {
      id: 3,
      titleKey: "exp3_title",
      descKey: "exp3_desc",
      category: "Cultural",
      price: "From $35",
      image: "/images/sou9.jpg",
      duration: "3-4 hours",
      groupSize: "1-10 people",
      highlights: [
        "Secret shops off tourist paths",
        "Learn haggling techniques",
        "Support local artisans",
        "Traditional café experience",
        "Cultural insights and stories",
      ],
    },
    {
      id: 4,
      titleKey: "exp4_title",
      descKey: "exp4_desc",
      category: "History",
      price: "From $45",
      image: "/images/El-Jem-Tunisia-1.jpg.webp",
      duration: "3-4 hours",
      groupSize: "1-10 people",
      highlights: [
        "UNESCO World Heritage site",
        "Expert historical guide",
        "Museum tour included",
        "Stunning photography locations",
        "Ancient arena experience",
      ],
    },
    {
      id: 5,
      titleKey: "exp5_title",
      descKey: "exp5_desc",
      category: "Water Sports",
      price: "From $40",
      image: "/images/Tunisia-Al-Huwariyah-Kayak-1024x670.jpg.webp",
      duration: "3-4 hours",
      groupSize: "2-8 people",
      highlights: [
        "Crystal-clear turquoise waters",
        "Marine life viewing",
        "Hidden beach coves",
        "Snorkeling opportunities",
        "Professional instruction available",
      ],
    },
    {
      id: 6,
      titleKey: "exp6_title",
      descKey: "exp6_desc",
      category: "Adventure",
      price: "From $55",
      image: "/images/Tunisia-Grotte-ain-Dhab-Me-Caving-1024x642.jpg.webp",
      duration: "2-3 hours",
      groupSize: "2-6 people",
      highlights: [
        "Dramatic cave formations",
        "Guided exploration",
        "Safety equipment provided",
        "Photography opportunities",
        "Underground lake features",
      ],
    },
    {
      id: 7,
      titleKey: "exp7_title",
      descKey: "exp7_desc",
      category: "Scenic",
      price: "From $30",
      image:
        "/images/cozy-streets-blue-white-sunny-day-old-city-kasbah-udayas.jpg",
      duration: "2-3 hours",
      groupSize: "1-10 people",
      highlights: [
        "Iconic blue and white buildings",
        "Sunset viewing points",
        "Art galleries and cafés",
        "Mediterranean sea views",
        "Local artisan workshops",
      ],
    },
    {
      id: 8,
      titleKey: "exp8_title",
      descKey: "exp8_desc",
      category: "Cultural",
      price: "From $40",
      image: "/images/Tunisia-Hergla-Halfa-Weaving-1024x683.jpg.webp",
      duration: "2-3 hours",
      groupSize: "1-6 people",
      highlights: [
        "Traditional loom techniques",
        "Work with local artisans",
        "Take home your creation",
        "Support local craftspeople",
        "Learn cultural significance",
      ],
    },
    {
      id: 9,
      titleKey: "exp9_title",
      descKey: "exp9_desc",
      category: "History",
      price: "From $40",
      image: "/images/Tunisia-Kairouen-Mosque-1024x683.jpg.webp",
      duration: "3-4 hours",
      groupSize: "1-10 people",
      highlights: [
        "Great Mosque of Kairouan",
        "Historic medina exploration",
        "Islamic architecture study",
        "Spiritual heritage insights",
        "Local guide expertise",
      ],
    },
    {
      id: 10,
      titleKey: "exp10_title",
      descKey: "exp10_desc",
      category: "Adventure",
      price: "From $70",
      image: "/images/quad_tunisia_sahara.jpg",
      duration: "4-6 hours",
      groupSize: "1-8 people",
      highlights: [
        "High-speed dune riding",
        "Professional safety gear",
        "Desert camp experience",
        "Traditional lunch included",
        "Photography stops",
      ],
    },
    {
      id: 11,
      titleKey: "exp11_title",
      descKey: "exp11_desc",
      category: "History",
      price: "From $35",
      image: "/images/Tunisia-Kelibia-Fort-1024x693.jpg.webp",
      duration: "3-4 hours",
      groupSize: "1-8 people",
      highlights: [
        "Ancient fort with sea views",
        "Fishing village culture",
        "Mediterranean panoramas",
        "Historic architecture",
        "Local fish market experience",
      ],
    },
    {
      id: 12,
      titleKey: "exp12_title",
      descKey: "exp12_desc",
      category: "Adventure",
      price: "From $80",
      image: "/images/pexels-mahmoud-yahyaoui-29679540.jpg",
      duration: "24 hours",
      groupSize: "2-12 people",
      highlights: [
        "Authentic tent accommodation",
        "Traditional meals",
        "Bedouin lifestyle experience",
        "Pristine starry skies",
        "Fire storytelling sessions",
      ],
    },
  ];

  const categories = [
    "All",
    ...new Set(experiences.map((exp) => exp.category)),
  ];

  const filteredExperiences =
    selectedCategory === "All"
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  return (
    <section className="page experiences-page">
      {/* HERO SECTION */}
      <div
        className="hero"
        style={{
          background: "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="hero-copy">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            {t("experiences.title")}
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.95 }}>
            {t("experiences.subtitle")}
          </p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <section
        style={{ padding: "2rem", background: "#f9f9f9", textAlign: "center" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "0.75rem 1.5rem",
                border:
                  selectedCategory === category ? "none" : "2px solid #0066cc",
                background: selectedCategory === category ? "#0066cc" : "white",
                color: selectedCategory === category ? "white" : "#0066cc",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* EXPERIENCES GRID */}
      <section className="section" style={{ padding: "3rem 2rem" }}>
        <div
          className="experiences-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {filteredExperiences.map((experience) => (
            <div
              key={experience.id}
              className="experience-card"
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                background: "white",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "220px",
                }}
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "#0066cc",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                  }}
                >
                  {experience.category}
                </div>
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    marginBottom: "0.75rem",
                    color: "#111827",
                    fontSize: "1.1rem",
                  }}
                >
                  {t(`experiences.${experience.titleKey}`)}
                </h3>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  {t(`experiences.${experience.descKey}`)}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                    fontSize: "0.9rem",
                    color: "#666",
                  }}
                >
                  <div>⏱️ {experience.duration}</div>
                  <div>👥 {experience.groupSize}</div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #e5e7eb",
                    paddingTop: "1rem",
                    marginTop: "auto",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#0066cc",
                      marginBottom: "1rem",
                    }}
                  >
                    {experience.price}
                  </div>
                  <button
                    onClick={() => setSelectedExperience(experience)}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      backgroundColor: "#0066cc",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#0052a3";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#0066cc";
                    }}
                  >
                    {t("experiences.viewDetails")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED VIEW MODAL */}
      {selectedExperience && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem",
          }}
          onClick={() => setSelectedExperience(null)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              maxWidth: "700px",
              maxHeight: "90vh",
              overflow: "auto",
              padding: "2rem",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExperience(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "#0066cc",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "1.5rem",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✕
            </button>

            <img
              src={selectedExperience.image}
              alt={t(`experiences.${selectedExperience.titleKey}`)}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1.5rem",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <h2 style={{ margin: 0, color: "#111827" }}>
                {t(`experiences.${selectedExperience.titleKey}`)}
              </h2>
              <div
                style={{
                  background: "#0066cc",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                }}
              >
                {selectedExperience.category}
              </div>
            </div>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              {t(`experiences.${selectedExperience.descKey}`)}
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ marginBottom: "0.75rem", color: "#111827" }}>
                {t("experiences.highlights")}
              </h4>
              <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "#666" }}>
                {selectedExperience.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem" }}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "#f3f4f6",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
              >
                <div style={{ fontSize: "0.85rem", color: "#666" }}>
                  Duration
                </div>
                <div style={{ fontWeight: "bold", color: "#111827" }}>
                  {selectedExperience.duration}
                </div>
              </div>
              <div
                style={{
                  background: "#f3f4f6",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
              >
                <div style={{ fontSize: "0.85rem", color: "#666" }}>
                  Group Size
                </div>
                <div style={{ fontWeight: "bold", color: "#111827" }}>
                  {selectedExperience.groupSize}
                </div>
              </div>
            </div>

            <div
              style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem" }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color: "#0066cc",
                  marginBottom: "1rem",
                }}
              >
                {selectedExperience.price}
              </div>
              <button
                onClick={() => setSelectedExperience(null)}
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  backgroundColor: "#0066cc",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experiences;
