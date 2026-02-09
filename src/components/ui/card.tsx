// src/components/ui/card.tsx
import * as React from 'react'
import { cn } from '@/src/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
}

export function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  variant = 'default',
  ...props
}: CardProps) {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const variantClasses = {
    default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm',
    elevated: 'bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 shadow-lg',
    outlined: 'bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700',
    glass: 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 shadow-lg'
  }

  const hoverClass = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover-lift' : ''

  return (
    <div
      {...props}
      className={cn(
        'rounded-xl',
        variantClasses[variant],
        paddingClasses[padding],
        hoverClass,
        className
      )}
    >
      {children}
    </div>
  )
}

// Enhanced card subcomponents with better styling
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
    <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${className}`} {...props}>
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