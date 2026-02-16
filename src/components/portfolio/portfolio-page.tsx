'use client';

import { useMemo, useState, useCallback, useEffect } from 'react';
import PortfolioHero from './portfolio-hero';
import ProjectGrid from './project-grid';
import CaseStudyDrawer from './case-study-drawer';
import { projects } from './data/projects';

type ExtendedProject = any;

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ExtendedProject | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const allProjects = useMemo(() => projects as ExtendedProject[], []);

  const handleProjectSelect = useCallback((p: ExtendedProject) => {
    setSelectedProject(p);
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => setIsDrawerOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) handleDrawerClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isDrawerOpen, handleDrawerClose]);

  const idx = selectedProject ? allProjects.findIndex((p) => p.id === selectedProject.id) : -1;
  const prev = idx > 0 ? allProjects[idx - 1] : undefined;
  const next = idx >= 0 && idx < allProjects.length - 1 ? allProjects[idx + 1] : undefined;

  return (
    <div className="rtl min-h-screen bg-background" dir="rtl">
      <PortfolioHero />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <ProjectGrid projects={allProjects} onSelect={handleProjectSelect} activeProjectId={selectedProject?.id} />
      </section>

      {selectedProject && (
        <CaseStudyDrawer
          project={selectedProject}
          isOpen={isDrawerOpen}
          onClose={handleDrawerClose}
          previousProject={prev}
          nextProject={next}
          onProjectChange={setSelectedProject}
        />
      )}
    </div>
  );
}
