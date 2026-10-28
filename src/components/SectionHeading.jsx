/**
 * Reusable section heading with label, title, and optional description.
 */
export default function SectionHeading({ label, title, description }) {
  return (
    <div>
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-heading">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
