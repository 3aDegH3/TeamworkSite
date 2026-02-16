'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, PhoneCall } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import DrawerPreview from './drawer-preview';
import Link from 'next/link';

// اگر این hook رو داری همون رو نگه دار
import { useLockScroll } from '@/src/hooks/use-lock-scroll';

type Status = 'completed' | 'in-progress' | 'planned';

interface ExtendedProject {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  previewImage?: string;

  client?: string;
  date?: string;
  description?: string;

  links?: {
    website?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };

  status?: Status;
  featured?: boolean; // مهم نیست، تو Drawer نمایش نمیدیم
}

interface CaseStudyDrawerProps {
  project: ExtendedProject;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyDrawer({ project, isOpen, onClose }: CaseStudyDrawerProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // ✅ قفل اسکرول صفحه وقتی Drawer بازه
  useLockScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => setIsAnimating(true), 10);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    window.setTimeout(() => onClose(), 250);
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
        aria-hidden="true"
        onClick={handleClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`
          fixed top-0 right-0 z-50 h-full w-full md:w-[560px] lg:w-[640px]
          bg-background shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isAnimating ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        dir="rtl"
      >
        <div className="flex h-full flex-col overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 z-10 border-b border-border bg-background">
            <div className="flex items-start justify-between gap-4 p-6">
              <h2 className="text-xl md:text-2xl font-bold truncate">{project.title}</h2>

              <Button variant="ghost" size="sm" onClick={handleClose} aria-label="بستن">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6 p-6">
              {/* ✅ فقط کاور پروژه — لینک‌دار به سایت */}
              <DrawerPreview
                src={project.coverImage}
                alt={project.title}
                href={project.links?.website}
              />

              {/* ✅ فقط یک CTA ساده (بدون Preview و بدون ویژه) */}
              <Card className="p-5 border-border bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">پروژه مشابه می‌خوای؟</h3>
                    <p className="text-sm text-muted-foreground">
                      اگر سبک این پروژه رو دوست داشتی، برای کسب‌وکار شما هم می‌تونیم مشابهش رو طراحی کنیم.
                    </p>
                  </div>

                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/contact">
                      تماس با ما
                      <PhoneCall className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
