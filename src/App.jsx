import { useState } from "react";
import dropEaseLogo from "./assets/logo 1.png";
import stepSupplier from "./assets/step-supplier.svg";
import stepWarehouse from "./assets/step-warehouse.svg";
import stepDistribution from "./assets/step-distribution.svg";
import stepCustomer from "./assets/step-customer.svg";
import serviceFast from "./assets/service-fast.svg";
import serviceSupport from "./assets/service-support.svg";
import serviceManagement from "./assets/service-management.svg";
import founderPhoto from "./assets/founder.jpg";
import coFounderPhotoOne from "./assets/co_founder1.jpg";
import coFounderPhotoTwo from "./assets/co_founder2.jpg";

const stats = [
  { value: "12k+", label: "Parcels delivered monthly" },
  { value: "98.7%", label: "On-time success rate" },
  { value: "24/7", label: "Dispatch support availability" },
];

const owners = [
  {
    name: "Mr. Roshinton Devin",
    role: "Founder",
    photo: founderPhoto,
    bio: "Built Drop Ease with a focus on reliable service, practical delivery systems, and long-term customer trust.",
  },
  {
    name: "Mr. Sathyanathan Sajeewan",
    role: "Co-Founder",
    photo: coFounderPhotoOne,
    bio: "Leads operations planning, rider coordination, and service quality to keep deliveries smooth every day.",
  },
  {
    name: "Mr. Mathew Homega",
    role: "Co-Founder",
    photo: coFounderPhotoTwo,
    bio: "Drives growth partnerships, customer relationships, and expansion strategy for the next stage of Drop Ease.",
  },
];

const contactEmail = "dropeaseee@gmail.com";
const socialPlatforms = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DMA9yragP/",
    key: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dropeaseee?igsh=YnVwdGt3MHZpMzhj",
    key: "instagram",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/94718722486",
    key: "whatsapp",
  },
];

function HomePage({ onOpenContact, onOpenEmail }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-layout">
          <div>
            <h1>Efficiency in every Drop.</h1>
            <p className="hero-text">
              Drop Ease offers reliable, app-free logistics in Colombo. We serve
              SMEs and online businesses. Our services are eco-conscious and
              affordable. We use electric and petrol bikes. Direct WhatsApp
              communication ensures personalized service. We eliminate delivery
              confusion and delays. Our support is hands-on. Drop Ease is a
              modern hybrid delivery provider. We offer reliable, app-free
              logistics services. Our fleet uses electric and petrol bikes.
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
              href="DROPEASE_PROPOSAL.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Proposal
            </a>
            <a
              className="btn btn-primary proposal-btn"
              href="DROPEASE_PROPOSAL.pdf"
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
              Currently, we work with about 5 regular vendors, all of whom offer
              eco friendly products and packaging. While we do not currently
              handle perishable products like food, we are working to expand our
              services in the future. Our delivery lead time is currently 2-3
              days.
            </p>
          </article>
          <article className="collaboration-card">
            <h3>OUR RIDERS</h3>
            <p>
              We are currently in the process of recruiting additional riders to
              join our team. At present, we have one full-time rider and two
              part-time riders. if needed, one of our also will assist with
              package deliveries during busy periods.
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
              "To redefine delivery in Sri Lanka by making every drop seamless,
              reliable, and stress-free - connecting people, businesses, and
              communities with ease."
            </p>
          </article>
          <article className="vision-mission-row">
            <h3>OUR MISSION</h3>
            <p className="vision-text-italic">
              "At Drop Ease, we are committed to delivering beyond expectations.
              Through technology-driven solutions, customer-first service, and a
              trusted delivery network, we ensure packages arrive safely,
              quickly, and effortlessly - creating convenience and peace of mind
              for every customer we serve."
            </p>
          </article>
        </div>
      </section>

      <section className="cta" id="contact">
        <h2>NEED A COURIER PARTNER THIS WEEK?</h2>
        <p>CONTACT US IMMIDIATELY !!!!</p>
        <div className="contact-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenContact}
          >
            Contact Details
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onOpenEmail}
          >
            Send Email
          </button>
        </div>
      </section>
    </main>
  );
}

