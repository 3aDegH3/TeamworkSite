// src/components/about/mindset-section.tsx
'use client'

import { Lightbulb, TrendingUp, Award, ArrowRight, Quote } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/src/components/ui/button'

export default function MindsetSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const principles = [
    {
      icon: Lightbulb,
      title: "سادگی",
      description: "راه‌حل‌های پیچیده را به تجربه‌های ساده و قابل فهم تبدیل می‌کنیم.",
      quote: "سادگی نهایی پیچیدگی است.",
      color: "primary",
      stats: "98%"
    },
    {
      icon: TrendingUp,
      title: "بهبود مستمر",
      description: "همیشه در حال یادگیری و بهبود روش‌های کاری خود هستیم.",
      quote: "هر روز بهتر از دیروز.",
      color: "secondary",
      stats: "25%"
    },
    {
      icon: Award,
      title: "تعهد به کیفیت",
      description: "در هر پروژه، به بالاترین استانداردهای کیفی پایبند هستیم.",
      quote: "کیفیت یک اقدام است، نه یک نتیجه.",
      color: "accent",
      stats: "100%"
    }
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            نگرش ما
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            فلسفه کاری ما بر اساس اصولی بنا شده است که به ما کمک می‌کند بهترین نتایج را برای مشتریان خود خلق کنیم.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className={`relative group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-${principle.color}-200 dark:hover:border-${principle.color}-800 ${
                activeIndex === index ? 'ring-2 ring-' + principle.color + '-500 ring-offset-2 transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${principle.color}-500/5 to-${principle.color}-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Icon with enhanced styling */}
              <div className={`relative w-16 h-16 bg-gradient-to-br from-${principle.color}-100 to-${principle.color}-200 dark:from-${principle.color}-900/30 dark:to-${principle.color}-800/30 rounded-full flex items-center justify-center text-${principle.color}-600 dark:text-${principle.color}-400 mb-6 transform transition-all duration-300 group-hover:scale-110 ${
                activeIndex === index ? 'scale-110' : ''
              }`}>
                <principle.icon className="h-8 w-8" />
                
                {/* Animated ring around icon */}
                <div className={`absolute inset-0 rounded-full border-2 border-${principle.color}-300 animate-ping opacity-20`}></div>
              </div>
              
              {/* Title with better typography */}
              <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-${principle.color}-600 dark:group-hover:text-${principle.color}-400`}>
                {principle.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {principle.description}
              </p>
              
              {/* Quote that appears on hover */}
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="flex items-start space-x-2 space-x-reverse pt-2">
                  <Quote className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    {principle.quote}
                  </p>
                </div>
              </div>
              
              {/* Stats indicator */}
              <div className={`mt-6 flex items-center justify-between transition-all duration-300 ${
                activeIndex === index ? 'opacity-100' : 'opacity-60'
              }`}>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className={`w-2 h-2 rounded-full bg-${principle.color}-500`}></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">اولویت</span>
                </div>
                <div className={`text-2xl font-bold text-${principle.color}-600 dark:text-${principle.color}-400`}>
                  {principle.stats}
                </div>
              </div>
              
              {/* Arrow indicator */}
              <div className={`absolute bottom-6 left-6 transition-transform duration-300 ${
                activeIndex === index ? 'translate-y-2' : 'translate-y-0'
              }`}>
                <ArrowRight className={`h-5 w-5 text-${principle.color}-500 transform transition-transform duration-300 ${
                  activeIndex === index ? 'translate-x-1' : 'translate-x-0'
                }`} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <Button 
            variant="gradient" 
            size="lg"
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            کشف نگرش ما
          </Button>
        </div>
      </div>
    </section>
  )
}