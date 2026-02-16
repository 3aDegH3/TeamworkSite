'use client';

import { useState, useRef, useEffect } from 'react';
import { Card } from '@/src/components/ui/card';
import { ExternalLink, Eye, Calendar, User, ArrowRight, Star, Maximize2 } from 'lucide-react';
import ScrollingPreview from './scrolling-preview';

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

const IconButton = ({
  children,
  onClick,
  className = '',
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
  ariaLabel?: string;
}) => (
  <button
    type="button"
    className={`inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground ${className}`}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

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
  links?: { website?: string };
  technologies?: string[];
  client?: string;
}

export default function ProjectCard({
  project,
  onSelect,
  isActive = false,
  index = 0,
  className = '',
}: {
  project: ExtendedProject;
  onSelect: (project: ExtendedProject) => void;
  isActive?: boolean;
  index?: number;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const previewSrc = project.previewImage || project.coverImage;

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR', { year: 'numeric', month: 'short' });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const animationDelay = index * 60;

  return (
    <>
      <div
        className={`
          relative overflow-hidden group cursor-pointer transition-shadow duration-300
          ${isHovered ? 'shadow-xl' : 'shadow-md'}
          ${isActive ? 'ring-2 ring-primary' : ''}
          border border-border hover:border-primary/30 rounded-lg
          animate-in fade-in-50 slide-in-from-bottom-4
          ${className}
        `}
        style={{ animationDelay: `${animationDelay}ms` }}
        onClick={() => onSelect(project)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={0}
        role="button"
        dir="rtl"
      >
        <Card className="border-0 shadow-none">
          {/* Status */}
          {project.status && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant={project.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                {project.status === 'completed'
                  ? 'تکمیل شده'
                  : project.status === 'in-progress'
                  ? 'در حال انجام'
                  : 'برنامه‌ریزی شده'}
              </Badge>
            </div>
          )}

          {/* Featured */}
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="outline" className="text-xs text-amber-600 border-amber-600/30 bg-amber-50">
                <Star className="w-3 h-3 ml-1 fill-amber-600" />
                ویژه
              </Badge>
            </div>
          )}

          {/* Preview (hover controlled فقط از کارت) */}
          <div className="relative">
            <ScrollingPreview
              src={previewSrc}
              alt={project.title}
              height={260}
              speed={38}
              active={isHovered}          // ✅ این کلید حل پرش بود
              className="rounded-none"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            {/* Hover actions (روی کارت هست، ولی باعث خروج hover از preview نمی‌شود چون preview دیگر hover listener ندارد) */}
            <div
              className={`
                absolute bottom-0 left-0 right-0 p-4 transition-all duration-200
                ${isHovered ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-2 opacity-0 pointer-events-none'}
              `}
            >
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
                    ariaLabel="پیش‌نمایش"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </IconButton>

                  {project.links?.website && (
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.links!.website!, '_blank');
                      }}
                      className="h-8 w-8 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                      ariaLabel="وب‌سایت"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </IconButton>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 text-right">
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

            <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            {project.summary && <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.summary}</p>}

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

      {/* Modal Preview (با img برای اینکه قطع نشه) */}
      {imagePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setImagePreview(false)}>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <img
              src={previewSrc}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
              loading="eager"
              decoding="async"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setImagePreview(false);
              }}
              className="absolute top-4 right-4 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm rounded-md p-2"
              aria-label="بستن"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
