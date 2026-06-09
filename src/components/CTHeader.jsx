import React, { useState, useEffect, useRef } from "react";

export default function CTHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menuName, e) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  return (
    <div className="ct-bar" ref={headerRef}>
      <div className="ct-bar-inner">
        <a
          href="https://dev.cubetech.cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="ct-brand"
        >
          <img
            src="https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/header-logo.png"
            alt="CubeTech Innovations logo"
          />
          CubeTech Innovations
        </a>
        <ul className="ct-nav">
          <li
            className={`ct-dropdown-parent ${openDropdown === "solutions" ? "open" : ""}`}
          >
            <a
              href="https://dev.cubetech.cloud/#services-solutions"
              onClick={(e) => toggleMenu("solutions", e)}
            >
              Solutions &#9662;
            </a>
            <div className="ct-dropdown">
              <a
                href="https://dev.cubetech.cloud/#services-solutions"
                target="_blank"
                rel="noreferrer"
              >
                All Solutions
              </a>
              <a
                href="https://dev.cubetech.cloud/#custom-enterprise-software"
                target="_blank"
                rel="noreferrer"
              >
                Custom Software Development
              </a>
              <a
                href="https://dev.cubetech.cloud/#ai-process-automation"
                target="_blank"
                rel="noreferrer"
              >
                AI Integration & Automation
              </a>
              <a
                href="https://dev.cubetech.cloud/#odoo-erp-integrations"
                target="_blank"
                rel="noreferrer"
              >
                Odoo ERP Integrations
              </a>
              <a
                href="https://dev.cubetech.cloud/snapserve/"
                target="_blank"
                rel="noreferrer"
              >
                ScanServe (Restaurant & Retail)
              </a>
            </div>
          </li>

          <li
            className={`ct-dropdown-parent ${openDropdown === "tools" ? "open" : ""}`}
          >
            <a
              href="https://dev.cubetech.cloud/barcode-generator/"
              onClick={(e) => toggleMenu("tools", e)}
            >
              Tools &#9662;
            </a>
            <div className="ct-dropdown">
              <a
                href="https://dev.cubetech.cloud/barcode-generator/"
                target="_blank"
                rel="noreferrer"
              >
                Barcode Generator
              </a>
              <a
                href="https://dev.cubetech.cloud/qr-code-generator/"
                target="_blank"
                rel="noreferrer"
              >
                QR Code Generator
              </a>
            </div>
          </li>

          <li>
            <a
              href="https://dev.cubetech.cloud/#about-heading"
              target="_blank"
              rel="noreferrer"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="https://dev.cubetech.cloud/blog/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://dev.cubetech.cloud/#contact"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
