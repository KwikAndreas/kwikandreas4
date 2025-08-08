// lib/hooks/use-smooth-navigation.ts
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSmoothNavigation() {
  const router = useRouter();

  const navigateToSection = useCallback((sectionId: string) => {
    // If we're already on the home page, just scroll
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Navigate to home page with hash
      router.push(`/#${sectionId}`);
    }
  }, [router]);

  const navigateToPage = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  return {
    navigateToSection,
    navigateToPage,
  };
}

