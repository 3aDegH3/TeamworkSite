'use client';

import { ProjectCategory } from './types';

interface PortfolioFiltersProps {
  activeFilter: ProjectCategory | 'all' | null;
  onFilterChange: (filter: ProjectCategory | 'all' | null) => void;
}

// All possible categories + "همه" (All)
const allCategories: (ProjectCategory | 'all')[] = [
  'all',
  'فروشگاهی',
  'شرکتی',
  'SaaS',
  'لندینگ',
  'محصولی'
];

const categoryLabels: Record<string, string> = {
  'all': 'همه',
  'فروشگاهی': 'فروشگاهی',
  'شرکتی': 'شرکتی',
  'SaaS': 'SaaS',
  'لندینگ': 'لندینگ',
  'محصولی': 'محصولی'
};

export default function PortfolioFilters({
  activeFilter,
  onFilterChange
}: PortfolioFiltersProps) {
  return (
    <div className="rtl mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-start overflow-x-auto pb-2 md:pb-0">
          {allCategories.map((category) => (
            <button
              key={category}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                whitespace-nowrap
                ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }
              `}
              onClick={() => onFilterChange(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}