import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Itineraries() {
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const navigate = useNavigate();

  const itineraries = [
    {
      id: 1,
      title: "Classic Tunisia: 5-Day Essentials",
      duration: "5 days / 4 nights",
      price: "$899",
      difficulty: "Easy",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      bestFor: "First-time visitors",
      rating: 4.8,
      reviews: 156,
      description:
        "Start in Tunis exploring medinas and museums. Then head to the blue-and-white wonder of Sidi Bou Said, relax in Hammamet, and experience Sahara magic in Douz.",
      included: [
        "Daily breakfast",
        "Guided city tours",
        "Camel rides",
        "Hotel accommodations",
        "Airport transfers",
      ],
      highlights: [
        {
          day: "Day 1",
          title: "Arrival in Tunis",
          description:
            "Welcome meeting at airport, hotel check-in, evening exploration of nearby medina.",
        },
        {
          day: "Day 2",
          title: "Tunis & Sidi Bou Said",
          description:
            "Morning museum visit, afternoon drive to picturesque Sidi Bou Said with blue architecture.",
        },
        {
          day: "Day 3",
          title: "Hammamet Beach",
          description:
            "Beach relaxation, water sports, local market exploration, traditional lunch.",
        },
        {
          day: "Day 4",
          title: "Sahara Desert",
          description:
            "Desert camp setup, camel trekking, Bedouin dinner under starlit skies.",
        },
        {
          day: "Day 5",
          title: "Return",
          description:
            "Morning desert activities, drive to airport, departure.",
        },
      ],
      itinerary_type: "Mixed",
    },
    {
      id: 2,
      title: "Desert Explorer: 7-Day Sahara Adventure",
      duration: "7 days / 6 nights",
      price: "$1,299",
      difficulty: "Medium",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      bestFor: "Adventure seekers",
      rating: 4.9,
      reviews: 203,
      description:
        "Deep dive into the Sahara with extended camel treks, overnight desert camps, Berber village interactions, and dramatic dune photography.",
      included: [
        "All camping equipment",
        "Camel guides",
        "Desert meals",
        "Photography workshops",
        "Cultural demonstrations",
      ],
      highlights: [
        {
          day: "Day 1-2",
          title: "Travel to Douz",
          description:
            "Journey through Chott el Djerid, settle into desert camp, first dune exploration.",
        },
        {
          day: "Day 3-4",
          title: "Camel Trek",
          description:
            "Full-day camel trekking across red dunes, meet Bedouin communities, traditional storytelling.",
        },
        {
          day: "Day 5",
          title: "Photography Safari",
          description:
            "Guided photography tour with professional tips for capturing desert landscapes.",
        },
        {
          day: "Day 6",
          title: "Star Gazing & Relaxation",
          description:
            "Evening astronomy session, desert night meditation, traditional massage.",
        },
        {
          day: "Day 7",
          title: "Return Journey",
          description:
            "Sunrise in the desert, travel back to Tunis, departure.",
        },
      ],
      itinerary_type: "Adventure",
    },
    {
      id: 3,
      title: "Cultural Heritage: 6-Day History Tour",
      duration: "6 days / 5 nights",
      price: "$1,099",
      difficulty: "Easy",
      image:
        "https://images.unsplash.com/photo-1548013146-72f37b46c5e8?w=800&h=600&fit=crop",
      bestFor: "History enthusiasts",
      rating: 4.7,
      reviews: 124,
      description:
        "Immerse yourself in Tunisia's rich history with visits to ancient Roman ruins, Islamic architecture, and UNESCO World Heritage sites with expert historians.",
      included: [
        "Expert historian guides",
        "Museum entries",
        "Cultural workshops",
        "All meals",
        "Accommodation",
      ],
      highlights: [
        {
          day: "Day 1-2",
          title: "Tunis Museum Circuit",
          description:
            "National Museum, Bardo Palace, guided medina tours with historical context.",
        },
        {
          day: "Day 3",
          title: "Kairouan Holy City",
          description:
            "Great Mosque, spiritual significance, meditation sessions, sufi traditions.",
        },
        {
          day: "Day 4",
          title: "El Djem Amphitheater",
          description:
            "UNESCO site exploration, Roman architecture lectures, museum visits.",
        },
        {
          day: "Day 5",
          title: "Carthage Ancient City",
          description:
            "Archaeological sites, historical reconstruction, maritime museum.",
        },
        {
          day: "Day 6",
          title: "Market & Crafts",
          description:
            "Traditional craft workshops, artisan markets, cultural exchange.",
        },
      ],
      itinerary_type: "Cultural",
    },
    {
      id: 4,
      title: "Beach Paradise: 5-Day Coastal Escape",
      duration: "5 days / 4 nights",
      price: "$799",
      difficulty: "Easy",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      bestFor: "Beach lovers & families",
      rating: 4.6,
      reviews: 189,
      description:
        "Relax on pristine Mediterranean beaches, enjoy water sports, luxurious resorts, and coastal dining experiences.",
      included: [
        "Beachfront hotel",
        "Water sports",
        "Spa treatments",
        "Beach meals",
        "Island tours",
      ],
      highlights: [
        {
          day: "Day 1",
          title: "Hammamet Arrival",
          description:
            "Beach resort check-in, water sports orientation, sunset beach walk.",
        },
        {
          day: "Day 2",
          title: "Water Sports Day",
          description:
            "Windsurfing, jet skiing, paddleboarding, professional instruction.",
        },
        {
          day: "Day 3",
          title: "Island Hopping",
          description:
            "Boat excursion to Djerba Island, snorkeling, beach picnic.",
        },
        {
          day: "Day 4",
          title: "Spa & Wellness",
          description:
            "Full spa day, traditional hammam, coastal yoga session.",
        },
        {
          day: "Day 5",
          title: "Departure",
          description: "Morning beach time, travel to airport.",
        },
      ],
      itinerary_type: "Leisure",
    },
    {
      id: 5,
      title: "Grand Tour: 10-Day Complete Experience",
      duration: "10 days / 9 nights",
      price: "$1,899",
      difficulty: "Medium",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      bestFor: "Complete experience seekers",
      rating: 4.9,
      reviews: 267,
      description:
        "The ultimate Tunisia experience combining beach relaxation, desert adventure, cultural immersion, and historical exploration in one comprehensive journey.",
      included: [
        "Premium hotels",
        "All activities",
        "Expert guides",
        "All meals",
        "Transportation",
        "Travel insurance",
      ],
      highlights: [
        {
          day: "Days 1-2",
          title: "Tunis Discovery",
          description: "Capital exploration, medina tours, museum visits.",
        },
        {
          day: "Days 3-4",
          title: "Coastal Magic",
          description: "Sidi Bou Said, Hammamet, beach activities.",
        },
        {
          day: "Days 5-7",
          title: "Sahara Challenge",
          description:
            "Extended desert camp, camel treks, Bedouin interactions.",
        },
        {
          day: "Days 8-9",
          title: "Cultural Heritage",
          description: "Kairouan, El Djem, Carthage historical sites.",
        },
        {
          day: "Day 10",
          title: "Farewell",
          description: "Djerba Island visit, sunset dinner, departure.",
        },
      ],
      itinerary_type: "Mixed",
    },
  ];

  return (
    <section className="page itineraries-page">
      {/* HERO SECTION */}
      <div
        className="hero"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
            Pre-Planned Itineraries
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.95 }}>
            Choose your perfect Tunisia adventure from our expertly curated
            packages
          </p>
        </div>
      </div>

      {/* ITINERARIES LISTING */}
      <section className="section" style={{ padding: "3rem 2rem" }}>
        <div
          className="itineraries-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {itineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="itinerary-card"
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
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
                  height: "250px",
                }}
              >
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "#667eea",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                  }}
                >
                  {itinerary.itinerary_type}
                </div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ marginBottom: "0.5rem", color: "#333" }}>
                  {itinerary.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    marginBottom: "1rem",
                  }}
                >
                  {itinerary.description}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  <div>
                    <strong style={{ color: "#667eea" }}>Duration:</strong>{" "}
                    {itinerary.duration}
                  </div>
                  <div>
                    <strong style={{ color: "#667eea" }}>Price:</strong>{" "}
                    {itinerary.price}
                  </div>
                  <div>
                    <strong style={{ color: "#667eea" }}>Difficulty:</strong>{" "}
                    {itinerary.difficulty}
                  </div>
                  <div>
                    <strong style={{ color: "#667eea" }}>
                      ⭐ {itinerary.rating}
                    </strong>{" "}
                    ({itinerary.reviews} reviews)
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedItinerary(itinerary)}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: "#667eea",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED VIEW MODAL */}
      {selectedItinerary && (
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
          onClick={() => setSelectedItinerary(null)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              maxWidth: "800px",
              maxHeight: "90vh",
              overflow: "auto",
              padding: "2rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItinerary(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "#667eea",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <img
              src={selectedItinerary.image}
              alt={selectedItinerary.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1.5rem",
              }}
            />

            <h2 style={{ marginBottom: "0.5rem" }}>
              {selectedItinerary.title}
            </h2>
            <p style={{ color: "#666", marginBottom: "1.5rem" }}>
              {selectedItinerary.description}
            </p>

            <div
              style={{
                background: "#f5f5f5",
                padding: "1rem",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              <div>
                <strong>Duration:</strong> {selectedItinerary.duration}
              </div>
              <div>
                <strong>Price:</strong> {selectedItinerary.price}
              </div>
              <div>
                <strong>Difficulty:</strong> {selectedItinerary.difficulty}
              </div>
              <div>
                <strong>Rating:</strong> ⭐ {selectedItinerary.rating} (
                {selectedItinerary.reviews} reviews)
              </div>
            </div>

            <h3 style={{ marginBottom: "1rem", color: "#667eea" }}>
              Daily Breakdown
            </h3>
            {selectedItinerary.highlights.map((day, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "1rem",
                  paddingLeft: "1rem",
                  borderLeft: "4px solid #667eea",
                }}
              >
                <h4 style={{ margin: "0 0 0.5rem 0" }}>
                  {day.day}: {day.title}
                </h4>
                <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>
                  {day.description}
                </p>
              </div>
            ))}

            <h3
              style={{
                marginBottom: "1rem",
                marginTop: "1.5rem",
                color: "#667eea",
              }}
            >
              What's Included
            </h3>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
              {selectedItinerary.included.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "0.5rem" }}>
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/contact")}
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "#667eea",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Contact for details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Itineraries;
