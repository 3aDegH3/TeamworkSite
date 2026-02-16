'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface DrawerPreviewProps {
  src: string;
  alt: string;
  href?: string;          // لینک سایت پروژه (اختیاری)
  className?: string;
}

export default function DrawerPreview({ src, alt, href, className = '' }: DrawerPreviewProps) {
  const [error, setError] = useState(false);

  const content = (
    <div className={`relative w-full overflow-hidden rounded-xl border border-border bg-muted ${className}`}>
      <div className="relative w-full aspect-[16/10]">
        {!error ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-sm text-muted-foreground">
            تصویر در دسترس نیست
          </div>
        )}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="مشاهده سایت پروژه"
      className="block"
      onClick={(e) => e.stopPropagation()}
    >
      {content}
    </a>
  );
}
