'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import PortfolioHero from './portfolio-hero';
import PortfolioFilters from './portfolio-filters';
import ProjectGrid from './project-grid';
import CaseStudyDrawer from './case-study-drawer';
import { projects } from './data/projects';
import { Button } from '@/src/components/ui/button';
import { 
  Search, 
  X, 
  RotateCcw, 
  ArrowUp,
  Loader2,
  Filter
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

// IconButton component to replace Button with size="icon"
const IconButton = ({ 
  children, 
  onClick, 
  className = "", 
  ariaLabel 
}: { 
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}) => (
  <button
    className={`inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground ${className}`}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

// Define ProjectCategory type to match what's expected by CaseStudyDrawer
type ProjectCategory = 
  | 'فروشگاهی' 
  | 'شرکتی' 
  | 'SaaS' 
  | 'لندینگ' 
  | 'محصولی';

// Extended Project interface that matches CaseStudyDrawer's expectations
interface ExtendedProject {
  id: string;
  title: string;
  category: ProjectCategory; // Using the specific ProjectCategory type instead of string
  coverImage: string;
  previewImage?: string;
  summary?: string;
  description?: string;
  technologies?: string[];
  status?: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
  client?: string;
  date?: string;
  links?: {
    website?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };
  highlights?: string[];
  services?: string[];
  gallery?: Array<{
    id: string;
    src: string;
    alt?: string;
    caption?: string;
  }>;
}

// Function to safely cast projects to ExtendedProject
function castToExtendedProject(project: any): ExtendedProject {
  // Ensure category is a valid ProjectCategory
  const validCategories: ProjectCategory[] = ['فروشگاهی', 'شرکتی', 'SaaS', 'لندینگ', 'محصولی'];
  if (!validCategories.includes(project.category as ProjectCategory)) {
    // Default to 'شرکتی' if category is invalid
    project.category = 'شرکتی' as ProjectCategory;
  }
  
  return project as ExtendedProject;
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ExtendedProject | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle project selection to open the drawer
  const handleProjectSelect = useCallback((project: any) => {
    // Cast the project to ExtendedProject before setting it
    const extendedProject = castToExtendedProject(project);
    setSelectedProject(extendedProject);
    setIsDrawerOpen(true);
  }, []);

  // Handle closing the drawer
  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  // Handle filter changes
  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  // Handle search
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setActiveFilter('search');
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setActiveFilter('all');
    setSearchQuery('');
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  // Memoize filtered projects to avoid unnecessary re-renders
  const filteredProjects = useMemo(() => {
    // Cast all projects to ExtendedProject
    const extendedProjects = projects.map(castToExtendedProject);
    
    if (!activeFilter || activeFilter === 'all') {
      return extendedProjects;
    }
    
    if (activeFilter === 'search' && searchQuery) {
      return extendedProjects.filter((project) => 
        project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies?.some((tech: string) => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    return extendedProjects.filter((project) => 
      project.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter, searchQuery]);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDrawerOpen) {
        handleDrawerClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen, handleDrawerClose]);

  // Handle project navigation in drawer
  const handlePreviousProject = useCallback(() => {
    if (!selectedProject) return;
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
  }, [selectedProject, filteredProjects]);

  const handleNextProject = useCallback(() => {
    if (!selectedProject) return;
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  }, [selectedProject, filteredProjects]);

  return (
    <div className="rtl min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <PortfolioHero />

      {/* Filters Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PortfolioFilters
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          projects={projects.map(castToExtendedProject)}
        />
      </section>

      {/* Results Summary */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              {activeFilter === 'all' && 'همه پروژه‌ها'}
              {activeFilter === 'search' && `نتایج جستجو: "${searchQuery}"`}
              {activeFilter !== 'all' && activeFilter !== 'search' && activeFilter}
            </h2>
            <Badge variant="secondary" className="px-2 py-1">
              {filteredProjects.length} پروژه
            </Badge>
          </div>
          
          {(activeFilter !== 'all' || searchQuery) && (
            <Button
              variant="ghost"
              onClick={resetFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-4 w-4 ml-2" />
              بازنشانی فیلترها
            </Button>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : filteredProjects.length > 0 ? (
          <ProjectGrid
            projects={filteredProjects}
            onSelect={(project: any) => {
              // Cast the project to ExtendedProject before passing to handleProjectSelect
              const extendedProject = castToExtendedProject(project);
              handleProjectSelect(extendedProject);
            }}
            activeProjectId={selectedProject?.id}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">پروژه‌ای یافت نشد</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {activeFilter === 'search' 
                ? `هیچ پروژه‌ای با "${searchQuery}" یافت نشد. لطفاً کلمات کلیدی دیگری را امتحان کنید.`
                : 'متاسفانه پروژه‌ای با این فیلتر یافت نشد. لطفاً فیلتر دیگری را امتحان کنید.'
              }
            </p>
            <Button onClick={resetFilters} variant="outline">
              <Filter className="h-4 w-4 ml-2" />
              مشاهده همه پروژه‌ها
            </Button>
          </div>
        )}
      </section>

      {/* Case Study Drawer */}
      {selectedProject && (
        <CaseStudyDrawer
          project={selectedProject}
          isOpen={isDrawerOpen}
          onClose={handleDrawerClose}
          previousProject={
            filteredProjects.findIndex(p => p.id === selectedProject.id) > 0
              ? filteredProjects[filteredProjects.findIndex(p => p.id === selectedProject.id) - 1]
              : undefined
          }
          nextProject={
            filteredProjects.findIndex(p => p.id === selectedProject.id) < filteredProjects.length - 1
              ? filteredProjects[filteredProjects.findIndex(p => p.id === selectedProject.id) + 1]
              : undefined
          }
          onProjectChange={(project: any) => {
            // Cast the project to ExtendedProject before setting it
            const extendedProject = castToExtendedProject(project);
            setSelectedProject(extendedProject);
          }}
        />
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <IconButton
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 rounded-full shadow-lg"
          ariaLabel="بستن به بالا"
        >
          <ArrowUp className="h-5 w-5" />
        </IconButton>
      )}
    </div>
  );
}