'use client'

import { useState } from 'react'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'

interface LoginFormProps {
  onSwitchToRegister: () => void
  isActive?: boolean
}

export default function LoginForm({ onSwitchToRegister, isActive = true }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', { email, password })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 w-full ${!isActive ? 'pointer-events-none' : ''}`}>
      <div className="space-y-5 w-full">
        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2 text-right">
            ایمیل
          </label>
          <Input
            id="email"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full text-right bg-card border-border focus:border-primary focus:ring-primary"
            dir="rtl"
            autoComplete="email"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block text-sm font-medium text-foreground/80 mb-2 text-right">
            رمز عبور
          </label>
          <Input
            id="password"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full text-right bg-card border-border focus:border-primary focus:ring-primary"
            dir="rtl"
            autoComplete="current-password"
          />
        </div>
      </div>

      <div className="flex justify-end w-full">
        <button
          type="button"
          className="text-sm text-primary hover:opacity-90 font-medium transition-opacity"
        >
          رمز را فراموش کرده‌اید؟
        </button>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-95"
        loading={isLoading}
        disabled={!email || !password}
      >
        ورود
      </Button>

      <div className="text-center text-sm text-muted-foreground pt-2 w-full">
        حساب کاربری ندارید؟{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="font-medium text-primary hover:opacity-90 transition-opacity"
        >
          ثبت‌نام
        </button>
      </div>
    </form>
  )
}
