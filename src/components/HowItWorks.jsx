import SectionHeader from "./SectionHeader";
import { steps } from "../data/snapserveContent";

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <SectionHeader
          label="Simple Setup"
          title="Up and Running in Minutes"
          subtitle="No complex configuration or technical know-how required. Three steps and your restaurant is live."
        />

        <div className="steps-list">
          {steps.map((step, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                className={`step-row ${isReversed ? "rev" : ""} fade-up`}
                key={step.number}
              >
                <div className="step-copy">
                  <div className="step-num-big">{step.number}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                  <div className="step-tags">
                    {step.tags.map((tag) => (
                      <span className="step-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="step-visual fade-up delay-1">
                  {step.imageSrc2 ? (
                    <div className="stacked-images">
                      <img
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        className="stack-img-1"
                        loading="lazy"
                      />
                      <img
                        src={step.imageSrc2}
                        alt={step.imageAlt2}
                        className="stack-img-2"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="step-img">
                      <img
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