function FoundersPage() {
  return (
    <main>
      <section className="hero founders-hero">
        <div className="section-heading">
          <p className="eyebrow">Our Leadership</p>
          <h2>Founder & Co-Founders</h2>
        </div>
        <p className="hero-text founders-intro">
          Drop Ease is built by one founder and two co-founders who combine
          operational discipline, customer care, and growth strategy. Together,
          they focus on creating reliable logistics experiences for businesses
          and communities.
        </p>
      </section>

      <section className="section founders-section">
        <div className="founders-grid">
          {owners.map((owner, index) => (
            <article key={`${owner.role}-${index}`} className="founder-card">
              <img
                src={owner.photo}
                alt={`${owner.role} profile`}
                className={`founder-photo ${
                  owner.role === "Founder" ? "founder-photo-founder" : ""
                } ${
                  owner.photo === coFounderPhotoOne
                    ? "founder-photo-cofounder-one"
                    : ""
                } ${
                  owner.photo === coFounderPhotoTwo
                    ? "founder-photo-cofounder-two"
                    : ""
                }`}
              />
              <p className="eyebrow founder-role">{owner.role}</p>
              <h3>{owner.name}</h3>
              <p>{owner.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");
  const pageParam = new URLSearchParams(window.location.search).get("page");
  const isFoundersPage = pageParam === "founders";

  const openEmailPopup = () => {
    setIsContactOpen(false);
    setIsEmailOpen(true);
  };

  const closeEmailPopup = () => {
    setIsEmailOpen(false);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = customerName.trim();
    const trimmedEmail = customerEmail.trim();
    const trimmedMessage = customerMessage.trim();
    setEmailStatus("");
    setIsSendingEmail(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${contactEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: trimmedName || "Website Visitor",
            email: trimmedEmail,
            message: trimmedMessage,
            _subject: `Customer Inquiry - ${trimmedName || "Website Visitor"}`,
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Email request failed");
      }

      setEmailStatus("Your message was sent successfully.");
      setCustomerName("");
      setCustomerEmail("");
      setCustomerMessage("");
    } catch {
      setEmailStatus("Sending failed. Please try again.");
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="logo-wrap home-link" href=".">
          <img src={dropEaseLogo} alt="Drop Ease logo" className="logo-image" />
          Drop Ease
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {isFoundersPage ? (
            <a href=".">Home</a>
          ) : (
            <a href="?page=founders">Founders</a>
          )}
          <a href={isFoundersPage ? "./#contact" : "#contact"}>Contact</a>
        </nav>
      </header>

      {isFoundersPage ? (
        <FoundersPage />
      ) : (
        <HomePage
          onOpenContact={() => setIsContactOpen(true)}
          onOpenEmail={openEmailPopup}
        />
      )}

      {isContactOpen && !isFoundersPage && (
        <div className="modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div
            className="contact-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <h3>CONTACT DETAILS</h3>
            <p>Phone: +94 71 872 2486</p>
            <p>WhatsApp: +94 71 872 2486</p>
            <p>Email: {contactEmail}</p>
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

      {isEmailOpen && !isFoundersPage && (
        <div className="modal-overlay" onClick={closeEmailPopup}>
          <div
            className="contact-modal email-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <h3>SEND EMAIL REQUEST</h3>
            <form className="email-form" onSubmit={handleEmailSubmit}>
              <label htmlFor="customer-name">Your Name</label>
              <input
                id="customer-name"
                type="text"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder="Enter your name"
              />

              <label htmlFor="customer-email">Your Email</label>
              <input
                id="customer-email"
                type="email"
                value={customerEmail}
                onChange={(event) => setCustomerEmail(event.target.value)}
                placeholder="Enter your email"
                required
              />

              <label htmlFor="customer-message">Message</label>
              <textarea
                id="customer-message"
                value={customerMessage}
                onChange={(event) => setCustomerMessage(event.target.value)}
                placeholder="Tell us what you want to know about our service"
                rows={6}
                required
              />

              <button type="submit" className="btn btn-secondary">
                {isSendingEmail ? "Sending..." : "Send"}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeEmailPopup}
              >
                Cancel
              </button>
              {emailStatus ? (
                <p className="email-status">{emailStatus}</p>
              ) : null}
            </form>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-socials" aria-label="Drop Ease social media">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              className="footer-social-link"
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit Drop Ease on ${platform.name}`}
            >
              <span
                className={`social-icon social-icon-${platform.key}`}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Drop Ease Courier Service. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
