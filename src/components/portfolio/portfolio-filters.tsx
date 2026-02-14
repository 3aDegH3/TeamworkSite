'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/src/components/ui/button';
import { 
  Search, 
  X, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  Sparkles
} from 'lucide-react';

// Badge component replacement
const Badge = ({ 
  children, 
  variant = "default", 
  className = "" 
}: { 
  children: React.ReactNode; 
  variant?: "default" | "secondary" | "outline";
  className?: string;
}) => {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background text-foreground"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Input component replacement
const Input = ({ 
  className = "", 
  type = "text",
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur
}: { 
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  previewImage?: string;
}

interface PortfolioFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  projects: Project[];
  className?: string;
}

const categories = [
  { id: 'all', name: 'همه پروژه‌ها', icon: Sparkles },
  { id: 'web', name: 'وب‌سایت', icon: Filter },
  { id: 'mobile', name: 'اپلیکیشن موبایل', icon: Filter },
  { id: 'dashboard', name: 'داشبورد', icon: Filter },
  { id: 'ecommerce', name: 'فروشگاه آنلاین', icon: Filter },
  { id: 'landing', name: 'صفحه فرود', icon: Filter },
];

export default function PortfolioFilters({ 
  activeFilter, 
  onFilterChange, 
  projects,
  className = ""
}: PortfolioFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Count projects for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    
    categories.forEach(category => {
      if (category.id !== 'all') {
        counts[category.id] = projects.filter(project => 
          project.category === category.name
        ).length;
      }
    });
    
    return counts;
  }, [projects]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle filter change with search
  const handleFilterChangeWithSearch = (filter: string) => {
    onFilterChange(filter);
    // Clear search when changing filter
    setSearchQuery('');
  };

  // Submit search
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger search filter change
    onFilterChange('search');
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Search Bar */}
      <div className={`mb-6 transition-all duration-300 ${
        isExpanded ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <form onSubmit={handleSearchSubmit} className="relative max-w-md mx-auto">
          <Input
            type="text"
            placeholder="جستجوی پروژه‌ها..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className={`pr-10 transition-all duration-200 ${
              isSearchFocused ? 'ring-2 ring-primary/30 border-primary' : ''
            }`}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className={`h-4 w-4 transition-colors ${
              isSearchFocused ? 'text-primary' : 'text-muted-foreground'
            }`} />
          </div>
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </form>
      </div>

      {/* Filter Header with Toggle */}
      <div className="flex items-center justify-center mb-4">
        <Button
          variant="ghost"
          onClick={toggleExpanded}
          className="text-muted-foreground hover:text-foreground"
        >
          <Filter className="h-4 w-4 ml-2" />
          فیلترها و جستجو
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 mr-2" />
          ) : (
            <ChevronDown className="h-4 w-4 mr-2" />
          )}
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className={`flex flex-wrap justify-center gap-3 transition-all duration-300 ${
        isExpanded ? 'py-6' : 'py-3'
      }`}>
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeFilter === category.id;
          const count = categoryCounts[category.id] || 0;
          
          return (
            <Button
              key={category.id}
              variant={isActive ? 'default' : 'outline'}
              onClick={() => handleFilterChangeWithSearch(category.id)}
              className={`
                relative transition-all duration-300 group
                ${isActive 
                  ? 'bg-primary text-primary-foreground shadow-md scale-105' 
                  : 'hover:bg-primary/10 hover:text-primary hover:scale-105'
                }
              `}
            >
              <span className="flex items-center">
                <Icon className="h-4 w-4 ml-2" />
                {category.name}
              </span>
              
              {/* Count Badge */}
              <Badge 
                variant={isActive ? "secondary" : "outline"} 
                className={`mr-2 px-1.5 py-0 text-xs ${
                  isActive 
                    ? 'bg-primary-foreground/20 text-primary-foreground' 
                    : 'bg-muted'
                }`}
              >
                {count}
              </Badge>
              
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"></div>
              )}
            </Button>
          );
        })}
      </div>

      {/* Active Filters Display */}
      {activeFilter !== 'all' && activeFilter !== 'search' && (
        <div className="flex justify-center mt-2">
          <Badge variant="secondary" className="px-3 py-1">
            فیلتر فعال: {categories.find(c => c.id === activeFilter)?.name}
            <Button
              variant="ghost"
              className="mr-1 h-5 w-5 p-0"
              onClick={() => onFilterChange('all')}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        </div>
      )}
      
      {/* Search Results Display */}
      {activeFilter === 'search' && searchQuery && (
        <div className="flex justify-center mt-2">
          <Badge variant="secondary" className="px-3 py-1">
            نتایج جستجو: "{searchQuery}"
            <Button
              variant="ghost"
              className="mr-1 h-5 w-5 p-0"
              onClick={() => {
                onFilterChange('all');
                setSearchQuery('');
              }}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        </div>
      )}
    </div>
  );
}