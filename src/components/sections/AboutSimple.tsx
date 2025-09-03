// components/sections/About.tsx - Simple Version
"use client";
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
  Gamepad2,
  University,
  School2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"story" | "journey" | "interests">(
    "story"
  );

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            👨‍💻 About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get to Know Me Better
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate developer who loves creating digital
            experiences that make a difference.
          </p>
        </div>

        {/* Simple Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl overflow-hidden">
                        <Image
                          src="/images/pp.jpeg"
                          alt="Profile"
                          className="rounded-full object-cover"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    Kwik Andreas Jonathan
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Jakarta, Indonesia
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Available for projects
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      Passionate about clean code
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-col gap-2">
                {(["story", "journey", "interests"] as const).map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab(tab)}
                    className="capitalize w-full"
                  >
                    {tab === "journey"
                      ? "Journey"
                      : tab === "interests"
                      ? "Interests"
                      : "Story"}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50 h-full">
              {activeTab === "story" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">My Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I started my journey in technology during high school, where
                    I discovered my passion for creating digital solutions. What
                    began as curiosity about how websites work evolved into a
                    deep love for full-stack development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My experience spans web development, game development, and
                    mobile applications. I enjoy tackling complex problems and
                    turning ideas into functional, beautiful applications that
                    users love.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    technologies, contributing to open source projects, or
                    sharing knowledge with the developer community.
                  </p>
                </div>
              )}

              {activeTab === "journey" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                  <div className="space-y-4">
                    {journey.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium text-primary">
                                {item.year}
                              </span>
                            </div>
                            <h4 className="font-semibold mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === "interests" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">My Interests</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${interest.color} flex items-center gap-3 transition-all duration-200 hover:scale-105`}
                      >
                        <span className="text-lg">{interest.icon}</span>
                        <span className="font-medium text-sm">
                          {interest.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
