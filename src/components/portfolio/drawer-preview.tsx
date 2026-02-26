'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';

type Props = {
  src: string;
  alt: string;
  href?: string;
};

function normalize(src: string) {
  if (!src) return '';
  return src.replace(/^public\//, '/').replace(/^\.\//, '/');
}

export default function DrawerPreview({ src, alt, href }: Props) {
  const [err, setErr] = useState(false);
  const s = useMemo(() => normalize(src), [src]);

  const ImageEl = (
    <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
      <img
        src={s}
        alt={alt}
        className="block w-full h-auto"
        loading="eager"
        decoding="async"
        onError={() => setErr(true)}
      />

      {err && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
          تصویر در دسترس نیست
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {ImageEl}
      </a>
    );
  }

  return ImageEl;
}
