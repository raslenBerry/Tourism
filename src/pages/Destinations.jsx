import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Map from "../components/Map.jsx";

function Destinations() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      nameKey: "dest1_name",
      descKey: "dest1_desc",
      longDescKey: "dest1_longDesc",
      category: "cultural",
      lat: 36.8,
      lng: 10.2,
      image: "/images/sou9.jpg",
      rating: 4.8,
      reviews: 324,
      bestFor: ["History", "Culture", "Shopping"],
      climate: "Mediterranean",
      duration: "2-3 days",
      highlights: [
        "Medina UNESCO Site",
        "Bardo Museum",
        "Zitouna Mosque",
        "Souk el-Attarine",
        "Café Culture",
      ],
      accessibility: "✓ Excellent",
      bestTime: "Oct-May",
      hotels: [
        { name: "Hotel Tunis", stars: 5, url: "https://www.hoteltunis.tn" },
        { name: "Dar Medina", stars: 4, url: "https://darmedina.tn" },
        {
          name: "Residence El Hedra",
          stars: 3,
          url: "https://reseidenceelhedra.tn",
        },
      ],
      attractions: [
        "Medina Old Town",
        "Bardo Museum",
        "Zitouna Mosque",
        "Palace of Dar Ben Abdallah",
        "Souk el-Attarine",
      ],
      activities: [
        "Market exploration",
        "Museum tours",
        "Traditional cooking classes",
        "Mosque visits",
        "Photography",
      ],
    },
    {
      id: 2,
      nameKey: "dest2_name",
      descKey: "dest2_desc",
      longDescKey: "dest2_longDesc",
      category: "coastal",
      lat: 36.87,
      lng: 10.33,
      image:
        "/images/cozy-streets-blue-white-sunny-day-old-city-kasbah-udayas.jpg",
      rating: 4.9,
      reviews: 512,
      bestFor: ["Photography", "Relaxation", "Dining"],
      climate: "Mediterranean",
      duration: "1 day",
      highlights: [
        "Clifftop Views",
        "Blue-White Architecture",
        "Art Galleries",
        "Sea Views",
        "Sunset Spots",
      ],
      accessibility: "✓ Good",
      bestTime: "Year-round",
      hotels: [
        {
          name: "Sidi Bou Said Palace Hotel",
          stars: 5,
          url: "https://www.sidibousaidpalace.tn",
        },
        { name: "Dar Zarrouk", stars: 4, url: "https://darzarrouq.tn" },
        {
          name: "Guesthouse Blue Door",
          stars: 3,
          url: "https://bluedoor-guesthouse.tn",
        },
      ],
      attractions: [
        "Village streets",
        "Art galleries",
        "Traditional cafés",
        "Ennejma Ezzahra Museum",
        "Viewpoint cliff",
      ],
      activities: [
        "Sunset watching",
        "Art gallery tours",
        "Café sitting",
        "Photography walks",
        "Shopping for crafts",
      ],
    },
    {
      id: 3,
      nameKey: "dest3_name",
      descKey: "dest3_desc",
      longDescKey: "dest3_longDesc",
      category: "coastal",
      lat: 33.85,
      lng: 10.94,
      image: "/images/woman-sitting-rocks-top-by-ocean.jpg",
      rating: 4.8,
      reviews: 378,
      bestFor: ["Beach", "Relaxation", "Water Sports"],
      climate: "Tropical",
      duration: "3-5 days",
      highlights: [
        "Pristine Beaches",
        "Houmt Souk Market",
        "El Ghriba Synagogue",
        "Water Sports",
        "Traditional Villages",
      ],
      accessibility: "✓ Excellent",
      bestTime: "May-Oct",
      hotels: [
        {
          name: "Djerba Plaza Thalasso & Spa",
          stars: 5,
          url: "https://www.djerbaplaza.com/en/",
        },
        {
          name: "Sunny Days Hotel",
          stars: 4,
          url: "https://sunnydayshotel.tn",
        },
        {
          name: "Beach View Guesthouse",
          stars: 3,
          url: "https://beachviewguesthouse.tn",
        },
      ],
      attractions: [
        "Houmt Souk market",
        "El Ghriba Synagogue",
        "Beach resorts",
        "Lagoons",
        "Traditional pottery",
      ],
      activities: [
        "Beach relaxation",
        "Windsurfing",
        "Boat trips",
        "Market shopping",
        "Diving",
      ],
    },
    {
      id: 4,
      nameKey: "dest4_name",
      descKey: "dest4_desc",
      longDescKey: "dest4_longDesc",
      category: "coastal",
      lat: 36.4,
      lng: 10.6,
      image: "/images/blue-chair-tropical-relax-resort.jpg",
      rating: 4.6,
      reviews: 441,
      bestFor: ["Beach", "Family", "Water Sports"],
      climate: "Mediterranean",
      duration: "3-5 days",
      highlights: [
        "Golden Beaches",
        "Water Sports",
        "Medina Walls",
        "Hammamet Kasbah",
        "Restaurants",
      ],
      accessibility: "✓ Excellent",
      bestTime: "May-Oct",
      hotels: [
        {
          name: "La Badira (Hammamet)",
          stars: 5,
          url: "https://www.labadira.com/",
        },
        {
          name: "Medina View Hotel",
          stars: 4,
          url: "https://medinaviewhotel.tn",
        },
        { name: "Seaside Inn", stars: 3, url: "https://seasideinn.tn" },
      ],
      attractions: [
        "Hammamet beach",
        "Medina old town",
        "Kasbah fortress",
        "Nabeul market nearby",
        "International cultural center",
      ],
      activities: [
        "Swimming",
        "Windsurfing",
        "Beach volleyball",
        "Medina exploration",
        "Sunset cruises",
      ],
    },
    {
      id: 5,
      nameKey: "dest5_name",
      descKey: "dest5_desc",
      longDescKey: "dest5_longDesc",
      category: "cultural",
      lat: 35.68,
      lng: 9.92,
      image: "/images/pexels-mahmoud-yahyaoui-29679540.jpg",
      rating: 4.5,
      reviews: 198,
      bestFor: ["spirituality", "History", "Architecture"],
      climate: "Hot",
      duration: "1-2 days",
      highlights: [
        "Great Mosque of Sidi Uqba",
        "Medina lanes",
        "Carpet workshops",
        "Islamic gates",
        "Bazaars",
      ],
      accessibility: "✓ Good",
      bestTime: "Oct-May",
      hotels: [
        {
          name: "Kairouan Palace Hotel",
          stars: 5,
          url: "https://kairouan-palace.tn",
        },
        {
          name: "City View Hotel",
          stars: 4,
          url: "https://cityviewhotel.tn",
        },
        {
          name: "Budget Inn Kairouan",
          stars: 2,
          url: "https://budgetinn.tn",
        },
      ],
      attractions: [
        "Great Mosque of Sidi Uqba",
        "Medina lanes",
        "Carpet workshops",
        "Islamic gates",
        "Traditional bazaars",
      ],
      activities: [
        "Mosque exploration",
        "Carpet shopping",
        "Photography",
        "Religious pilgrimage",
        "Market walks",
      ],
    },
    {
      id: 6,
      nameKey: "dest6_name",
      descKey: "dest6_desc",
      longDescKey: "dest6_longDesc",
      category: "desert",
      lat: 33.92,
      lng: 8.13,
      image: "/images/camel.jpg",
      rating: 4.7,
      reviews: 267,
      bestFor: ["Desert", "Adventure", "Photography"],
      climate: "Desert",
      duration: "3-4 days",
      highlights: [
        "Vast Sand Dunes",
        "Medina",
        "Oasis villages",
        "Star-filled nights",
        "Bedouin culture",
      ],
      accessibility: "✓ Good",
      bestTime: "Oct-May",
      hotels: [
        {
          name: "Tozeur Desert Palace",
          stars: 5,
          url: "https://tozeur-palace.tn",
        },
        {
          name: "Oasis Valley Hotel",
          stars: 4,
          url: "https://oasisvalley.tn",
        },
        {
          name: "Desert Nomad Camp",
          stars: 3,
          url: "https://desert-nomad.tn",
        },
      ],
      attractions: [
        "Chebika waterfall",
        "Tamerza ruins",
        "Midès canyon",
        "Salt lake",
        "Date palm groves",
      ],
      activities: [
        "Desert trekking",
        "Camel rides",
        "Dune camping",
        "Photography",
        "Stargazing",
      ],
    },
    {
      id: 7,
      nameKey: "dest7_name",
      descKey: "dest7_desc",
      longDescKey: "dest7_longDesc",
      category: "nature",
      lat: 36.5,
      lng: 10.15,
      image: "/images/Tunisia-Zaghouan-Rock-Climbing-1024x681.jpg.webp",
      rating: 4.6,
      reviews: 145,
      bestFor: ["Hiking", "Photography", "Nature"],
      climate: "Mountain",
      duration: "1-2 days",
      highlights: [
        "Zaghouan Peak",
        "Water spring temple",
        "Mountain trails",
        "Village views",
        "Fresh mountain air",
      ],
      accessibility: "✓ Good",
      bestTime: "Sept-June",
      hotels: [
        {
          name: "Mountain View Resort",
          stars: 4,
          url: "https://mountain-view.tn",
        },
        {
          name: "Zaghouan Guesthouse",
          stars: 3,
          url: "https://zaghouan-guest.tn",
        },
      ],
      attractions: [
        "Zaghouan Peak",
        "Water spring temple",
        "Mountain trails",
        "Traditional villages",
        "Local markets",
      ],
      activities: [
        "Rock climbing",
        "Hiking",
        "Photography",
        "Village tours",
        "Picnicking",
      ],
    },
    {
      id: 8,
      nameKey: "dest8_name",
      descKey: "dest8_desc",
      longDescKey: "dest8_longDesc",
      category: "historical",
      lat: 35.75,
      lng: 9.53,
      image: "/images/Tunisia-Maktar-Ruins-1024x762.jpg.webp",
      rating: 4.4,
      reviews: 98,
      bestFor: ["History", "Archaeology", "Culture"],
      climate: "Hot",
      duration: "3-4 hours",
      highlights: [
        "Roman temples",
        "Triumphal arch",
        "Ancient villas",
        "Inscriptions",
        "Forum area",
      ],
      accessibility: "✓ Good",
      bestTime: "Oct-May",
      hotels: [
        {
          name: "Heritage Hotel Maktar",
          stars: 3,
          url: "https://heritage-maktar.tn",
        },
      ],
      attractions: [
        "Roman temples",
        "Triumphal arch",
        "Villa ruins",
        "Archaeological museum",
        "Forum",
      ],
      activities: [
        "Archaeological tours",
        "Photography",
        "Historical study",
        "Picnicking",
        "Exploration",
      ],
    },
    {
      id: 9,
      nameKey: "dest9_name",
      descKey: "dest9_desc",
      longDescKey: "dest9_longDesc",
      category: "nature",
      lat: 35.98,
      lng: 9.26,
      image: "/images/Tunisia-Kesra-Views-1024x636.jpg.webp",
      rating: 4.5,
      reviews: 67,
      bestFor: ["Scenery", "Culture", "Hiking"],
      climate: "Mountain",
      duration: "1 day",
      highlights: [
        "Panoramic views",
        "Traditional village",
        "Berber culture",
        "Artisan workshops",
        "Mountain trails",
      ],
      accessibility: "✓ Fair",
      bestTime: "Sept-June",
      hotels: [
        {
          name: "Kesra Guesthouse",
          stars: 3,
          url: "https://kesra-guest.tn",
        },
      ],
      attractions: [
        "Village streets",
        "Artisan workshops",
        "Mountain viewpoints",
        "Local cafés",
        "Hiking trails",
      ],
      activities: [
        "Photography",
        "Village walks",
        "Artisan shopping",
        "Hiking",
        "Cultural exchange",
      ],
    },
    {
      id: 10,
      nameKey: "dest10_name",
      descKey: "dest10_desc",
      longDescKey: "dest10_longDesc",
      category: "desert",
      lat: 33.0,
      lng: 7.8,
      image: "/images/camels sahara-1_2.jpg",
      rating: 4.8,
      reviews: 534,
      bestFor: ["Adventure", "Photography", "Experience"],
      climate: "Desert",
      duration: "3-5 days",
      highlights: [
        "Golden dunes",
        "Bedouin camps",
        "Starry nights",
        "Sunrise/sunset",
        "Desert wildlife",
      ],
      accessibility: "✓ Good",
      bestTime: "Oct-May",
      hotels: [
        {
          name: "Desert Stars Resort",
          stars: 5,
          url: "https://desert-stars.tn",
        },
        {
          name: "Sahara Explorer Camp",
          stars: 4,
          url: "https://sahara-explorer.tn",
        },
      ],
      attractions: [
        "Dune formations",
        "Bedouin villages",
        "Salt lakes",
        "Desert oases",
        "Rock formations",
      ],
      activities: [
        "Camel trekking",
        "Sandboarding",
        "Desert camping",
        "Stargazing",
        "Photography",
      ],
    },
  ];

  const filteredDestinations =
    selectedCategory === "all"
      ? destinations
      : destinations.filter((d) => d.category === selectedCategory);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Tunisia's Best Destinations</h1>
        <p>
          Discover the most beautiful and culturally rich destinations across
          Tunisia
        </p>
      </div>

      <div className="category-filter">
        <button
          className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${selectedCategory === "cultural" ? "active" : ""}`}
          onClick={() => setSelectedCategory("cultural")}
        >
          Cultural
        </button>
        <button
          className={`filter-btn ${selectedCategory === "coastal" ? "active" : ""}`}
          onClick={() => setSelectedCategory("coastal")}
        >
          Coastal
        </button>
        <button
          className={`filter-btn ${selectedCategory === "desert" ? "active" : ""}`}
          onClick={() => setSelectedCategory("desert")}
        >
          Desert
        </button>
        <button
          className={`filter-btn ${selectedCategory === "nature" ? "active" : ""}`}
          onClick={() => setSelectedCategory("nature")}
        >
          Nature
        </button>
        <button
          className={`filter-btn ${selectedCategory === "historical" ? "active" : ""}`}
          onClick={() => setSelectedCategory("historical")}
        >
          Historical
        </button>
      </div>

      <div className="destinations-grid">
        {filteredDestinations.map((dest) => (
          <article
            key={dest.id}
            className="destination-card"
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
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
                height: "200px",
              }}
            >
              <img
                src={dest.image}
                alt={t(`destinations.${dest.nameKey}`)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#ff6b35",
                  color: "white",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {dest.category}
              </div>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>
                {t(`destinations.${dest.nameKey}`)}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  marginBottom: "1rem",
                  height: "3em",
                  overflow: "hidden",
                }}
              >
                {t(`destinations.${dest.descKey}`)}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                <span>⏱️ {dest.duration}</span>
                <span>🌡️ {dest.climate}</span>
                <span>{dest.accessibility}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {dest.highlights.slice(0, 2).map((h, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#e6f0ff",
                      color: "#0066cc",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "12px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedDestination(dest)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                Learn More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* MAP SECTION EXPLORE ON MAP */}
      <div
        style={{ padding: "3rem 2rem", maxWidth: "1400px", margin: "0 auto" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Explore on Map
        </h2>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        >
          <Map destinations={destinations} />
        </div>
      </div>

      {/* MODAL FOR DESTINATION DETAILS */}
      {selectedDestination && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem",
          }}
          onClick={() => setSelectedDestination(null)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              animation: "slideUp 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div
              style={{
                position: "relative",
                height: "300px",
                overflow: "hidden",
              }}
            >
              <img
                src={selectedDestination.image}
                alt={t(`destinations.${selectedDestination.nameKey}`)}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <button
                onClick={() => setSelectedDestination(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "#fff",
                  border: "none",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: "2rem" }}>
              <h2 style={{ marginBottom: "0.5rem", color: "#0066cc" }}>
                {t(`destinations.${selectedDestination.nameKey}`)}
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    background: "#ff6b35",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  {selectedDestination.category}
                </span>
                <span
                  style={{
                    background: "#10b981",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  ⭐ {selectedDestination.rating} ({selectedDestination.reviews}{" "}
                  reviews)
                </span>
              </div>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#333",
                  marginBottom: "1.5rem",
                  lineHeight: "1.8",
                }}
              >
                {t(`destinations.${selectedDestination.longDescKey}`)}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "#f0f4ff",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#0066cc" }}>
                    Duration
                  </h4>
                  <p style={{ margin: 0, color: "#333", fontWeight: "bold" }}>
                    {selectedDestination.duration}
                  </p>
                </div>
                <div
                  style={{
                    background: "#fff5e6",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#ff6b35" }}>
                    Climate
                  </h4>
                  <p style={{ margin: 0, color: "#333", fontWeight: "bold" }}>
                    {selectedDestination.climate}
                  </p>
                </div>
                <div
                  style={{
                    background: "#e6fdf7",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#00d4aa" }}>
                    Best Time
                  </h4>
                  <p style={{ margin: 0, color: "#333", fontWeight: "bold" }}>
                    {selectedDestination.bestTime}
                  </p>
                </div>
                <div
                  style={{
                    background: "#ffe6d5",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#f59e0b" }}>
                    Accessibility
                  </h4>
                  <p style={{ margin: 0, color: "#333", fontWeight: "bold" }}>
                    {selectedDestination.accessibility}
                  </p>
                </div>
              </div>

              <h4 style={{ color: "#0066cc", marginBottom: "0.75rem" }}>
                Highlights
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginBottom: "1.5rem",
                }}
              >
                {selectedDestination.highlights.map((h, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#e6f0ff",
                      color: "#0066cc",
                      padding: "0.5rem 1rem",
                      borderRadius: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              <h4 style={{ color: "#0066cc", marginBottom: "0.75rem" }}>
                Top Attractions
              </h4>
              <ul
                style={{
                  margin: "0 0 1.5rem 0",
                  paddingLeft: "1.5rem",
                  color: "#666",
                }}
              >
                {selectedDestination.attractions.map((a, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>
                    {a}
                  </li>
                ))}
              </ul>

              <h4 style={{ color: "#0066cc", marginBottom: "0.75rem" }}>
                Recommended Hotels
              </h4>
              <div
                style={{
                  display: "grid",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                {selectedDestination.hotels.slice(0, 3).map((h, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f8f9fa",
                      padding: "0.75rem 1rem",
                      borderRadius: "6px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <strong>{h.name}</strong>
                      <div style={{ fontSize: "0.9rem", color: "#ff6b35" }}>
                        {"⭐".repeat(h.stars)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedDestination(null)}
                style={{
                  width: "100%",
                  padding: "1rem",
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Destinations;
