'use client';

import { useEffect } from 'react';
import { Project } from './types';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import DrawerHeader from './drawer-header';
import DrawerPreview from './drawer-preview';
import DrawerMeta from './drawer-meta';
import DrawerGallery from './drawer-gallery';

interface CaseStudyDrawerProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyDrawer({ project, isOpen, onClose }: CaseStudyDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full md:w-[580px] bg-background z-50
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          shadow-2xl overflow-hidden
        `}
        role="dialog"
        aria-modal="true"
        aria-label={`جزئیات پروژه ${project.title}`}
        dir="rtl"
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header with close button */}
          <DrawerHeader project={project} onClose={onClose} />

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            {/* Preview Section */}
            <div className="p-6 pb-2">
              <DrawerPreview project={project} />
            </div>

            {/* Gallery if exists */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="px-6 pb-4">
                <DrawerGallery images={project.gallery} />
              </div>
            )}

            {/* Meta Information */}
            <div className="px-6 pb-6">
              <DrawerMeta project={project} onClose={onClose} />
            </div>

            {/* Highlights */}
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold mb-4">نکات برجسته</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary ml-2">•</span>
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="px-6 pb-6">
              <Card className="p-6 bg-surface">
                <h3 className="text-xl font-semibold mb-4">علاقه‌مند به پروژه مشابه؟</h3>
                <p className="text-muted-foreground mb-6">
                  ما می‌توانیم برای کسب‌وکار شما نیز راه‌حل‌های مشابهی طراحی و پیاده‌سازی کنیم.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:w-auto">
                    درخواست مشاوره
                  </Button>
                  {project.links?.website && (
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto"
                      onClick={() => window.open(project.links?.website, '_blank')}
                    >
                      مشاهده وب‌سایت
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}