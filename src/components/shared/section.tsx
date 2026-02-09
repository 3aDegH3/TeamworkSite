// src/components/shared/section.tsx
import { cn } from '@/src/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  grid?: boolean
  id?: string
  background?: 'none' | 'light' | 'dark' | 'gradient'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({
  children,
  className = '',
  grid = false,
  id,
  background = 'none',
  padding = 'lg',
  ...props
}: SectionProps) {
  const backgroundClasses = {
    none: '',
    light: 'bg-gray-50 dark:bg-gray-900/50',
    dark: 'bg-gray-900 dark:bg-gray-950',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20'
  }

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }

  return (
    <section
      id={id}
      className={cn(
        "relative",
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        grid && "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
      )}>
        {children}
      </div>
    </section>
  )
}