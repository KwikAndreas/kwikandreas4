"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly client: string;
  readonly duration: string;
  readonly description: string;
  readonly fullDescription: string;
  readonly background: string;
  readonly objectives: readonly string[];
  readonly images: readonly string[];
  readonly image: string;
  readonly technologies: readonly string[];
  readonly liveLink?: string;
  readonly githubLink?: string;
  readonly featured: boolean;
  readonly stats: {
    readonly users?: string;
    readonly completionDate: string;
    readonly rating?: number;
  };
  readonly status: string;
}

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleBackToProjects = () => {
    router.push("/#projects");
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-8 left-8 z-50"
      >
        <Button
          onClick={handleBackToProjects}
          variant="outline"
          size="lg"
          className="backdrop-blur-sm bg-background/80 hover:bg-background/90 border-border/50 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-4 max-w-6xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-4 pt-16">
          <Badge variant="outline" className="mb-4">
            {project.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            {project.title}
          </h1>
          <div className="flex justify-center">
            <Badge
              variant={project.status === "Live" ? "default" : "secondary"}
              className={`text-sm px-4 py-1 ${
                project.status === "Live"
                  ? "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30"
                  : project.status === "Abandoned"
                  ? "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30"
                  : ""
              }`}
            >
              {project.status}
            </Badge>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          {/* Main Image */}
          <div className="relative aspect-video mb-6 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.images[selectedImageIndex] || project.image}
              alt={`${project.title} screenshot ${selectedImageIndex + 1}`}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>

          {project.images && project.images.length > 1 && (
            <div className="flex gap-4 justify-center overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImageIndex === index
                      ? "border-primary shadow-lg"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Project Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">
                    <User className="w-3 h-3 mr-1" />
                    Category
                  </Badge>
                  <span className="text-sm">{project.category}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="outline">
                    <User className="w-3 h-3 mr-1" />
                    Client
                  </Badge>
                  <span className="text-sm">{project.client}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="outline">
                    <Clock className="w-3 h-3 mr-1" />
                    Duration
                  </Badge>
                  <span className="text-sm">{project.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                  <span className="text-sm">
                    {project.stats.completionDate}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                {project.liveLink && (
                  <Button asChild className="flex-1">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Preview
                    </a>
                  </Button>
                )}

                {project.githubLink && (
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Description & Details */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Project Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.fullDescription}
              </p>
            </div>

            {/* Background */}
            <div>
              <h3 className="text-xl font-bold mb-2">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.background}
              </p>
            </div>

            {/* Objectives */}
            <div>
              <h3 className="text-xl font-bold mb-2">Project Objectives</h3>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats if available */}
            {(project.stats?.users || project.stats?.rating) && (
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Project Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.stats?.users && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {project.stats.users}
                      </div>
                      <div className="text-sm text-muted-foreground">Users</div>
                    </div>
                  )}
                  {project.stats?.rating && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {project.stats.rating}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Rating
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
