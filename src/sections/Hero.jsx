import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons.jsx';
import { siteConfig } from '../data/config.js';

/**
 * Minimal SVG decoration suggesting connected nodes / systems thinking.
 */
function HeroDecoration() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="hero-decoration">
      <motion.svg
        width="280"
        height="280"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        {/* Grid lines */}
        <line x1="0" y1="70" x2="280" y2="70" stroke="#1e1e1e" strokeWidth="0.5" />
        <line x1="0" y1="140" x2="280" y2="140" stroke="#1e1e1e" strokeWidth="0.5" />
        <line x1="0" y1="210" x2="280" y2="210" stroke="#1e1e1e" strokeWidth="0.5" />
        <line x1="70" y1="0" x2="70" y2="280" stroke="#1e1e1e" strokeWidth="0.5" />
        <line x1="140" y1="0" x2="140" y2="280" stroke="#1e1e1e" strokeWidth="0.5" />
        <line x1="210" y1="0" x2="210" y2="280" stroke="#1e1e1e" strokeWidth="0.5" />

        {/* Connecting lines */}
        <line x1="70" y1="70" x2="140" y2="140" stroke="#2a2a2a" strokeWidth="1" />
        <line x1="140" y1="140" x2="210" y2="70" stroke="#2a2a2a" strokeWidth="1" />
        <line x1="140" y1="140" x2="70" y2="210" stroke="#2a2a2a" strokeWidth="1" />
        <line x1="140" y1="140" x2="210" y2="210" stroke="#2a2a2a" strokeWidth="1" />

        {/* Accent path */}
        <motion.path
          d="M 70 70 L 140 140 L 210 70"
          stroke="rgba(200, 255, 0, 0.2)"
          strokeWidth="1.5"
          fill="none"
          initial={prefersReduced ? {} : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Nodes */}
        <circle cx="70" cy="70" r="4" fill="#1e1e1e" stroke="#333" strokeWidth="1" />
        <circle cx="210" cy="70" r="4" fill="#1e1e1e" stroke="#333" strokeWidth="1" />
        <circle cx="70" cy="210" r="4" fill="#1e1e1e" stroke="#333" strokeWidth="1" />
        <circle cx="210" cy="210" r="4" fill="#1e1e1e" stroke="#333" strokeWidth="1" />

        {/* Center node — accent */}
        <motion.circle
          cx="140"
          cy="140"
          r="6"
          fill="rgba(200, 255, 0, 0.15)"
          stroke="rgba(200, 255, 0, 0.4)"
          strokeWidth="1.5"
          initial={prefersReduced ? {} : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />

        {/* Small satellite nodes */}
        <circle cx="140" cy="70" r="2.5" fill="#333" />
        <circle cx="70" cy="140" r="2.5" fill="#333" />
        <circle cx="210" cy="140" r="2.5" fill="#333" />
        <circle cx="140" cy="210" r="2.5" fill="#333" />
      </motion.svg>
    </div>
  );
}

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const animProps = (delay) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
        };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-inner">
          <div>
            <motion.p className="hero-label" {...animProps(0.1)}>
              FULL-STACK DEVELOPER · AI/ML ENTHUSIAST
            </motion.p>

            <motion.h1 className="hero-headline" {...animProps(0.25)}>
              Building intelligent applications,
              <br />
              from idea to production.
            </motion.h1>

            <motion.p className="hero-paragraph" {...animProps(0.4)}>
              I'm Nimit Rangani, a Computer Engineering student passionate about
              AI-powered applications, LLM systems, RAG pipelines, and scalable
              full-stack software.
            </motion.p>

            <motion.div className="hero-actions" {...animProps(0.55)}>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={handleScrollToProjects}
              >
                Explore Projects
                <ArrowDown size={15} />
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <ExternalLink size={15} />
              </a>
            </motion.div>

            <motion.div className="hero-social" {...animProps(0.65)}>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          <HeroDecoration />
        </div>
      </div>
    </section>
  );
}
