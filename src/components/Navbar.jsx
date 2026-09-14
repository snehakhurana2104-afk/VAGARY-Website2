import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IconClose, IconMenu } from "./Icons";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <div className="nav-left">
          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>

          <div className="nav-desktop-links">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <Link to="/" className="nav-logo" aria-label="VAGARY home">
          VAGARY
        </Link>

        <div className="nav-right" />
      </div>

      {open && (
        <div className="mobile-nav-panel" aria-label="Mobile navigation">
          <div className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
