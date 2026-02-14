'use client';

import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { 
  X, 
  Share2, 
  Bookmark, 
  ExternalLink, 
  Calendar, 
  User, 
  Clock,
  Globe,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

// Simple Badge component replacement
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
  status?: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
  summary?: string;
  client?: string;
  date?: string;
  links?: {
    website?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };
}

interface DrawerHeaderProps {
  project: ExtendedProject;
  onClose: () => void;
  previousProject?: ExtendedProject;
  nextProject?: ExtendedProject;
  onProjectChange?: (project: ExtendedProject) => void;
  children?: React.ReactNode;
}

export default function DrawerHeader({ 
  project, 
  onClose, 
  previousProject,
  nextProject,
  onProjectChange,
  children
}: DrawerHeaderProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, you would save this to a database or local storage
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this project: ${project.title}`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // You could show a toast notification here
        break;
    }
    
    setShareMenuOpen(false);
  };

  const handlePreviousProject = () => {
    if (previousProject && onProjectChange) {
      onProjectChange(previousProject);
    }
  };

  const handleNextProject = () => {
    if (nextProject && onProjectChange) {
      onProjectChange(nextProject);
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'planned':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'تکمیل شده';
      case 'in-progress':
        return 'در حال انجام';
      case 'planned':
        return 'برنامه‌ریزی شده';
      default:
        return 'نامشخص';
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-background border-b border-border">
      <div className="p-6">
        {/* Top row with navigation and close button */}
        <div className="flex items-center justify-between mb-4">
          {/* Project navigation */}
          <div className="flex items-center gap-2">
            {previousProject && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePreviousProject}
                className="text-muted-foreground hover:text-foreground"
                aria-label="پروژه قبلی"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {nextProject && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleNextProject}
                className="text-muted-foreground hover:text-foreground"
                aria-label="پروژه بعدی"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {/* Close button with animation */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="group p-2 h-10 w-10 rounded-full hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
            aria-label="بستن"
          >
            <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
          </Button>
        </div>
        
        {/* Project title and category */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {/* Category and status */}
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                {project.category}
              </Badge>
              
              {project.status && (
                <Badge className={getStatusColor(project.status)}>
                  {getStatusText(project.status)}
                </Badge>
              )}
              
              {project.featured && (
                <Badge variant="outline" className="text-amber-600 border-amber-600/30 bg-amber-50 dark:bg-amber-900/20">
                  ویژه
                </Badge>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              {project.title}
            </h2>

            {/* Summary */}
            {project.summary && (
              <p className="text-muted-foreground text-sm md:text-base">
                {project.summary}
              </p>
            )}
          </div>
        </div>

        {/* Project metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          {project.client && (
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{project.client}</span>
            </div>
          )}
          
          {project.date && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
            </div>
          )}
          
          {project.links?.website && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-1 text-muted-foreground hover:text-primary"
              onClick={() => window.open(project.links?.website, '_blank')}
            >
              <Globe className="h-4 w-4 ml-1" />
              <span>وب‌سایت</span>
              <ExternalLink className="h-3 w-3 mr-1" />
            </Button>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBookmark}
            className="text-muted-foreground hover:text-primary"
            aria-label={isBookmarked ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-primary text-primary' : ''}`} />
            <span className="mr-1 text-xs">
              {isBookmarked ? 'ذخیره شده' : 'ذخیره'}
            </span>
          </Button>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShareMenuOpen(!shareMenuOpen)}
              className="text-muted-foreground hover:text-primary"
              aria-label="اشتراک‌گذاری"
            >
              <Share2 className="h-4 w-4" />
              <span className="mr-1 text-xs">اشتراک</span>
            </Button>
            
            {/* Share menu */}
            {shareMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-md shadow-lg p-1 z-20 min-w-[150px]">
                <button
                  className="w-full text-right px-3 py-2 text-sm hover:bg-surface rounded-md flex items-center gap-2"
                  onClick={() => handleShare('twitter')}
                >
                  توییتر
                </button>
                <button
                  className="w-full text-right px-3 py-2 text-sm hover:bg-surface rounded-md flex items-center gap-2"
                  onClick={() => handleShare('linkedin')}
                >
                  لینکدین
                </button>
                <button
                  className="w-full text-right px-3 py-2 text-sm hover:bg-surface rounded-md flex items-center gap-2"
                  onClick={() => handleShare('facebook')}
                >
                  فیسبوک
                </button>
                <button
                  className="w-full text-right px-3 py-2 text-sm hover:bg-surface rounded-md flex items-center gap-2"
                  onClick={() => handleShare('copy')}
                >
                  کپی لینک
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Additional content slot */}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}