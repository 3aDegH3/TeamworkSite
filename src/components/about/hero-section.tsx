// src/components/about/hero-section.tsx
'use client'

import Image from 'next/image'
import { Button } from '@/src/components/ui/button'
import { ArrowDown, Sparkles, Users, Zap, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/src/lib/utils'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={cn(
              'space-y-6 transition-all duration-1000',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 text-primary text-sm font-medium backdrop-blur-sm border border-border/60">
              <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
              درباره ما
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              ما{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                وب‌تری
              </span>{' '}
              هستیم
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              تیمی متخصص در طراحی دیجیتال با تمرکز بر کیفیت، وضوح و نتایج ماندگار. ما با همکاری مشتریان، راه‌حل‌هایی خلق
              می‌کنیم که واقعاً مؤثر هستند.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground/80">کار تیمی</span>
              </div>

              <div className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground/80">نوآوری</span>
              </div>

              <div className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground/80">کیفیت</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="gradient"
                size="lg"
                icon={<ArrowDown className="h-4 w-4" />}
                iconPosition="right"
                className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                شروع همکاری
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-surface transition-all duration-300"
              >
                مشاهده نمونه‌کارها
              </Button>
            </div>
          </div>

          {/* Image side */}
          <div
            className={cn(
              'relative transition-all duration-1000 delay-300',
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group border border-border/40 bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10" />

              <Image
                src="/images/hero-team.jpg"
                alt="تیم وب‌تری در حال کار"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
                <div className="text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-2">تیم متخصص وب‌تری</h3>
                  <p className="text-primary-foreground/90">با هم، به اهداف شما می‌رسیم</p>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary/40 to-secondary rounded-full opacity-20 blur-2xl animate-pulse" />
            <div
              className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary/40 to-primary rounded-full opacity-20 blur-2xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />

            {/* Floating badges */}
            <div className="absolute top-4 -left-4 bg-card/90 backdrop-blur-sm rounded-full shadow-lg p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-300 border border-border/50">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground/80">تضمین کیفیت</span>
              </div>
            </div>

            <div className="absolute bottom-4 -right-4 bg-card/90 backdrop-blur-sm rounded-full shadow-lg p-3 transform rotate-12 hover:rotate-0 transition-transform duration-300 border border-border/50">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground/80">سرعت بالا</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-16 text-surface"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
