// lib/context/SectionContextOptimized.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

interface SectionContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  loadedSections: Set<string>;
  shouldLoadSection: (section: string) => boolean;
  loadSection: (section: string) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

const SECTION_ORDER = [
  "home",
  "about",
  "stack",
  "projects",
  "achievement",
  "contact",
];

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSectionState] = useState("home");
  const [loadedSections, setLoadedSections] = useState<Set<string>>(
    new Set(["home"])
  );

  // Load section based on current section
  const loadSection = useCallback((section: string) => {
    setLoadedSections((prev) => new Set([...prev, section]));
  }, []);

  // Determine if a section should be loaded
  const shouldLoadSection = useCallback(
    (section: string) => {
      if (section === "home") return true;
      if (loadedSections.has(section)) return true;

      const currentIndex = SECTION_ORDER.indexOf(currentSection);
      const sectionIndex = SECTION_ORDER.indexOf(section);

      // Load current section and the next one for smooth transition
      return sectionIndex <= currentIndex + 1;
    },
    [currentSection, loadedSections]
  );

  // Enhanced setCurrentSection with intelligent loading
  const setCurrentSection = useCallback(
    (section: string) => {
      setCurrentSectionState(section);

      // Load current section
      if (!loadedSections.has(section)) {
        loadSection(section);
      }

      // Preload next section for smooth scrolling
      const currentIndex = SECTION_ORDER.indexOf(section);
      const nextSection = SECTION_ORDER[currentIndex + 1];
      if (nextSection && !loadedSections.has(nextSection)) {
        setTimeout(() => loadSection(nextSection), 500);
      }
    },
    [loadedSections, loadSection]
  );

  // Load sections based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTION_ORDER.map((id) =>
        document.getElementById(id)
      ).filter(Boolean);

      for (const section of sections) {
        const rect = section!.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && rect.top < window.innerHeight / 2) {
          const sectionId = section!.id;
          if (sectionId !== currentSection) {
            setCurrentSection(sectionId);
          }
          break;
        }
      }
    };

    // Throttled scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [currentSection, setCurrentSection]);

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        loadedSections,
        shouldLoadSection,
        loadSection,
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
