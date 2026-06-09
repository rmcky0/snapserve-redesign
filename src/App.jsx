import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import HowItWorks from "./components/HowItWorks";
import FeaturesSection from "./components/FeaturesSection";
import AnalyticsSection from "./components/AnalyticsSection";
import OperationsSection from "./components/OperationsSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import CtHeader from "./components/CTHeader";

const calendlyUrl = "https://calendly.com/cubetech/30min";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);
  const calendlyEmbedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".fade-up").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".nav")) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    const scriptId = "calendly-widget-script";
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      if (window.Calendly) {
        setCalendlyReady(true);
      }
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);
  }, []);

  const openCalendlyPopup = () => {
    setCalendlyOpen(true);
  };

  const closeCalendlyPopup = () => {
    setCalendlyOpen(false);
  };

  useEffect(() => {
    if (
      !calendlyOpen ||
      !calendlyReady ||
      !calendlyEmbedRef.current ||
      !window.Calendly
    ) {
      return;
    }

    calendlyEmbedRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: calendlyUrl,
      parentElement: calendlyEmbedRef.current,
    });
  }, [calendlyOpen, calendlyReady]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCalendlyPopup();
      }
    };

    if (calendlyOpen) {
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [calendlyOpen]);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="snapserve-page">
      <CtHeader />
      <Header
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        activeSection={activeSection}
        onRequestDemo={openCalendlyPopup}
      />
      <Hero onRequestDemo={openCalendlyPopup} />
      <StatsStrip />
      <HowItWorks />
      <FeaturesSection />
      <AnalyticsSection />
      <OperationsSection />
      <PricingSection onRequestDemo={openCalendlyPopup} />
      <CtaSection onRequestDemo={openCalendlyPopup} />
      <Footer />

      {calendlyOpen ? (
        <div
          className="calendly-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a SnapServe demo"
          onClick={closeCalendlyPopup}
        >
          <div
            className="calendly-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="calendly-close"
              onClick={closeCalendlyPopup}
              aria-label="Close demo scheduler"
            >
              ×
            </button>
            <div className="calendly-frame" ref={calendlyEmbedRef} />
          </div>
        </div>
      ) : null}
      <button
        className={`scroll-top-btn ${showTopBtn ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 15l-7-7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
export default App;
