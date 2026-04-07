import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

function Guides() {
  const { t } = useLanguage();
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");

  // Exchange rates to Tunisian Dinar (TND)
  const exchangeRates = {
    USD: 3.15,
    EUR: 3.45,
    GBP: 3.95,
    RON: 0.69,
    CAD: 2.35,
    AUD: 2.1,
    CHF: 3.5,
    JPY: 0.024,
    INR: 0.038,
  };

  const handleCurrencyConvert = () => {
    if (!amount || isNaN(amount)) {
      setConvertedAmount("");
      return;
    }
    const rate = exchangeRates[fromCurrency] || 1;
    const result = (amount * rate).toFixed(2);
    setConvertedAmount(result);
  };

  const hotels = [
    {
      name: "La Marsa Regency",
      location: "Tunis / La Marsa",
      stars: 5,
      description: "Luxury beachfront resort with world-class amenities",
      contact: "+216 71 77 77 77",
    },
    {
      name: "Dar Medina Hotel",
      location: "Tunis Medina",
      stars: 4,
      description: "Authentic traditional riad in the heart of the medina",
      contact: "+216 71 56 27 25",
    },
    {
      name: "Sidi Bou Said Palace",
      location: "Sidi Bou Said",
      stars: 5,
      description: "Luxury clifftop hotel with Mediterranean views",
      contact: "+216 71 74 06 06",
    },
    {
      name: "Hammamet Grand Hotel",
      location: "Hammamet",
      stars: 4,
      description: "Beachfront resort perfect for relaxation and water sports",
      contact: "+216 72 26 00 00",
    },
    {
      name: "Djerba Plaza Hotel",
      location: "Djerba",
      stars: 4,
      description: "Island resort with beach access and traditional touches",
      contact: "+216 75 65 08 08",
    },
    {
      name: "Kairouan Heritage Hotel",
      location: "Kairouan",
      stars: 3,
      description: "Comfortable mid-range hotel near Great Mosque",
      contact: "+216 74 22 44 44",
    },
    {
      name: "Gafsa Desert Resort",
      location: "Sahara / Gafsa",
      stars: 4,
      description: "Desert hotel with authentic Bedouin-style bungalows",
      contact: "+216 76 22 77 77",
    },
    {
      name: "Tozeur Palm Hotel",
      location: "Tozeur",
      stars: 4,
      description: "Oasis hotel gateway to desert adventures",
      contact: "+216 76 45 00 00",
    },
  ];

  const agencies = [
    {
      name: "Tunisia Discovery Tours",
      location: "Tunis",
      services: "Complete tour packages, desert safaris, cultural tours",
      contact: "+216 71 12 34 56",
      email: "info@tunisiadiscovery.com",
    },
    {
      name: "Sahara Adventures",
      location: "Tozeur",
      services: "Desert expeditions, camel trekking, Bedouin camps",
      contact: "+216 76 55 66 77",
      email: "sahara@tunisiaadventures.com",
    },
    {
      name: "Mediterranean Coast Tours",
      location: "Hammamet",
      services: "Beach tours, island hops, water sports, yacht rentals",
      contact: "+216 72 41 42 43",
      email: "coast@medtours.tn",
    },
    {
      name: "Cultural Heritage Tours",
      location: "Tunis",
      services: "Historical site tours, medina walks, cooking classes",
      contact: "+216 71 88 99 00",
      email: "heritage@culturaladventures.tn",
    },
    {
      name: "Djerba Island Tours",
      location: "Djerba",
      services: "Island exploration, beach clubs, cultural experiences",
      contact: "+216 75 65 12 34",
      email: "djerba@islandtours.tn",
    },
    {
      name: "Adventure Sports Tunisia",
      location: "Djerba & Hammamet",
      services: "Kayaking, windsurfing, rock climbing, paragliding",
      contact: "+216 75 41 52 63",
      email: "sports@adventuretunisia.tn",
    },
    {
      name: "Roman History Tours",
      location: "El Djem & Carthage",
      services: "Archaeological tours, museum guides, historical research",
      contact: "+216 73 67 78 89",
      email: "history@romantunisia.tn",
    },
    {
      name: "Local Experience Tours",
      location: "Multiple locations",
      services: "Authentic local experiences, village stays, artisan workshops",
      contact: "+216 71 23 45 67",
      email: "local@tunisiaexperience.tn",
    },
  ];

  return (
    <section className="page guides-page">
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
            {t("guides.title")}
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.95 }}>
            {t("guides.subtitle")}
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section
        style={{ padding: "3rem 2rem", maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* HOTELS SECTION */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#111827",
            }}
          >
            🏨 {t("guides.hotels")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {hotels.map((hotel, idx) => (
              <div
                key={idx}
                style={{
                  background: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
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
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h4
                    style={{ margin: 0, color: "#0066cc", fontSize: "1.1rem" }}
                  >
                    {hotel.name}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: "#ff6b35",
                    }}
                  >
                    {"⭐".repeat(hotel.stars)}
                  </div>
                </div>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  📍 {hotel.location}
                </p>
                <p
                  style={{
                    color: "#111827",
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                  }}
                >
                  {hotel.description}
                </p>
                <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>
                  📞 {hotel.contact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TRAVEL AGENCIES SECTION */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#111827",
            }}
          >
            🌍 {t("guides.travelAgencies")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {agencies.map((agency, idx) => (
              <div
                key={idx}
                style={{
                  background:
                    "linear-gradient(135deg, #f0f4ff 0%, #fff5e6 100%)",
                  border: "1px solid #0066cc",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    marginBottom: "0.75rem",
                    color: "#0066cc",
                  }}
                >
                  {agency.name}
                </h4>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  📍 {agency.location}
                </p>
                <p
                  style={{
                    color: "#111827",
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                    fontWeight: "500",
                  }}
                >
                  {agency.services}
                </p>
                <div
                  style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}
                >
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.9rem",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    📞 {agency.contact}
                  </p>
                  <p
                    style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}
                  >
                    📧 {agency.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CURRENCY CALCULATOR SECTION */}
        <div
          style={{
            background: "linear-gradient(135deg, #f0f4ff 0%, #fff5e6 100%)",
            padding: "3rem 2rem",
            borderRadius: "12px",
            marginBottom: "4rem",
            border: "2px solid #0066cc",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#111827",
            }}
          >
            💱 Currency Calculator - Convert to Tunisian Dinar
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                From Currency:
              </label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #0066cc",
                  borderRadius: "6px",
                  fontSize: "1rem",
                }}
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="RON">RON - Romanian Leu</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="INR">INR - Indian Rupee</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Amount:
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #0066cc",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <button
                onClick={handleCurrencyConvert}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: "1.7rem",
                }}
              >
                Convert
              </button>
            </div>
          </div>

          {convertedAmount && (
            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                background: "white",
                borderRadius: "8px",
                textAlign: "center",
                border: "2px solid #10b981",
              }}
            >
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                {amount} {fromCurrency} =
              </p>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#0066cc",
                  margin: "0.5rem 0",
                }}
              >
                {convertedAmount} TND
              </p>
              <p style={{ color: "#666", marginBottom: 0, fontSize: "0.9rem" }}>
                Tunisian Dinar (approximate rates)
              </p>
            </div>
          )}
        </div>

        {/* ESSENTIAL INFO SECTION */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#111827",
            }}
          >
            📋 {t("guides.essentials")}
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
                background: "#f3f4f6",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #0066cc",
              }}
            >
              <h4 style={{ marginBottom: "1rem", color: "#0066cc" }}>
                ✈️ {t("guides.airlines")}
              </h4>
              <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "#666" }}>
                <li>
                  <a
                    href="https://www.tunisair.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0066cc" }}
                  >
                    Tunisair (National Carrier)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nouvelair.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0066cc" }}
                  >
                    Nouvelair
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lufthansa.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0066cc" }}
                  >
                    Lufthansa
                  </a>
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f3f4f6",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #ff6b35",
              }}
            >
              <h4 style={{ marginBottom: "1rem", color: "#ff6b35" }}>
                🛫 {t("guides.airports")}
              </h4>
              <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "#666" }}>
                <li>
                  <a
                    href="https://www.oaca.nat.tn/web/aeroport-tunis-carthage"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0066cc" }}
                  >
                    Tunis–Carthage Airport (TUN)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.oaca.nat.tn/web/aeroport-djerba"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0066cc" }}
                  >
                    Djerba–Zarzis Airport (DJE)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.oaca.nat.tn/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0066cc" }}
                  >
                    Monastir Airport (MIR)
                  </a>
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f3f4f6",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #10b981",
              }}
            >
              <h4 style={{ marginBottom: "1rem", color: "#10b981" }}>
                💰 {t("guides.currency")}
              </h4>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>Currency:</strong> Tunisian Dinar (TND)
              </p>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>Exchange Rate:</strong> ~1 USD = 3.15 TND (approximate)
              </p>
              <p style={{ color: "#666", margin: 0 }}>
                <strong>ATMs:</strong> Widely available in all major cities
              </p>
            </div>

            <div
              style={{
                background: "#f3f4f6",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #8b5cf6",
              }}
            >
              <h4 style={{ marginBottom: "1rem", color: "#8b5cf6" }}>
                🗣️ {t("guides.language")}
              </h4>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>Official Language:</strong> Arabic
              </p>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>Common Languages:</strong> French, English (in tourist
                areas)
              </p>
              <p style={{ color: "#666", margin: 0 }}>
                <strong>Tip:</strong> Learning basic Arabic phrases is
                appreciated
              </p>
            </div>

            <div
              style={{
                background: "#f3f4f6",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #f59e0b",
              }}
            >
              <h4 style={{ marginBottom: "1rem", color: "#f59e0b" }}>
                🌤️ {t("guides.climate")}
              </h4>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>Best Time:</strong> October - May (mild weather)
              </p>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>Summer:</strong> June - September (very hot, 30-40°C)
              </p>
              <p style={{ color: "#666", margin: 0 }}>
                <strong>Winter:</strong> December - February (cool, occasional
                rain)
              </p>
            </div>

            <div
              style={{
                background: "#f3f4f6",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #ef4444",
              }}
            >
              <h4 style={{ marginBottom: "1rem", color: "#ef4444" }}>
                📱 {t("guides.transportation")}
              </h4>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>Taxis:</strong> Available in all cities (negotiate
                before boarding)
              </p>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>Buses:</strong> Extensive network for intercity travel
              </p>
              <p style={{ color: "#666", margin: 0 }}>
                <strong>Car Rental:</strong> International licenses accepted,
                drive on right side
              </p>
            </div>

            <div
              style={{
                background: "#f3f4f6",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #06b6d4",
              }}
            >
              <h4 style={{ marginBottom: "1rem", color: "#06b6d4" }}>
                🛡️ {t("guides.visas")}
              </h4>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>EU Citizens:</strong> 90-day visa-free entry
              </p>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                <strong>US/Canada:</strong> 90-day visa-free entry
              </p>
              <p style={{ color: "#666", margin: 0 }}>
                <strong>Other countries:</strong> Check with your nearest
                embassy
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div
          style={{
            background: "linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)",
            padding: "3rem 2rem",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Questions or Need Help?</h2>
          <p
            style={{
              marginBottom: "1.5rem",
              fontSize: "1.1rem",
              opacity: 0.95,
            }}
          >
            Contact our team for personalized assistance and travel
            recommendations
          </p>
          <div
            style={{
              display: "flex",
              gap: "2rem",
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
              berriraslen@gmail.com
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
              firas0elmahdi@gmail.com
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Guides;
