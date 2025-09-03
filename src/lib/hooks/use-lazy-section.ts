"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

interface UseLazySectionProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useLazySection({
  threshold = 0.1,
  rootMargin = "100px",
  triggerOnce = true,
}: UseLazySectionProps = {}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      setShouldLoad(true);
    }
  }, [inView]);

  return {
    ref,
    shouldLoad,
    inView,
  };
}

// Hook untuk mengatur loading section berdasarkan urutan
export function useSequentialLoading(
  sections: string[],
  currentSection: string
) {
  const currentIndex = sections.indexOf(currentSection);

  const getSectionLoadState = (sectionName: string) => {
    const sectionIndex = sections.indexOf(sectionName);
    const distance = Math.abs(sectionIndex - currentIndex);

    // Load current section + 1 section before and after
    return distance <= 1;
  };

  return {
    shouldLoadSection: getSectionLoadState,
    currentIndex,
  };
}
