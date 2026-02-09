'use client'

import AuthSwitcher from '@/src/components/auth/auth-switcher'

export default function AuthShell() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div 
        className="rounded-2xl shadow-xl backdrop-blur-md bg-white/90 p-6 sm:p-8 md:p-10 border border-gray-100/50 overflow-y-auto max-h-[80vh]"
        style={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
        }}
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            خوش آمدید
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            برای ادامه، وارد حساب کاربری خود شوید یا ثبت‌نام کنید
          </p>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <AuthSwitcher />
        </div>
      </div>
    </div>
  )
}