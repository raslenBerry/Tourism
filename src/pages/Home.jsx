import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const heroImage = "/images/old-castle.jpg";

function Home() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      image: "/images/sou9.jpg",
      title: "Tunis - Capital City",
      desc: "Explore ancient medinas and world-class museums",
    },
    {
      image:
        "/images/cozy-streets-blue-white-sunny-day-old-city-kasbah-udayas.jpg",
      title: "Sidi Bou Said",
      desc: "Picturesque clifftop village with stunning views",
    },
    {
      image: "/images/camel.jpg",
      title: "Sahara Desert",
      desc: "Experience the legendary red dunes and desert magic",
    },
    {
      image: "/images/blue-chair-tropical-relax-resort.jpg",
      title: "Hammamet Beach",
      desc: "Golden sands and crystal-clear Mediterranean waters",
    },
    {
      image: "/images/woman-sitting-rocks-top-by-ocean.jpg",
      title: "Djerba Island",
      desc: "Tropical paradise with pristine beaches",
    },
    {
      image: "/images/pexels-mahmoud-yahyaoui-29679540.jpg",
      title: "Kairouan",
      desc: "Sacred city with profound spiritual heritage",
    },
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const featuredDestinations = [
    {
      name: "Tunis & Medina",
      image: "/images/sou9.jpg",
      description:
        "Explore the vibrant capital with its ancient medina, world-class museums, and bustling souks filled with traditional crafts.",
      duration: "2-3 days",
      type: "Capital",
    },
    {
      name: "Sidi Bou Said",
      image:
        "/images/cozy-streets-blue-white-sunny-day-old-city-kasbah-udayas.jpg",
      description:
        "Picturesque blue-and-white architecture perched on a clifftop overlooking the Mediterranean with charming cafes.",
      duration: "1 day",
      type: "Coastal",
    },
    {
      name: "Desert Sahara",
      image: "/images/camel.jpg",
      description:
        "Experience the legendary red dunes, traditional villages, and magical desert nights under a canopy of stars.",
      duration: "3-5 days",
      type: "Desert",
    },
    {
      name: "Hammamet Beach",
      image: "/images/blue-chair-tropical-relax-resort.jpg",
      description:
        "Golden sands, crystal-clear Mediterranean waters, and world-class resorts for ultimate beach relaxation.",
      duration: "3-5 days",
      type: "Beach",
    },
    {
      name: "Djerba Island",
      image: "/images/woman-sitting-rocks-top-by-ocean.jpg",
      description:
        "Tropical island paradise with pristine beaches, luxury resorts, and water sports galore.",
      duration: "3-5 days",
      type: "Island",
    },
    {
      name: "Kairouan",
      image: "/images/pexels-mahmoud-yahyaoui-29679540.jpg",
      description:
        "Explore the sacred city with one of Islam's most important mosques and deep spiritual heritage.",
      duration: "3-4 hours",
      type: "History",
    },
  ];

  const stats = [
    { number: "1,300+", label: t("home.stats.coastline") },
    { number: "12+", label: t("home.stats.destinations") },
    { number: "365", label: t("home.stats.daysOpen") },
    { number: "3,000+", label: t("home.stats.sunshine") },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Australia",
      text: "Tunisia exceeded all expectations! The people are incredibly warm and welcoming. Best decision ever visiting!",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Marco Rossi",
      role: "Italy",
      text: "The Sahara experience was absolutely magical. Sleeping under the stars with the desert stretching infinitely is unforgettable.",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Emma Thompson",
      role: "UK",
      text: "Food, history, culture – everything was perfect! The authentic local experiences made this trip truly special.",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "David Chen",
      role: "Canada",
      text: "Incredible value for money. Luxury experiences at half the European prices. I'm recommending Tunisia to everyone!",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];

  const offers = [
    {
      title: "Summer Escape Deal",
      discount: "25% OFF",
      description:
        "Book coastal resorts with 25% discount through end of month",
      price: "$599",
      color: "#10b981",
      bgColor: "#e6fdf7",
    },
    {
      title: "Family Bundle",
      discount: "20% OFF",
      description: "4+ people get 20% off total trip cost",
      price: "$699",
      color: "#f59e0b",
      bgColor: "#ffe6d5",
    },
    {
      title: "Adventure Combo",
      discount: "15% OFF",
      description: "Desert + Beach + Culture in one epic package",
      price: "$999",
      color: "#ef4444",
      bgColor: "#fee2e2",
    },
    {
      title: "Luxury Retreat",
      discount: "30% OFF",
      description: "Premium accommodations with exclusive experiences included",
      price: "$1299",
      color: "#8b5cf6",
      bgColor: "#f3e8ff",
    },
  ];

  return (
    <section className="page home-page">
      {/* ===== HERO SECTION ===== */}
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "570px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="hero-copy"
          style={{ textAlign: "center", color: "white" }}
        >
          <span style={{ fontSize: "1.2rem", opacity: 0.9 }}>
            HABIBI Come To Tunsia
          </span>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            {t("home.heroTitle")}
          </h2>
          <p
            style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.95 }}
          >
            {t("home.heroSubtitle")}
          </p>
          <div
            className="hero-cta"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn btn-primary"
              onClick={() => navigate("/destinations")}
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Explore Destinations
            </button>
            <button
              className="btn btn-outline"
              onClick={() => navigate("/guides")}
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: "bold",
                background: "rgba(255,255,255,0.2)",
                color: "white",
                border: "2px solid white",
              }}
            >
              Guides & Info
            </button>
          </div>
        </div>
      </div>

      {/* ===== QUICK STATS ===== */}
      <section
        style={{
          background: "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
          padding: "3rem 2rem",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.number}
              </div>
              <p style={{ opacity: 0.9, margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY TUNISIA ===== */}
      <section className="section" style={{ padding: "3rem 2rem" }}>
        <div
          className="section-header"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
            {t("home.features.title")}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666" }}>
            Experience the perfect blend of culture, nature, and adventure
          </p>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              icon: "🏛️",
              title: t("home.features.affordability"),
              desc: t("home.features.affordabilityDesc"),
            },
            {
              icon: "🏖️",
              title: t("home.features.safety"),
              desc: t("home.features.safetyDesc"),
            },
            {
              icon: "🌅",
              title: t("home.features.diversity"),
              desc: t("home.features.diversityDesc"),
            },
            {
              icon: "🤝",
              title: t("home.features.accessibility"),
              desc: t("home.features.accessibilityDesc"),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#f8f9fa",
                padding: "2rem",
                borderRadius: "12px",
                textAlign: "center",
                border: "1px solid #eee",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                {item.icon}
              </div>
              <h4 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                {item.title}
              </h4>
              <p style={{ color: "#666", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED DESTINATIONS - LARGE ROTATING CAROUSEL ===== */}
      <section
        style={{ padding: "4rem 2rem", maxWidth: "1400px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
            {t("destinations.title")}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666" }}>
            Discover featured destinations across Tunisia
          </p>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            cursor: "pointer",
          }}
          onClick={() => navigate("/destinations")}
        >
          {featuredDestinations.map((dest, idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: idx === currentSlide ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${dest.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "2rem",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  color: "white",
                }}
              >
                <h3 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                  {dest.name}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "1rem",
                    opacity: 0.95,
                  }}
                >
                  {dest.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    fontSize: "0.95rem",
                  }}
                >
                  <span>⏱️ {dest.duration}</span>
                  <span>📍 {dest.type}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "10px",
              zIndex: 10,
            }}
          >
            {featuredDestinations.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                style={{
                  width: idx === currentSlide ? "32px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  background:
                    idx === currentSlide ? "#0066cc" : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        style={{
          background: "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
          padding: "4rem 2rem",
          color: "white",
        }}
      >
        <div
          className="section-header"
          style={{ textAlign: "center", marginBottom: "3rem", color: "white" }}
        >
          <h2 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Have questions about your trip? Our team is here to help!
          </p>
        </div>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.2)",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✉️</div>
            <h3 style={{ margin: "0 0 0.5rem 0" }}>Email</h3>
            <p style={{ margin: "0 0 1rem 0", opacity: 0.9 }}>
              Reach out to our founders and project coordinators
            </p>
            <div style={{ lineHeight: "1.8" }}>
              <a
                href="mailto:berriraslen@gmail.com"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                berriraslen@gmail.com
              </a>
              <a
                href="mailto:firas0elmahdi@gmail.com"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                firas0elmahdi@gmail.com
              </a>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.2)",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🗺️</div>
            <h3 style={{ margin: "0 0 0.5rem 0" }}>Travel Planning</h3>
            <p style={{ margin: "0 0 1rem 0", opacity: 0.9 }}>
              Get personalized recommendations and guided planning
            </p>
            <button
              onClick={() => navigate("/guides")}
              style={{
                padding: "0.75rem 1.5rem",
                background: "white",
                color: "#0066cc",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {t("navbar.guides")}
            </button>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.2)",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>ℹ️</div>
            <h3 style={{ margin: "0 0 0.5rem 0" }}>Learn More</h3>
            <p style={{ margin: "0 0 1rem 0", opacity: 0.9 }}>
              Discover our mission and vision for Tunisia tourism
            </p>
            <button
              onClick={() => navigate("/about")}
              style={{
                padding: "0.75rem 1.5rem",
                background: "white",
                color: "#0066cc",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        style={{
          background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          padding: "3rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
          Ready to Explore Tunisia?
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "2rem",
            opacity: 0.9,
            maxWidth: "700px",
            margin: "0 auto 2rem",
          }}
        >
          Discover authentic experiences, rich cultural heritage, and
          unforgettable adventures
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/destinations")}
            style={{
              padding: "1rem 2.5rem",
              background: "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            {t("navbar.destinations")}
          </button>
          <button
            onClick={() => navigate("/experiences")}
            style={{
              padding: "1rem 2.5rem",
              background: "white",
              color: "#0066cc",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            {t("navbar.experiences")}
          </button>
        </div>
      </section>
    </section>
  );
}

export default Home;
