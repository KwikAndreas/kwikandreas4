// components/animations/LazySectionOptimized.tsx
"use client";
import { ReactNode, useEffect, useState } from "react";
import { useSectionContext } from "@/lib/context/SectionContextOptimized";
import { motion } from "framer-motion";

interface LazySectionProps {
  sectionId: string;
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.75, 0.75] as const,
    },
  },
};

export function LazySection({
  sectionId,
  children,
  fallback,
  className = "",
}: LazySectionProps) {
  const { shouldLoadSection, loadSection } = useSectionContext();
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Check if section should load
  const shouldLoad = shouldLoadSection(sectionId);

  useEffect(() => {
    if (shouldLoad && !hasLoaded) {
      setHasLoaded(true);
      loadSection(sectionId);
    }
  }, [shouldLoad, hasLoaded, sectionId, loadSection]);

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (!hasLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px",
      }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId, hasLoaded]);

  // Show fallback if not loaded
  if (!hasLoaded) {
    return (
      <div
        id={sectionId}
        className={`min-h-screen flex items-center justify-center ${className}`}
      >
        {fallback || (
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading section...</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.div
      id={sectionId}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
