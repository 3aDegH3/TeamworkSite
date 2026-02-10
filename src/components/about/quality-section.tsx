'use client'

import { CheckCircle, BarChart, Clock, Award, TrendingUp, Shield } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/src/components/ui/button'

export default function QualitySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const standards = [
    {
      icon: CheckCircle,
      title: 'استانداردهای بالای کد',
      description: 'کد تمیز، بهینه و مستند برای نگهداری آسان',
      details: 'ما از بهترین شیوه‌های کدنویسی و استانداردهای صنعتی پیروی می‌کنیم',
      metric: '95%',
    },
    {
      icon: BarChart,
      title: 'تجزیه و تحلیل داده‌ها',
      description: 'تصمیم‌گیری مبتنی بر داده برای بهینه‌سازی مستمر',
      details: 'با استفاده از داده‌های واقعی، عملکرد را بهبود می‌بخشیم',
      metric: '40%',
    },
    {
      icon: Clock,
      title: 'تحویل به موقع',
      description: 'تعهد به زمان‌بندی‌های توافق شده با کیفیت بالا',
      details: 'پروژه‌ها همیشه در زمان مقرر با بالاترین کیفیت تحویل داده می‌شوند',
      metric: '100%',
    },
  ]

  const qualityMetrics = [
    { icon: Award, value: '98%', label: 'رضایت مشتریان' },
    { icon: TrendingUp, value: '25%', label: 'بهبود عملکرد' },
    { icon: Shield, value: '99.9%', label: 'آپتایم' },
  ]

  return (
    <section className="py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Background pattern - very subtle */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A1020' fill-opacity='0.18'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated gradient orbs - very subtle background decoration */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        style={{ background: 'linear-gradient(to bottom right, #2563EB, #2563EB)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-[0.04]"
        style={{ background: 'linear-gradient(to bottom right, #2563EB, #2563EB)' }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: '#0A1020' }}
              >
                تعهد به کیفیت
              </h2>
              <p 
                className="text-lg mb-8 leading-relaxed"
                style={{ color: '#334155' }}
              >
                کیفیت در مرکز تمام کارهای ما قرار دارد. ما با استفاده از استانداردهای صنعتی و فرآیندهای کنترل کیفیت،
                تضمین می‌کنیم که هر پروژه به بالاترین سطح از برتری دست یابد.
              </p>
            </div>

            <div className="space-y-6">
              {standards.map((standard, index) => {
                const StandardIcon = standard.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 space-x-reverse p-4 rounded-xl transition-all duration-300 cursor-pointer border ${
                      activeIndex === index
                        ? 'shadow-lg border-[#2563EB]/20'
                        : 'shadow-sm border-[#E2E8F0] hover:shadow-md hover:border-[#E2E8F0]'
                    }`}
                    style={{ 
                      backgroundColor: activeIndex === index ? '#FFFFFF' : '#FFFFFF',
                      borderWidth: '1px'
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm flex-shrink-0 transition-all duration-300"
                      style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}
                    >
                      <StandardIcon className="h-7 w-7" style={{ color: '#2563EB' }} />
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 
                          className="text-lg font-semibold"
                          style={{ color: '#0A1020' }}
                        >
                          {standard.title}
                        </h3>
                        <span 
                          className="text-2xl font-bold"
                          style={{ color: '#2563EB' }}
                        >
                          {standard.metric}
                        </span>
                      </div>

                      <p 
                        className="mb-2 leading-relaxed"
                        style={{ color: '#334155' }}
                      >
                        {standard.description}
                      </p>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === index ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: '#64748B' }}
                        >
                          {standard.details}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div 
              className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border"
              style={{ 
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                borderColor: '#E2E8F0',
                borderWidth: '1px'
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* Central badge */}
                <div className="relative mb-8">
                  <div 
                    className="w-32 h-32 rounded-full flex items-center justify-center shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' }}
                  >
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ border: '4px solid #2563EB', opacity: '0.2' }}
                  />
                </div>

                <h3 
                  className="text-2xl font-bold mb-4 text-center"
                  style={{ color: '#0A1020' }}
                >
                  فرآیند کنترل کیفیت
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                  {qualityMetrics.map((metric, index) => {
                    const MetricIcon = metric.icon
                    return (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md"
                          style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}
                        >
                          <MetricIcon className="h-6 w-6" style={{ color: '#2563EB' }} />
                        </div>
                        <div 
                          className="text-xl font-bold"
                          style={{ color: '#0A1020' }}
                        >
                          {metric.value}
                        </div>
                        <div 
                          className="text-xs"
                          style={{ color: '#334155' }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Decorative elements - very subtle */}
            <div 
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-[0.08] blur-2xl animate-pulse"
              style={{ background: 'linear-gradient(135deg, #2563EB 0%, #2563EB 100%)' }}
            />
            <div
              className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-[0.08] blur-2xl animate-pulse"
              style={{ 
                background: 'linear-gradient(135deg, #2563EB 0%, #2563EB 100%)',
                animationDelay: '1s'
              }}
            />

            {/* Floating badges */}
            <div 
              className="absolute top-4 -left-4 rounded-full shadow-lg p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-300 border"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px' }}
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#F0FDF4' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#16A34A' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span 
                  className="text-sm font-medium"
                  style={{ color: '#0A1020' }}
                >
                  ISO 9001
                </span>
              </div>
            </div>

            <div 
              className="absolute bottom-4 -right-4 rounded-full shadow-lg p-3 transform rotate-12 hover:rotate-0 transition-transform duration-300 border"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px' }}
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#2563EB' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span 
                  className="text-sm font-medium"
                  style={{ color: '#0A1020' }}
                >
                  سریع & بهینه
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            style={{ 
              background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
              border: 'none'
            }}
          >
            تضمین کیفیت ما
          </Button>
        </div>
      </div>
    </section>
  )
}