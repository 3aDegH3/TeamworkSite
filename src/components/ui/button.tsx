// src/components/ui/button.tsx
'use client'

import { ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/src/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  children: ReactNode
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export function Button({
  variant = 'default',
  size = 'md',
  loading = false,
  children,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 ' +
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background ' +
    'disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group'

  const variants = {
    default: 'bg-foreground text-background hover:bg-foreground/90 shadow-md hover:shadow-lg',
    primary: 'bg-primary text-primary-foreground hover:opacity-95 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-95 shadow-md hover:shadow-lg',
    outline: 'border-2 border-border text-foreground hover:bg-surface',
    ghost: 'text-foreground hover:bg-surface',
    gradient: 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-95 shadow-md hover:shadow-lg',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }

  const shine =
    variant === 'primary' || variant === 'gradient' ? (
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transform skew-x-12 transition-transform duration-1000" />
    ) : null

  return (
    <button
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      disabled={disabled || loading}
      {...props}
    >
      {shine}
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  )
}
