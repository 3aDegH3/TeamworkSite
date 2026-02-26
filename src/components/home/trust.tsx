'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/src/components/ui/card'
import { Section } from '@/src/components/shared/section'
import { Button } from '@/src/components/ui/button'
import { CheckCircle, Code, Palette, Zap, Shield, Users, ArrowRight, Star, Eye, Clock, Handshake, FileText, Lightbulb, Target, Award, Rocket } from 'lucide-react'
import { cn } from '@/src/lib/utils'
import Image from 'next/image'

export default function Trust() {
  const [activeTab, setActiveTab] = useState('benefits')

  const benefits = [
    { 
      title: 'تخصص و نوآوری', 
      description: 'تیم ما از آخرین تکنولوژی‌ها و روش‌های طراحی مدرن استفاده می‌کند تا وب‌سایت‌هایی خلاقانه و به‌روز تحویل دهد', 
      icon: Lightbulb,
      image: 'https://sfile.chatglm.cn/images-ppt/14e3e85020db.jpg'
    },
    { 
      title: 'تمرکز بر نتایج', 
      description: 'ما فقط طراحی نمی‌کنیم، بلکه راه‌حل‌هایی ارائه می‌دهیم که به رشد کسب‌وکار شما کمک می‌کنند', 
      icon: Target,
      image: 'https://sfile.chatglm.cn/images-ppt/74ff7c5dd973.jpg'
    },
    { 
      title: 'کیفیت تضمین شده', 
      description: 'تضمین کیفیت در تمام مراحل پروژه، از طراحی اولیه تا پشتیبانی پس از تحویل', 
      icon: Shield,
      image: 'https://sfile.chatglm.cn/images-ppt/1fb140d9435b.jpg'
    },
    { 
      title: 'همکاری شفاف', 
      description: 'ارتباط مستمر و شفاف در تمام مراحل پروژه، با گزارش‌های منظم و بازخورد مداوم', 
      icon: Handshake,
      image: 'https://sfile.chatglm.cn/images-ppt/d5f4d8a064ab.jpg'
    },
  ]

  const values = [
    { 
      title: 'تعهد به موفقیت شما', 
      description: 'موفقیت شما اولویت ماست و تمام تلاش خود را برای رسیدن به اهداف شما به کار می‌گیریم', 
      icon: Award 
    },
    { 
      title: 'نوآوری مداوم', 
      description: 'همیشه در حال یادگیری و به‌روزرسانی دانش خود برای ارائه بهترین راه‌حل‌ها هستیم', 
      icon: Rocket 
    },
    { 
      title: 'صداقت و شفافیت', 
      description: 'در تمام ارتباطات و فرآیندهای کاری خود صادق و شفاف عمل می‌کنیم', 
      icon: Eye 
    },
    { 
      title: 'کاربردی بودن', 
      description: 'طراحی‌های ما فقط زیبا نیستند، بلکه کاملاً کاربردی و بهینه برای تجربه کاربری هستند', 
      icon: Zap 
    },
  ]

  return (
    <Section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            چرا وب‌تری را انتخاب کنید؟
          </h2>
          <p className="text-muted-foreground">
            ما نه تنها وب‌سایت طراحی می‌کنیم، بلکه راه‌حل‌های دیجیتال ارائه می‌دهیم که کسب‌وکار شما را متحول می‌کند
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-surface rounded-xl">
            {['benefits', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-6 py-2 rounded-lg text-sm transition-all',
                  activeTab === tab ? 'bg-card text-primary shadow' : 'text-muted-foreground'
                )}
              >
                {tab === 'benefits' ? 'مزایا' : 'ارزش‌ها'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'benefits' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} hover className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={benefit.image} 
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <benefit.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'values' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} hover>
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <value.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <Button variant="gradient" size="lg">
            شروع گفتگوی بدون تعهد
            <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </Section>
  )
}