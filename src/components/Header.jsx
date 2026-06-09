import { ArrowRight, Menu, X, Zap } from "./icons";
import { navLinks } from "../data/snapserveContent";

export default function Header({
  mobileOpen,
  setMobileOpen,
  activeSection,
  onRequestDemo,
}) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a
          href="#top"
          className="nav-logo"
          onClick={() => setMobileOpen(false)}
        >
          <div className="logo-box">
            <Zap size={18} strokeWidth={2.6} aria-hidden="true" />
          </div>
          <span className="logo-name">SnapServe</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button type="button" className="btn-cta" onClick={onRequestDemo}>
            Request Demo
            <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? (
            <X size={22} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>

      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="highlight"
          onClick={() => {
            setMobileOpen(false);
            onRequestDemo();
          }}
        >
          Request a Demo →
        </button>
      </div>
    </nav>
  );
}
