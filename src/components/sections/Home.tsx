// components/sections/Home.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { GradientText } from "@/components/animations/ReactBitsComponents";

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
    <GradientText
      gradient="rainbow"
      className="text-4xl md:text-6xl lg:text-7xl font-bold"
    >
      {currentText}
      <span className="animate-pulse">|</span>
    </GradientText>
  );
}

const generateParticles = () => {
  const particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      id: i,
      left: (i * 17) % 100,
      top: (i * 23) % 100,
      duration: 2 + (i % 3),
      delay: (i * 0.1) % 2,
      xMovement: ((i % 5) - 2) * 20,
      yMovement: ((i % 7) - 3) * 15,
    });
  }
  return particles;
};

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() => generateParticles());

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          animate={{
            x: [0, particle.xMovement],
            y: [0, particle.yMovement],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  );
}

export function HomeSection() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="mb-4">
          <span className="text-sm md:text-base text-muted-foreground font-medium tracking-wider uppercase">
            👋 Hello, Im
          </span>
        </motion.div>

        <motion.h1
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground/70 mb-6"
        >
          Kwik Andreas
        </motion.h1>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="mb-8">
          <h2 className="text-xl md:text-3xl font-semibold text-muted-foreground">
            Im a <TypingAnimation words={roles} />
          </h2>
        </motion.div>

        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Passionate about creating innovative digital solutions with modern
          technologies. I transform ideas into reality through clean code and
          exceptional user experiences.
        </motion.p>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="group relative overflow-hidden"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Hubungi Saya
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("/KwikAndreas_Resume.pdf", "_blank")}
            className="group"
          >
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download CV
          </Button>
        </motion.div>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex justify-center space-x-6"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/KwikAndreas",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/kwik-jonathan/",
              label: "LinkedIn",
            },
            {
              icon: Instagram,
              href: "https://www.instagram.com/kwikandreas/",
              label: "Instagram",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
        className="absolute bottom-10 z-10"
      >
        <button
          onClick={() => scrollToSection("about")}
          aria-label="Scroll down"
          className="flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2"
        >
          <span className="text-xs text-muted-foreground mb-2 group-hover:text-primary transition-colors">
            Scroll Down
          </span>
          <ArrowDown className="w-6 h-6 text-muted-foreground group-hover:text-primary animate-bounce transition-colors" />
        </button>
      </motion.div>
    </section>
  );
}
