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
    lg: 'p-8',
  }

  // ✅ theme tokens (no dark mode)
  const variantClasses = {
    default: 'bg-card border border-border shadow-sm',
    elevated: 'bg-card border border-border/70 shadow-lg',
    outlined: 'bg-card border-2 border-border',
    glass: 'bg-card/70 backdrop-blur-md border border-border/60 shadow-lg',
  }

  const hoverClass = hover
    ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover-lift'
    : ''

  return (
    <div
      {...props}
      className={cn(
        'rounded-xl text-foreground',
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

// Subcomponents
export function CardHeader({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
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
    <h3 className={cn('text-xl font-bold text-foreground', className)} {...props}>
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
    <p className={cn('mt-1 text-muted-foreground', className)} {...props}>
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
    <div className={cn(className)} {...props}>
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
    <div className={cn('mt-6 pt-6 border-t border-border', className)} {...props}>
      {children}
    </div>
  )
}
