'use client';

import { useState, useEffect } from 'react';
import PortfolioHero from '@/src/components/portfolio/portfolio-hero';
import ProjectGrid from '@/src/components/portfolio/project-grid';
import CaseStudyDrawer from '@/src/components/portfolio/case-study-drawer';
import { Project } from '@/src/components/portfolio/types';
import { projects } from '@/src/components/portfolio/data/projects';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        handleDrawerClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  return (
    <div className="rtl min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <PortfolioHero />
      </section>

      {/* Projects Grid */}
      <section className="pb-16 md:pb-24">
        <ProjectGrid 
          projects={projects} 
          onSelect={handleProjectSelect}
          activeProjectId={selectedProject?.id}
        />
      </section>

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