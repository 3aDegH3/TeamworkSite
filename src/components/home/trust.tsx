'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/src/components/ui/card'
import { Section } from '@/src/components/shared/section'
import { Button } from '@/src/components/ui/button'
import { CheckCircle, Code, Palette, Zap, Shield, Users, ArrowRight, Star, Eye, Clock, Handshake, FileText } from 'lucide-react'
import { cn } from '@/src/lib/utils'

export default function Trust() {
  const [activeTab, setActiveTab] = useState('process')

  const processSteps = [
    { title: 'کشف و تحلیل', description: 'شناخت دقیق نیازهای شما', icon: Eye },
    { title: 'طراحی', description: 'رابط کاربری جذاب و هدفمند', icon: Palette },
    { title: 'توسعه', description: 'کدنویسی بهینه و تمیز', icon: Code },
    { title: 'تحویل', description: 'بازبینی و بهبود نهایی', icon: Clock },
  ]

  return (
    <Section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            همکاری با ما شفاف و کم‌ریسک است
          </h2>
          <p className="text-muted-foreground">
            فرآیند مشخص، ارتباط شفاف و تمرکز بر کیفیت
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-surface rounded-xl">
            {['process', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-6 py-2 rounded-lg text-sm transition-all',
                  activeTab === tab ? 'bg-card text-primary shadow' : 'text-muted-foreground'
                )}
              >
                {tab === 'process' ? 'فرآیند کار' : 'ارزش‌ها'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'process' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <Card key={step.title} hover>
                <CardContent className="space-y-3">
                  <step.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
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
