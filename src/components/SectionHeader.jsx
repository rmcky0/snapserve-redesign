export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="sec-head fade-up">
      <div className="sec-label">{label}</div>
      <h2 className="sec-h2">{title}</h2>
      <p className="sec-sub">{subtitle}</p>
    </div>
  );
}
