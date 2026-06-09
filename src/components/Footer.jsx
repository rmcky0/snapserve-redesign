import { Facebook, Linkedin, Zap } from "./icons";
import { footerSections } from "../data/snapserveContent";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <a href="#top" className="nav-logo footer-logo">
              <div className="logo-box">
                <Zap size={18} strokeWidth={2.6} aria-hidden="true" />
              </div>
              <span className="logo-name">SnapServe</span>
            </a>
            <p className="footer-tagline">
              A smart QR menu and ordering system by CubeTech Innovations. Built
              for restaurants that care about great guest experiences.
            </p>
          </div>
          {footerSections.map((section) => (
            <FooterColumn key={section.title} {...section} />
          ))}
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 CubeTech Innovations. All rights reserved.
          </span>
          <div className="social-row">
            <a
              href="https://www.facebook.com/profile.php?id=61561844297865"
              target="_blank"
              rel="noopener noreferrer"
              className="soc"
              aria-label="Facebook"
            >
              <Facebook size={14} strokeWidth={2.2} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/105029650"
              target="_blank"
              rel="noopener noreferrer"
              className="soc"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, hrefs }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={link}>
            <a
              href={hrefs[index]}
              target={hrefs[index].startsWith("http") ? "_blank" : undefined}
              rel={
                hrefs[index].startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
