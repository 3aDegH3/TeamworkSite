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
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group'
  
  const variants = {
    default: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 shadow-md hover:shadow-lg',
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 shadow-md hover:shadow-lg hover-lift',
    secondary: 'bg-secondary-200 text-secondary-900 hover:bg-secondary-300 focus:ring-secondary-400 dark:bg-secondary-700 dark:text-secondary-100 dark:hover:bg-secondary-600 shadow-md hover:shadow-lg',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
    gradient: 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white hover:from-primary-700 hover:to-secondary-600 focus:ring-primary-500 shadow-md hover:shadow-lg hover-lift'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  // Add a subtle shine effect on hover for primary and gradient buttons
  const shineEffect = (variant === 'primary' || variant === 'gradient') ? (
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transform skew-x-12 transition-transform duration-1000"></span>
  ) : null
  
  return (
    <button
      className={cn(
        baseClasses, 
        variants[variant], 
        sizes[size], 
        widthClass, 
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {shineEffect}
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  )
}