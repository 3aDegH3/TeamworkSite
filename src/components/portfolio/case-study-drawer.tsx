'use client';

import { useEffect, useState, useRef } from 'react';
import { Project } from './types';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { 
  Share2, 
  Bookmark, 
  ExternalLink, 
  Calendar, 
  User,
  Clock,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Placeholder Badge component
const Badge = ({ children, variant = "default", className = "" }: { 
  children: React.ReactNode; 
  variant?: string;
  className?: string;
}) => (
  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
    variant === 'default' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
  } ${className}`}>
    {children}
  </span>
);

// Extended Project interface with all needed properties
interface ExtendedProject extends Project {
  client?: string;
  date?: string;
  description?: string;
  gallery?: Array<{
    id: string;
    src: string;
    alt?: string;
    caption?: string;
  }>;
  highlights?: string[];
  links?: {
    website?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };
  status?: 'completed' | 'in-progress' | 'planned';
  technologies?: string[];
}

// Drawer components with proper typing
const DrawerHeader = ({ project, onClose, children }: { 
  project: ExtendedProject; 
  onClose: () => void;
  children?: React.ReactNode;
}) => (
  <div className="p-6 flex justify-between items-start">
    <div>
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="text-muted-foreground mt-1">{project.category}</p>
    </div>
    <div>
      <Button variant="ghost" size="sm" onClick={onClose}>
        <X className="h-5 w-5" />
      </Button>
      {children}
    </div>
  </div>
);

const DrawerPreview = ({ project }: { project: ExtendedProject }) => (
  <div className="relative rounded-lg overflow-hidden">
    <img 
      src={project.previewImage || project.coverImage} 
      alt={project.title}
      className="w-full h-64 object-cover"
    />
  </div>
);

const DrawerMeta = ({ project, onClose }: { project: ExtendedProject; onClose: () => void }) => (
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-2">تکنولوژی‌ها</h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies?.map((tech: string, index: number) => (
          <Badge key={index} variant="secondary">{tech}</Badge>
        ))}
      </div>
    </div>
  </div>
);

const DrawerGallery = ({ images }: { 
  images: Array<{
    id: string;
    src: string;
    alt?: string;
    caption?: string;
  }>
}) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">گالری تصاویر</h3>
    <div className="grid grid-cols-2 gap-2">
      {images.map((image) => (
        <img 
          key={image.id}
          src={image.src} 
          alt={image.alt}
          className="w-full h-32 object-cover rounded-lg"
        />
      ))}
    </div>
  </div>
);

interface CaseStudyDrawerProps {
  project: ExtendedProject;
  isOpen: boolean;
  onClose: () => void;
  previousProject?: ExtendedProject;
  nextProject?: ExtendedProject;
  onProjectChange?: (project: ExtendedProject) => void;
}

export default function CaseStudyDrawer({ 
  project, 
  isOpen, 
  onClose,
  previousProject,
  nextProject,
  onProjectChange
}: CaseStudyDrawerProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      document.body.style.overflow = '';
      setIsAnimating(false);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle click outside drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current && 
        !drawerRef.current.contains(event.target as Node) &&
        overlayRef.current === event.target as Node
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
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
        break;
    }
    
    setShareMenuOpen(false);
  };

  const handlePreviousProject = () => {
    if (previousProject && onProjectChange) {
      setIsAnimating(false);
      setTimeout(() => {
        onProjectChange(previousProject);
        setIsAnimating(true);
      }, 300);
    }
  };

  const handleNextProject = () => {
    if (nextProject && onProjectChange) {
      setIsAnimating(false);
      setTimeout(() => {
        onProjectChange(nextProject);
        setIsAnimating(true);
      }, 300);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isAnimating ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0'
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`
          fixed top-0 right-0 h-full w-full md:w-[580px] lg:w-[640px] bg-background z-50
          transform transition-all duration-300 ease-in-out
          ${isAnimating ? 'translate-x-0' : 'translate-x-full'}
          shadow-2xl overflow-hidden
        `}
        role="dialog"
        aria-modal="true"
        aria-label={`جزئیات پروژه ${project.title}`}
        dir="rtl"
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-background border-b border-border">
            <DrawerHeader project={project} onClose={handleClose}>
              <div className="flex items-center gap-2 mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBookmark}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-primary text-primary' : ''}`} />
                </Button>
                
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShareMenuOpen(!shareMenuOpen)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  
                  {shareMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-md shadow-lg p-1 z-20">
                      <button
                        className="w-full text-right px-3 py-2 text-sm hover:bg-surface rounded-md"
                        onClick={() => handleShare('twitter')}
                      >
                        توییتر
                      </button>
                      <button
                        className="w-full text-right px-3 py-2 text-sm hover:bg-surface rounded-md"
                        onClick={() => handleShare('linkedin')}
                      >
                        لینکدین
                      </button>
                      <button
                        className="w-full text-right px-3 py-2 text-sm hover:bg-surface rounded-md"
                        onClick={() => handleShare('facebook')}
                      >
                        فیسبوک
                      </button>
                      <button
                        className="w-full text-right px-3 py-2 text-sm hover:bg-surface rounded-md"
                        onClick={() => handleShare('copy')}
                      >
                        کپی لینک
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </DrawerHeader>

            {/* Metadata */}
            <div className="px-6 py-4 border-b border-border">
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                {project.client && (
                  <div className="flex items-center">
                    <User className="h-4 w-4 ml-1" />
                    {project.client}
                  </div>
                )}
                {project.date && (
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 ml-1" />
                    {project.date}
                  </div>
                )}
                {project.status && (
                  <Badge 
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status === 'completed' ? 'تکمیل شده' : 
                     project.status === 'in-progress' ? 'در حال انجام' : 
                     'برنامه‌ریزی شده'}
                  </Badge>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 pb-2">
                <DrawerPreview project={project} />
              </div>

              {project.description && (
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold mb-4">توضیحات پروژه</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div className="px-6 pb-6">
                  <DrawerGallery images={project.gallery} />
                </div>
              )}

              <div className="px-6 pb-6">
                <DrawerMeta project={project} onClose={handleClose} />
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold mb-4">نکات برجسته</h3>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary ml-2 text-lg">•</span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="px-6 pb-6">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <h3 className="text-xl font-semibold mb-4">علاقه‌مند به پروژه مشابه؟</h3>
                  <p className="text-muted-foreground mb-6">
                    ما می‌توانیم برای کسب‌وکار شما نیز راه‌حل‌های مشابهی طراحی و پیاده‌سازی کنیم.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="w-full sm:w-auto">
                      درخواست مشاوره
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
                    {project.links?.website && (
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto"
                        onClick={() => window.open(project.links?.website, '_blank')}
                      >
                        مشاهده وب‌سایت
                        <ExternalLink className="mr-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </Card>
              </div>

              {(previousProject || nextProject) && (
                <div className="px-6 pb-6">
                  <div className="flex justify-between">
                    {previousProject && (
                      <Button
                        variant="ghost"
                        onClick={handlePreviousProject}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <ChevronRight className="ml-2 h-4 w-4" />
                        پروژه قبلی
                      </Button>
                    )}
                    {nextProject && (
                      <Button
                        variant="ghost"
                        onClick={handleNextProject}
                        className="text-muted-foreground hover:text-foreground mr-auto"
                      >
                        پروژه بعدی
                        <ChevronLeft className="mr-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}