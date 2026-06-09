import SectionHeader from "./SectionHeader";
import { ShieldCheck } from "lucide-react";
import { pricingPlans } from "../data/snapserveContent";

export default function PricingSection({ onRequestDemo }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHeader
          label="Plans & Pricing"
          title="Flexible Plans for Every Restaurant"
          subtitle="All plans include your QR code, digital menu, and unlimited orders. Scale up whenever you're ready."
        />

        <div className="pricing-grid fade-up">
          {pricingPlans.map((plan) => (
            <article
              className={`pc ${plan.highlighted ? "pop" : ""}`}
              key={plan.plan}
            >
              {plan.highlighted ? (
                <div className="pc-badge">Most Popular</div>
              ) : null}
              <div
                className="pc-plan"
                style={plan.highlighted ? { color: "var(--amber)" } : {}}
              >
                {plan.plan}
              </div>
              <p className="pc-desc">{plan.description}</p>
              <div className="pc-price">
                <span className="pp-cur">₱</span>
                <span className="pp-val">{plan.price}</span>
                <span className="pp-per">/month</span>
              </div>
              <div className="pc-divider" />
              <ul className="pc-feats">
                {plan.features.map((feature) => (
                  <li className="pcf" key={feature}>
                    <span className="pcf-chk">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn-plan ${plan.buttonClass}`}
                onClick={onRequestDemo}
              >
                {plan.buttonLabel}
              </button>
            </article>
          ))}
        </div>

        <p className="guarantee fade-up">
          <ShieldCheck size={16} strokeWidth={2.2} aria-hidden="true" />

          <span>
            30-Day Money-Back Guarantee on all plans. No questions asked.
          </span>
        </p>
      </div>
    </section>
  );
}
