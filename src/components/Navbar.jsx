import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { siteConfig, navLinks } from '../data/config.js';
import { useActiveSection } from './useInView.jsx';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const activeSection = useActiveSection(
    navLinks.map((l) => l.href.replace('#', ''))
  );

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <header className="navbar" role="banner">
      <nav className="navbar-inner" aria-label="Main navigation">
        <a href="#home" className="navbar-brand" onClick={scrollToTop}>
          NR<span className="dot">.</span>
        </a>

        {/* Desktop links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.replace('#', '') ? 'active' : ''}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          {siteConfig.showAvailability && (
            <span className="availability-badge">
              <span className="availability-dot" aria-hidden="true" />
              {siteConfig.availability}
            </span>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={prefersReduced ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            {siteConfig.showAvailability && (
              <div className="mobile-availability">
                <span className="availability-badge">
                  <span className="availability-dot" aria-hidden="true" />
                  {siteConfig.availability}
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
