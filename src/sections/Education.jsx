import { GraduationCap, Code2, Trophy } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection.jsx';

const education = [
  {
    period: '2023 – 2027',
    institution: 'Dharmsinh Desai University',
    degree: 'Bachelor of Technology in Computer Engineering',
    score: 'CPI: 7.25 / 10',
  },
  {
    period: '2021 – 2023',
    institution: 'Shree Raj Schools',
    degree: 'Higher Secondary Education',
    score: '97.84 PR (average)',
  },
];

const achievements = [
  {
    icon: Code2,
    text: (
      <>
        Solved <strong>350+</strong> coding problems across LeetCode and other platforms.
      </>
    ),
  },
  {
    icon: Trophy,
    text: (
      <>
        LeetCode rating: <strong>1500+</strong>.
      </>
    ),
  },
  {
    icon: GraduationCap,
    text: (
      <>
        Participated in <strong>DU-Hacks 5.0</strong>, a national-level hackathon.
      </>
    ),
  },
];

export default function Education() {
  return (
    <section id="education" aria-label="Education and achievements">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="EDUCATION & ACHIEVEMENTS"
            title="Background and milestones."
          />
        </AnimatedSection>

        <StaggerContainer className="education-grid" staggerDelay={0.1} delay={0.15}>
          {education.map((edu) => (
            <StaggerItem key={edu.institution}>
              <div className="education-card">
                <p className="education-period">{edu.period}</p>
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-score">{edu.score}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="achievements-section" delay={0.3}>
          <h3 className="section-heading" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
            Achievements
          </h3>
          <div className="achievements-list">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="achievement-item">
                  <div className="achievement-icon">
                    <Icon size={14} />
                  </div>
                  <p className="achievement-text">{a.text}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
