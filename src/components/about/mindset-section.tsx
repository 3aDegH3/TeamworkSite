// src/components/about/mindset-section.tsx
'use client'

import { Lightbulb, TrendingUp, Award, Quote, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'

type Tone = 'primary' | 'secondary' | 'accent'

const toneClasses: Record<
  Tone,
  {
    ring: string
    iconBg: string
    accent: string
    dotBg: string
    spotA: string
    spotB: string
  }
> = {
  primary: {
    ring: 'ring-primary',
    iconBg: 'bg-primary/10',
    accent: 'text-primary',
    dotBg: 'bg-primary',
    spotA: 'from-primary/18',
    spotB: 'from-secondary/10',
  },
  secondary: {
    ring: 'ring-secondary',
    iconBg: 'bg-secondary/10',
    accent: 'text-secondary',
    dotBg: 'bg-secondary',
    spotA: 'from-secondary/18',
    spotB: 'from-primary/10',
  },
  accent: {
    ring: 'ring-accent',
    iconBg: 'bg-accent/10',
    accent: 'text-accent',
    dotBg: 'bg-accent',
    spotA: 'from-accent/18',
    spotB: 'from-primary/10',
  },
}

export default function MindsetSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const principles: Array<{
    icon: any
    title: string
    description: string
    quote: string
    tone: Tone
    stats: string
  }> = [
    {
      icon: Lightbulb,
      title: 'سادگی',
      description: 'راه‌حل‌های پیچیده را به تجربه‌های ساده و قابل فهم تبدیل می‌کنیم.',
      quote: 'سادگی نهایی پیچیدگی است.',
      tone: 'primary',
      stats: '98%',
    },
    {
      icon: TrendingUp,
      title: 'بهبود مستمر',
      description: 'همیشه در حال یادگیری و بهبود روش‌های کاری خود هستیم.',
      quote: 'هر روز بهتر از دیروز.',
      tone: 'secondary',
      stats: '25%',
    },
    {
      icon: Award,
      title: 'تعهد به کیفیت',
      description: 'در هر پروژه، به بالاترین استانداردهای کیفی پایبند هستیم.',
      quote: 'کیفیت یک اقدام است، نه یک نتیجه.',
      tone: 'accent',
      stats: '100%',
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-surface/40 relative overflow-hidden">
      {/* Soft spotlights */}
      <div className="absolute inset-0 opacity-40">
        <div className={cn('absolute top-0 right-0 w-96 h-96 bg-gradient-to-br to-transparent rounded-full blur-3xl', toneClasses.primary.spotA)} />
        <div className={cn('absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl to-transparent rounded-full blur-3xl', toneClasses.secondary.spotA)} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">نگرش ما</h2>
          <p className="text-lg text-muted-foreground">
            فلسفه کاری ما بر اساس اصولی بنا شده است که به ما کمک می‌کند بهترین نتایج را برای مشتریان خود خلق کنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, index) => {
            const t = toneClasses[p.tone]
            const isActive = activeIndex === index

            return (
              <div
                key={index}
                className={cn(
                  'bg-card rounded-2xl shadow-sm border border-border/60 overflow-hidden transition-all duration-300',
                  isActive && `ring-2 ${t.ring} ring-offset-2 ring-offset-background`
                )}
              >
                <div className="p-8 cursor-pointer" onClick={() => setActiveIndex(isActive ? null : index)}>
                  <div className={cn('w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300', t.iconBg)}>
                    <p.icon className={cn('h-8 w-8', t.accent)} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className={cn('w-2 h-2 rounded-full mr-2', t.dotBg)} />
                      <span className="text-xs text-foreground/60">اولویت</span>
                    </div>
                    <div className={cn('text-lg font-semibold', t.accent)}>{p.stats}</div>
                  </div>
                </div>

                <div
                  className={cn(
                    'border-t border-border/60 transition-all duration-300',
                    isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  )}
                >
                  <div className="p-6 pt-4">
                    <div className="flex items-start space-x-2 space-x-reverse">
                      <Quote className="h-4 w-4 text-foreground/40 flex-shrink-0 mt-1" />
                      <p className="text-sm text-foreground/60 italic">{p.quote}</p>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-4">
                  <div className="flex justify-center">
                    <ChevronDown className={cn('h-5 w-5 text-foreground/40 transition-transform duration-300', isActive && 'rotate-180')} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-2 hover:bg-surface transition-all duration-300">
            کشف نگرش ما
          </Button>
        </div>
      </div>
    </section>
  )
}
