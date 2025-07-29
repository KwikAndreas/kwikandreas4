// components/sections/About.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Users,
  Coffee,
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  Heart,
  ExternalLink,
  Database,
  Smartphone,
  Globe,
  Gamepad2,
  PanelTop,
  Instagram,
  School,
  University,
  School2,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const achievements = [
  {
    icon: Code2,
    title: "40+ Projects",
    description: "Completed web and mobile applications",
  },
  {
    icon: Users,
    title: "20+ Clients",
    description: "Satisfied clients worldwide",
  },
  {
    icon: Coffee,
    title: "4+ Years",
    description: "Professional development experience",
  },
  {
    icon: Award,
    title: "7 Certifications",
    description: "Industry recognized certifications",
  },
];

const interests = [
  {
    icon: "🎮",
    name: "Game Development",
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  },
  {
    icon: "📱",
    name: "Mobile Development",
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    icon: "💻",
    name: "Web Development",
    color: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  {
    icon: "🧠",
    name: "Machine Learning",
    color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  },
  {
    icon: "📖",
    name: "Open Source",
    color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: "🤝",
    name: "Collaboration",
    color: "bg-pink-500/20 text-pink-600 dark:text-pink-400",
  },
];

// Updated journey to match changelog theme and structure
const journey = [
  {
    year: "2020",
    title: "SMK Global Multimedia Creative",
    description:
      "Started my journey in technology with a focus on multimedia and creative design.",
    icon: School2,
  },
  {
    year: "2023 Q2",
    title: "Creating Game",
    description:
      "Developed a game using Unity and C#. Focused on game mechanics, graphics, and user experience.",
    icon: Gamepad2,
  },
  {
    year: "2023 Q2",
    title: "Graduated from SMK Global Multimedia Creative",
    description:
      "Completed my studies with a focus on web development and game development",
    icon: GraduationCap,
  },
  {
    year: "2023 Q3",
    title: "Bunda Mulia University",
    description:
      "Started my studies in Computer Science at Bunda Mulia University, focusing on software engineering and AI.",
    icon: University,
  },
  {
    year: "2023 Q3",
    title: "Bunda Mulia University",
    description:
      "Started my studies in Computer Science at Bunda Mulia University, focusing on software engineering and AI.",
    icon: University,
  }
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"story" | "journey" | "interests">(
    "story"
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            👨‍💻 About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Passionate Developer with a
            <span className="block text-primary">Creative Mind</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences that make a difference, one line of
            code at a time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                        <Image
                          src="/images/pp.jpeg"
                          alt="Profile"
                          className="rounded-full"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      Kwik Andreas Jonathan
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Jakarta, Indonesia
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Available for projects
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        Passionate about clean code
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex gap-2 mb-6">
                {(["story", "journey", "interests"] as const).map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab(tab)}
                    className="capitalize"
                  >
                    {tab === "journey"
                      ? "Journey"
                      : tab === "interests"
                      ? "Interests"
                      : "Story"}
                  </Button>
                ))}
              </div>

              {/* Tab Content */}
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50 min-h-[400px]">
                {activeTab === "story" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold mb-4">My Story</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I am a web developer with a passion for creating modern,
                      responsive, and intuitive web applications. My journey
                      began with a simple curiosity about how websites work.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With experience in the React, Next.js, and TypeScript
                      technology stack, I focus on writing clean and scalable
                      code. Every project is an opportunity to learn and grow.
                      belajar dan berkembang.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I believe that technology should make life easier, and
                      that drives me to keep innovating in every solution I
                      create.
                    </p>
                  </motion.div>
                )}

                {activeTab === "journey" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold mb-6">
                      Development Journey
                    </h4>
                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />

                      <div className="space-y-6">
                        {journey.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex gap-4 relative"
                          >
                            {/* Timeline Dot */}
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary relative z-10">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-6">
                              <div className="flex items-center gap-3 mb-2">
                                <h5 className="font-semibold text-foreground">
                                  {item.title}
                                </h5>
                                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                                  {item.year}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "interests" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold mb-4">
                      Yang Saya Sukai
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className={`p-3 rounded-lg border ${interest.color} cursor-pointer transition-all`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{interest.icon}</span>
                            <span className="text-sm font-medium">
                              {interest.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        "The best way to predict the future is to create it.
                        That's why I'm passionate about building solutions that
                        matter."
                      </p>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements & Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievements Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6">Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="p-4 text-center bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                      <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <achievement.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {achievement.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "Flutter",
                    "Supabase",
                    "C#",
                    "Unity",
                    "Dart",
                    "Firebase",
                    "Python",
                    "TensorFlow",
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {tech.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs font-medium">{tech}</p>
                    </motion.div>
                  ))}
                </div>
                <a href="#stack">
                  <Button variant="outline" size="sm" className="w-full group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                    Lihat Tech Stack Lengkap
                  </Button>
                </a>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
