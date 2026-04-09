import { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

function Map({
  center = [35.5, 10.5],
  zoom = 7,
  locations = [],
  destinations = [],
  title = "",
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Dynamically load Leaflet library
    if (!window.L) {
      // Load Leaflet CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      // Load Leaflet JS
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js";
      script.onload = () => {
        initMap();
      };
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, [center, zoom, locations, destinations]);

  const initMap = () => {
    if (map.current) return; // Prevent multiple initializations

    map.current = window.L.map(mapContainer.current).setView(center, zoom);

    // Add tile layer from OpenStreetMap with custom styling
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map.current);

    // Convert destinations to locations format if destinations provided
    let locationsToDisplay = locations;
    if (destinations && destinations.length > 0 && locations.length === 0) {
      locationsToDisplay = destinations.map((dest) => ({
        lat: dest.lat,
        lng: dest.lng,
        name: t(`destinations.${dest.nameKey}`),
        type: dest.category,
        description: t(`destinations.${dest.descKey}`),
        image: dest.image,
        duration: dest.duration,
      }));
    }

    // Add markers for each location
    locationsToDisplay.forEach((location, index) => {
      // Create custom marker
      const markerColor = "#0066cc";
      const markerHTML = `
        <div style="
          width: 32px;
          height: 40px;
          background: ${markerColor};
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            transform: rotate(45deg);
            color: white;
            font-weight: bold;
            font-size: 14px;
          ">${index + 1}</div>
        </div>
      `;

      const customIcon = window.L.divIcon({
        html: markerHTML,
        iconSize: [32, 40],
        className: "custom-marker",
      });

      const marker = window.L.marker([location.lat, location.lng], {
        icon: customIcon,
      }).addTo(map.current);

      const popupContent = `
        <div style="
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          padding: 12px;
          min-width: 200px;
          max-width: 280px;
        ">
          <strong style="
            font-size: 15px;
            color: #0066cc;
            display: block;
            margin-bottom: 6px;
          ">${location.name}</strong>
          <small style="
            color: #6b7280;
            display: block;
            margin-bottom: 4px;
            text-transform: capitalize;
          ">${location.type || "Destination"}</small>
          <small style="
            color: #9ca3af;
            display: block;
            line-height: 1.4;
            margin-bottom: 6px;
          ">${location.description}</small>
          ${location.duration ? `<small style="color: #0066cc; font-weight: 500;">📅 ${location.duration}</small>` : ""}
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: "custom-popup",
      });

      // Open first marker popup by default
      if (index === 0) {
        marker.openPopup();
      }
    });

    // Fit map to bounds if locations exist
    if (locationsToDisplay.length > 0) {
      const bounds = window.L.latLngBounds(
        locationsToDisplay.map((loc) => [loc.lat, loc.lng]),
      );
      map.current.fitBounds(bounds, { padding: [80, 80] });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {title && (
        <p
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            color: "#666",
            fontSize: "14px",
          }}
        >
          {title}
        </p>
      )}
      <div
        ref={mapContainer}
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          border: "1px solid #e5e7eb",
        }}
      />
    </div>
  );
}

export default Map;
