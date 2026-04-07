import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    travelType: "individual",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      travelType: "individual",
    });
  };

  return (
    <section className="page contact-page">
      <div className="page-head">
        <h2>Get In Touch</h2>
        <p>
          Have questions about Tunisia or need local information? We're here to
          help and point you to official resources.
        </p>
      </div>

      {/* ===== CONTACT SECTION ===== */}
      <div className="contact-section">
        <div className="contact-info">
          <div className="info-card">
            <h4>📞 Phone</h4>
            <p>
              <strong>+216 (71) 240 720</strong>
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
              Monday - Friday: 8:00 AM - 6:00 PM
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
              Saturday: 9:00 AM - 1:00 PM
            </p>
          </div>

          <div className="info-card">
            <h4>📧 Email</h4>
            <p>
              <strong>info@visittunisia.com</strong>
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
              General inquiries: info@visittunisia.com
            </p>
          </div>

          <div className="info-card">
            <h4>📍 Office Location</h4>
            <p>
              <strong>Tunis Headquarters</strong>
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
              Avenue Habib Bourguiba
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
              Tunis 1000, Tunisia
            </p>
          </div>

          <div
            className="info-card"
            style={{ borderLeft: "4px solid #10b981" }}
          >
            <h4>⚡ Response Time</h4>
            <p style={{ color: "#6b7280", marginBottom: "0.5rem" }}>
              We aim to respond to all inquiries within{" "}
              <strong style={{ color: "#111827" }}>24 hours</strong>
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
              For urgent matters, call our hotline directly.
            </p>
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              background: "linear-gradient(135deg, #e6f0ff, #e6fdf7)",
              borderRadius: "12px",
            }}
          >
            <h4 style={{ marginBottom: "0.75rem" }}>🎁 Newsletter</h4>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "1rem",
                fontSize: "0.9rem",
              }}
            >
              Subscribe to receive travel tips, special offers, and destination
              guides directly to your inbox.
            </p>
            <form style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: "0.5rem 1rem",
                  border: "1px solid #d8d8d8",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                }}
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Join
              </button>
            </form>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div
            style={{
              background: "linear-gradient(135deg, #0066cc, #0052a3)",
              color: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", color: "white" }}>
              Send us a Message
            </h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: "0.9rem" }}>
              Fill out the form below for information, official links, or local
              contacts; we do not handle direct bookings on this site.
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="travelType">I am interested in... *</label>
            <select
              id="travelType"
              name="travelType"
              value={formData.travelType}
              onChange={handleInputChange}
            >
              <option value="individual">Individual Travel</option>
              <option value="group">Group Travel</option>
              <option value="corporate">Corporate Events</option>
              <option value="honeymoon">Honeymoon Package</option>
              <option value="custom">Custom Itinerary</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What is this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your travel plans or ask your questions..."
              required
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <input
              type="checkbox"
              id="newsletter"
              style={{ width: "18px", height: "18px", cursor: "pointer" }}
            />
            <label
              htmlFor="newsletter"
              style={{ cursor: "pointer", margin: 0 }}
            >
              Sign me up for travel tips and special offers
            </label>
          </div>

          <div className="form-submit">
            <button type="submit" className="btn btn-primary btn-lg">
              Send Message
            </button>
            <button type="reset" className="btn btn-outline btn-lg">
              Clear
            </button>
          </div>

          <p
            style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "1rem" }}
          >
            * Required fields. We respect your privacy and will never share your
            information.
          </p>
        </form>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <section className="features-section" style={{ marginTop: "3rem" }}>
        <div className="section-header" style={{ marginBottom: "2rem" }}>
          <h2>Information & Support</h2>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🔗</div>
            <div className="feature-content">
              <h4>Official Links</h4>
              <p>
                Guides to airlines, airports, and official tourism pages (see
                Guides).
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🧭</div>
            <div className="feature-content">
              <h4>Maps & Transport Info</h4>
              <p>
                Practical details on getting around, public transport, and car
                hire.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">👥</div>
            <div className="feature-content">
              <h4>Local Guides & Contacts</h4>
              <p>
                Information about vetted local guides and cultural contacts
                (intro only).
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🗣️</div>
            <div className="feature-content">
              <h4>Cultural Advice</h4>
              <p>
                Respectful photography tips, dress guidance, and local customs.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🩺</div>
            <div className="feature-content">
              <h4>Health & Safety</h4>
              <p>
                Health advisories, local emergency numbers, and safety guidance.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📘</div>
            <div className="feature-content">
              <h4>Research Help</h4>
              <p>
                We can point you to official resources — we do not perform
                bookings directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section style={{ marginTop: "3rem" }}>
        <div className="section-header" style={{ marginBottom: "2rem" }}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div
            style={{
              background: "#f3f4f6",
              padding: "1.5rem",
              borderRadius: "12px",
              borderLeft: "4px solid #0066cc",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0066cc" }}>
              When is the best time to visit Tunisia?
            </h4>
            <p style={{ margin: "0", color: "#6b7280" }}>
              April-May and September-October offer ideal weather. However,
              Tunisia is beautiful year-round with mild winters and hot summers
              perfect for beach activities.
            </p>
          </div>
          <div
            style={{
              background: "#f3f4f6",
              padding: "1.5rem",
              borderRadius: "12px",
              borderLeft: "4px solid #0066cc",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0066cc" }}>
              What are the visa requirements?
            </h4>
            <p style={{ margin: "0", color: "#6b7280" }}>
              EU citizens don't need a visa for tourist stays up to 90 days.
              Other nationalities should check with their local embassy. We
              provide links to official sources in the Guides page.
            </p>
          </div>
          <div
            style={{
              background: "#f3f4f6",
              padding: "1.5rem",
              borderRadius: "12px",
              borderLeft: "4px solid #0066cc",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0066cc" }}>
              Is Tunisia safe for tourists?
            </h4>
            <p style={{ margin: "0", color: "#6b7280" }}>
              Yes! Tunisia is a safe and welcoming destination for tourists. We
              recommend normal travel precautions and following local guidance.
            </p>
          </div>
          <div
            style={{
              background: "#f3f4f6",
              padding: "1.5rem",
              borderRadius: "12px",
              borderLeft: "4px solid #0066cc",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0066cc" }}>
              Currency & Cards
            </h4>
            <p style={{ margin: "0", color: "#6b7280" }}>
              The Tunisian Dinar (TND) is the official currency. ATMs are widely
              available in cities and tourist areas. Credit cards are accepted
              at most hotels and restaurants.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
