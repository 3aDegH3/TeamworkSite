'use client';

import { useState, useEffect, useMemo } from 'react';
import PortfolioHero from './portfolio-hero';
import PortfolioFilters from './portfolio-filters';
import ProjectGrid from './project-grid';
import CaseStudyDrawer from './case-study-drawer';
import { projects } from './data/projects';
import { Project, Filter, ProjectCategory } from './types';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>(null);

  // Handle project selection to open the drawer
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  // Handle closing the drawer
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  // Handle filter changes for future use
  const handleFilterChange = (filter: Filter) => {
    setActiveFilter(filter);
  };

  // Memoize filtered projects to avoid unnecessary re-renders
  const filteredProjects = useMemo(() => {
    if (!activeFilter || activeFilter === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Close drawer on ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {  // Fixed: changed KeyboardKey to KeyboardEvent
      if (event.key === 'Escape' && isDrawerOpen) {
        handleDrawerClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  return (
    <div className="rtl" dir="rtl">
      {/* Hero Section */}
      <PortfolioHero />

      {/* Filters Section */}
      <PortfolioFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Projects Grid */}
      <ProjectGrid
        projects={filteredProjects}
        onSelect={handleProjectSelect}
        activeProjectId={selectedProject?.id}
      />

      {/* Case Study Drawer */}
      {selectedProject && (
        <CaseStudyDrawer
          project={selectedProject}
          isOpen={isDrawerOpen}
          onClose={handleDrawerClose}
        />
      )}
    </div>
  );
}