import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" aria-label="Selected projects">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="SELECTED WORK"
            title="Projects I've built."
            description="A collection of AI-powered products, machine learning systems, and full-stack applications I've worked on."
          />
        </AnimatedSection>

        <StaggerContainer className="projects-grid" staggerDelay={0.12} delay={0.2}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
