'use client';

import { Project } from './types';
import ProjectCard from './project-card';

interface ProjectGridProps {
  projects: Project[];
  activeProjectId?: string;
  onSelect: (project: Project) => void;
}

export default function ProjectGrid({ projects, activeProjectId, onSelect }: ProjectGridProps) {
  return (
    <div className="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelect}
            isActive={activeProjectId === project.id}
          />
        ))}
      </div>
    </div>
  );
}