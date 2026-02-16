'use client';

import React, { useMemo, useState, useCallback } from 'react';
import { Button } from '@/src/components/ui/button';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';

/** ========= UI helpers (Badge / Input) ========= */
const Badge = ({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}) => {
  const base =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variants = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-input bg-background text-foreground',
  } as const;

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
};

const Input = ({
  className = '',
  type = 'text',
  placeholder,
  value,
  onChange,
  onKeyDown,
}: {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    className={`flex h-11 w-full rounded-xl border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

/** ========= Types ========= */
interface Project {
  id: string;
  title: string;
  category: string; // ممکنه فارسی باشه یا id انگلیسی
  coverImage: string;
  previewImage?: string;
}

interface PortfolioFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  projects: Project[];
  className?: string;
}

/** ========= Categories config ========= */
const CATEGORIES = [
  { id: 'all', name: 'همه پروژه‌ها', icon: Sparkles },
  { id: 'web', name: 'وب‌سایت' },
  { id: 'mobile', name: 'اپلیکیشن موبایل' },
  { id: 'dashboard', name: 'داشبورد' },
  { id: 'ecommerce', name: 'فروشگاه آنلاین' },
  { id: 'landing', name: 'صفحه فرود' },
] as const;

/**
 * اگر project.category فارسیه، اینجا به id تبدیلش می‌کنیم.
 * اگر پروژه‌هاتون از قبل categoryId دارند، می‌تونیم این mapper رو حذف کنیم.
 */
const FA_TO_ID_MAP: Record<string, string> = {
  'وب‌سایت': 'web',
  'اپلیکیشن موبایل': 'mobile',
  'داشبورد': 'dashboard',
  'فروشگاه آنلاین': 'ecommerce',
  'صفحه فرود': 'landing',
  // اگر دسته‌های دیگری دارید اضافه کنید
};

function normalizeCategoryToId(raw: string): string {
  // اگر خودش id است
  if (['web', 'mobile', 'dashboard', 'ecommerce', 'landing'].includes(raw)) return raw;
  // اگر فارسی است
  return FA_TO_ID_MAP[raw] ?? raw;
}

/** ========= Component ========= */
export default function PortfolioFilters({
  activeFilter,
  onFilterChange,
  projects,
  className = '',
}: PortfolioFiltersProps) {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(true); // پیشفرض باز بهتره

  /** شمارش دسته‌ها O(n) */
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };

    for (const p of projects) {
      const id = normalizeCategoryToId(p.category);
      c[id] = (c[id] || 0) + 1;
    }

    // اطمینان از وجود کلیدها برای UI
    for (const cat of CATEGORIES) {
      if (!c[cat.id]) c[cat.id] = cat.id === 'all' ? projects.length : 0;
    }

    return c;
  }, [projects]);

  const activeLabel = useMemo(() => {
    const found = CATEGORIES.find((c) => c.id === activeFilter);
    return found?.name ?? activeFilter;
  }, [activeFilter]);

  const setFilter = useCallback(
    (id: string) => {
      onFilterChange(id);
    },
    [onFilterChange]
  );

  const onSubmitSearch = useCallback(() => {
    // با parent شما: activeFilter='search' استفاده می‌شود
    // query داخل این کامپوننت می‌ماند، ولی شما می‌تونی در parent هم نگه داری
    onFilterChange('search');
  }, [onFilterChange]);

  const clearSearch = useCallback(() => {
    setQuery('');
    // اگر در حالت search بودیم، برگرد به all
    if (activeFilter === 'search') onFilterChange('all');
  }, [activeFilter, onFilterChange]);

  return (
    <div className={`rtl w-full ${className}`} dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <SlidersHorizontal className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground">فیلتر و جستجو</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              انتخاب دسته‌بندی یا جستجو بین پروژه‌ها
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={() => setExpanded((v) => !v)}
          className="text-muted-foreground hover:text-foreground"
        >
          {expanded ? 'بستن' : 'باز کردن'}
        </Button>
      </div>

      {/* Search */}
      <div
        className={`transition-all duration-300 ${
          expanded ? 'max-h-[120px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="relative">
          <Input
            placeholder="جستجو در پروژه‌ها…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onSubmitSearch();
              }
              if (e.key === 'Escape') {
                clearSearch();
              }
            }}
            className="pl-11 pr-11"
          />

          {/* Left icon */}
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>

          {/* Clear */}
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
              aria-label="پاک کردن جستجو"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="text-xs text-muted-foreground">
            {activeFilter === 'search' && query ? (
              <>
                نتایج برای: <span className="text-foreground font-medium">"{query}"</span>
              </>
            ) : (
              <>
                فیلتر فعال: <span className="text-foreground font-medium">{activeLabel}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-9 rounded-xl"
              onClick={onSubmitSearch}
              disabled={!query.trim()}
            >
              جستجو
            </Button>
            {(activeFilter !== 'all' || query) && (
              <Button variant="ghost" className="h-9 rounded-xl" onClick={() => {
                setQuery('');
                onFilterChange('all');
              }}>
                بازنشانی
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div
        className={`mt-4 transition-all duration-300 ${
          expanded ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            const count = counts[cat.id] ?? 0;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setQuery(''); // با تغییر دسته سرچ پاک شود
                  setFilter(cat.id);
                }}
                className={`
                  inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all
                  ${isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-background text-foreground border-border hover:bg-primary/5 hover:border-primary/30'
                  }
                `}
              >
                {/* Icon only for all */}
                {cat.id === 'all' && <Sparkles className={`h-4 w-4 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />}

                <span className="whitespace-nowrap">{cat.name}</span>

                <span
                  className={`
                    inline-flex min-w-[26px] justify-center rounded-full px-2 py-0.5 text-xs font-semibold
                    ${isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-foreground'}
                  `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active filter chip */}
        {activeFilter !== 'all' && activeFilter !== 'search' && (
          <div className="flex justify-center mt-3">
            <Badge variant="secondary" className="px-3 py-1 rounded-full">
              فیلتر فعال: {activeLabel}
              <button
                type="button"
                onClick={() => onFilterChange('all')}
                className="mr-2 inline-flex items-center justify-center h-5 w-5 rounded-full hover:bg-black/10"
                aria-label="حذف فیلتر"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          </div>
        )}

        {activeFilter === 'search' && query && (
          <div className="flex justify-center mt-3">
            <Badge variant="secondary" className="px-3 py-1 rounded-full">
              نتایج جستجو: "{query}"
              <button
                type="button"
                onClick={clearSearch}
                className="mr-2 inline-flex items-center justify-center h-5 w-5 rounded-full hover:bg-black/10"
                aria-label="پاک کردن جستجو"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
}
