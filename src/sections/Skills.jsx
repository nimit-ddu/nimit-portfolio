import SectionHeading from '../components/SectionHeading.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection.jsx';
import { skillGroups } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical skills">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="MY TOOLKIT"
            title="Tools I use to build."
          />
        </AnimatedSection>

        <StaggerContainer className="skills-grid" staggerDelay={0.08} delay={0.15}>
          {skillGroups.map((group) => (
            <StaggerItem key={group.title}>
              <SkillGroup group={group} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
