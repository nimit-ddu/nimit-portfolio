import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook using IntersectionObserver.
 * Returns [ref, isInView].
 */
export function useInView({ threshold = 0.1, once = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handleIntersection = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      } else if (!once) {
        setIsInView(false);
      }
    },
    [once]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: '0px 0px -60px 0px',
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, handleIntersection]);

  return [ref, isInView];
}

/**
 * Hook to track active section for navigation highlighting.
 * Uses a ref-based approach to avoid re-creating the observer on every render.
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('home');
  const sectionIdsRef = useRef(sectionIds);
  sectionIdsRef.current = sectionIds;

  useEffect(() => {
    const ids = sectionIdsRef.current;

    // Track which sections are currently intersecting
    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target.id, entry.isIntersecting);
        });

        // Find the first visible section in DOM order
        for (const id of ids) {
          if (visibleSections.get(id)) {
            setActiveSection(id);
            return;
          }
        }
      },
      { threshold: 0.05, rootMargin: '-80px 0px -35% 0px' }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []); // stable — reads from ref

  return activeSection;
}
