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

  const words = ['حرفه‌ای', 'مدرن', 'بهینه', 'کاربرپسند', 'خلاقانه']

  const stats = [
    { value: '150+', label: 'پروژه موفق', icon: CheckCircle },
    { value: '98%', label: 'رضایت مشتریان', icon: TrendingUp },
    { value: '5+', label: 'سال تجربه', icon: Award },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => setCurrentWordIndex((p) => (p + 1) % words.length), 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const r = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Section id="hero" className="min-h-screen flex items-center overflow-hidden relative">
      {/* background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 via-transparent to-transparent" />

        <div
          className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 10}%`,
            top: `${10 + mousePosition.y * 10}%`,
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          style={{
            right: `${20 + (1 - mousePosition.x) * 10}%`,
            bottom: `${10 + (1 - mousePosition.y) * 10}%`,
          }}
        />

        <div
          className="absolute inset-0 opacity-30
          [background-image:linear-gradient(to_right,rgb(var(--primary)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--primary)/0.06)_1px,transparent_1px)]
          [background-size:60px_60px]"
        />
      </div>

      <div ref={heroRef} className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div
            className={cn(
              'space-y-8 transition-all duration-1000',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              <Star className="h-4 w-4 ml-2" />
              آژانس برتر سال ۲۰۲۵
              <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              طراحی وب‌سایت
              <br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {words[currentWordIndex]}
                </span>
              </span>
            </h1>

            <p className="text-lg text-foreground/70 max-w-2xl">
              وب‌تری وب‌سایت‌هایی طراحی می‌کند که هم زیبا هستند و هم به رشد کسب‌وکار شما کمک می‌کنند.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg">
                شروع پروژه
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>

              <Button variant="outline" size="lg">
                <Play className="ml-2 h-5 w-5" />
                مشاهده نمونه کارها
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-card border border-border text-center">
                  <stat.icon className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-6 text-sm text-foreground/70 pt-4">
              <span className="flex items-center"><Shield className="ml-2 h-4 w-4 text-primary" /> تضمین کیفیت</span>
              <span className="flex items-center"><Zap className="ml-2 h-4 w-4 text-primary" /> تحویل سریع</span>
              <span className="flex items-center"><CheckCircle className="ml-2 h-4 w-4 text-primary" /> پشتیبانی ۲۴/۷</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-foreground">و</div>
                <div className="text-xl text-foreground/70 mt-2">وب‌تری</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
