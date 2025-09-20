// app/projects/[id]/page.tsx
import { projects } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

// Generate static params for all project IDs
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find(
    (p) => p.id === decodeURIComponent(resolvedParams.id)
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Kwik Andreas Jonathan`,
    description: project.fullDescription,
    openGraph: {
      title: project.title,
      description: project.fullDescription,
      images: [`https://kwikandreas.vercel.app${project.image}`],
      url: `https://kwikandreas.vercel.app/projects/${project.id}`,
    },
  };
}

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const projectId = decodeURIComponent(resolvedParams.id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
