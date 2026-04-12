import React, { useState } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="brand">
          <img src="/logo.png" alt="SigmRByte logo" className="brand-logo" />
          <div className="brand-text">
            <div className="brand-name">SigmRByte</div>
            <div className="brand-tagline">Embedded Systems & IoT Engineering</div>
          </div>
        </div>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Precision software and firmware systems, and IoT solutions</h1>
          <p>We design and develop robust software, firmware, real-time systems, IoT applications, and custom software for demanding environments. From firmware optimization to sensor fusion to bespoke applications, we deliver systems that work.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate("/contact")}>Start a project</button>
            <button className="btn btn-secondary" onClick={() => navigate("/about")}>Learn more</button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>What we do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Embedded Systems</h3>
            <p>STM32, ARM Cortex, and custom firmware development with real-time constraints and zero-heap optimization.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>IoT & Edge Computing</h3>
            <p>End-to-end IoT solutions: device firmware, connectivity protocols, and edge processing.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📡</div>
            <h3>Sensor Fusion & Signal Processing</h3>
            <p>AHRS, IMU filtering, magnetometer anomaly detection, and real-time sensor calibration.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Custom Software Development</h3>
            <p>Bespoke applications, system integration, and long-term maintenance. Mobile, desktop, and backend solutions.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Featured product</h2>
        <div className="featured-product">
          <div className="featured-product-content">
            <h3>ByteG8 VPN</h3>
            <p>A high-performance, cross-platform VPN suite designed for privacy and speed. Built with modern protocols and zero-logging architecture.</p>
            <div className="product-platforms">
              <span className="platform-badge">Mobile (iOS & Android)</span>
              <span className="platform-badge">Desktop (Windows, macOS, Linux)</span>
              <span className="platform-badge">Android TV (Coming soon)</span>
            </div>
            <p className="product-features"><strong>Features:</strong> WireGuard & OpenVPN protocols, Kill switch, DNS leak protection, Multi-hop routing, Per-app VPN control</p>
            <button className="btn btn-primary" onClick={() => navigate("/products")}>View all products</button>
          </div>
          <div className="featured-product-visual">
            <div className="feature-icon" style={{ fontSize: '80px' }}>🔐</div>
          </div>
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <section className="section">
      <h1>Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h3>Firmware Development</h3>
          <p>Custom firmware for STM32H7, ARM Cortex, and other embedded platforms. We focus on performance, reliability, and maintainability.</p>
          <ul>
            <li>Real-time embedded systems</li>
            <li>Low-power optimization</li>
            <li>Memory-constrained design</li>
            <li>Bootloader & system initialization</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>IoT Solutions</h3>
          <p>End-to-end IoT architecture: device firmware, wireless connectivity, cloud integration, and edge computing.</p>
          <ul>
            <li>Multi-sensor data acquisition</li>
            <li>MQTT/CoAP protocols</li>
            <li>Secure device provisioning</li>
            <li>Real-time diagnostics</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Sensor Fusion & Signal Processing</h3>
          <p>Advanced filtering and sensor fusion algorithms: AHRS, magnetometer anomaly detection, gyro bias modeling, and more.</p>
          <ul>
            <li>Attitude & heading estimation</li>
            <li>IMU sensor fusion</li>
            <li>Magnetometer rejection filters</li>
            <li>Real-time calibration</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Bespoke Software Development</h3>
          <p>Custom applications built from the ground up for your specific needs. We handle mobile apps, desktop clients, and backend systems.</p>
          <ul>
            <li>Native & cross-platform mobile apps</li>
            <li>Desktop applications (Windows, macOS, Linux)</li>
            <li>Backend APIs & services</li>
            <li>Integration with existing systems</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Software Maintenance & Support</h3>
          <p>Long-term stewardship of your systems. We provide ongoing maintenance, bug fixes, feature updates, and technical support.</p>
          <ul>
            <li>Regular maintenance & updates</li>
            <li>Bug fixes & optimization</li>
            <li>Feature development & enhancements</li>
            <li>Technical support & consulting</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Technical Consulting</h3>
          <p>Expert guidance on architecture, design, and implementation. From code reviews to system design to technology selection.</p>
          <ul>
            <li>Architecture & design reviews</li>
            <li>Code audits & quality assessment</li>
            <li>Technology selection & evaluation</li>
            <li>Performance optimization & profiling</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="section">
      <h1>Products</h1>
      <div className="products-list">
        <div className="product-item">
          <div className="product-header">
            <div className="product-title">ByteG8 VPN</div>
            {/* <span className="product-status">Actively developed</span> */}
          </div>
          <p>A high-performance, privacy-focused VPN suite designed for security-conscious users. Built with modern cryptography and zero-logging principles.</p>
          
          <div className="product-section">
            <h4>Current platforms</h4>
            <div className="platforms-grid">
              <div className="platform-item">
                <strong>Mobile</strong>
                <p>iOS and Android apps with per-app VPN control, kill switch, and fast connect</p>
              </div>
              <div className="platform-item">
                <strong>Desktop</strong>
                <p>Windows, macOS, and Linux clients with advanced routing options and CLI tools</p>
              </div>
            </div>
          </div>

          <div className="product-section">
            <h4>Coming soon</h4>
            <div className="platforms-grid">
              <div className="platform-item">
                <strong>Android TV</strong>
                <p>Remote-friendly interface optimized for 10-foot experiences and streaming</p>
              </div>
            </div>
          </div>

          <div className="product-section">
            <h4>Features</h4>
            <ul className="features-list">
              <li>WireGuard & OpenVPN protocol support</li>
              <li>Kill switch with network lockdown</li>
              <li>DNS leak protection & encrypted DNS</li>
              <li>Multi-hop routing for enhanced privacy</li>
              <li>Per-app VPN on mobile platforms</li>
              <li>Zero-logging architecture</li>
              <li>Global server network</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section">
      <h1>About SigmRByte</h1>
      <div className="about-content">
        <div className="about-text">
          <p>SigmRByte is a specialized engineering firm focused on embedded systems, IoT, and custom software development. We work at the intersection of firmware, real-time systems, sensor technology, and bespoke applications—delivering reliable solutions for products that demand precision.</p>
          
          <p>Our approach combines first-principles engineering with practical constraints: we design for real hardware, real power budgets, and real performance requirements. We don't chase complexity—we solve problems with clarity and rigor.</p>
          
          <h3>What we focus on</h3>
          <ul>
            <li>Embedded systems design and firmware development</li>
            <li>IoT product architecture and connectivity</li>
            <li>Sensor fusion and signal processing</li>
            <li>Real-time systems and edge computing</li>
            <li>Bespoke software development and integration</li>
            <li>Long-term product support and maintenance</li>
            <li>Technical consulting and code audits</li>
          </ul>

          <h3>Our principles</h3>
          <ul>
            <li><strong>Performance-aware:</strong> We optimize for real constraints.</li>
            <li><strong>Reliability first:</strong> Systems must work when deployed.</li>
            <li><strong>Clear design:</strong> Code and architecture should be understandable.</li>
            <li><strong>Long-term stewardship:</strong> We support products beyond launch.</li>
          </ul>

          <h3>Engagement models</h3>
          <p>We work with teams in flexible ways:</p>
          <ul>
            <li><strong>Project-based:</strong> Fixed-scope development with clear deliverables</li>
            <li><strong>Retainers:</strong> Ongoing maintenance and support</li>
            <li><strong>Consulting:</strong> Architecture reviews, audits, and guidance</li>
            <li><strong>Fractional engineering:</strong> Part-time technical leadership and mentorship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("sent");
      e.target.reset();
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section className="section">
      <h1>Get in touch</h1>
      <p className="intro-text">Have a project or question? We'd like to hear from you.</p>
      
      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company (optional)</label>
            <input id="company" name="company" placeholder="Your company" />
          </div>

          <div className="form-group">
            <label htmlFor="project">Project description</label>
            <textarea id="project" name="project" placeholder="Tell us about your project..." required />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && <p className="success-message">Message sent successfully.</p>}
          {status === "error" && <p className="error-message">Error sending message. Please try again.</p>}
        </form>

        <div className="contact-info">
          <h3>Alternatively</h3>
          <p>Email us directly at <code>hello@sigmrbyte.com</code></p>
          <p>Located in the UK, we work with teams globally across all time zones.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} SigmRByte Ltd. All rights reserved.</p>
        <p>Embedded systems engineering.</p>
      </div>
    </footer>
  );
}

export default App;
