import SectionHeader from "./SectionHeader";
import { operationalViews } from "../data/snapserveContent";

export default function OperationsSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Operational Tools"
          title="Your Team, Always in Sync"
          subtitle="Dedicated interfaces for kitchen staff and waiters ensure every order flows smoothly from placement to table — with zero confusion."
        />

        <div className="views-grid">
          {operationalViews.map((view, index) => (
            <article
              className={`view-card fade-up delay-${index}`}
              key={view.title}
            >
              <div className={`view-icon ${view.className}`}>
                <view.icon size={22} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <h3 className="view-title">{view.title}</h3>
              <p className="view-desc">{view.description}</p>
              <div className="view-feats">
                {view.features.map((feature) => (
                  <div className="vfi" key={feature}>
                    <div className="vfi-check">✓</div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="view-ss">
                <img src={view.imageSrc} alt={view.imageAlt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
