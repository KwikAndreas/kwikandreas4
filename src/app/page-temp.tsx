"use client";
import { HomeSection } from "@/components/sections/Home";
import { AboutSection } from "@/components/sections/About";
import { StackSection } from "@/components/sections/Stack";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";
import { FloatingNav } from "@/components/Navbar";
import { AchievementSection } from "@/components/sections/Achievement";
import Head from "next/head";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andreas Kwik",
    url: "https://kwikandreas.vercel.app",
    image: "https://kwikandreas.vercel.app/images/pp.jpeg",
    sameAs: [
      "https://github.com/kwikandreas",
      "https://linkedin.com/in/kwikandreas",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Universitas Bina Nusantara",
    },
    knowsAbout: [
      "Web Development",
      "Game Development",
      "React.js",
      "Next.js",
      "Unity",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "Mobile Development",
    ],
    description:
      "Experienced Full Stack Developer specializing in web development, game development, and mobile applications with expertise in modern web technologies.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://kwikandreas.vercel.app",
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <FloatingNav />
      <main className="flex flex-col">
        <HomeSection />
        <div id="about">
          <AboutSection />
        </div>
        <AchievementSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
