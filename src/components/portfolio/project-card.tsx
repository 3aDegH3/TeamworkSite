'use client';

import { useState, useRef, useEffect } from 'react';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { 
  ExternalLink, 
  Eye, 
  Calendar, 
  User, 
  ArrowRight,
  Star,
  Clock,
  Maximize2,
  Play,
  Pause
} from 'lucide-react';
import Image from 'next/image';

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
  onClick: (e: React.MouseEvent) => void;
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

// Extended Project interface
interface ExtendedProject {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  previewImage?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
  summary?: string;
  date?: string;
  links?: {
    website?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };
  technologies?: string[];
  client?: string;
}

interface ProjectCardProps {
  project: ExtendedProject;
  onSelect: (project: ExtendedProject) => void;
  isActive?: boolean;
  index?: number;
  className?: string;
}

export default function ProjectCard({ 
  project, 
  onSelect, 
  isActive = false, 
  index = 0,
  className = ""
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter with a slight delay to show preview
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Set a new timeout to show the image preview after a short delay
    timeoutRef.current = setTimeout(() => {
      setImagePreview(true);
    }, 500);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Hide the image preview immediately
    setImagePreview(false);
  };

  // Handle card click
  const handleSelect = () => {
    onSelect(project);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  // Handle image load
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Animation delay for staggered entrance
  const animationDelay = index * 100;

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <>
      {/* Wrap the Card with a div that can accept the ref */}
      <div
        ref={cardRef}
        className={`
          relative overflow-hidden group cursor-pointer transition-all duration-500
          ${isHovered ? 'shadow-xl transform -translate-y-2' : 'shadow-md'}
          ${isActive ? 'ring-2 ring-primary' : ''}
          border border-border hover:border-primary/30
          animate-in fade-in-50 slide-in-from-bottom-4 rounded-lg
          ${className}
        `}
        style={{ animationDelay: `${animationDelay}ms` }}
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        role="button"
        aria-label={`پروژه ${project.title}: ${project.summary}`}
      >
        <Card className="border-0 shadow-none">
          {/* Project Status Badge */}
          {project.status && (
            <div className="absolute top-3 left-3 z-10">
              <Badge 
                variant={project.status === 'completed' ? 'default' : 'secondary'}
                className="text-xs"
              >
                {project.status === 'completed' ? 'تکمیل شده' : 
                 project.status === 'in-progress' ? 'در حال انجام' : 
                 'برنامه‌ریزی شده'}
              </Badge>
            </div>
          )}
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="outline" className="text-xs text-amber-600 border-amber-600/30 bg-amber-50">
                <Star className="w-3 h-3 ml-1 fill-amber-600" />
                ویژه
              </Badge>
            </div>
          )}

          {/* Cover Image Container */}
          <div className="relative h-0 pb-[62.5%] overflow-hidden">
            {/* Loading Placeholder */}
            {!isImageLoaded && !imageError && (
              <div className="absolute inset-0 bg-surface animate-pulse" />
            )}
            
            {/* Error State */}
            {imageError && (
              <div className="absolute inset-0 bg-surface flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-2">🖼️</div>
                  <p className="text-sm">تصویر در دسترس نیست</p>
                </div>
              </div>
            )}
            
            {/* Image */}
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-700 ease-in-out
                ${isHovered ? 'scale-[1.05]' : 'scale-100'}
                ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
              `}
              onLoad={handleImageLoad}
              onError={handleImageError}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Image Overlay */}
            <div className={`
              absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
              transition-opacity duration-300
              ${isHovered ? 'opacity-100' : 'opacity-70'}
            `} />
            
            {/* Hover Actions */}
            <div className={`
              absolute bottom-0 left-0 right-0 p-4 transition-all duration-300
              ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
            `}>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-white text-sm font-medium">
                  <Eye className="w-4 h-4 ml-1" />
                  مشاهده پروژه
                </div>
                <div className="flex items-center gap-2">
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      setImagePreview(true);
                    }}
                    className="h-8 w-8 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                    ariaLabel="پیش‌نمایش تصویر"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </IconButton>
                  {project.links?.website && (
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.links?.website, '_blank');
                      }}
                      className="h-8 w-8 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                      ariaLabel="مشاهده وب‌سایت"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </IconButton>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-5 rtl text-right">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {project.category}
              </Badge>
              {project.date && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 ml-1" />
                  {formatDate(project.date)}
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            {/* Summary */}
            {project.summary && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.summary}
              </p>
            )}

            {/* Technology Chips */}
            {project.technologies && (
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.slice(0, 3).map((tech: string, index: number) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs px-2 py-0.5">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between">
              {project.client && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <User className="w-3 h-3 ml-1" />
                  {project.client}
                </div>
              )}
              <div className="flex items-center text-primary text-sm font-medium">
                جزئیات بیشتر
                <ArrowRight className="w-4 h-4 mr-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Image Preview Modal */}
      {imagePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setImagePreview(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setImagePreview(false);
              }}
              className="absolute top-4 right-4 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              ariaLabel="بستن"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
}