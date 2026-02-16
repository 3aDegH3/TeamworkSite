'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { StaticImageData } from 'next/image';

type ImageLike = string | StaticImageData | { src: string };

function normalizeSrc(input?: ImageLike): string {
  if (!input) return '';
  let s = typeof input === 'string' ? input : (input as any).src;
  if (!s) return '';

  s = s.replace(/^public\//, '/').replace(/^\.\//, '/');

  if (
    !s.startsWith('/') &&
    !s.startsWith('http://') &&
    !s.startsWith('https://') &&
    !s.startsWith('data:') &&
    !s.startsWith('blob:')
  ) {
    s = `/${s}`;
  }

  return s;
}

type Props = {
  src: ImageLike;
  alt?: string;
  height?: number;   // px
  speed?: number;    // px/sec
  active?: boolean;  // هاور از بیرون کنترل میشه
  className?: string;
};

export default function ScrollingPreview({
  src,
  alt = '',
  height = 260,
  speed = 70,          // ✅ پیش‌فرض سریع‌تر
  active = false,
  className = '',
}: Props) {
  const srcStr = useMemo(() => normalizeSrc(src), [src]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number>(0);
  const yRef = useRef<number>(0);
  const dirRef = useRef<1 | -1>(1);

  const [cw, setCw] = useState(0);
  const [nat, setNat] = useState({ w: 0, h: 0 });
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // ارتفاع رندر شده تصویر (width:100% و height:auto)
  const renderedH = useMemo(() => {
    if (!cw || !nat.w || !nat.h) return 0;
    return cw * (nat.h / nat.w);
  }, [cw, nat]);

  const scrollDistance = useMemo(() => {
    return Math.max(0, renderedH - height);
  }, [renderedH, height]);

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    lastTsRef.current = 0;
  }, []);

  const applyTransform = useCallback(
    (y: number, withTransition: boolean) => {
      const el = layerRef.current;
      if (!el) return;

      const scale = active && scrollDistance <= 0 ? 1.03 : 1;
      el.style.transition = withTransition ? 'transform 350ms ease' : 'none';
      el.style.transform = `translate3d(0, -${y}px, 0) scale(${scale})`;
    },
    [active, scrollDistance]
  );

  const resetToTop = useCallback(() => {
    stop();
    yRef.current = 0;
    dirRef.current = 1;
    applyTransform(0, true);
    window.setTimeout(() => {
      const el = layerRef.current;
      if (el) el.style.transition = 'none';
    }, 360);
  }, [applyTransform, stop]);

  // ✅ tick باید active/loaded را هم چک کند تا بعد refresh گیر نکند
  const tick = useCallback(
    (ts: number) => {
      if (!active || !loaded || scrollDistance <= 0) {
        stop();
        return;
      }

      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;

      const step = speed * dt;
      let y = yRef.current + step * dirRef.current;

      if (y >= scrollDistance) {
        y = scrollDistance;
        dirRef.current = -1;
      } else if (y <= 0) {
        y = 0;
        dirRef.current = 1;
      }

      yRef.current = y;
      applyTransform(y, false);

      rafRef.current = requestAnimationFrame(tick);
    },
    [active, loaded, scrollDistance, speed, applyTransform, stop]
  );

  const start = useCallback(() => {
    stop();
    rafRef.current = requestAnimationFrame(tick);
  }, [stop, tick]);

  // اندازه container با ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect();
      setCw(Math.round(rect.width));
    });
    ro.observe(el);

    const rect = el.getBoundingClientRect();
    setCw(Math.round(rect.width));

    return () => ro.disconnect();
  }, []);

  // وقتی src عوض شد ریست کامل
  useEffect(() => {
    setError(false);
    setLoaded(false);
    setNat({ w: 0, h: 0 });
    resetToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [srcStr]);

  // وقتی عکس load شد
  const onLoad = useCallback(() => {
    const img = imgRef.current;
    if (!img) return;

    setError(false);
    setLoaded(true);
    setNat({ w: img.naturalWidth || 0, h: img.naturalHeight || 0 });

    yRef.current = 0;
    dirRef.current = 1;
    lastTsRef.current = 0;
    applyTransform(0, false);

    // ✅ یک بار هم بعد از فریم بعدی، چون گاهی cw هنوز 0 است
    requestAnimationFrame(() => {
      const el = containerRef.current;
      if (el) setCw(Math.round(el.getBoundingClientRect().width));
    });
  }, [applyTransform]);

  // ✅ کنترل شروع/توقف: وابسته به loaded هم هست
  useEffect(() => {
    if (!srcStr || error) return;

    if (!active) {
      resetToTop();
      return;
    }

    if (loaded && scrollDistance > 0) start();
    else applyTransform(0, true);

    return () => stop();
  }, [active, srcStr, error, loaded, scrollDistance, start, stop, resetToTop, applyTransform]);

  // اگر اسکرول نداریم، همیشه بالا
  useEffect(() => {
    if (loaded && scrollDistance <= 0) resetToTop();
  }, [loaded, scrollDistance, resetToTop]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={{ height }}>
      {!srcStr || error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm">
          تصویر در دسترس نیست
        </div>
      ) : (
        <div ref={layerRef} className="w-full will-change-transform" style={{ transform: 'translate3d(0,0,0)' }}>
          <img
            ref={imgRef}
            src={srcStr}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={onLoad}
            onError={() => {
              setError(true);
              setLoaded(false);
            }}
            className="block w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </div>
      )}
    </div>
  );
}
