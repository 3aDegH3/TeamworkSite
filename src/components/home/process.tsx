// src/components/home/process.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronRight, ArrowRight, CheckCircle, ChevronLeft, ChevronRight as ChevronRightIcon, Play, Pause } from 'lucide-react'
import { Section } from '@/src/components/shared/section'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'

// Type definition for deliverables
type Deliverables = string[] | string;

// Enhanced process steps data with richer content
const processSteps = [
  {
    id: 1,
    title: 'تماس اولیه',
    outcome: 'شناخت اولیه اهداف و نیازهای شما',
    icon: '01',
    color: 'from-blue-500 to-cyan-500',
    detailsTitle: 'شروع گفتگو',
    detailsBullets: [
      'جلسه اولیه برای درک چشم‌انداز پروژه',
      'شناسایی اهداف کلیدی کسب‌وکار شما',
      'بررسی اولیه محدودیت‌ها و فرصت‌ها',
      'تعیین نقاط تماس اصلی برای همکاری'
    ],
    image: '/images/process/consultation.jpg',
    deliverables: ['برنامه اولیه', 'نقشه راه', 'برآورد زمانی اولیه'] as Deliverables
  },
  {
    id: 2,
    title: 'شناخت نیاز',
    outcome: 'تحلیل دقیق نیازمندی‌ها و محدودیت‌ها',
    icon: '02',
    color: 'from-purple-500 to-pink-500',
    detailsTitle: 'تحلیل عمیق',
    detailsBullets: [
      'مصاحبه با ذی‌نفعان کلیدی',
      'تحلیل نیازمندی‌های فنی و طراحی',
      'بررسی رقبا و بهترین شیوه‌ها',
      'تعریف شاخص‌های کلیدی موفقیت پروژه'
    ],
    image: '/images/process/analysis.jpg',
    deliverables: 'سند نیازمندی‌ها، تحلیل رقبا، مشخصات فنی' as Deliverables
  },
  {
    id: 3,
    title: 'پیشنهاد مسیر',
    outcome: 'طرح پیشنهادی و برنامه زمان‌بندی شفاف',
    icon: '03',
    color: 'from-orange-500 to-red-500',
    detailsTitle: 'طرح پیشنهادی',
    detailsBullets: [
      'ارائه راهکارهای فنی و طراحی',
      'برنامه زمان‌بندی دقیق با مراحل مشخص',
      'برآورد هزینه شفاف و جزئی',
      'تعریف نقاط عطف و تحویل‌ها'
    ],
    image: '/images/process/proposal.jpg',
    deliverables: ['طرح پیشنهادی', 'برنامه زمان‌بندی', 'قرارداد'] as Deliverables
  },
  {
    id: 4,
    title: 'شروع طراحی',
    outcome: 'طراحی اولیه و ساختاربندی پروژه',
    icon: '04',
    color: 'from-green-500 to-teal-500',
    detailsTitle: 'طراحی و ساختاربندی',
    detailsBullets: [
      'ایجاد وایرفریم‌ها و نقشه سایت',
      'طراحی رابط کاربری و تجربه کاربری',
      'تعیین سیستم طراحی و هویت بصری',
      'تایید طراحی قبل از توسعه'
    ],
    image: '/images/process/design.jpg',
    deliverables: ['وایرفریم‌ها', 'طراحی UI/UX', 'سیستم طراحی'] as Deliverables
  },
  {
    id: 5,
    title: 'اجرا و توسعه',
    outcome: 'پیاده‌سازی فنی و توسعه ویژگی‌ها',
    icon: '05',
    color: 'from-indigo-500 to-blue-500',
    detailsTitle: 'توسعه فنی',
    detailsBullets: [
      'توسعه کد تمیز و بهینه',
      'پیاده‌سازی ویژگی‌های اصلی',
      'یکپارچه‌سازی با سیستم‌های موجود',
      'تست عملکرد و امنیت'
    ],
    image: '/images/process/development.jpg',
    deliverables: ['کد منبع', 'مستندات فنی', 'محیط تست'] as Deliverables
  },
  {
    id: 6,
    title: 'بازبینی و اصلاح',
    outcome: 'تست کامل و بازبینی بر اساس بازخورد شما',
    icon: '06',
    color: 'from-pink-500 to-rose-500',
    detailsTitle: 'تست و بازبینی',
    detailsBullets: [
      'انجام تست‌های جامع کاربردی',
      'بازبینی با ذی‌نفعان کلیدی',
      'اصلاحات بر اساس بازخورد',
      'آماده‌سازی برای تحویل نهایی'
    ],
    image: '/images/process/review.jpg',
    deliverables: ['گزارش تست', 'لیست اصلاحات', 'نسخه نهایی'] as Deliverables
  },
  {
    id: 7,
    title: 'تحویل و پشتیبانی',
    outcome: 'راه‌اندازی نهایی و پشتیبانی مستمر',
    icon: '07',
    color: 'from-amber-500 to-orange-500',
    detailsTitle: 'تحویل و پشتیبانی',
    detailsBullets: [
      'راه‌اندازی و مستقرسازی پروژه',
      'آموزش تیم شما برای استفاده از سیستم',
      'ارائه مستندات کامل',
      'پشتیبانی فنی پس از تحویل'
    ],
    image: '/images/process/delivery.jpg',
    deliverables: ['محصول نهایی', 'مستندات', 'پلن پشتیبانی'] as Deliverables
  }
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(1)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-advance functionality
  useEffect(() => {
    // Clear any existing timers
    if (timerRef.current) clearInterval(timerRef.current)
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    
    // Only run autoplay if not paused and not hovering
    if (isAutoPlay && !isHovering && expandedStep === null) {
      timerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev % processSteps.length) + 1)
      }, 4000) // Change step every 4 seconds
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [isAutoPlay, isHovering, expandedStep])

  // Intersection Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  // Handle step click
  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId)
    setIsAutoPlay(false) // Pause autoplay on manual interaction
    
    // Resume autoplay after idle time
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => {
      setIsAutoPlay(true)
    }, 8000) // Resume after 8 seconds of inactivity
  }

  // Handle accordion toggle
  const toggleDetails = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId)
    setIsAutoPlay(false) // Pause autoplay when accordion is open
    
    // Resume autoplay after idle time
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => {
      setIsAutoPlay(true)
    }, 8000) // Resume after 8 seconds of inactivity
  }

  // Navigate to next/prev step
  const goToNextStep = () => {
    const nextStep = activeStep === processSteps.length ? 1 : activeStep + 1
    handleStepClick(nextStep)
  }

  const goToPrevStep = () => {
    const prevStep = activeStep === 1 ? processSteps.length : activeStep - 1
    handleStepClick(prevStep)
  }

  // Toggle autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  // Handle mouse enter/leave for timeline area
  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Helper function to render deliverables
  const renderDeliverables = (deliverables: Deliverables) => {
    if (Array.isArray(deliverables)) {
      return deliverables.map((deliverable: string, index: number) => (
        <span key={index} className="rounded-full bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">
          {deliverable}
        </span>
      ))
    } else {
      return (
        <span className="rounded-full bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">
          {deliverables}
        </span>
      )
    }
  }

  return (
    <Section background="light" className="py-16 overflow-hidden" ref={sectionRef}>
      {/* Subtle gradient/noise background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/5 dark:to-purple-900/5"></div>
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative z-10 lg:col-span-12 space-y-12">
        {/* Header */}
        <div className={cn(
          "text-center space-y-6 transition-all duration-1000 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            فرآیند همکاری ما
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            شفاف، مرحله‌به‌مرحله، قابل پیش‌بینی
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(activeStep / processSteps.length) * 100}%` }}
              />
            </div>
            
            {/* Steps */}
            <div className="flex justify-between relative">
              {processSteps.map((step, index: number) => (
                <div
                  key={step.id}
                  className={cn(
                    "flex flex-col items-center w-1/7 px-2 cursor-pointer transition-all duration-500 group",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => handleStepClick(step.id)}
                >
                  {/* Step Circle */}
                  <div className={cn(
                    "relative w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300 z-10",
                    activeStep === step.id 
                      ? `bg-gradient-to-br ${step.color} shadow-xl scale-110 ring-4 ring-white/50 dark:ring-gray-800/50` 
                      : activeStep > step.id
                        ? `bg-gradient-to-br ${step.color} shadow-lg`
                        : "bg-gray-300 dark:bg-gray-600 group-hover:scale-105"
                  )}>
                    {step.icon}
                    
                    {/* Active Step Glow */}
                    {activeStep === step.id && (
                      <div className={cn(
                        "absolute inset-0 rounded-full bg-gradient-to-br opacity-30 blur-xl",
                        step.color
                      )} />
                    )}
                  </div>
                  
                  {/* Active Indicator */}
                  {activeStep === step.id && (
                    <div className="absolute -bottom-2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                  
                  {/* Step Title */}
                  <h3 className={cn(
                    "mt-4 text-sm font-semibold text-center transition-all duration-300",
                    activeStep >= step.id 
                      ? "text-gray-900 dark:text-white" 
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                  )}>
                    {step.title}
                  </h3>
                  
                  {/* Step Outcome */}
                  <p className={cn(
                    "mt-1 text-xs text-center max-w-[120px] transition-all duration-300",
                    activeStep >= step.id 
                      ? "text-gray-600 dark:text-gray-300" 
                      : "text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400"
                  )}>
                    {step.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden">
            {/* Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index: number) => (
                <div
                  key={step.id}
                  className={cn(
                    "flex items-start space-x-reverse space-x-4 cursor-pointer transition-all duration-500 group",
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                    activeStep === step.id ? "bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-blue-200/50 dark:border-blue-800/50" : ""
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => handleStepClick(step.id)}
                >
                  {/* Step Circle */}
                  <div className={cn(
                    "relative w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0 transition-all duration-300 z-10",
                    activeStep === step.id 
                      ? `bg-gradient-to-br ${step.color} shadow-xl ring-2 ring-white/50 dark:ring-gray-800/50` 
                      : activeStep > step.id
                        ? `bg-gradient-to-br ${step.color} shadow-lg`
                        : "bg-gray-300 dark:bg-gray-600 group-hover:scale-105"
                  )}>
                    {step.icon}
                    
                    {/* Active Step Glow */}
                    {activeStep === step.id && (
                      <div className={cn(
                        "absolute inset-0 rounded-full bg-gradient-to-br opacity-30 blur-xl",
                        step.color
                      )} />
                    )}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className={cn(
                      "font-semibold transition-colors duration-300",
                      activeStep >= step.id 
                        ? "text-gray-900 dark:text-white" 
                        : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                    )}>
                      {step.title}
                    </h3>
                    <p className={cn(
                      "text-sm mt-1 transition-colors duration-300",
                      activeStep >= step.id 
                        ? "text-gray-600 dark:text-gray-300" 
                        : "text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400"
                    )}>
                      {step.outcome}
                    </p>
                    
                    {/* Details Accordion */}
                    <div className="mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleDetails(step.id)
                        }}
                        className="flex items-center text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        جزئیات
                        {expandedStep === step.id ? (
                          <ChevronDown className="mr-1 h-3 w-3" />
                        ) : (
                          <ChevronRight className="mr-1 h-3 w-3" />
                        )}
                      </button>
                      
                      {expandedStep === step.id && (
                        <div className="mt-2 p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 text-sm text-gray-600 dark:text-gray-300">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step.detailsTitle}</h4>
                          <ul className="space-y-1 mb-3">
                            {step.detailsBullets.map((bullet: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className="text-blue-500 dark:text-blue-400 ml-2">•</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {renderDeliverables(step.deliverables)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Active Step Details (Desktop) */}
        <div 
          className={cn(
            "hidden lg:block mt-12 p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )} 
          style={{ transitionDelay: "700ms" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-start space-x-reverse space-x-6">
            {/* Step Icon */}
            <div className={cn(
              "relative w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0",
              `bg-gradient-to-br ${processSteps[activeStep - 1].color}`
            )}>
              {processSteps[activeStep - 1].icon}
              
              {/* Glow Effect */}
              <div className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-br opacity-30 blur-xl",
                processSteps[activeStep - 1].color
              )} />
            </div>
            
            {/* Step Content - Two Column Layout */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {processSteps[activeStep - 1].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {processSteps[activeStep - 1].outcome}
                </p>
                
                {/* Details Accordion */}
                <button
                  onClick={() => toggleDetails(activeStep)}
                  className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-4"
                >
                  {processSteps[activeStep - 1].detailsTitle}
                  {expandedStep === activeStep ? (
                    <ChevronDown className="mr-1 h-4 w-4" />
                  ) : (
                    <ChevronRight className="mr-1 h-4 w-4" />
                  )}
                </button>
                
                {/* Accordion Content */}
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedStep === activeStep ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <ul className="space-y-2 mb-4">
                    {processSteps[activeStep - 1].detailsBullets.map((bullet: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 ml-2 text-green-500 flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">تحویل‌ها:</h4>
                    <div className="flex flex-wrap gap-2">
                      {renderDeliverables(processSteps[activeStep - 1].deliverables)}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                  <img 
                    src={processSteps[activeStep - 1].image} 
                    alt={processSteps[activeStep - 1].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/process-${activeStep}/800/450.jpg`;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-reverse space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevStep}
                className="rounded-full p-2 h-10 w-10"
                aria-label="مرحله قبل"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={goToNextStep}
                className="rounded-full p-2 h-10 w-10"
                aria-label="مرحله بعد"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Progress Dots */}
            <div className="flex items-center space-x-reverse space-x-2">
              {processSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeStep === step.id 
                      ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500" 
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  )}
                  aria-label={`رفتن به مرحله ${step.id}`}
                />
              ))}
            </div>
            
            {/* Autoplay Control */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="rounded-full p-2 h-10 w-10"
              aria-label={isAutoPlay ? "توقف پخش خودکار" : "شروع پخش خودکار"}
            >
              {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className={cn(
          "mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )} style={{ transitionDelay: "900ms" }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-right">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                آماده شروع همکاری هستید؟
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                تیم ما آماده است تا به شما کمک کند تا اهداف دیجیتال خود را محقق کند
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="group">
                شروع گفتگو
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" size="lg" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                دیدن نمونه‌ها
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}