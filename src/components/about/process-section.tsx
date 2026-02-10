'use client'

import {
  Search,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Sparkles,
  Target,
  Zap,
  Shield,
  Play,
  Pause,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/src/components/ui/button'

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  // ✅ autoplay controls
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)

  const steps = [
    {
      icon: Search,
      title: 'کشف',
      description: 'درک عمیق نیازها، اهداف و چالش‌های شما',
      details: 'با جلسات متمرکز و تحلیل دقیق، اهداف پروژه را مشخص می‌کنیم',
      duration: '1-2 هفته',
      deliverables: 'نقشه راه پروژه، تحلیل رقبا، شخصیت کاربر',
      features: ['تحلیل نیازها', 'تحقیق بازار', 'شخصیت‌سازی کاربر', 'نقشه راه فنی'],
    },
    {
      icon: Palette,
      title: 'طراحی',
      description: 'ایجاد راه‌حل‌های خلاقانه و کاربردی',
      details: 'طراحی‌های اولیه، پروتوتایپ‌ها و رابط کاربری',
      duration: '2-4 هفته',
      deliverables: 'وایرفریم‌ها، طراحی UI، پروتوتایپ تعاملی',
      features: ['طراحی تجربه کاربری', 'رابط کاربری', 'پروتوتایپ', 'دسترسی‌پذیری'],
    },
    {
      icon: Code,
      title: 'اجرا',
      description: 'پیاده‌سازی دقیق و باکیفیت راه‌حل‌ها',
      details: 'توسعه با بهترین شیوه‌ها و تست مداوم',
      duration: '4-8 هفته',
      deliverables: 'کد منبع، مستندات فنی، تست‌ها',
      features: ['توسعه چابک', 'تست خودکار', 'کدنویسی تمیز', 'مستندسازی'],
    },
    {
      icon: Rocket,
      title: 'راه‌اندازی',
      description: 'انتقال موفقیت‌آمیز پروژه و پشتیبانی مستمر',
      details: 'استقرار، آموزش و پشتیبانی پس از راه‌اندازی',
      duration: '1-2 هفته',
      deliverables: 'محصول نهایی، راهنمای کاربر، پشتیبانی',
      features: ['استقرار تولید', 'آموزش تیم', 'پشتیبانی فنی', 'بهینه‌سازی'],
    },
  ]

  // ✅ Auto-advance (loops)
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)

    if (isAutoPlay && !isHovering) {
      timerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 4500) // هر 4.5 ثانیه
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [isAutoPlay, isHovering, steps.length])

  const resumeAfterIdle = () => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => setIsAutoPlay(true), 8000) // بعد 8 ثانیه برگرده
  }

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setIsAutoPlay(false)
    resumeAfterIdle()
  }

  const goPrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)
    setIsAutoPlay(false)
    resumeAfterIdle()
  }

  const goNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length)
    setIsAutoPlay(false)
    resumeAfterIdle()
  }

  const toggleAutoPlay = () => setIsAutoPlay((p) => !p)

  const CurrentIcon = steps[activeStep].icon

  return (
    <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a9d8f' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/10 via-emerald-400/10 to-orange-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 via-green-400/10 to-emerald-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-yellow-400/5 via-orange-400/5 to-green-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-orange-500/10 dark:from-green-500/20 dark:to-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">فرآیند کار ما</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            نحوه کار ما
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ما از فرآیندی شفاف و ساختاریافته پیروی می‌کنیم که تضمین می‌کند پروژه‌ها به موقع و با بالاترین کیفیت تحویل داده شوند.
          </p>
        </div>

        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
              <div className="grid grid-cols-4 gap-0">
                {steps.map((step, index) => {
                  const StepIcon = step.icon
                  return (
                    <button
                      key={index}
                      onClick={() => handleStepClick(index)}
                      className={`relative py-6 px-4 text-center transition-all duration-300 group ${
                        index === activeStep
                          ? 'bg-white dark:bg-gray-900 shadow-lg transform -translate-y-1'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      } ${index > 0 ? 'border-r border-gray-200 dark:border-gray-700' : ''} ${
                        index < activeStep
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                          : ''
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                            index === activeStep
                              ? 'bg-gradient-to-br from-green-500 to-orange-500 text-white shadow-lg scale-110'
                              : index < activeStep
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-gray-300 dark:group-hover:bg-gray-600'
                          }`}
                        >
                          {index < activeStep ? <CheckCircle className="h-6 w-6" /> : <StepIcon className="h-6 w-6" />}
                        </div>

                        <div>
                          <h3
                            className={`font-semibold text-sm ${
                              index === activeStep ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{step.duration}</p>
                        </div>
                      </div>

                      {index === activeStep && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-t-full" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Main */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <CurrentIcon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{steps[activeStep].title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          مرحله {activeStep + 1} از {steps.length}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{steps[activeStep].details}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">{steps[activeStep].description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {steps[activeStep].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-orange-100 dark:from-green-900/30 dark:to-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">مدت زمان</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{steps[activeStep].duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">تحویل‌ها</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{steps[activeStep].deliverables}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-100 to-orange-100 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-orange-900/20 rounded-3xl transform rotate-3" />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-green-100 to-emerald-100 dark:from-orange-900/20 dark:via-green-900/20 dark:to-emerald-900/20 rounded-3xl transform -rotate-3" />

                    <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                          <CurrentIcon className="h-12 w-12" />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-center space-x-2 space-x-reverse">
                            {steps.map((_, index) => (
                              <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  index === activeStep
                                    ? 'w-8 bg-gradient-to-r from-green-500 to-orange-500'
                                    : index < activeStep
                                    ? 'w-2 bg-green-500'
                                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            پیشرفت کلی: {Math.round(((activeStep + 1) / steps.length) * 100)}%
                          </p>
                        </div>

                        <div className="flex justify-center space-x-4 space-x-reverse">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                            <Shield className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Button variant="outline" size="lg" onClick={goPrev} className="flex items-center gap-2">
                  مرحله قبل
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {activeStep + 1} از {steps.length}
                  </p>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-orange-500 transition-all duration-500"
                      style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={toggleAutoPlay}
                    className="rounded-xl px-4"
                    aria-label={isAutoPlay ? 'توقف حرکت خودکار' : 'شروع حرکت خودکار'}
                  >
                    {isAutoPlay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>

                  <Button
                    variant="default"
                    size="lg"
                    onClick={goNext}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600"
                  >
                    مرحله بعد
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <span className="font-semibold">شروع پروژه خود</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">آماده‌اید تا پروژه بعدی خود را با هم شروع کنیم؟</p>
        </div>
      </div>
    </section>
  )
}
