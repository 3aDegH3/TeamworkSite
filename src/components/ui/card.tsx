import * as React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  ...props
}: CardProps) {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-300' : ''

  return (
    <div
      {...props}
      className={`
        bg-white dark:bg-gray-900 
        rounded-xl border border-gray-200 dark:border-gray-800 
        shadow-sm ${paddingClasses[padding]} ${hoverClass} ${className}
      `}
    >
      {children}
    </div>
  )
}

// برای بخش‌های مختلف کارت
export function CardHeader({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { children: React.ReactNode }) {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { children: React.ReactNode }) {
  return (
    <p className={`text-gray-600 dark:text-gray-400 mt-1 ${className}`} {...props}>
      {children}
    </p>
  )
}

export function CardContent({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div className={`mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 ${className}`} {...props}>
      {children}
    </div>
  )
}
