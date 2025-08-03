// components/sections/Projects.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import { ExternalLink, Github, Eye, Calendar, Users, Star } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "GKI Cipinang Indah",
    category: "Web Development",
    description:
      "Website gereja modern dengan sistem manajemen jemaat, jadwal ibadah, dan platform donasi online. Dibangun dengan Next.js dan PostgreSQL.",
    fullDescription:
      "Platform digital komprehensif untuk gereja yang mencakup sistem registrasi jemaat, manajemen acara, streaming ibadah online, dan integrasi pembayaran untuk donasi.",
    image: "/project/gkicinda.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe",
    ],
    liveLink: "https://gkicinda.id",
    githubLink: "https://github.com/KwikAndreas/GKI-CINDA",
    featured: true,
    stats: {
      users: "100+",
      completionDate: "August 2025",
    },
    status: "Live",
  },
  {
    title: "Car Rush",
    category: "Game Development",
    description:
      "Game mobile endless runner dengan Unity 3D. Fitur multiplayer real-time, sistem upgrade kendaraan, dan leaderboard global.",
    fullDescription:
      "Game racing mobile dengan mekanik endless runner, sistem monetisasi in-app purchase, analytics terintegrasi, dan cloud save functionality.",
    image: "/project/carrush.webp",
    technologies: ["Unity", "C#", "Firebase", "Google Play Services", "AdMob"],
    liveLink: "https://bit-grow.itch.io/carrush",
    githubLink: "#",
    featured: false,
    stats: {
      completionDate: "June 2023",
    },
    status: "Abandoned",
  },
  {
    title: "Angke5",
    category: "Book Restaurant",
    description:
      "Platform e-commerce untuk penjualan buah segar dengan sistem inventory real-time, tracking pengiriman, dan program loyalitas pelanggan.",
    fullDescription:
      "E-commerce platform dengan fitur advanced seperti AI recommendation engine, real-time inventory management, automated logistics, dan customer loyalty program.",
    image: "/project/angke5.webp",
    liveLink: "https://angke5.web.app/",
    technologies: ["Flutter", "Firebase"],
    featured: true,
    stats: {
      users: "200+",
      rating: 4.8,
      completionDate: "May 2025",
    },
    status: "Live",
  },
  {
    title: "Waste Sorter",
    category: "Game Development",
    description:
      "Game edukasi untuk memilah sampah dengan mekanik drag-and-drop, leaderboard, dan sistem reward.",
    fullDescription:
      "Game interaktif yang mengajarkan pemain tentang pentingnya daur ulang dan pengelolaan sampah. Fitur termasuk berbagai level, tantangan waktu, dan integrasi media sosial.",
    image: "/project/waste_sorter.webp",
    technologies: ["Unity", "C#", "Blender", "Adobe Illustrator"],
    liveLink: "https://bit-grow.itch.io/waste-sorter",
    featured: false,
    stats: {
      users: "40+",
      rating: 5.0,
      completionDate: "Nov 2024",
    },
    status: "Live",
  },
];

const categories = ["All", "Web Development", "Game Development", "E-commerce"];
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group ${project.featured ? "md:col-span-2" : ""}`}
    >
      <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-secondary/20">
            {/* Actual Project Image */}
            {!imageError ? (
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={project.featured}
              />
            ) : (
              // Fallback if image fails to load
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary/60" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {project.title}
                  </p>
                </div>
              </div>
            )}

            {/* Dark Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
              animate={{ opacity: isHovered ? 0.8 : 0.4 }}
              transition={{ duration: 0.3 }}
            />

            {/* Status Badge */}
            <div className="absolute top-4 left-4 z-10">
              <Badge
                variant={project.status === "Live" ? "default" : "secondary"}
                className={`text-xs ${
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

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  variant="secondary"
                  className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30"
                >
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Featured
                </Badge>
              </div>
            )}

            {/* Overlay Actions */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-3 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.3 }}
            >
              {project.liveLink && (
                <Button size="sm" className="backdrop-blur-sm bg-primary/90 hover:bg-primary">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </a>
                </Button>
              )}
              {project.githubLink && project.githubLink !== "#" && (
                <Button
                  size="sm"
                  variant="outline"
                  className="backdrop-blur-sm bg-background/90 hover:bg-background"
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </motion.div>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="outline" className="text-xs mb-2">
                {project.category}
              </Badge>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            {project.stats.users && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {project.stats.users}
              </div>
            )}
            {project.stats.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {project.stats.rating}
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.stats.completionDate}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {project.liveLink && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubLink && project.githubLink !== "#" && (
              <Button asChild variant="ghost" size="sm">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-8">
            🚀 My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my recent work spanning web development, game
            development, and e-commerce solutions with modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/kwikandreas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
