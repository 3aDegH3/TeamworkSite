// src/components/ui/input.tsx
import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className, ...props }, ref) => {
    return (
      <div className={cn('space-y-2', fullWidth && 'w-full')}>
        {label && (
          <label className="block text-sm font-medium text-foreground/80">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={cn(
            'px-4 py-2.5 rounded-lg border',
            'bg-card border-border',
            'text-foreground placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors duration-200',
            fullWidth && 'w-full',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />

        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
