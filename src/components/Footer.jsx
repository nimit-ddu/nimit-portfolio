import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx';
import { useReducedMotion } from 'motion/react';
import { siteConfig } from '../data/config.js';

export default function Footer() {
  const prefersReduced = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-brand">
            NR<span className="dot">.</span>
          </span>
          <span className="footer-text">
            © {year} · Designed and built with React.
          </span>
        </div>
        <div className="footer-right">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
