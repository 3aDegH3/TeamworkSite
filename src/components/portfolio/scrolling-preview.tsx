'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Button } from '@/src/components/ui/button';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  Download,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

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

interface ScrollingPreviewProps {
  imageSrc: string;
  alt?: string;
  height?: number;
  onFocusChange?: (isFocused: boolean) => void;
  scrollSpeed?: number;
  title?: string;
  images?: string[];
  className?: string;
  showControls?: boolean;
}

export default function ScrollingPreview({
  imageSrc,
  alt = "",
  height = 320,
  onFocusChange,
  scrollSpeed = 40,
  title,
  images = [],
  className = "",
  showControls = true
}: ScrollingPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Combine all images
  const allImages = [imageSrc, ...images];
  const currentImage = allImages[currentImageIndex];
  const hasMultipleImages = allImages.length > 1;

  // Calculate the combined transform
  const getTransform = () => {
    let scale = 1;
    if (isZoomed) {
      scale = zoomLevel;
    } else if (isHovering) {
      scale = 1.02;
    }
    return `scale(${scale})`;
  };

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

    const elapsed = (timestamp - startTimeRef.current) / 1000;
    const distance = Math.min(scrollDistance, elapsed * scrollSpeed);
    
    setTranslateY(distance);

    if (distance < scrollDistance) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      startTimeRef.current = 0;
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [scrollDistance, scrollSpeed]);

  // Handle hover start
  const handleMouseEnter = useCallback(() => {
    if (scrollDistance <= 0) return;
    
    setIsHovering(true);
    setIsPlaying(true);
    startTimeRef.current = 0;
    
    if (onFocusChange) {
      onFocusChange(true);
    }
  }, [scrollDistance, onFocusChange]);

  // Handle hover end
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setIsPlaying(false);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    if (onFocusChange) {
      onFocusChange(false);
    }
    
    setTranslateY(0);
    startTimeRef.current = 0;
  }, [onFocusChange]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      startTimeRef.current = 0;
    }
  }, [isPlaying]);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setTranslateY(0);
    startTimeRef.current = 0;
  }, [allImages.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    setTranslateY(0);
    startTimeRef.current = 0;
  }, [allImages.length]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
    setIsZoomed(false);
    setZoomLevel(1);
  }, [isFullscreen]);

  const handleZoom = useCallback(() => {
    if (isZoomed) {
      setIsZoomed(false);
      setZoomLevel(1);
    } else {
      setIsZoomed(true);
      setZoomLevel(1.5);
    }
  }, [isZoomed]);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = currentImage;
    link.download = title || 'image';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [currentImage, title]);

  useEffect(() => {
    if (isHovering && isPlaying && imageLoaded && scrollDistance > 0) {
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
  }, [isHovering, isPlaying, imageLoaded, scrollDistance, animate]);

  return (
    <div className={`rtl ${className}`}>
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg group"
        style={{ height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative w-full"
          style={{
            transform: `translateY(${translateY}px)`,
            transition: isHovering && isPlaying ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          <Image
            ref={imageRef}
            src={currentImage}
            alt={alt || title || 'تصویر'}
            width={800}
            height={600}
            className={`
              w-full h-auto object-cover
              transition-transform duration-500 ease-out
              ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}
            `}
            style={{ 
              transform: getTransform(),
              cursor: isZoomed ? 'zoom-out' : 'zoom-in'
            }}
            onLoad={handleImageLoad}
            onClick={handleZoom}
          />
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/10" />
        </div>
        
        {showControls && (
          <div className={`
            absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300
            ${isHovering ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="flex justify-between items-start">
              {title && (
                <h3 className="text-white font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-md">
                  {title}
                </h3>
              )}
              
              <div className="flex items-center gap-1">
                {hasMultipleImages && (
                  <IconButton
                    onClick={handlePrevImage}
                    className="h-8 w-8 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
                    ariaLabel="تصویر قبلی"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </IconButton>
                )}
                
                <IconButton
                  onClick={togglePlayPause}
                  className="h-8 w-8 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
                  ariaLabel={isPlaying ? "توقف" : "پخش"}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </IconButton>
                
                {hasMultipleImages && (
                  <IconButton
                    onClick={handleNextImage}
                    className="h-8 w-8 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
                    ariaLabel="تصویر بعدی"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </IconButton>
                )}
                
                <IconButton
                  onClick={toggleFullscreen}
                  className="h-8 w-8 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
                  ariaLabel="تمام صفحه"
                >
                  <Maximize2 className="h-4 w-4" />
                </IconButton>
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              {hasMultipleImages && (
                <div className="flex gap-1">
                  {allImages.map((_: string, index: number) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setTranslateY(0);
                      }}
                      aria-label={`رفتن به تصویر ${index + 1}`}
                    />
                  ))}
                </div>
              )}
              
              {isHovering && scrollDistance > 0 && (
                <div className="bg-black/20 backdrop-blur-sm py-1 px-3 rounded-full">
                  <span className="text-white text-xs font-medium">
                    {isPlaying ? 'در حال اسکرول...' : 'برای مشاهده کامل، نگه دارید'}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={toggleFullscreen}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col">
            <div className="flex justify-between items-center p-4 text-white">
              <h3 className="text-lg font-medium">
                {title || 'تصویر'} {currentImageIndex + 1} از {allImages.length}
              </h3>
              
              <div className="flex items-center gap-2">
                {hasMultipleImages && (
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                    className="text-white hover:bg-white/20"
                    ariaLabel={isPlaying ? "توقف" : "پخش"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </IconButton>
                )}
                
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload();
                  }}
                  className="text-white hover:bg-white/20"
                  ariaLabel="دانلود"
                >
                  <Download className="h-5 w-5" />
                </IconButton>
                
                <IconButton
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20"
                  ariaLabel="بستن"
                >
                  <X className="h-5 w-5" />
                </IconButton>
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center overflow-hidden relative">
              {hasMultipleImages && (
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10"
                  ariaLabel="تصویر قبلی"
                >
                  <ChevronRight className="h-6 w-6" />
                </IconButton>
              )}
              
              {hasMultipleImages && (
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10"
                  ariaLabel="تصویر بعدی"
                >
                  <ChevronLeft className="h-6 w-6" />
                </IconButton>
              )}
              
              <div 
                className={`relative max-w-full max-h-full overflow-hidden ${
                  isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoom();
                }}
              >
                <Image
                  src={currentImage}
                  alt={alt || title || 'تصویر'}
                  width={1200}
                  height={800}
                  className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                />
              </div>
            </div>
            
            {hasMultipleImages && (
              <div className="flex justify-center items-center gap-2 p-4">
                {allImages.map((_: string, index: number) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}