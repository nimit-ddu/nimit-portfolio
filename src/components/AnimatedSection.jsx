import { motion, useReducedMotion } from 'motion/react';
import { useInView } from './useInView.jsx';

/**
 * Reusable section wrapper with fade-and-rise entrance animation.
 * Respects prefers-reduced-motion.
 */
export function AnimatedSection({ children, className = '', delay = 0 }) {
  const prefersReduced = useReducedMotion();
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  if (prefersReduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for children animations.
 */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1, delay = 0 }) {
  const prefersReduced = useReducedMotion();
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  if (prefersReduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual stagger item — must be inside a StaggerContainer.
 */
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
