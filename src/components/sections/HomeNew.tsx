// components/sections/Home.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram, Download } from "lucide-react";
import { useState, useEffect } from "react";
import {
  GlassCard,
  FloatingElement,
  GradientText,
  ParticleBackground,
  MorphingShape,
} from "@/components/animations/ReactBitsComponents";
import {
  StaggerContainer,
  HoverAnimation,
} from "@/components/animations/AnimatedContainer";

function TypingAnimation({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <GradientText gradient="rainbow" className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </GradientText>
  );
}

export function HomeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState({}, "", "/");
    }
  };

  const roles = ["Web Developer", "Game Developer", "Mobile Developer"];

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Effects */}
      <ParticleBackground particleCount={30} />
      <MorphingShape className="w-96 h-96 top-20 left-20" color="blue" />
      <MorphingShape className="w-64 h-64 bottom-20 right-20" color="purple" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <StaggerContainer className="text-center z-10 max-w-6xl mx-auto px-4">
        <motion.div className="mb-6">
          <GlassCard className="inline-block p-4 mb-8" glow>
            <span className="text-sm md:text-base text-muted-foreground font-medium tracking-wider uppercase">
              👋 Hello, I&apos;m
            </span>
          </GlassCard>
        </motion.div>

        <motion.h1 className="mb-8">
          <span className="text-4xl md:text-6xl lg:text-8xl font-bold block mb-4">
            <GradientText gradient="rainbow" className="block">
              Andreas Kwik
            </GradientText>
          </span>
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground">
            I&apos;m a <TypingAnimation words={roles} />
          </div>
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating exceptional digital experiences through
          innovative web applications, engaging games, and intuitive mobile
          solutions.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <HoverAnimation scale={1.05}>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </HoverAnimation>

          <HoverAnimation scale={1.05}>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group border-2 border-primary/20 hover:border-primary/40 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <a
                href="/KwikAndreas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </Button>
          </HoverAnimation>
        </motion.div>

        <motion.div className="flex justify-center space-x-8">
          {[
            {
              icon: Github,
              href: "https://github.com/kwikandreas",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/kwikandreas",
              label: "LinkedIn",
            },
            {
              icon: Instagram,
              href: "https://instagram.com/kwikandreas",
              label: "Instagram",
            },
          ].map((social, index) => (
            <FloatingElement
              key={social.label}
              duration={3 + index * 0.5}
              amplitude={8}
            >
              <HoverAnimation scale={1.2} rotateOnHover>
                <GlassCard className="p-4" hover={false}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                </GlassCard>
              </HoverAnimation>
            </FloatingElement>
          ))}
        </motion.div>
      </StaggerContainer>
    </section>
  );
}
