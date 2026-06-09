import { useRef, useEffect } from "react";
import { ArrowRight, ChevronDown, QrCode, Beef, Soup, Fish } from "./icons";
import { heroStats } from "../data/snapserveContent";

export default function Hero({ onRequestDemo }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      sectionRef.current.style.setProperty("--mouse-x", `${x}%`);
      sectionRef.current.style.setProperty("--mouse-y", `${y}%`);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <div className="hero-glow" />
      <div className="hero-grid-overlay" />

      <div className="hero-inner">
        <div>
          <div className="hero-badge fade-up">
            <span className="badge-pulse" />
            QR Menu &amp; Smart Ordering
          </div>
          <h1 className="fade-up delay-1">
            Turn Every Table Into
            <br />a <span className="accent">Seamless Experience</span>
          </h1>
          <p className="fade-up delay-2">
            Eliminate menu reprinting, reduce order errors, and speed up kitchen
            operations. SnapServe brings your restaurant into the digital age —
            one QR code at a time.
          </p>
          <div className="hero-btns fade-up delay-3">
            <button
              type="button"
              className="btn-primary"
              onClick={onRequestDemo}
            >
              Request a Demo
              <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <a href="#how-it-works" className="btn-outline">
              See How It Works
              <ChevronDown size={15} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-stats fade-up delay-3">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="hstat-val">{stat.value}</div>
                <div className="hstat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="device-wrap">
      <div className="device-shell">
        <div className="device-notch" />
        <div className="device-screen">
          <img
            src="https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/phone.png"
            alt="SnapServe mobile ordering app"
          />
        </div>
        <div className="device-chin" />
      </div>

      <div className="fcard fcard-orders">
        <div className="fc-label">Live Orders</div>
        <div className="fc-val">24</div>
        <div className="fc-sub">↑ 3 new orders</div>
        <OrderRow tone="prep" text="Ribeye + Pasta" table="T-04" />
        <OrderRow tone="ready" text="Garlic Prawns" table="T-07" />
        <OrderRow tone="pend" text="Carbonara ×2" table="T-12" />
      </div>

      <div className="fcard fcard-rev">
        <div className="fc-label">Today's Revenue</div>
        <div className="fc-val">₱42,160</div>
        <div className="fc-sub">↑ 12.4% vs yesterday</div>
        <div className="mini-bars">
          {["50%", "65%", "45%", "80%", "60%", "90%", "100%"].map(
            (height, index) => (
              <div
                key={height}
                className="mbar"
                style={{
                  height,
                  background: index >= 5 ? "var(--amber)" : "var(--mbar-light)",
                  opacity: index === 5 ? 0.8 : 1,
                }}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function OrderRow({ tone, text, table }) {
  return (
    <div className="order-row">
      <div className={`odot odot-${tone}`} />
      <span className="otext">{text}</span>
      <span className="otable">{table}</span>
    </div>
  );
}
