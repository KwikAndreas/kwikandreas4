"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface SectionContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  shouldLoadSection: (sectionName: string) => boolean;
  loadedSections: Set<string>;
  sections: string[];
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

interface SectionProviderProps {
  children: React.ReactNode;
  sections: string[];
}

export function SectionProvider({ children, sections }: SectionProviderProps) {
  const [currentSection, setCurrentSection] = useState(sections[0] || "home");
  const [loadedSections, setLoadedSections] = useState<Set<string>>(
    new Set([sections[0] || "home"])
  );

  const shouldLoadSection = (sectionName: string) => {
    const currentIndex = sections.indexOf(currentSection);
    const sectionIndex = sections.indexOf(sectionName);
    const distance = Math.abs(sectionIndex - currentIndex);

    // Load current section + 1 section before and after, plus keep loaded sections
    const shouldLoad = distance <= 1 || loadedSections.has(sectionName);

    // Add to loaded sections if within range
    if (distance <= 1) {
      setLoadedSections((prev) => new Set([...prev, sectionName]));
    }

    // Only unload sections that are more than 2 positions away
    if (distance > 2) {
      // Keep the section loaded for a smoother experience
      return loadedSections.has(sectionName);
    }

    return shouldLoad;
  };

  // Update current section and manage loaded sections
  const handleSetCurrentSection = (section: string) => {
    setCurrentSection(section);
    setLoadedSections((prev) => new Set([...prev, section]));
  };

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setCurrentSection: handleSetCurrentSection,
        shouldLoadSection,
        loadedSections,
        sections,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
}

// Hook untuk section observer
interface UseSectionObserverProps {
  sectionName: string;
  threshold?: number;
}

export function useSectionObserver({
  sectionName,
  threshold = 0.5,
}: UseSectionObserverProps) {
  const { setCurrentSection } = useSectionContext();

  const { ref, inView } = useInView({
    threshold,
    rootMargin: "-20% 0px -20% 0px",
  });

  useEffect(() => {
    if (inView) {
      // Update current section without changing URL
      setCurrentSection(sectionName);

      // Remove hash from URL if present to keep clean URLs
      if (window.location.hash && window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, [inView, sectionName, setCurrentSection]);

  return { ref, inView };
}
