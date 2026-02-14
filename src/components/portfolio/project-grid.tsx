'use client';

import { useState, useEffect, useRef } from 'react';
import ProjectCard from './project-card';
import { Button } from '@/src/components/ui/button';
import { 
  Grid, 
  List, 
  SlidersHorizontal, 
  ArrowUpDown,
  ChevronDown,
  Filter,
  Loader2
} from 'lucide-react';

// Badge component replacement
const Badge = ({ 
  children, 
  variant = "default", 
  className = "" 
}: { 
  children: React.ReactNode; 
  variant?: "default" | "secondary" | "outline";
  className?: string;
}) => {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background text-foreground"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Extended Project interface
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
  services?: string[];
  highlights?: string[];
  links?: {
    website?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };
  client?: string;
}

interface ProjectGridProps {
  projects: ExtendedProject[];
  activeProjectId?: string;
  onSelect: (project: ExtendedProject) => void;
  className?: string;
}

type SortOption = 'newest' | 'oldest' | 'name' | 'category';
type ViewMode = 'grid' | 'list';

export default function ProjectGrid({ 
  projects, 
  activeProjectId, 
  onSelect,
  className = ""
}: ProjectGridProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [sortedProjects, setSortedProjects] = useState<ExtendedProject[]>(projects);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  // Sort projects based on selected option
  useEffect(() => {
    setIsLoading(true);
    
    const sorted = [...projects].sort((a: ExtendedProject, b: ExtendedProject) => {
      switch (sortOption) {
        case 'newest':
          return new Date(b.date || '').getTime() - new Date(a.date || '').getTime();
        case 'oldest':
          return new Date(a.date || '').getTime() - new Date(b.date || '').getTime();
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });
    
    // Simulate loading delay
    setTimeout(() => {
      setSortedProjects(sorted);
      setIsLoading(false);
    }, 300);
  }, [projects, sortOption]);

  // Close filter menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target as Node)) {
        setIsFilterMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setIsFilterMenuOpen(false);
  };

  const getSortLabel = (option: SortOption) => {
    switch (option) {
      case 'newest':
        return 'جدیدترین';
      case 'oldest':
        return 'قدیمی‌ترین';
      case 'name':
        return 'نام';
      case 'category':
        return 'دسته‌بندی';
      default:
        return '';
    }
  };

  // Get category counts
  const categoryCounts = projects.reduce((acc: Record<string, number>, project: ExtendedProject) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className={`rtl ${className}`}>
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">
            {sortedProjects.length} پروژه
          </h2>
          <Badge variant="secondary" className="text-xs">
            {Object.keys(categoryCounts).length} دسته‌بندی
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex items-center border border-border rounded-md">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              className="rounded-r-none"
              onClick={() => setViewMode('grid')}
              aria-label="نمایش شبکه‌ای"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              className="rounded-l-none"
              onClick={() => setViewMode('list')}
              aria-label="نمایش لیستی"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Sort Dropdown */}
          <div className="relative" ref={filterMenuRef}>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              aria-label="مرتب‌سازی"
            >
              <SlidersHorizontal className="h-4 w-4" />
              مرتب‌سازی: {getSortLabel(sortOption)}
              <ChevronDown className={`h-4 w-4 transition-transform ${
                isFilterMenuOpen ? 'rotate-180' : ''
              }`} />
            </Button>
            
            {isFilterMenuOpen && (
              <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg p-1 z-10 min-w-[150px]">
                <button
                  className={`w-full text-right px-3 py-2 text-sm rounded-md hover:bg-surface ${
                    sortOption === 'newest' ? 'bg-surface font-medium' : ''
                  }`}
                  onClick={() => handleSortChange('newest')}
                >
                  جدیدترین
                </button>
                <button
                  className={`w-full text-right px-3 py-2 text-sm rounded-md hover:bg-surface ${
                    sortOption === 'oldest' ? 'bg-surface font-medium' : ''
                  }`}
                  onClick={() => handleSortChange('oldest')}
                >
                  قدیمی‌ترین
                </button>
                <button
                  className={`w-full text-right px-3 py-2 text-sm rounded-md hover:bg-surface ${
                    sortOption === 'name' ? 'bg-surface font-medium' : ''
                  }`}
                  onClick={() => handleSortChange('name')}
                >
                  نام
                </button>
                <button
                  className={`w-full text-right px-3 py-2 text-sm rounded-md hover:bg-surface ${
                    sortOption === 'category' ? 'bg-surface font-medium' : ''
                  }`}
                  onClick={() => handleSortChange('category')}
                >
                  دسته‌بندی
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {/* Projects Grid/List */}
      {!isLoading && (
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }
        `}>
          {sortedProjects.map((project: ExtendedProject, index: number) => (
            <div
              key={project.id}
              className={viewMode === 'list' ? 'w-full' : ''}
            >
              <ProjectCard
                project={project}
                onSelect={onSelect}
                isActive={activeProjectId === project.id}
                index={index}
                className={viewMode === 'list' ? 'w-full' : ''}
              />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && sortedProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-6xl mb-4 opacity-50">🔍</div>
          <h3 className="text-2xl font-semibold mb-2">پروژه‌ای یافت نشد</h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            متاسفانه پروژه‌ای با این مشخصات یافت نشد. لطفاً فیلترها را تغییر دهید.
          </p>
        </div>
      )}
    </div>
  );
}