'use client';

import { useState } from 'react';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';

interface DrawerGalleryProps {
  images: {
    id: string;
    src: string;
    alt?: string;
    caption?: string;
  }[];
  title?: string;
}

export default function DrawerGallery({ images, title = "گالری تصاویر" }: DrawerGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const handleImageClick = (src: string) => {
    // Open image in new tab for simplicity
    window.open(src, '_blank');
  };

  return (
    <div className="rtl">
      <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {images.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => handleImageClick(image.src)}
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={image.src}
                alt={image.alt || `تصویر گالری ${image.id}`}
                className="w-full h-full object-cover"
              />
              
              {/* Optional caption overlay */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-xs text-center">
                  {image.caption}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Optional: Lightbox (commented out for simplicity) */}
      {/* {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="تصویر بزرگ شده" 
            className="max-w-full max-h-full object-contain"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      )} */}
    </div>
  );
}