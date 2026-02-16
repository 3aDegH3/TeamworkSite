'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  Sparkles,
  Link as LinkIcon,
} from 'lucide-react';

import DrawerGallery from './drawer-gallery';
// اگر ScrollingPreview داری و می‌خوای نمایش اسکرول داخل Drawer هم داشته باشی:
import ScrollingPreview from './scrolling-preview';

import type { Project } from './types';

type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface ExtendedProject extends Project {
  client?: string;
  date?: string; // بهتره ISO باشه ولی همون رشته هم ok
  description?: string;
  technologies?: string[];
  highlights?: string[];
  status?: ProjectStatus;
  gallery?: Array<{ id: string; src: string; alt?: string; caption?: string }>;
  links?: {
    website?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };
}

type Props = {
  project: ExtendedProject;
  isOpen: boolean;
  onClose: () => void;
  previousProject?: ExtendedProject;
  nextProject?: ExtendedProject;
  onProjectChange?: (project: ExtendedProject) => void;
};

function Chip({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        'bg-background/70 backdrop-blur',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}

function formatFaDate(dateString?: string) {
  if (!dateString) return '';
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString('fa-IR', { year: 'numeric', month: 'short' });
}

function statusLabel(status?: ProjectStatus) {
  switch (status) {
    case 'completed':
      return { text: 'تکمیل شده', cls: 'border-emerald-300/50 text-emerald-700 bg-emerald-50/60' };
    case 'in-progress':
      return { text: 'در حال انجام', cls: 'border-sky-300/50 text-sky-700 bg-sky-50/60' };
    case 'planned':
      return { text: 'برنامه‌ریزی شده', cls: 'border-zinc-300/60 text-zinc-700 bg-zinc-50/70' };
    default:
      return null;
  }
}

/**
 * جلوگیری از پرش صفحه هنگام قفل‌کردن اسکرول:
 * scrollbar که حذف میشه، عرض صفحه تغییر می‌کنه → UI می‌پره.
 * اینجا paddingRight برابر scrollbarWidth می‌ذاریم تا ثابت بمونه.
 */
function lockBodyScroll() {
  const body = document.body;
  const html = document.documentElement;

  const scrollBarWidth = window.innerWidth - html.clientWidth;

  body.dataset.__drawerScrollLock = '1';
  body.style.overflow = 'hidden';
  if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;
}

function unlockBodyScroll() {
  const body = document.body;
  if (body.dataset.__drawerScrollLock !== '1') return;

  body.style.overflow = '';
  body.style.paddingRight = '';
  delete body.dataset.__drawerScrollLock;
}

export default function CaseStudyDrawer({
  project,
  isOpen,
  onClose,
  previousProject,
  nextProject,
  onProjectChange,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const status = useMemo(() => statusLabel(project.status), [project.status]);

  const requestClose = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setClosing(false);
      setMounted(false);
      onClose();
    }, 240);
  }, [onClose]);

  const handlePrev = useCallback(() => {
    if (!previousProject || !onProjectChange) return;
    setClosing(true);
    window.setTimeout(() => {
      onProjectChange(previousProject);
      setClosing(false);
      // اسکرول محتوای Drawer برگرده بالا
      panelRef.current?.querySelector('[data-drawer-scroll]')?.scrollTo({ top: 0 });
    }, 220);
  }, [previousProject, onProjectChange]);

  const handleNext = useCallback(() => {
    if (!nextProject || !onProjectChange) return;
    setClosing(true);
    window.setTimeout(() => {
      onProjectChange(nextProject);
      setClosing(false);
      panelRef.current?.querySelector('[data-drawer-scroll]')?.scrollTo({ top: 0 });
    }, 220);
  }, [nextProject, onProjectChange]);

  // mount/unmount + lock scroll
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setClosing(false);
      lockBodyScroll();
      // فوکوس روی دکمه بستن
      window.setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      unlockBodyScroll();
      setMounted(false);
      setClosing(false);
    }

    return () => {
      unlockBodyScroll();
    };
  }, [isOpen]);

  // ESC close + arrows for nav
  useEffect(() => {
    if (!mounted) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') requestClose();
      if (e.key === 'ArrowLeft') handleNext();  // RTL: چپ = بعدی
      if (e.key === 'ArrowRight') handlePrev(); // RTL: راست = قبلی
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mounted, requestClose, handleNext, handlePrev]);

  if (!mounted) return null;

  const heroSrc = project.previewImage || project.coverImage;

  return (
    <div className="fixed inset-0 z-50" dir="rtl">
      {/* Overlay */}
      <div
        className={[
          'absolute inset-0 transition-opacity duration-200',
          closing ? 'opacity-0' : 'opacity-100',
          'bg-black/55 backdrop-blur-[2px]',
        ].join(' ')}
        onMouseDown={requestClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`جزئیات پروژه ${project.title}`}
        className={[
          'absolute right-0 top-0 h-full w-full md:w-[640px] lg:w-[720px]',
          'bg-background shadow-2xl border-l border-border',
          'transition-transform duration-200 will-change-transform',
          closing ? 'translate-x-full' : 'translate-x-0',
          'flex flex-col',
        ].join(' ')}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header (Sticky) */}
        <div className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
          <div className="px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Chip className="border-primary/20 bg-primary/5 text-primary">
                    <Sparkles className="ml-1 h-3.5 w-3.5" />
                    {project.category}
                  </Chip>
                  {status && <Chip className={status.cls}>{status.text}</Chip>}
                  {project.client && (
                    <Chip className="text-muted-foreground">
                      <User className="ml-1 h-3.5 w-3.5" />
                      {project.client}
                    </Chip>
                  )}
                  {project.date && (
                    <Chip className="text-muted-foreground">
                      <Calendar className="ml-1 h-3.5 w-3.5" />
                      {formatFaDate(project.date)}
                    </Chip>
                  )}
                </div>

                <h2 className="text-xl md:text-2xl font-bold leading-tight truncate">
                  {project.title}
                </h2>
                {project.description && (
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-6">
                    {project.description}
                  </p>
                )}
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={requestClose}
                className="shrink-0 rounded-xl p-2 hover:bg-accent transition-colors"
                aria-label="بستن"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav + Links row */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="h-9 px-3"
                  disabled={!previousProject}
                  onClick={handlePrev}
                >
                  <ChevronRight className="h-4 w-4 ml-1" />
                  قبلی
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-9 px-3"
                  disabled={!nextProject}
                  onClick={handleNext}
                >
                  بعدی
                  <ChevronLeft className="h-4 w-4 mr-1" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                {project.links?.website && (
                  <Button
                    type="button"
                    variant="default"
                    className="h-9"
                    onClick={() => window.open(project.links?.website, '_blank')}
                  >
                    مشاهده وب‌سایت
                    <ExternalLink className="h-4 w-4 mr-2" />
                  </Button>
                )}
                {project.links?.caseStudy && (
                  <Button
                    type="button"
                    variant="outline"
                    className="h-9"
                    onClick={() => window.open(project.links?.caseStudy, '_blank')}
                  >
                    کیس‌استادی
                    <LinkIcon className="h-4 w-4 mr-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Body (Scrollable) */}
        <div
          data-drawer-scroll
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          {/* Hero */}
          <div className="p-5">
            <Card className="overflow-hidden border-border/60">
              <div className="relative">
                {/* اگر ScrollingPreview داری: (پریویو اسکرولی داخل Drawer هم جذاب میشه) */}
                <ScrollingPreview
                  imageSrc={heroSrc}
                  height={380}
                  scrollSpeed={85}  // سرعت بیشتر
                  title={project.title}
                  showControls={true}
                />

                {/* اگر نمی‌خوای ScrollingPreview، این بخش رو جایگزین کن:
                <div className="relative aspect-[16/10]">
                  <Image src={heroSrc} alt={project.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 640px" />
                </div>
                */}
              </div>
            </Card>
          </div>

          {/* Sections */}
          <div className="px-5 pb-8 space-y-6">
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <Card className="p-5 border-border/60">
                <h3 className="text-base font-semibold mb-3">تکنولوژی‌ها</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span
                      key={`${t}-${i}`}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <Card className="p-5 border-border/60">
                <h3 className="text-base font-semibold mb-3">نکات برجسته</h3>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-muted-foreground leading-6">{h}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <Card className="p-5 border-border/60">
                <h3 className="text-base font-semibold mb-4">گالری</h3>
                <DrawerGallery
                  images={project.gallery}
                  title={project.title}
                />
              </Card>
            )}

            {/* CTA */}
            <Card className="p-5 border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
              <h3 className="text-base font-semibold">پروژه مشابه می‌خوای؟</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-6">
                اگر سبک این پروژه رو دوست داشتی، می‌تونیم مشابهش رو برای کسب‌وکار شما هم طراحی کنیم.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <Button type="button" className="h-10">
                  درخواست مشاوره
                </Button>
                {project.links?.website && (
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10"
                    onClick={() => window.open(project.links?.website, '_blank')}
                  >
                    مشاهده وب‌سایت
                    <ExternalLink className="h-4 w-4 mr-2" />
                  </Button>
                )}
              </div>
            </Card>

            <div className="h-6" />
          </div>
        </div>
      </aside>
    </div>
  );
}
