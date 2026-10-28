import { Lightbulb, Eye, ShieldCheck, Rocket } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { AnimatedSection } from '../components/AnimatedSection.jsx';

const principles = [
  { icon: Lightbulb, text: 'Build useful products.' },
  { icon: Eye, text: 'Keep systems understandable.' },
  { icon: ShieldCheck, text: 'Validate AI outputs.' },
  { icon: Rocket, text: 'Learn by shipping projects.' },
];

export default function About() {
  return (
    <section id="about" aria-label="About me">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="A LITTLE ABOUT ME"
            title="I enjoy building things that solve real problems."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a Computer Engineering student at Dharmsinh Desai University with
                a strong interest in full-stack development, AI engineering, and machine
                learning. I enjoy turning ideas into working applications, designing
                backend systems, and experimenting with LLMs, RAG pipelines, and
                structured AI outputs.
              </p>
              <br />
              <p>
                Alongside building projects, I continuously strengthen my fundamentals
                in data structures, databases, object-oriented programming, and
                operating systems.
              </p>
            </div>

            <div className="principles-list">
              {principles.map(({ icon: Icon, text }) => (
                <div key={text} className="principle-item">
                  <div className="principle-icon">
                    <Icon size={14} />
                  </div>
                  <p className="principle-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
