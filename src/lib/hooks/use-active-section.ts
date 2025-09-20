// lib/hooks/use-active-section.ts
import { useState, useEffect, useRef, useCallback } from "react";

export function useActiveSection(
  sectionIds: string[],
  enabled: boolean = true
) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionsInView = useRef<Set<string>>(new Set());

  // Function to determine which section should be active
  const determineActiveSection = useCallback(() => {
    const sections = sectionIds
      .map((id) => ({
        id,
        element: document.getElementById(id),
      }))
      .filter((section) => section.element !== null)
      .map((section) => {
        const rect = section.element!.getBoundingClientRect();
        return {
          id: section.id,
          element: section.element!,
          rect,
          distance: Math.abs(rect.top),
          isVisible: rect.top < window.innerHeight && rect.bottom > 0,
        };
      })
      .filter((section) => section.isVisible);

    if (sections.length === 0) return;

    // Find the section closest to the top of viewport
    const closestSection = sections.reduce((closest, current) => {
      return current.distance < closest.distance ? current : closest;
    });

    // Special handling for sections with large height
    const centerViewport = window.innerHeight / 2;
    const sectionInCenter = sections.find((section) => {
      const { top, bottom } = section.rect;
      return top <= centerViewport && bottom >= centerViewport;
    });

    const newActiveSection = sectionInCenter?.id || closestSection.id;

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [sectionIds, activeSection]);

  useEffect(() => {
    // Skip setup if not enabled
    if (!enabled) {
      return;
    }

    // Intersection Observer for tracking sections in viewport
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionsInView.current.add(entry.target.id);
          } else {
            sectionsInView.current.delete(entry.target.id);
          }
        });

        // Use a small delay to prevent rapid switching
        setTimeout(determineActiveSection, 50);
      },
      {
        rootMargin: "-10% 0px -10% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    const currentObserver = observer.current;

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    // Additional scroll listener for more precise detection
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(determineActiveSection, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    setTimeout(determineActiveSection, 500);

    return () => {
      if (currentObserver) {
        sectionIds.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            currentObserver.unobserve(element);
          }
        });
      }
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [sectionIds, determineActiveSection, enabled]);

  return activeSection;
}
