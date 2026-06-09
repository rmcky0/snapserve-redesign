import SectionHeader from "./SectionHeader";
import { features } from "../data/snapserveContent";

export default function FeaturesSection() {
  return (
    <section className="section section-alt" id="features">
      <div className="container">
        <SectionHeader
          label="Everything You Need"
          title="Built for Modern Restaurants"
          subtitle="One platform to manage your entire dining operation — from first scan to final bill."
        />

        <div className="feat-grid fade-up">
          {features.map((feature) => (
            <article className="feat-card" key={feature.title}>
              <div className="feat-icon">
                <feature.icon size={20} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <h3 className="feat-title">{feature.title}</h3>
              <p className="feat-desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
