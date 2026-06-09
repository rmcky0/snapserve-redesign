import { ArrowRight } from "./icons";
import { useRef, useEffect } from "react";

export default function CtaSection({ onRequestDemo }) {
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
    <section className="cta-sec" ref={sectionRef}>
      <div className="cta-glow" />
      <div className="cta-inner fade-up">
        <div className="hero-badge" style={{ margin: "0 auto 1.4rem" }}>
          <span className="badge-pulse" />
          Ready to Transform Your Restaurant?
        </div>
        <h2>
          Book a Free Demo
          <br />
          and See It in Action
        </h2>
        <p>
          Join restaurants across the Philippines that have already upgraded to
          smarter, faster, more profitable operations with SnapServe. No
          commitment required.
        </p>
        <div className="cta-btns">
          <button type="button" className="btn-primary" onClick={onRequestDemo}>
            Request a Demo
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </button>
          <a href="#pricing" className="btn-outline">
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
