// src/components/home/hero.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/src/components/ui/button'
import { ArrowRight, Play, Star, Sparkles, Zap, Shield, CheckCircle, TrendingUp, Award } from 'lucide-react'
import { Section } from '@/src/components/shared/section'
import { cn } from '@/src/lib/utils'

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Store the SVG pattern as a variable to avoid quote conflicts
  const gridPattern = "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%232a9d8f\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
  
  const words = ['حرفه‌ای', 'مدرن', 'بهینه', 'کاربرپسند', 'خلاقانه']
  
  const stats = [
    { value: '150+', label: 'پروژه موفق', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
    { value: '98%', label: 'رضایت مشتریان', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { value: '5+', label: 'سال تجربه', icon: Award, color: 'from-purple-500 to-pink-500' },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Section id="hero" className="min-h-screen flex items-center overflow-hidden relative">
      {/* Hero Background - Teal Wave Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/teal-wave-gradient.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-transparent to-transparent"></div>
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 10}%`,
            top: `${10 + mousePosition.y * 10}%`,
            transition: 'left 0.3s ease-out, top 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-secondary-400/20 to-primary-400/20 blur-3xl"
          style={{
            right: `${20 + (1 - mousePosition.x) * 10}%`,
            bottom: `${10 + (1 - mousePosition.y) * 10}%`,
            transition: 'right 0.3s ease-out, bottom 0.3s ease-out'
          }}
        ></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: gridPattern }}></div>
      </div>

      <div ref={heroRef} className="lg:col-span-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 transform",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-800 dark:text-primary-200 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50 shadow-sm">
                <Star className="h-4 w-4 ml-2 text-yellow-500" fill="currentColor" />
                آژانس برتر سال ۲۰۲۵
                <Sparkles className="h-4 w-4 mr-2 text-primary-600 animate-pulse" />
              </div>
              
              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                  طراحی وب‌سایت
                  <br />
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 relative z-10">
                      {words[currentWordIndex]}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 blur-lg opacity-30"></span>
                  </span>
                  <span className="inline-block w-1 h-12 lg:h-16 bg-gradient-to-b from-primary-600 to-secondary-500 ml-2 animate-pulse rounded-full"></span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                وب‌تری با تیمی از متخصصان طراحی و توسعه، وب‌سایت‌هایی خلق می‌کند که نه تنها زیبا هستند، بلکه نتایج کسب‌وکار شما را بهبود می‌بخشند.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  شروع پروژه
                  <ArrowRight className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="outline" size="lg" className="group backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
                <Play className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                مشاهده نمونه کارها
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={cn(
                    "text-center p-4 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 group",
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="flex justify-center mb-2">
                    <div className={cn(
                      "p-2 rounded-lg bg-gradient-to-r text-white",
                      stat.color
                    )}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-500 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Shield className="h-4 w-4 ml-2 text-green-500" />
                تضمین کیفیت
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Zap className="h-4 w-4 ml-2 text-yellow-500" />
                تحویل سریع
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="h-4 w-4 ml-2 text-blue-500" />
                پشتیبانی ۲۴/۷
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className={cn(
            "relative transition-all duration-1000 transform",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )} style={{ transitionDelay: "200ms" }}>
            <div className="relative z-10">
              {/* Main Visual Element */}
              <div className="aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 via-white to-secondary-100 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20 shadow-2xl border border-white/20 dark:border-gray-800/20 backdrop-blur-sm relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
                
                {/* Animated Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <div className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-white">
                        و
                      </div>
                      <div className="absolute inset-0 text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 blur-lg opacity-50"></div>
                    </div>
                    <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                      وب‌تری
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                      آژانس طراحی و توسعه دیجیتال
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600 opacity-20 blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-3 transform rotate-12 animate-float">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-3 transform -rotate-12 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-full h-full bg-gradient-to-br from-secondary-400 to-primary-400 rounded-xl flex items-center justify-center">
                <Zap className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="absolute top-1/2 -left-12 w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-3 transform rotate-45 animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </Section>
  )
}