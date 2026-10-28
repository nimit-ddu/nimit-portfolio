import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons.jsx';

/**
 * Individual project card.
 * Renders either a featured (wide) or standard layout.
 */
export default function ProjectCard({ project }) {
  const Icon = project.icon;
  const hasGithub = project.githubUrl && project.githubUrl.length > 0;
  const hasLive = project.liveUrl && project.liveUrl.length > 0;

  const cardContent = (
    <>
      <div className="project-card-header">
        <span className="project-number">{project.number}</span>
        <div className="project-icon">
          <Icon size={18} />
        </div>
      </div>
      <p className="project-category">{project.category}</p>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {hasGithub && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={14} />
            GitHub
            <ArrowUpRight size={12} className="arrow" />
          </a>
        )}
        {hasLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={14} />
            Live Demo
            <ArrowUpRight size={12} className="arrow" />
          </a>
        )}
      </div>
    </>
  );

  // Featured layout with two columns on desktop
  if (project.featured) {
    return (
      <article className="project-card featured">
        <div className="project-card-left">
          <div className="project-card-header">
            <span className="project-number">{project.number}</span>
            <div className="project-icon">
              <Icon size={18} />
            </div>
          </div>
          <p className="project-category">{project.category}</p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
          <div className="project-links">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon size={14} />
                GitHub
                <ArrowUpRight size={12} className="arrow" />
              </a>
            )}
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink size={14} />
                Live Demo
                <ArrowUpRight size={12} className="arrow" />
              </a>
            )}
          </div>
        </div>
        <div className="project-card-right">
          {project.highlights && project.highlights.length > 0 && (
            <ul className="project-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="project-card">
      {cardContent}
    </article>
  );
}
