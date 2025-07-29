"use client"
import React, { useState, useEffect } from "react";

type ProjectCategory = "website" | "game" | "app";

interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
  hasDemo?: boolean;
  demoUrl?: string;
  visitUrl?: string;
}

const allProjects = [
    {
    title: "Car Rush",
    description: "Game tanpa akhir dibuat dengan Unity",
    category: "game",
    tags: ["Unity", "C#", "Blender", "Adobe Illustrator"],
    imageUrl: "/images/projects/carrush.webp",
    hasDemo: true,
    demoUrl: "https://bit-grow.itch.io/carrush",
  },
  {
    title: "ASLED",
    description: "Platform sewa peralatan pencahayaan",
    category: "app",
    tags: ["Flutter", "Dart", "Figma"],
    imageUrl: "/images/projects/asled.webp",
    hasDemo: false,
  },
  {
    title: "Dikejar Setan v0.01",
    description: "Aplikasi produktivitas untuk manajemen tugas.",
    category: "game",
    tags: ["Unity", "C#", "Blender"],
    imageUrl: "/images/projects/dsn.webp",
    hasDemo: true,
    demoUrl: "https://bit-grow.itch.io/dikejar-setan",
  },
  {
    title: "UBM CBT",
    description: "Platform ujian berbasis Aplikasi",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/logo_ubm.webp",
    hasDemo: false,
    visitUrl: "https://angke5.web.app/",
  },
  {
    title: "Move IT",
    description: "Platform sewa kendaraan",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/logo_ubm.webp",
    hasDemo: false,
  },
  {
    title: "Angke5",
    description: "Web untuk booking ruangan Restoran Angke.",
    category: "website",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/angke5.webp",
    hasDemo: false,
    visitUrl: "https://angke5.web.app/",
  },
  {
    title: "Bobuah",
    description: "Aplikasi untuk pemesanan Teh Boba Buah",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/projects/BOBUAH.webp",
    hasDemo: false,
  },
  {
    title: "Waste Sorter",
    description:
      "Game untuk belajar klasifikasi sampah dengan Machine Learning",
    category: "game",
    tags: ["Unity", "C#", "Python", "Tensorflow", "Keras", "Blender"],
    imageUrl: "/images/projects/waste_sorter.webp",
    hasDemo: true,
    demoUrl: "https://bit-grow.itch.io/waste-sorter",
  },
  {
    title: "GKI Cinda",
    description: "Web untuk profiling Gereja Cipinang Indah.",
    category: "website",
    tags: ["React", "Vite", "Typescript", "TailwindCSS", "Supabase", "Next"],
    imageUrl: "/images/projects/gkicinda.webp",
    hasDemo: false,
    visitUrl: "https://gkicinda.vercel.app/",
  },
]

const categories: { id: ProjectCategory | "all"; name: string }[] = [
  { id: "all", name: "Semua" },
  { id: "website", name: "Website" },
  { id: "game", name: "Game" },
  { id: "app", name: "Aplikasi" },
];

function ProjectSkeleton() {

}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [filter]);

  return(
    <div></div>
  )
}