'use client';

import { useEffect } from 'react';

function getScrollbarWidth() {
  if (typeof window === 'undefined') return 0;
  return window.innerWidth - document.documentElement.clientWidth;
}

/**
 * Locks page scroll when locked=true and ALWAYS restores it on cleanup.
 * Locks both <html> and <body> to avoid "scroll stuck after reload" issues.
 */
export function useLockScroll(locked: boolean) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPaddingRight = body.style.paddingRight;

    const applyUnlock = () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
    };

    // اگر لاک نیست، ولی از قبل گیر کرده، آزاد کن
    if (!locked) {
      // این خط باعث میشه بعد ریلود هم گیر نکنه
      html.style.overflow = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      return;
    }

    // lock
    const sbw = getScrollbarWidth();
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    // جلوگیری از jump هنگام حذف اسکرول‌بار
    if (sbw > 0) {
      body.style.paddingRight = `${sbw}px`;
    }

    // اگر مرورگر صفحه رو از bfcache برگردوند، ممکنه overflow گیر کنه
    const onPageShow = () => {
      if (!locked) {
        html.style.overflow = '';
        body.style.overflow = '';
        body.style.paddingRight = '';
      }
    };
    window.addEventListener('pageshow', onPageShow);

    return () => {
      window.removeEventListener('pageshow', onPageShow);
      applyUnlock();
    };
  }, [locked]);
}
