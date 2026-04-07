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
      name: "Tunis - Capital City",
      category: "cultural",
      lat: 36.8,
      lng: 10.2,
      image: "/images/sou9.jpg",
      description:
        "Explore Tunisia's vibrant capital with historic medina, world-class museums, and bustling souks.",
      longDescription:
        "Tunisia's capital blends ancient tradition with modern life. The UNESCO-listed Old Medina features narrow winding streets, traditional riads, and the famous Zitouna Mosque. The Bardo Museum houses exceptional Roman mosaics and Islamic art. Experience authentic local culture in the bustling markets.",
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
      name: "Sidi Bou Said - Coastal Beauty",
      category: "coastal",
      lat: 36.87,
      lng: 10.33,
      image:
        "/images/cozy-streets-blue-white-sunny-day-old-city-kasbah-udayas.jpg",
      description:
        "Stunning clifftop village famous for blue-and-white architecture overlooking the Mediterranean.",
      longDescription:
        "This picturesque village is perched on a cliff overlooking the Mediterranean Sea. The distinctive blue-and-white buildings create a magical atmosphere. Wander through narrow lanes lined with art galleries, visit traditional cafés serving mint tea with sea views, and capture breathtaking sunset photos.",
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
      name: "Djerba Island - Beach Paradise",
      category: "coastal",
      lat: 33.85,
      lng: 10.94,
      image: "/images/woman-sitting-rocks-top-by-ocean.jpg",
      description:
        "Tunisia's premier island with pristine beaches, palm groves, and authentic Berber villages.",
      longDescription:
        "Djerba is connected to mainland by causeway and offers miles of sandy beaches. Explore traditional villages like Houmt Souk, visit the ancient Synagogue of El Ghriba, enjoy water sports, relax in beach resorts, and experience laid-back island life. Perfect for both adventure and relaxation.",
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
      name: "Hammamet - Seaside Resort",
      category: "coastal",
      lat: 36.4,
      lng: 10.6,
      image: "/images/blue-chair-tropical-relax-resort.jpg",
      description:
        "Popular Mediterranean beach resort with golden sands, water sports, and charming medina.",
      longDescription:
        "Hammamet combines beautiful beaches with cultural attractions. The golden sandy beaches are perfect for swimming and water sports. Explore the historic medina surrounded by fortified walls, visit the impressive kasbah, and enjoy fresh seafood restaurants along the coast.",
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
      name: "Kairouan - Holy City",
      category: "cultural",
      lat: 35.68,
      lng: 9.92,
      image: "/images/pexels-mahmoud-yahyaoui-29679540.jpg",
      description:
        "One of Islam's most sacred cities with the iconic Great Mosque and spiritual heritage.",
      longDescription:
        "Kairouan is the fourth holiest city in Islam with profound spiritual significance. The Great Mosque of Sidi Uqba features stunning Islamic architecture with decorated columns and mosaics. Explore the medina's narrow lanes, visit traditional carpet-making workshops, and experience the city's deep religious importance.",
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
      name: "Tozeur - Desert Gateway",
      category: "desert",
      lat: 33.92,
      lng: 8.13,
      image: "/images/camel.jpg",
      description:
        "Oasis town and gateway to the Sahara with stunning orange dunes and traditional architecture.",
      longDescription:
        "Tozeur is perched on the edge of the Great Sand Sea, offering access to the most spectacular desert landscapes. The old medina features unique yellow brick architecture. Explore vast dunes, visit traditional oasis villages, and experience authentic desert hospitality with Bedouin communities.",
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
      name: "Zaghouan - Mountain Paradise",
      category: "nature",
      lat: 36.5,
      lng: 10.15,
      image: "/images/Tunisia-Zaghouan-Rock-Climbing-1024x681.jpg.webp",
      description:
        "Mountain town offering rock climbing, spring temples, and stunning elevated views of the plains.",
      longDescription:
        "Zaghouan is a charming mountain town at the foot of the Zaghouan Peak. Visit the Temple of the Water spring with its classical architecture, hike to stunning viewpoints, and explore traditional Berber villages. The cool mountain climate provides a refreshing escape from the heat.",
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
      name: "Maktar - Roman Ruins",
      category: "historical",
      lat: 35.75,
      lng: 9.53,
      image: "/images/Tunisia-Maktar-Ruins-1024x762.jpg.webp",
      description:
        "Ancient Roman city ruins showcasing impressive architecture and archaeological significance.",
      longDescription:
        "Maktar is one of Tunisia's most important Roman archaeological sites. Walk among well-preserved ruins including temples, arches, and villas. The site offers a glimpse into Roman provincial life with excellent examples of Roman engineering and architecture.",
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
      name: "Kesra - Mountain Views",
      category: "nature",
      lat: 35.98,
      lng: 9.26,
      image: "/images/Tunisia-Kesra-Views-1024x636.jpg.webp",
      description:
        "Scenic mountain village offering panoramic views across Tunisia's interior and traditional Berber culture.",
      longDescription:
        "Kesra is a picturesque mountain settlement with breathtaking views across the Tunisian landscape. The village maintains traditional architecture and way of life. Visit local workshops, interact with Berber artisans, and enjoy authentic regional cuisine.",
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
      name: "Sahara Desert - Sand & Stars",
      category: "desert",
      lat: 33.0,
      lng: 7.8,
      image: "/images/camels sahara-1_2.jpg",
      description:
        "Experience the legendary Sahara with infinite dunes, desert camps, and magical starlit nights.",
      longDescription:
        "The Sahara offers an unforgettable desert experience with vast golden dunes stretching to the horizon. Experience traditional Bedouin camps, camel trekking, sandboarding, and the most stunning starry sky you'll ever see. An adventure that touches your soul.",
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
            onClick={() => setSelectedDestination(dest)}
          >
            <div className="card-image">
              <img src={dest.image} alt={dest.name} />
              <div className="card-badge">{dest.category}</div>
            </div>
            <div className="card-content">
              <h3>{dest.name}</h3>
              <p className="card-description">{dest.description}</p>

              <div className="card-meta">
                <div className="meta-item">
                  <span className="icon">⏱</span>
                  <span>{dest.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="icon">🌡</span>
                  <span>{dest.climate}</span>
                </div>
                <div className="meta-item">
                  <span className="icon">✓</span>
                  <span>{dest.accessibility}</span>
                </div>
              </div>

              <div className="card-highlights">
                {dest.highlights.slice(0, 3).map((h, i) => (
                  <span key={i} className="highlight-tag">
                    {h}
                  </span>
                ))}
              </div>

              <button className="btn btn-primary btn-sm">Learn More</button>
            </div>
          </article>
        ))}
      </div>

      <div className="map-section">
        <h2>Explore on Map</h2>
        <Map destinations={destinations} />
      </div>
    </div>
  );
}

export default Destinations;
