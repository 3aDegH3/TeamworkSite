// src/components/about/identity-section.tsx
'use client'

import { Shield, Users, Target, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/src/components/ui/button'

export default function IdentitySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const values = [
    {
      icon: Shield,
      title: "شفافیت",
      description: "ما ارتباط صادقانه و شفاف با مشتریان را در اولویت قرار می‌دهیم.",
      details: "از ابتدا تا انتها، شما در جریان تمام مراحل پروژه خواهید بود.",
      color: "primary"
    },
    {
      icon: Users,
      title: "همکاری",
      description: "باور داریم که بهترین نتایج از طریق همکاری نزدیک با مشتریان به دست می‌آید.",
      details: "شما را به عنوان عضوی از تیم خود می‌بینیم، نه فقط یک مشتری.",
      color: "secondary"
    },
    {
      icon: Target,
      title: "نتیجه‌گرایی",
      description: "تمرکز ما بر ایجاد راه‌حل‌هایی است که اهداف تجاری شما را محقق کنند.",
      details: "موفقیت شما معیار موفقیت ماست.",
      color: "accent"
    }
  ]

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-secondary-100 to-primary-100 dark:from-secondary-900/20 dark:to-primary-900/20 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            هویت ما
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ما یک آژانس دیجیتال هستیم که با ترکیب خلاقیت و فناوری، تجربه‌هایی خلق می‌کنیم که برای کسب‌وکار شما ارزشمند هستند.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`relative group text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-${value.color}-200 dark:hover:border-${value.color}-800 ${
                activeIndex === index ? 'ring-2 ring-' + value.color + '-500 ring-offset-2' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}-500/5 to-${value.color}-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Icon with enhanced styling */}
              <div className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl ${
                activeIndex === index ? 'scale-110 shadow-2xl' : ''
              }`}>
                <value.icon className="h-10 w-10" />
                
                {/* Animated ring around icon */}
                <div className={`absolute inset-0 rounded-full border-2 border-${value.color}-300 animate-ping opacity-20`}></div>
              </div>
              
              {/* Title with better typography */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-${value.color}-600 dark:group-hover:text-${value.color}-400">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {value.description}
              </p>
              
              {/* Additional details that appear on hover */}
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {value.details}
                </p>
              </div>
              
              {/* Arrow indicator */}
              <div className={`flex justify-center mt-4 transition-transform duration-300 ${
                activeIndex === index ? 'translate-y-2' : 'translate-y-0'
              }`}>
                <ArrowRight className={`h-5 w-5 text-${value.color}-500 transform transition-transform duration-300 ${
                  activeIndex === index ? 'translate-x-1' : 'translate-x-0'
                }`} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            بیشتر بدانید
          </Button>
        </div>
      </div>
    </section>
  )
}