'use client'

import { useState } from 'react'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'

interface RegisterFormProps {
  onSwitchToLogin: () => void
  isActive?: boolean
}

export default function RegisterForm({ onSwitchToLogin, isActive = true }: RegisterFormProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('رمز عبور و تکرار آن باید یکسان باشند')
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log('Register attempt:', { fullName, email, password })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 w-full ${!isActive ? 'pointer-events-none' : ''}`}>
      <div className="space-y-5 w-full">
        <div className="w-full">
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground/80 mb-2 text-right">
            نام و نام خانوادگی
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="نام و نام خانوادگی خود را وارد کنید"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full text-right bg-card border-border focus:border-primary focus:ring-primary"
            dir="rtl"
            autoComplete="name"
          />
        </div>

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
            autoComplete="new-password"
          />
        </div>

        <div className="w-full">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground/80 mb-2 text-right">
            تکرار رمز عبور
          </label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="تکرار رمز عبور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full text-right bg-card border-border focus:border-primary focus:ring-primary"
            dir="rtl"
            autoComplete="new-password"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-95"
        loading={isLoading}
        disabled={!fullName || !email || !password || !confirmPassword || password !== confirmPassword}
      >
        ثبت‌نام
      </Button>

      <div className="text-center text-sm text-muted-foreground pt-2 w-full">
        از قبل حساب دارید؟{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-medium text-primary hover:opacity-90 transition-opacity"
        >
          ورود
        </button>
      </div>
    </form>
  )
}
