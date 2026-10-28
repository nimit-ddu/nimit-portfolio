/**
 * Renders a group of skills with an icon and title.
 */
export default function SkillGroup({ group }) {
  const Icon = group.icon;

  return (
    <div className="skill-group">
      <div className="skill-group-header">
        <div className="skill-group-icon">
          <Icon size={16} />
        </div>
        <h3 className="skill-group-title">{group.title}</h3>
      </div>
      <div className="skill-items">
        {group.items.map((item) => (
          <span key={item} className="skill-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
