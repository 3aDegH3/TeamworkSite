// src/components/about/mindset-section.tsx
'use client'

import { Lightbulb, TrendingUp, Award, Quote, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/src/components/ui/button'

// Static color class mappings to ensure Tailwind compiles them
const colorClasses = {
  primary: {
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    text: 'text-teal-700 dark:text-teal-300',
    border: 'border-teal-200 dark:border-teal-800',
    ring: 'ring-teal-500',
    accent: 'text-teal-600 dark:text-teal-400',
    iconBg: 'bg-teal-100 dark:bg-teal-900/30'
  },
  secondary: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    text: 'text-orange-700 dark:text-orange-300',
    border: 'border-orange-200 dark:border-orange-800',
    ring: 'ring-orange-500',
    accent: 'text-orange-600 dark:text-orange-400',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30'
  },
  accent: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-700 dark:text-red-300',
    border: 'border-red-200 dark:border-red-800',
    ring: 'ring-red-500',
    accent: 'text-red-600 dark:text-red-400',
    iconBg: 'bg-red-100 dark:bg-red-900/30'
  }
}

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
      {/* Subtle spotlight background - one per section */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-transparent dark:from-teal-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-orange-100 to-transparent dark:from-orange-900/20 rounded-full filter blur-3xl"></div>
      </div>
      
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
          {principles.map((principle, index) => {
            const colorClassMap = colorClasses[principle.color as keyof typeof colorClasses]
            const isActive = activeIndex === index
            
            return (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
                  isActive ? `${colorClassMap.ring} ring-offset-2 ring-offset-white dark:ring-offset-gray-900` : ''
                }`}
              >
                {/* Card Header */}
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colorClassMap.iconBg} rounded-full flex items-center justify-center mb-6 transition-all duration-300`}>
                    <principle.icon className={`h-8 w-8 ${colorClassMap.accent}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {principle.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {principle.description}
                  </p>
                  
                  {/* Micro-stat */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${colorClassMap.accent.replace('text', 'bg')} mr-2`}></div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">اولویت</span>
                    </div>
                    <div className={`text-lg font-semibold ${colorClassMap.accent}`}>
                      {principle.stats}
                    </div>
                  </div>
                </div>
                
                {/* Expandable Quote Section */}
                <div className={`border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                  isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="p-6 pt-4">
                    <div className="flex items-start space-x-2 space-x-reverse">
                      <Quote className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        {principle.quote}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Expand/Collapse Indicator */}
                <div className="px-8 pb-4">
                  <div className="flex justify-center">
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        isActive ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            کشف نگرش ما
          </Button>
        </div>
      </div>
    </section>
  )
}