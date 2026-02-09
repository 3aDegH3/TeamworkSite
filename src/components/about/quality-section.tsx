// src/components/about/quality-section.tsx
'use client'

import { CheckCircle, BarChart, Clock, Award, TrendingUp, Shield } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/src/components/ui/button'

export default function QualitySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const standards = [
    {
      icon: CheckCircle,
      title: "استانداردهای بالای کد",
      description: "کد تمیز، بهینه و مستند برای نگهداری آسان",
      details: "ما از بهترین شیوه‌های کدنویسی و استانداردهای صنعتی پیروی می‌کنیم",
      metric: "95%",
      color: "primary"
    },
    {
      icon: BarChart,
      title: "تجزیه و تحلیل داده‌ها",
      description: "تصمیم‌گیری مبتنی بر داده برای بهینه‌سازی مستمر",
      details: "با استفاده از داده‌های واقعی، عملکرد را بهبود می‌بخشیم",
      metric: "40%",
      color: "secondary"
    },
    {
      icon: Clock,
      title: "تحویل به موقع",
      description: "تعهد به زمان‌بندی‌های توافق شده با کیفیت بالا",
      details: "پروژه‌ها همیشه در زمان مقرر با بالاترین کیفیت تحویل داده می‌شوند",
      metric: "100%",
      color: "accent"
    }
  ]

  const qualityMetrics = [
    { icon: Award, value: "98%", label: "رضایت مشتریان" },
    { icon: TrendingUp, value: "25%", label: "بهبود عملکرد" },
    { icon: Shield, value: "99.9%", label: "آپتایم" }
  ]

  return (
    <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a9d8f' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary-400/10 to-primary-400/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                تعهد به کیفیت
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                کیفیت در مرکز تمام کارهای ما قرار دارد. ما با استفاده از استانداردهای صنعتی و فرآیندهای کنترل کیفیت، تضمین می‌کنیم که هر پروژه به بالاترین سطح از برتری دست یابد.
              </p>
            </div>
            
            <div className="space-y-6">
              {standards.map((standard, index) => {
                const StandardIcon = standard.icon
                return (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-4 space-x-reverse p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeIndex === index 
                        ? 'bg-white dark:bg-gray-800 shadow-lg ring-2 ring-primary-500 ring-offset-2' 
                        : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm flex-shrink-0 transition-all duration-300">
                      <StandardIcon className="h-7 w-7" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {standard.title}
                        </h3>
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {standard.metric}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {standard.description}
                      </p>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {standard.details}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="relative">
            {/* Main visual element */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* Central quality badge */}
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-2xl">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  فرآیند کنترل کیفیت
                </h3>
                
                {/* Quality metrics */}
                <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                  {qualityMetrics.map((metric, index) => {
                    const MetricIcon = metric.icon
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                          <MetricIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">
                          {metric.label}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Floating badges */}
            <div className="absolute top-4 -left-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ISO 9001</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">سریع & بهینه</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <Button 
            variant="gradient" 
            size="lg"
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            تضمین کیفیت ما
          </Button>
        </div>
      </div>
    </section>
  )
} 