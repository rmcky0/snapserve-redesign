import SectionHeader from "./SectionHeader";
import { analyticsCards } from "../data/snapserveContent";

export default function AnalyticsSection() {
  return (
    <section className="section" id="analytics">
      <div className="container">
        <div className="analytics-split">
          <div className="fade-up">
            <div className="sec-label">Real-Time Insights</div>
            <h2 className="sec-h2">Your Restaurant, By the Numbers</h2>
            <p className="sec-sub">
              Make smarter business decisions with a dashboard that tracks sales
              trends, popular items, customer behavior, and kitchen performance
              — all in real time.
            </p>
            <div className="analytics-stats-grid">
              {analyticsCards.map((card) => (
                <div className="astat-card" key={card.value}>
                  <div className="astat-val">{card.value}</div>
                  <div className="astat-label">{card.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="analytics-ss fade-up delay-1">
            <img
              src="https://dev.cubetech.cloud/wp-content/themes/website_new/assets/images/snapserve-step-1-dashboard.png"
              alt="SnapServe dashboard showing real-time sales, category, and order analytics"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="dash-mock fade-up delay-1">
      <div className="dash-head">
        <span className="dash-title">Performance Overview</span>
        <span className="dash-period">Last 7 days</span>
      </div>
      <div className="dash-kpis">
        <div className="dkpi">
          <div className="dkpi-val">₱127K</div>
          <div className="dkpi-label">Total Sales</div>
          <div className="dkpi-chg">↑ 2.5%</div>
        </div>
        <div className="dkpi">
          <div className="dkpi-val">94.2%</div>
          <div className="dkpi-label">Conversion</div>
          <div className="dkpi-chg">↑ 4.1%</div>
        </div>
        <div className="dkpi">
          <div className="dkpi-val">1,342</div>
          <div className="dkpi-label">Orders</div>
          <div className="dkpi-chg">↑ 8.7%</div>
        </div>
      </div>
      <div className="chart-label">Daily Revenue</div>
      <div className="bar-chart">
        <div className="bc bc-dim" style={{ height: "45%" }} />
        <div className="bc bc-dim" style={{ height: "60%" }} />
        <div className="bc bc-dim" style={{ height: "40%" }} />
        <div className="bc bc-dim" style={{ height: "75%" }} />
        <div className="bc bc-dim" style={{ height: "55%" }} />
        <div className="bc bc-on" style={{ height: "90%" }} />
        <div className="bc bc-on" style={{ height: "100%" }} />
      </div>
      <div className="bc-labels">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((label) => (
          <span className="bcl" key={label}>
            {label}
          </span>
        ))}
      </div>
      <div className="cat-bars">
        <div
          className="chart-label"
          style={{ marginTop: "0.75rem", marginBottom: 0 }}
        >
          Top Categories
        </div>
        <CategoryRow name="Mains" width="72%" color="var(--amber)" pct="72%" />
        <CategoryRow
          name="Drinks"
          width="48%"
          color="var(--amber-lt)"
          opacity="0.7"
          pct="48%"
        />
        <CategoryRow
          name="Starters"
          width="31%"
          color="var(--amber-lt)"
          opacity="0.4"
          pct="31%"
        />
      </div>
    </div>
  );
}

function CategoryRow({ name, width, color, pct, opacity = "1" }) {
  return (
    <div className="cat-row">
      <span className="cat-name">{name}</span>
      <div className="cat-track">
        <div
          className="cat-fill"
          style={{ width, background: color, opacity }}
        />
      </div>
      <span className="cat-pct">{pct}</span>
    </div>
  );
}
