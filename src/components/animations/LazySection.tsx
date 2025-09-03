"use client";

import { useLazySection } from "@/lib/hooks/use-lazy-section";
import { AnimatedContainer } from "./AnimatedContainer";
import { Skeleton } from "@/components/ui/skeleton";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  animationType?: "fade" | "slide" | "scale" | "bounce" | "flip";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export function LazySection({
  children,
  fallback,
  className = "",
  animationType = "slide",
  direction = "up",
  delay = 0,
}: LazySectionProps) {
  const { ref, shouldLoad } = useLazySection({
    threshold: 0.1,
    rootMargin: "150px",
    triggerOnce: true,
  });

  const defaultFallback = (
    <div className="space-y-4 p-8">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={ref} className={className}>
      {shouldLoad ? (
        <AnimatedContainer
          animationType={animationType}
          direction={direction}
          delay={delay}
        >
          {children}
        </AnimatedContainer>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
}

// Wrapper untuk skeleton loading yang lebih spesifik
interface SectionSkeletonProps {
  type: "hero" | "about" | "projects" | "skills" | "contact";
  className?: string;
}

export function SectionSkeleton({
  type,
  className = "",
}: SectionSkeletonProps) {
  const skeletonMap = {
    hero: (
      <div className={`space-y-8 p-8 text-center ${className}`}>
        <Skeleton className="h-16 w-2/3 mx-auto" />
        <Skeleton className="h-6 w-4/5 mx-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <div className="flex justify-center gap-4 mt-8">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    ),
    about: (
      <div className={`space-y-6 p-8 ${className}`}>
        <Skeleton className="h-12 w-1/3 mx-auto" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/5" />
          </div>
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    ),
    projects: (
      <div className={`space-y-8 p-8 ${className}`}>
        <Skeleton className="h-12 w-1/3 mx-auto" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    ),
    skills: (
      <div className={`space-y-8 p-8 ${className}`}>
        <Skeleton className="h-12 w-1/3 mx-auto" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="space-y-2 text-center">
              <Skeleton className="h-16 w-16 mx-auto rounded-full" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    ),
    contact: (
      <div className={`space-y-6 p-8 ${className}`}>
        <Skeleton className="h-12 w-1/3 mx-auto" />
        <div className="max-w-md mx-auto space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-12 w-1/3" />
        </div>
      </div>
    ),
  };

  return skeletonMap[type];
}
