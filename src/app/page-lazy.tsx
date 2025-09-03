// app/page.tsx - Optimized with lazy loading
import { HomeSection } from "@/components/sections/Home";
import { AboutSection } from "@/components/sections/AboutOptimized";
import { StackSection } from "@/components/sections/Stack";
import { ProjectsSection } from "@/components/sections/Projects";
import { AchievementSection } from "@/components/sections/Achievement";
import { ContactSection } from "@/components/sections/Contact";
import { SectionProvider } from "@/lib/context/SectionContextOptimized";
import { LazySection } from "@/components/animations/LazySectionOptimized";

export default function HomePage() {
  return (
    <SectionProvider>
      <main className="overflow-x-hidden">
        {/* Home section - Always loaded */}
        <section id="home">
          <HomeSection />
        </section>

        {/* Lazy loaded sections */}
        <LazySection sectionId="about">
          <AboutSection />
        </LazySection>

        <LazySection sectionId="stack">
          <StackSection />
        </LazySection>

        <LazySection sectionId="projects">
          <ProjectsSection />
        </LazySection>

        <LazySection sectionId="achievement">
          <AchievementSection />
        </LazySection>

        <LazySection sectionId="contact">
          <ContactSection />
        </LazySection>
      </main>
    </SectionProvider>
  );
}
