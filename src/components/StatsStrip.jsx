const stats = [
  { value: "3 min", label: "Average Setup Time" },
  { value: "∞", label: "Unlimited Orders" },
  { value: "94.2%", label: "QR-to-Order Rate" },
  { value: "24/7", label: "Pro Tech Support" },
];

export default function StatsStrip() {
  return (
    <div className="strip">
      <div className="strip-inner">
        {stats.map((stat, index) => (
          <div className={`fade-up delay-${index}`} key={stat.label}>
            <div className="sv">{stat.value}</div>
            <div className="sl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
