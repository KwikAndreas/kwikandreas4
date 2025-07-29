// lib/hooks/use-active-section.ts
import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } 
    );

    const currentObserver = observer.current;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          currentObserver.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}