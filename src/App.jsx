import { useState } from "react";
import dropEaseLogo from "./assets/logo 1.png";
import stepSupplier from "./assets/step-supplier.svg";
import stepWarehouse from "./assets/step-warehouse.svg";
import stepDistribution from "./assets/step-distribution.svg";
import stepCustomer from "./assets/step-customer.svg";
import serviceFast from "./assets/service-fast.svg";
import serviceSupport from "./assets/service-support.svg";
import serviceManagement from "./assets/service-management.svg";

const stats = [
  { value: "12k+", label: "Parcels delivered monthly" },
  { value: "98.7%", label: "On-time success rate" },
  { value: "24/7", label: "Dispatch support availability" },
];

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="logo-wrap">
          <img src={dropEaseLogo} alt="Drop Ease logo" className="logo-image" />
          Drop Ease
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#proposal">Proposal</a>
          <a href="#collaboration">Collaboration</a>
          <a href="#vision-mission">Vision & Mission</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-layout">
            <div>
              <h1>Efficiency in every Drop.</h1>
              <p className="hero-text">
                Drop Ease offers reliable, app-free logistics in Colombo. We
                serve SMEs and online businesses. Our services are eco-conscious
                and affordable. We use electric and petrol bikes. Direct
                WhatsApp communication ensures personalized service. We
                eliminate delivery confusion and delays. Our support is
                hands-on. Drop Ease is a modern hybrid delivery provider. We
                offer reliable, app-free logistics services. Our fleet uses
                electric and petrol bikes.
              </p>
            </div>

            <aside className="hero-side">
              <img
                src={dropEaseLogo}
                alt="Drop Ease hero logo"
                className="hero-side-logo"
              />
            </aside>
          </div>

          <div className="hero-stats" aria-label="Company stats">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>SCOPE OF WORKS</h2>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <img
                src={serviceFast}
                alt="Fast delivery service"
                className="service-image"
              />
              <span className="badge">Fast</span>
              <h3>95%+ same-day delivery success.</h3>
            </article>
            <article className="service-card">
              <img
                src={serviceSupport}
                alt="Reliable support service"
                className="service-image"
              />
              <span className="badge">Reliable</span>
              <h3>Real-time human support.</h3>
            </article>
            <article className="service-card">
              <img
                src={serviceManagement}
                alt="Secure delivery management service"
                className="service-image"
              />
              <span className="badge">Secure</span>
              <h3>Seamless, app-free management.</h3>
            </article>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>DISPATCH PROCESS</h2>
          </div>
          <div className="step-grid">
            <article className="step-card">
              <img
                src={stepSupplier}
                alt="Supplier step"
                className="step-image"
              />
              <h3>Supplier</h3>
            </article>
            <article className="step-card">
              <img
                src={stepWarehouse}
                alt="Warehouse step"
                className="step-image"
              />
              <h3>Warehouse</h3>
            </article>
            <article className="step-card">
              <img
                src={stepDistribution}
                alt="Distribution center step"
                className="step-image"
              />
              <h3>Distribution Center</h3>
            </article>
            <article className="step-card">
              <img
                src={stepCustomer}
                alt="End customer step"
                className="step-image"
              />
              <h3>End Customer</h3>
            </article>
          </div>
        </section>

        <section className="section proposal" id="proposal">
          <div className="section-heading">
            <p className="eyebrow">Proposal</p>
            <h2>DOWNLOAD OUR PROPOSAL</h2>
          </div>
          <div className="proposal-card">
            <p>
              Get the full proposal with pricing structure, service scope, and
              delivery workflow details.
            </p>
            <div className="proposal-actions">
              <a
                className="btn btn-secondary proposal-btn"
                href="/DROPEASE_PROPOSAL.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Proposal
              </a>
              <a
                className="btn btn-primary proposal-btn"
                href="/DROPEASE_PROPOSAL.pdf"
                download
              >
                Download Proposal
              </a>
            </div>
          </div>
        </section>

        <section className="section collaboration" id="collaboration">
          <div className="section-heading">
            <p className="eyebrow">Collaboration</p>
            <h2>Collaboration & Growth Plan</h2>
          </div>
          <div className="collaboration-grid">
            <article className="collaboration-card">
              <h3>OUR VENDORS</h3>
              <p>
                Currently, we work with about 5 regular vendors, all of whom
                offer eco friendly products and packaging. While we do not
                currently handle perishable products like food, we are working
                to expand our services in the future. Our delivery lead time is
                currently 2-3 days.
              </p>
            </article>
            <article className="collaboration-card">
              <h3>OUR RIDERS</h3>
              <p>
                We are currently in the process of recruiting additional riders
                to join our team. At present, we have one full-time rider and
                two part-time riders. if needed, one of our also will assist
                with package deliveries during busy periods.
              </p>
            </article>
          </div>
        </section>

        <section className="section vision-mission" id="vision-mission">
          <div className="section-heading">
            <h2>VISION & MISSION</h2>
          </div>
          <div className="vision-mission-panel">
            <article className="vision-mission-row">
              <h3>OUR VISION</h3>
              <p className="vision-text-italic">
                “To redefine delivery in Sri Lanka by making every drop
                seamless, reliable, and stress-free — connecting people,
                businesses, and communities with ease.”
              </p>
            </article>
            <article className="vision-mission-row">
              <h3>OUR MISSION</h3>
              <p className="vision-text-italic">
                “At Drop Ease, we are committed to delivering beyond
                expectations. Through technology-driven solutions,
                customer-first service, and a trusted delivery network, we
                ensure packages arrive safely, quickly, and effortlessly —
                creating convenience and peace of mind for every customer we
                serve.”
              </p>
            </article>
          </div>
        </section>

        <section className="cta" id="contact">
          <h2>NEED A COURIER PARTNER THIS WEEK?</h2>
          <p>CONTACT US IMMIDIATELY !!!!</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsContactOpen(true)}
          >
            Contact Dispatch
          </button>
        </section>
      </main>

      {isContactOpen && (
        <div className="modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div
            className="contact-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <h3>CONTACT DETAILS</h3>
            <p>Phone: +94 71 872 2486</p>
            <p>WhatsApp: +94 71 872 2486</p>
            <p>Email: dropeaseee@gmail.com</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsContactOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        © {new Date().getFullYear()} Drop Ease Courier Service. All rights
        reserved.
      </footer>
    </div>
  );
}
