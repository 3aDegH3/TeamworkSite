'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { 
  Maximize2, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Loader2
} from 'lucide-react';

interface DrawerGalleryProps {
  images: {
    id: string;
    src: string;
    alt?: string;
    caption?: string;
  }[];
  title?: string;
  className?: string;
}

// Custom icon button component to replace the problematic size="icon"
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

export default function DrawerGallery({ 
  images, 
  title = "گالری تصاویر",
  className = ""
}: DrawerGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});
  const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});

  if (!images || images.length === 0) {
    return null;
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
    setIsZoomed(false);
    setRotation(0);
  };

  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
    setIsZoomed(false);
    setRotation(0);
  };

  const handleNextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev !== null ? (prev + 1) % images.length : 0
      );
      setIsZoomed(false);
      setRotation(0);
    }
  }, [selectedImageIndex, images.length]);

  const handlePrevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev !== null ? (prev - 1 + images.length) % images.length : 0
      );
      setIsZoomed(false);
      setRotation(0);
    }
  }, [selectedImageIndex, images.length]);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleDownload = () => {
    if (selectedImageIndex !== null) {
      const image = images[selectedImageIndex];
      const link = document.createElement('a');
      link.href = image.src;
      link.download = image.alt || `image-${image.id}`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleImageLoad = (imageId: string) => {
    setIsLoading(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageError = (imageId: string) => {
    setIsLoading(prev => ({ ...prev, [imageId]: false }));
    setImageLoadErrors(prev => ({ ...prev, [imageId]: true }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          handleLightboxClose();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case ' ':
          e.preventDefault();
          handleZoomToggle();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handleNextImage, handlePrevImage]);

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      setIsLoading(prev => ({ ...prev, [image.id]: true }));
      const img = new Image();
      img.src = image.src;
      img.onload = () => handleImageLoad(image.id);
      img.onerror = () => handleImageError(image.id);
    });
  }, [images]);

  const currentImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <div className={`rtl ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">
          {images.length} تصویر
        </span>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <Card
            key={image.id}
            className="overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group relative"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative h-32 overflow-hidden">
              {/* Loading indicator */}
              {isLoading[image.id] && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface/80 z-10">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              )}
              
              {/* Error state */}
              {imageLoadErrors[image.id] && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface/80 z-10">
                  <div className="text-center text-muted-foreground">
                    <X className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-xs">خطا در بارگذاری</span>
                  </div>
                </div>
              )}
              
              <img
                src={image.src}
                alt={image.alt || `تصویر گالری ${image.id}`}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  isLoading[image.id] || imageLoadErrors[image.id] ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Maximize2 className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Optional caption overlay */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white text-xs">
                  {image.caption}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && currentImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={handleLightboxClose}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 text-white">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">
                  {currentImage.alt || `تصویر ${selectedImageIndex! + 1} از ${images.length}`}
                </h3>
                {currentImage.caption && (
                  <span className="text-sm text-white/70">- {currentImage.caption}</span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                {/* Zoom button */}
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomToggle();
                  }}
                  className="text-white hover:bg-white/20"
                  ariaLabel={isZoomed ? "کوچک کردن" : "بزرگ کردن"}
                >
                  {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
                </IconButton>
                
                {/* Rotate button */}
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRotate();
                  }}
                  className="text-white hover:bg-white/20"
                  ariaLabel="چرخاندن"
                >
                  <RotateCw className="h-5 w-5" />
                </IconButton>
                
                {/* Download button */}
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
                
                {/* Close button */}
                <IconButton
                  onClick={handleLightboxClose}
                  className="text-white hover:bg-white/20"
                  ariaLabel="بستن"
                >
                  <X className="h-5 w-5" />
                </IconButton>
              </div>
            </div>
            
            {/* Image container */}
            <div className="flex-1 flex items-center justify-center overflow-hidden relative">
              {/* Previous button */}
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
              
              {/* Next button */}
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
              
              {/* Image */}
              <div 
                className={`relative max-w-full max-h-full overflow-hidden ${
                  isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomToggle();
                }}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt || `تصویر ${selectedImageIndex! + 1}`}
                  className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                  style={{ transform: `rotate(${rotation}deg) ${isZoomed ? 'scale(1.5)' : 'scale(1)'}` }}
                />
              </div>
            </div>
            
            {/* Footer with image indicators */}
            <div className="flex justify-center items-center gap-2 p-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(index);
                    setIsZoomed(false);
                    setRotation(0);
                  }}
                  aria-label={`رفتن به تصویر ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}