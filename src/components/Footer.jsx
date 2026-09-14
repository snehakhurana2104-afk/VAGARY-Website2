import { Link } from "react-router-dom";
import { IconInstagram, IconLinkedIn } from "./Icons";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Collections", to: "/collections" },
  { label: "Bags", to: "/bags" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">VAGARY</Link>
            <p>Sustainable products, thoughtful design and considered gifting for everyday living and modern businesses.</p>
          </div>
          <nav className="footer-nav">
            {LINKS.map((l) => (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            ))}
          </nav>
          <div className="footer-contact">
            <span className="footer-contact-label">Email</span>
            <a href="mailto:info@vagaryonline.com">info@vagaryonline.com</a>
            <span className="footer-contact-label">Phone</span>
            <a href="tel:+919812941527">98129 41527</a>
            <div className="footer-socials">
              <a href="https://www.instagram.com/vagary555/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <IconInstagram width={18} height={18} />
                <span>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/vagaryonline/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconLinkedIn width={18} height={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} VAGARY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
