'use client';

import { useState } from 'react';
import { Project } from './types';
import { Card } from '@/src/components/ui/card';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isActive?: boolean;
}

export default function ProjectCard({ project, onSelect, isActive = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = () => {
    onSelect(project);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <Card
      className={`
        relative overflow-hidden cursor-pointer transition-all duration-300
        ${isHovered ? 'shadow-lg transform -translate-y-2' : ''}
        ${isActive ? 'ring-2 ring-primary' : ''}
        border border-border hover:border-primary/30
      `}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`پروژه ${project.title}: ${project.summary}`}
    >
      {/* Cover Image with 16:10 aspect ratio */}
      <div className="relative h-0 pb-[62.5%] overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-500 ease-in-out
            ${isHovered ? 'scale-[1.03]' : 'scale-100'}
          `}
        />
      </div>

      {/* Card Content */}
      <div className="p-5 rtl text-right">
        {/* Category Chip */}
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-1">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.summary}
        </p>

        {/* Technology Chips */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs rounded bg-surface text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs rounded bg-surface text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}