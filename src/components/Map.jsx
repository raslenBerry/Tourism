import { useEffect, useRef } from "react";

function Map({ center = [35.5, 10.5], zoom = 7, locations = [], title = "" }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

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
  }, [center, zoom, locations]);

  const initMap = () => {
    if (map.current) return; // Prevent multiple initializations

    map.current = window.L.map(mapContainer.current).setView(center, zoom);

    // Add tile layer from OpenStreetMap
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map.current);

    // Add markers for each location
    locations.forEach((location) => {
      const marker = window.L.marker([location.lat, location.lng]).addTo(
        map.current,
      );

      const popupContent = `
        <div style="font-family: Arial, sans-serif; padding: 8px;">
          <strong style="font-size: 14px;">${location.name}</strong><br/>
          <small style="color: #666;">${location.type}</small><br/>
          <small style="color: #999;">${location.description}</small>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    // Fit map to bounds if locations exist
    if (locations.length > 0) {
      const bounds = window.L.latLngBounds(
        locations.map((loc) => [loc.lat, loc.lng]),
      );
      map.current.fitBounds(bounds, { padding: [50, 50] });
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
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
}

export default Map;
