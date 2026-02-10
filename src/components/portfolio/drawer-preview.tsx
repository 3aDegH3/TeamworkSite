'use client';

import { useRef, useState, useEffect } from 'react';
import { Project } from './types';
import { Card } from '@/src/components/ui/card';

interface DrawerPreviewProps {
  project: Project;
  onFocusChange?: (isFocused: boolean) => void;
}

export default function DrawerPreview({ project, onFocusChange }: DrawerPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const animationRef = useRef<number | undefined>(undefined); // Fixed: provide initial value
  const imageRef = useRef<HTMLImageElement>(null);

  // Handle auto-scroll on hover
  useEffect(() => {
    if (isHovering && containerRef.current) {
      const container = containerRef.current;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      
      const scroll = () => {
        if (!container) return;
        
        setScrollPosition(prev => {
          const newPos = prev + 0.8; // Slow scroll speed
          
          if (newPos >= maxScroll) {
            return 0; // Reset to top when reaching bottom
          }
          
          return newPos;
        });
        
        animationRef.current = requestAnimationFrame(scroll);
      };
      
      animationRef.current = requestAnimationFrame(scroll);
    } else {
      // Cancel animation when not hovering
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Soft reset to top when hover ends
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Smooth reset animation
      const resetAnimation = () => {
        setScrollPosition(prev => {
          if (prev <= 0) {
            return 0;
          }
          return prev - 2; // Faster reset speed
        });
        
        if (scrollPosition > 0) {
          animationRef.current = requestAnimationFrame(resetAnimation);
        }
      };
      
      if (scrollPosition > 0) {
        animationRef.current = requestAnimationFrame(resetAnimation);
      }
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, scrollPosition]);

  // Apply scroll position to container
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  // Notify parent of focus changes
  useEffect(() => {
    if (onFocusChange) {
      onFocusChange(isHovering);
    }
  }, [isHovering, onFocusChange]);

  return (
    <div className="rtl">
      <Card className="overflow-hidden relative">
        {/* Preview container with fixed height and overflow */}
        <div 
          ref={containerRef}
          className="relative h-[320px] overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Image with zoom effect on hover */}
          <img
            ref={imageRef}
            src={project.previewImage}
            alt={`پیش‌نمایش پروژه ${project.title}`}
            className={`
              w-full h-auto object-cover transition-transform duration-700 ease-out
              ${isHovering ? 'scale-105' : 'scale-100'}
            `}
          />
          
          {/* Vignette/gradient overlay for depth */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/10" />
          </div>
          
          {/* Hover indicator */}
          {isHovering && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm py-2 flex items-center justify-center transition-opacity duration-300">
              <span className="text-white text-xs font-medium">برای مشاهده کامل، نگه دارید</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}