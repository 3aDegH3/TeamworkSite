'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ProjectCard from './project-card';
import { Button } from '@/src/components/ui/button';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const Badge = ({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}) => {
  const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variants = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-input bg-background text-foreground',
  };
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
};

interface ExtendedProject {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  previewImage?: string;
  date?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
  summary?: string;
  description?: string;
  technologies?: string[];
  links?: { website?: string };
  client?: string;
}

type SortOption = 'newest' | 'oldest' | 'name' | 'category';

export default function ProjectGrid({
  projects,
  activeProjectId,
  onSelect,
  className = '',
}: {
  projects: ExtendedProject[];
  activeProjectId?: string;
  onSelect: (p: ExtendedProject) => void;
  className?: string;
}) {
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const sortedProjects = useMemo(() => {
    const arr = [...projects];
    arr.sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
        case 'oldest':
          return new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime();
        case 'name':
          return (a.title || '').localeCompare(b.title || '');
        case 'category':
          return (a.category || '').localeCompare(b.category || '');
        default:
          return 0;
      }
    });
    return arr;
  }, [projects, sortOption]);

  const getSortLabel = (opt: SortOption) => {
    switch (opt) {
      case 'newest':
        return 'جدیدترین';
      case 'oldest':
        return 'قدیمی‌ترین';
      case 'name':
        return 'نام';
      case 'category':
        return 'دسته‌بندی';
    }
  };

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setIsMenuOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const categoryCounts = useMemo(() => {
    const acc: Record<string, number> = {};
    for (const p of projects) acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, [projects]);

  return (
    <div className={`rtl ${className}`}>
      {/* Top bar ساده */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">{sortedProjects.length} پروژه</h2>
          <Badge variant="secondary" className="text-xs">
            {Object.keys(categoryCounts).length} دسته‌بندی
          </Badge>
        </div>

        {/* Sort */}
        <div className="relative" ref={menuRef}>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="مرتب‌سازی"
          >
            <SlidersHorizontal className="h-4 w-4" />
            مرتب‌سازی: {getSortLabel(sortOption)}
            <ChevronDown className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </Button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg p-1 z-10 min-w-[160px]">
              {(['newest', 'oldest', 'name', 'category'] as SortOption[]).map((opt) => (
                <button
                  key={opt}
                  className={`w-full text-right px-3 py-2 text-sm rounded-md hover:bg-surface ${
                    sortOption === opt ? 'bg-surface font-medium' : ''
                  }`}
                  onClick={() => {
                    setSortOption(opt);
                    setIsMenuOpen(false);
                  }}
                >
                  {getSortLabel(opt)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* فقط Grid (ساده) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelect}
            isActive={activeProjectId === project.id}
            index={index}
          />
        ))}
      </div>

      {sortedProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-6xl mb-4 opacity-50">🔍</div>
          <h3 className="text-2xl font-semibold mb-2">پروژه‌ای یافت نشد</h3>
          <p className="text-muted-foreground mb-6 max-w-md">فعلاً پروژه‌ای برای نمایش وجود ندارد.</p>
        </div>
      )}
    </div>
  );
}
