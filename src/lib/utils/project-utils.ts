// lib/utils/project-utils.ts
import { projects } from "@/lib/projects-data";

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getRelatedProjects(
  currentProjectId: string,
  limit: number = 3
) {
  const currentProject = getProjectById(currentProjectId);
  if (!currentProject) return [];

  return projects
    .filter(
      (project) =>
        project.id !== currentProjectId &&
        project.category === currentProject.category
    )
    .slice(0, limit);
}

export function getAllProjectCategories() {
  return [...new Set(projects.map((project) => project.category))];
}
