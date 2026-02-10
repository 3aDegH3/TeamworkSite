'use client';

import { Project } from './types';
import { Button } from '@/src/components/ui/button';

interface DrawerHeaderProps {
  project: Project;
  onClose: () => void;
}

export default function DrawerHeader({ project, onClose }: DrawerHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-background border-b border-border p-6">
      <div className="flex items-start justify-between rtl">
        <div className="flex-1">
          {/* Category Chip */}
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2 text-foreground">
            {project.title}
          </h2>

          {/* Summary */}
          <p className="text-muted-foreground">
            {project.summary}
          </p>
        </div>

        {/* Close Button */}
        <Button
          variant="ghost"
          onClick={onClose}
          className="mr-4 ltr:ml-4 p-2 h-10 w-10"
          aria-label="بستن"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Button>
      </div>
    </div>
  );
}