// src/components/about/process-section.tsx
'use client'

import { Search, Palette, Code, Rocket, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/src/components/ui/button'

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isHovered, setIsHovered] = useState<number | null>(null)
  
  const steps = [
    {
      icon: Search,
      title: "کشف",
      description: "درک عمیق نیازها، اهداف و چالش‌های شما",
      details: "با جلسات متمرکز و تحلیل دقیق، اهداف پروژه را مشخص می‌کنیم",
      duration: "1-2 هفته",
      deliverables: "نقشه راه پروژه، تحلیل رقبا، شخصیت کاربر",
      color: "primary"
    },
    {
      icon: Palette,
      title: "طراحی",
      description: "ایجاد راه‌حل‌های خلاقانه و کاربردی",
      details: "طراحی‌های اولیه، پروتوتایپ‌ها و رابط کاربری",
      duration: "2-4 هفته",
      deliverables: "وایرفریم‌ها، طراحی UI، پروتوتایپ تعاملی",
      color: "secondary"
    },
    {
      icon: Code,
      title: "اجرا",
      description: "پیاده‌سازی دقیق و باکیفیت راه‌حل‌ها",
      details: "توسعه با بهترین شیوه‌ها و تست مداوم",
      duration: "4-8 هفته",
      deliverables: "کد منبع، مستندات فنی، تست‌ها",
      color: "accent"
    },
    {
      icon: Rocket,
      title: "راه‌اندازی",
      description: "انتقال موفقیت‌آمیز پروژه و پشتیبانی مستمر",
      details: "استقرار، آموزش و پشتیبانی پس از راه‌اندازی",
      duration: "1-2 هفته",
      deliverables: "محصول نهایی، راهنمای کاربر، پشتیبانی",
      color: "primary"
    }
  ]

  // Get the current step icon component
  const CurrentIcon = steps[activeStep].icon

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            نحوه کار ما
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ما از فرآیندی شفاف و ساختاریافته پیروی می‌کنیم که تضمین می‌کند پروژه‌ها به موقع و با بالاترین کیفیت تحویل داده شوند.
          </p>
        </div>
        
        {/* Process timeline */}
        <div className="relative mb-16">
          {/* Progress bar */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-1/2 z-0 transition-all duration-1000"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              // Create a local variable for the icon component
              const StepIcon = step.icon
              
              return (
                <div 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  {/* Step number circle */}
                  <div 
                    className={`w-12 h-12 mx-auto mb-6 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 cursor-pointer ${
                      index <= activeStep 
                        ? 'bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    } ${isHovered === index ? 'scale-110' : ''}`}
                    onClick={() => setActiveStep(index)}
                  >
                    {index < activeStep ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  
                  {/* Step card */}
                  <div 
                    className={`bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 h-full transition-all duration-300 cursor-pointer ${
                      index === activeStep 
                        ? 'ring-2 ring-primary-500 ring-offset-2 shadow-xl transform -translate-y-2' 
                        : 'hover:shadow-lg'
                    } ${isHovered === index ? 'transform -translate-y-1' : ''}`}
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Icon with enhanced styling */}
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 transition-all duration-300">
                      <StepIcon className="h-7 w-7" />
                    </div>
                    
                    {/* Title with better typography */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                      {step.description}
                    </p>
                    
                    {/* Duration indicator */}
                    <div className="flex items-center justify-center mt-4 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="h-3 w-3 ml-1" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Active step details */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white ml-3">
                  <CurrentIcon className="h-5 w-5" />
                </div>
                {steps[activeStep].title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {steps[activeStep].details}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">مدت زمان</h4>
                    <p className="text-gray-600 dark:text-gray-300">{steps[activeStep].duration}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">تحویل‌ها</h4>
                    <p className="text-gray-600 dark:text-gray-300">{steps[activeStep].deliverables}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl"></div>
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <CurrentIcon className="h-10 w-10" />
                    </div>
                    <div className="flex space-x-2 justify-center">
                      {steps.map((_, index) => (
                        <div 
                          key={index} 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeStep 
                              ? 'bg-primary-500 w-8' 
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button 
              variant="outline" 
              size="sm"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              className="flex items-center"
            >
              مرحله قبل
            </Button>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {activeStep + 1} از {steps.length}
            </div>
            
            <Button 
              variant="gradient" 
              size="sm"
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              className="flex items-center"
            >
              مرحله بعد
              <ArrowRight className="h-4 w-4 mr-2" />
            </Button>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            شروع پروژه خود
          </Button>
        </div>
      </div>
    </section>
  )
}