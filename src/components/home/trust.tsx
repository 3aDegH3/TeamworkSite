// src/components/home/trust.tsx
'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/src/components/ui/card'
import { Section } from '@/src/components/shared/section'
import { Button } from '@/src/components/ui/button'
import { CheckCircle, Code, Palette, Zap, Shield, Users, ArrowRight, Star, Quote, Eye, Clock, Handshake, FileText } from 'lucide-react'
import { cn } from '@/src/lib/utils'

export default function Trust() {
  const [activeTab, setActiveTab] = useState('process')
  
  // Early collaborations - realistic for a new agency
  const earlyCollaborations = [
    {
      title: 'پلتفرم مدیریت پروژه استارتاپ',
      type: 'پروژه داخلی',
      outcome: 'افزایش ۴۰٪ بهره‌وری تیم داخلی',
      description: 'ابزاری که خودمان برای مدیریت پروژه‌هایمان ساخته‌ایم و حالا آن را بهبود می‌دهیم'
    },
    {
      title: 'بازطراحی سایت فروشگاه آنلاین',
      type: 'همکاری اولیه',
      outcome: 'افزایش ۲۵٪ نرخ تبدیل',
      description: 'پروژه‌ای که با یک مشتری اولیه انجام دادیم و از آن چیزهای زیادی یاد گرفتیم'
    }
  ]

  // Clear process steps that explain what happens and why it benefits the client
  const processSteps = [
    {
      title: 'کشف و تحلیل',
      description: 'درک عمیق از اهداف کسب‌وکار شما و شناسایی چالش‌های واقعی',
      benefit: 'اطمینان از اینکه راهکار ما دقیقاً مشکلات شما را حل می‌کند',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'استراتژی و طراحی',
      description: 'طراحی راهکارهای سفارشی و رابط‌های کاربری جذاب',
      benefit: 'تضمین اینکه محصول نهایی نه تنها زیبا باشد، بلکه نتایج تجاری به همراه دارد',
      icon: Palette,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'توسعه و پیاده‌سازی',
      description: 'کدنویسی تمیز، بهینه و مقیاس‌پذیر با بهترین تکنولوژی‌ها',
      benefit: 'محصولی که هم اکنون کار می‌کند و هم برای آینده آماده است',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'بازبینی و تکرار',
      description: 'بازخورد مستمر و بهبود مستمر بر اساس نیازهای شما',
      benefit: 'اطمینان از اینکه محصول نهایی دقیقاً همان چیزی است که شما نیاز دارید',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    }
  ]

  // Core values that differentiate the agency
  const values = [
    {
      title: 'شفافیت کامل',
      description: 'قیمت‌های شفاف، گزارش‌های منظم و ارتباطات صادقانه',
      icon: Eye,
      detail: 'شما همیشه می‌دانید پروژه دقیقاً کجاست و هزینه‌ها چگونه محاسبه می‌شوند'
    },
    {
      title: 'کیفیت بر کمیت',
      description: 'تمرکز بر چند پروژه عالی به جای پروژه‌های متوسط',
      icon: Star,
      detail: 'ما ترجیح می‌دهیم پروژه‌های کمتری بگیریم اما هر کدام را با بهترین کیفیت ممکن تحویل دهیم'
    },
    {
      title: 'همکاری به جای سلسله مراتب',
      description: 'ما شریک شما هستیم، نه فقط یک فروشنده',
      icon: Handshake,
      detail: 'در تصمیم‌گیری‌های مهم مشارکت می‌کنیم و بهترین راهکار را با هم پیدا می‌کنیم'
    }
  ]

  // How we reduce risk for clients
  const riskReduction = [
    {
      title: 'قرارداد شفاف',
      description: 'بدون هزینه‌های پنهان یا شرایط مبهم',
      icon: FileText
    },
    {
      title: 'تضمین کیفیت',
      description: 'تضمین رضایت شما در هر مرحله از پروژه',
      icon: Shield
    },
    {
      title: 'تحویل مرحله‌ای',
      description: 'پرداخت بر اساس دستاوردهای مشخص و قابل لمس',
      icon: CheckCircle
    }
  ]

  return (
    <Section background="light" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-900/10 dark:to-secondary-900/10"></div>
      
      <div className="lg:col-span-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Trust Headline - addresses the "Can I trust these people?" question */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-800 dark:text-primary-200 mb-6">
            <Shield className="h-4 w-4 ml-2 text-primary-600" />
            شفافیت و کیفیت
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            همکاری با ما <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">کم‌ریسک و شفاف</span> است
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            ما به عنوان یک آژانس جدید، تمرکز خود را بر روی شفافیت کامل، فرآیندهای مشخص و همکاری نزدیک قرار داده‌ایم. شما همیشه می‌دانید پروژه دقیقاً کجاست و قدم بعدی چیست.
          </p>
        </div>

        {/* Tab Navigation - helps users find information relevant to their concerns */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {[
              { id: 'process', label: 'فرآیند کار ما' },
              { id: 'values', label: 'ارزش‌های ما' },
              { id: 'collaborations', label: 'همکاری‌های اولیه' },
              { id: 'risk', label: 'کاهش ریسک' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - provides detailed information to build trust */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'process' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  فرآیند شفاف ما
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  هر مرحله از فرآیند ما با هدف مشخصی طراحی شده تا بهترین نتیجه را برای شما به ارمغان آورد
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="group relative"
                  >
                    <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className={cn(
                        "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300",
                        step.color
                      )}>
                        <step.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {step.description}
                      </p>
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {step.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  ارزش‌های اصلی ما
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  این ارزش‌ها راهنمای تمام تصمیمات ما هستند و تضمین می‌کنند که همیشه بهترین کار را برای شما انجام دهیم
                </p>
              </div>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center ml-4 flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {value.description}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {value.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'collaborations' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  همکاری‌های اولیه ما
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  این‌ها پروژه‌هایی هستند که به ما کمک کردند تا رشد کنیم و از هر یک چیزهای زیادی یاد گرفتیم
                </p>
              </div>
              
              <div className="space-y-6">
                {earlyCollaborations.map((collab, index) => (
                  <Card key={collab.title} variant="elevated" padding="lg">
                    <CardContent className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            {collab.title}
                          </h3>
                          <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200">
                            {collab.type}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            {collab.outcome}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {collab.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'risk' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  چگونه ریسک را برای شما کاهش می‌دهیم
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  ما می‌دانیم که همکاری با یک آژانس جدید می‌تواند نگران‌کننده باشد، به همین دلیل این روش‌ها را برای کاهش ریسک شما ایجاد کرده‌ایم
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {riskReduction.map((item, index) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section - calm but confident, reduces fear rather than pushing urgency */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            بیایید ببینیم آیا مناسب هم هستیم
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            بدون فشار، بدون ترفندهای فروش. فقط گفتگوی صادقانه در مورد نیازهای شما و اینکه آیا می‌توانیم کمک کنیم.
          </p>
          <Button variant="gradient" size="lg" className="group">
            شروع گفتگوی بدون تعهد
            <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            معمولاً ظرف ۲۴ ساعت پاسخ می‌دهیم
          </p>
        </div>
      </div>
    </Section>
  )
}