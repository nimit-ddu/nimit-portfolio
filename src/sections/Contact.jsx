import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { AnimatedSection } from '../components/AnimatedSection.jsx';
import { siteConfig } from '../data/config.js';

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact">
      <div className="container">
        <AnimatedSection>
          <div className="contact-content">
            <p className="section-label">GET IN TOUCH</p>
            <h2 className="section-heading">Have an interesting problem to solve?</h2>
            <p className="section-description">
              I'm always interested in discussing AI applications, full-stack
              engineering, and ideas worth building.
            </p>

            <div className="contact-cards">
              <a
                href={`mailto:${siteConfig.email}`}
                className="contact-card"
              >
                <span className="contact-card-icon">
                  <Mail size={20} />
                </span>
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">{siteConfig.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="contact-card"
              >
                <span className="contact-card-icon">
                  <Phone size={20} />
                </span>
                <span className="contact-card-label">Phone</span>
                <span className="contact-card-value">{siteConfig.phone}</span>
              </a>
            </div>

            <div className="contact-socials">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
