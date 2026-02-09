'use client'

import { useState } from 'react'
import LoginForm from '@/src/components/auth/login-form'
import RegisterForm from '@/src/components/auth/register-form'

export default function AuthSwitcher() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  return (
    <div className="relative overflow-hidden">
      {/* Tabs */}
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          type="button"
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
            authMode === 'login'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setAuthMode('login')}
          aria-pressed={authMode === 'login'}
        >
          ورود
        </button>

        <button
          type="button"
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
            authMode === 'register'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setAuthMode('register')}
          aria-pressed={authMode === 'register'}
        >
          ثبت‌نام
        </button>
      </div>

      {/* Forms (NO absolute) */}
      <div className="relative grid">
        {/* Login */}
        <div
          className="col-start-1 row-start-1 w-full transition-all duration-500 ease-in-out"
          style={{
            transform: authMode === 'login' ? 'translateX(0)' : 'translateX(-100%)',
            opacity: authMode === 'login' ? 1 : 0,
            pointerEvents: authMode === 'login' ? 'auto' : 'none',
          }}
          aria-hidden={authMode !== 'login'}
        >
          <LoginForm
            onSwitchToRegister={() => setAuthMode('register')}
            isActive={authMode === 'login'}
          />
        </div>

        {/* Register */}
        <div
          className="col-start-1 row-start-1 w-full transition-all duration-500 ease-in-out"
          style={{
            transform: authMode === 'register' ? 'translateX(0)' : 'translateX(100%)',
            opacity: authMode === 'register' ? 1 : 0,
            pointerEvents: authMode === 'register' ? 'auto' : 'none',
          }}
          aria-hidden={authMode !== 'register'}
        >
          <RegisterForm
            onSwitchToLogin={() => setAuthMode('login')}
            isActive={authMode === 'register'}
          />
        </div>
      </div>
    </div>
  )
}
