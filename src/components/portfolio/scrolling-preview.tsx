'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

interface ScrollingPreviewProps {
  imageSrc: string;
  alt?: string;
  height?: number;
  onFocusChange?: (isFocused: boolean) => void;
  scrollSpeed?: number; // pixels per second
}

export default function ScrollingPreview({
  imageSrc,
  alt = "",
  height = 320,
  onFocusChange,
  scrollSpeed = 40 // 40px per second by default
}: ScrollingPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<number | undefined>(undefined); // Fixed: provide initial value
  const startTimeRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  // Handle image load
  const handleImageLoad = useCallback(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.naturalHeight);
      setImageLoaded(true);
    }
  }, []);

  // Calculate scroll distance
  const scrollDistance = Math.max(0, imageHeight - height);

  // Animation function
  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = (timestamp - startTimeRef.current) / 1000; // Convert to seconds
    const distance = Math.min(scrollDistance, elapsed * scrollSpeed);
    
    setTranslateY(distance);

    if (distance < scrollDistance) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Reset for continuous loop
      startTimeRef.current = 0;
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [scrollDistance, scrollSpeed]);

  // Handle hover start
  const handleMouseEnter = useCallback(() => {
    if (scrollDistance <= 0) return; // No scrolling needed
    
    setIsHovering(true);
    startTimeRef.current = 0; // Reset start time
    
    if (onFocusChange) {
      onFocusChange(true);
    }
  }, [scrollDistance, onFocusChange]);

  // Handle hover end
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    if (onFocusChange) {
      onFocusChange(false);
    }
    
    // Soft reset to top
    setTranslateY(0);
    startTimeRef.current = 0;
  }, [onFocusChange]);

  // Start animation on hover
  useEffect(() => {
    if (isHovering && imageLoaded && scrollDistance > 0) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, imageLoaded, scrollDistance, animate]);

  return (
    <div className="rtl">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg"
        style={{ height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative w-full"
          style={{
            transform: `translateY(${translateY}px)`,
            transition: isHovering ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          <img
            ref={imageRef}
            src={imageSrc}
            alt={alt}
            onLoad={handleImageLoad}
            className={`
              w-full h-auto object-cover
              transition-transform duration-500 ease-out
              ${isHovering ? 'scale-[1.01]' : 'scale-100'}
            `}
          />
        </div>
        
        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/10" />
        </div>
        
        {/* Hover indicator */}
        {isHovering && scrollDistance > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm py-2 flex items-center justify-center transition-opacity duration-300">
            <span className="text-white text-xs font-medium">برای مشاهده کامل، نگه دارید</span>
          </div>
        )}
      </div>
    </div>
  );
}   