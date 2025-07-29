"use client";
import { HomeSection } from "@/components/sections/Home";
import { AboutSection } from "@/components/sections/About";
import { StackSection } from "@/components/sections/Stack";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";
import { FloatingNav } from "@/components/Navbar";
import { AchievementSection } from "@/components/sections/Achievement";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main className="flex flex-col">
        <HomeSection />
        <AboutSection />
        <AchievementSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
