// src/components/about/identity-section.tsx
'use client'

import { Shield, Users, Target, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'

type Tone = 'primary' | 'secondary' | 'accent'

const toneClasses: Record<
  Tone,
  {
    borderHover: string
    ring: string
    overlay: string
    iconBg: string
    titleHover: string
    arrow: string
    pingBorder: string
  }
> = {
  primary: {
    borderHover: 'hover:border-primary/40',
    ring: 'ring-primary',
    overlay: 'from-primary/5 to-primary/10',
    iconBg: 'from-primary to-primary/90',
    titleHover: 'group-hover:text-primary',
    arrow: 'text-primary',
    pingBorder: 'border-primary/40',
  },
  secondary: {
    borderHover: 'hover:border-secondary/40',
    ring: 'ring-secondary',
    overlay: 'from-secondary/5 to-secondary/10',
    iconBg: 'from-secondary to-secondary/90',
    titleHover: 'group-hover:text-secondary',
    arrow: 'text-secondary',
    pingBorder: 'border-secondary/40',
  },
  accent: {
    borderHover: 'hover:border-accent/40',
    ring: 'ring-accent',
    overlay: 'from-accent/5 to-accent/10',
    iconBg: 'from-accent to-accent/90',
    titleHover: 'group-hover:text-accent',
    arrow: 'text-accent',
    pingBorder: 'border-accent/40',
  },
}

export default function IdentitySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const values: Array<{
    icon: any
    title: string
    description: string
    details: string
    tone: Tone
  }> = [
    {
      icon: Shield,
      title: 'شفافیت',
      description: 'ما ارتباط صادقانه و شفاف با مشتریان را در اولویت قرار می‌دهیم.',
      details: 'از ابتدا تا انتها، شما در جریان تمام مراحل پروژه خواهید بود.',
      tone: 'primary',
    },
    {
      icon: Users,
      title: 'همکاری',
      description: 'باور داریم که بهترین نتایج از طریق همکاری نزدیک با مشتریان به دست می‌آید.',
      details: 'شما را به عنوان عضوی از تیم خود می‌بینیم، نه فقط یک مشتری.',
      tone: 'secondary',
    },
    {
      icon: Target,
      title: 'نتیجه‌گرایی',
      description: 'تمرکز ما بر ایجاد راه‌حل‌هایی است که اهداف تجاری شما را محقق کنند.',
      details: 'موفقیت شما معیار موفقیت ماست.',
      tone: 'accent',
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">هویت ما</h2>
          <p className="text-lg text-muted-foreground">
            ما یک آژانس دیجیتال هستیم که با ترکیب خلاقیت و فناوری، تجربه‌هایی خلق می‌کنیم که برای کسب‌وکار شما ارزشمند هستند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const t = toneClasses[value.tone]
            const isActive = activeIndex === index

            return (
              <div
                key={index}
                className={cn(
                  'relative group text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-500 cursor-pointer border border-border/60',
                  t.borderHover,
                  isActive && `ring-2 ${t.ring} ring-offset-2 ring-offset-background`
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                    t.overlay
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    'relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br rounded-full flex items-center justify-center text-primary-foreground shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl',
                    t.iconBg,
                    isActive && 'scale-110 shadow-2xl'
                  )}
                >
                  <value.icon className="h-10 w-10" />
                  <div className={cn('absolute inset-0 rounded-full border-2 animate-ping opacity-20', t.pingBorder)} />
                </div>

                {/* Title */}
                <h3 className={cn('text-xl font-bold text-foreground mb-4 transition-colors duration-300', t.titleHover)}>
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">{value.description}</p>

                {/* Details */}
                <div className={cn('overflow-hidden transition-all duration-300', isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0')}>
                  <p className="text-sm text-foreground/60 italic">{value.details}</p>
                </div>

                {/* Arrow */}
                <div className={cn('flex justify-center mt-4 transition-transform duration-300', isActive ? 'translate-y-2' : 'translate-y-0')}>
                  <ArrowRight
                    className={cn('h-5 w-5 transform transition-transform duration-300', t.arrow, isActive ? 'translate-x-1' : 'translate-x-0')}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-2 hover:bg-surface transition-all duration-300">
            بیشتر بدانید
          </Button>
        </div>
      </div>
    </section>
  )
}
