// lib/hooks/use-smooth-navigation.ts
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSmoothNavigation() {
  const router = useRouter();

  const navigateToSection = useCallback(
    (sectionId: string) => {
      // If we're already on the home page, just scroll
      if (window.location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Keep URL clean without hash
          if (window.history.replaceState) {
            window.history.replaceState(null, "", "/");
          }
        }
      } else {
        // Navigate to home page and then scroll to section
        router.push("/");
        // Add a small delay to ensure page is loaded before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    },
    [router]
  );

  const navigateToPage = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  return {
    navigateToSection,
    navigateToPage,
  };
}
