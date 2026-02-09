// src/components/home/featured-work.tsx
'use client'

import { useState } from 'react'
import { ExternalLink, ArrowRight, Clock, Users, Target, Lightbulb, CheckCircle, X, ChevronDown } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Card, CardContent } from '@/src/components/ui/card'
import { Section } from '@/src/components/shared/section'
import { cn } from '@/src/lib/utils'

// Realistic case studies for a new agency - focusing on process and thinking
const caseStudies = [
  {
    id: 1,
    title: 'پلتفرم آموزشی نوین',
    clientType: 'استارتاپ آموزشی',
    stage: 'مرحله ایده اولیه',
    context: 'استارتاپی با ایده یک پلتفرم آموزشی آنلاین اما بدون وضوح در مورد مدل کسب‌وکار و نیازهای کاربران',
    ourRole: 'تحقیق کاربری، طراحی استراتژی محصول، و پروتوتایپ تعاملی. ما مسئول توسعه نهایی نبودیم.',
    challenge: 'چگونه می‌توانیم یک محصول آموزشی بسازیم که هم برای دانش‌آموزان جذاب باشد و هم برای مدرسین قابل مدیریت؟',
    approach: 'با مصاحبه با ۱۵ کاربر بالقوه و ۵ مدرس، نیازهای واقعی را شناسایی کردیم. یک پروتوتایپ قابل کلیک ساختیم تا مفاهیم را آزمایش کنیم.',
    outcome: 'مشتری مسیر روشنی برای محصول خود پیدا کرد و توانست سرمایه‌گذاری بعدی را جذب کند. تیم محصول حالا با اطمینان بیشتری توسعه را ادامه می‌دهد.',
    takeaway: 'پروتوتایپ‌های سریع و ارزان‌تر از توسعه کامل، ایده‌های ریسک‌پذیر را قبل از سرمایه‌گذاری سنگین آزمایش می‌کنند.',
    technologies: ['Figma', 'User Research', 'Prototyping'],
    link: '#'
  },
  {
    id: 2,
    title: 'اپلیکیشن مدیریت مالی',
    clientType: 'کسب‌وکار کوچک',
    stage: 'محصول موجود با نیاز به بازطراحی',
    context: 'اپلیکیشنی موجود برای مدیریت هزینه‌ها با نرخ ریزش بالای کاربران و بازخورد منفی در مورد پیچیدگی رابط کاربری',
    ourRole: 'تحلیل داده‌های استفاده، طراحی مجدد تجربه کاربری، و بازطراحی رابط کاربری. ما مسئول توسعه بک‌اند نبودیم.',
    challenge: 'چگونه می‌توانیم یک اپلیکیشن پیچیده را ساده‌تر کنیم بدون از دست دادن قابلیت‌های کلیدی؟',
    approach: 'با تحلیل مسیرهای کاربران، ۳ نقص اصلی را شناسایی کردیم. روی ساده‌سازی ورود داده و ارائه گزارش‌های واضح‌تر تمرکز کردیم.',
    outcome: 'پس از بازطراحی، نرخ تکمیل فرم‌ها ۴۰٪ افزایش یافت و زمان صرف شده برای ورود داده‌ها ۶۰٪ کاهش یافت.',
    takeaway: 'ساده‌سازی رابط کاربری همیشه به معنای حذف ویژگی‌ها نیست؛ گاهی فقط به معنای بازطراحی نحوه دسترسی به آنهاست.',
    technologies: ['User Analytics', 'UX Audit', 'UI Redesign'],
    link: '#'
  },
  {
    id: 3,
    title: 'داشبورد تحلیلی',
    clientType: 'پروژه داخلی',
    stage: 'ابزار داخلی برای بهبود فرآیندها',
    context: 'ما برای مدیریت پروژه‌های داخلی خود به ابزاری برای ردیابی پیشرفت و تخصیص منابع نیاز داشتیم',
    ourRole: 'تحلیل نیازهای تیم، طراحی داشبورد، و توسعه MVP. پروژه کاملاً توسط تیم ما انجام شد.',
    challenge: 'چگونه می‌توانیم ابزاری بسازیم که هم برای مدیران پروژه و هم برای توسعه‌دهندگان مفید باشد؟',
    approach: 'با مصاحبه با اعضای تیم، نیازهای متضاد را شناسایی کردیم. یک داشبورد دو لایه طراحی کردیم: نمای کلی برای مدیران و جزئیات فنی برای توسعه‌دهندگان.',
    outcome: 'ابزار بهره‌وری تیم ما ۲۵٪ افزایش داد و زمان صرف شده برای جلسات وضعیت را ۵۰٪ کاهش داد. حالا در حال بهبود آن برای استفاده مشتریان هستیم.',
    takeaway: 'ابزارهای داخلی که مشکلات واقعی را حل می‌کنند، می‌توانند به محصولات تجاری موفقی تبدیل شوند.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: '#'
  }
]

export default function FeaturedWork() {
  const [expandedCase, setExpandedCase] = useState<number | null>(null)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleExpandedCase = (id: number) => {
    setExpandedCase(expandedCase === id ? null : id)
  }

  const toggleExpandedSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <Section className="py-20">
      <div className="lg:col-span-12 space-y-16">
        {/* Header - reframes portfolio purpose to manage expectations */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            پروژه‌های واقعی. محدودیت‌های واقعی. تصمیمات واقعی.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            ما روی انجام پروژه‌های کمتر، اما عمیق و هدفمند تمرکز می‌کنیم. هر پروژه فرصتی برای یادگیری و بهبود است، نه فقط یک مورد برای نمایش.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Card
              key={caseStudy.id}
              variant="elevated"
              padding="none"
              className={cn(
                "overflow-hidden group cursor-pointer transition-all duration-300",
                expandedCase === caseStudy.id ? "ring-2 ring-primary-500 ring-offset-2" : ""
              )}
              onClick={() => toggleExpandedCase(caseStudy.id)}
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center ml-3">
                      <Target className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {caseStudy.clientType}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">
                        {caseStudy.stage}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={cn(
                    "h-5 w-5 text-gray-400 transition-transform duration-300",
                    expandedCase === caseStudy.id && "rotate-180"
                  )} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {caseStudy.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {caseStudy.context}
                </p>
              </div>

              {/* Expanded Content */}
              {expandedCase === caseStudy.id && (
                <div className="px-6 pb-6 space-y-6">
                  {/* Challenge */}
                  <div>
                    <button
                      className="flex items-center text-sm font-medium text-gray-900 dark:text-white mb-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpandedSection('challenge')
                      }}
                    >
                      <Target className="h-4 w-4 ml-2 text-red-500" />
                      چالش
                      <ChevronDown className={cn(
                        "mr-2 h-4 w-4 transition-transform duration-300",
                        expandedSection === 'challenge' ? "rotate-180" : ""
                      )} />
                    </button>
                    {expandedSection === 'challenge' && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 pr-6">
                        {caseStudy.challenge}
                      </p>
                    )}
                  </div>

                  {/* Our Role */}
                  <div>
                    <button
                      className="flex items-center text-sm font-medium text-gray-900 dark:text-white mb-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpandedSection('role')
                      }}
                    >
                      <Users className="h-4 w-4 ml-2 text-blue-500" />
                      نقش ما
                      <ChevronDown className={cn(
                        "mr-2 h-4 w-4 transition-transform duration-300",
                        expandedSection === 'role' ? "rotate-180" : ""
                      )} />
                    </button>
                    {expandedSection === 'role' && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 pr-6">
                        {caseStudy.ourRole}
                      </p>
                    )}
                  </div>

                  {/* Approach */}
                  <div>
                    <button
                      className="flex items-center text-sm font-medium text-gray-900 dark:text-white mb-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpandedSection('approach')
                      }}
                    >
                      <Lightbulb className="h-4 w-4 ml-2 text-yellow-500" />
                      رویکرد ما
                      <ChevronDown className={cn(
                        "mr-2 h-4 w-4 transition-transform duration-300",
                        expandedSection === 'approach' ? "rotate-180" : ""
                      )} />
                    </button>
                    {expandedSection === 'approach' && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 pr-6">
                        {caseStudy.approach}
                      </p>
                    )}
                  </div>

                  {/* Outcome */}
                  <div>
                    <button
                      className="flex items-center text-sm font-medium text-gray-900 dark:text-white mb-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpandedSection('outcome')
                      }}
                    >
                      <CheckCircle className="h-4 w-4 ml-2 text-green-500" />
                      نتیجه
                      <ChevronDown className={cn(
                        "mr-2 h-4 w-4 transition-transform duration-300",
                        expandedSection === 'outcome' ? "rotate-180" : ""
                      )} />
                    </button>
                    {expandedSection === 'outcome' && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 pr-6">
                        {caseStudy.outcome}
                      </p>
                    )}
                  </div>

                  {/* Key Takeaway */}
                  <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/30">
                    <div className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-primary-600 dark:text-primary-400 ml-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-primary-900 dark:text-primary-100 mb-1">
                          نکته کلیدی
                        </div>
                        <p className="text-sm text-primary-700 dark:text-primary-300">
                          {caseStudy.takeaway}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                      تکنولوژی‌ها
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Card Footer - always visible */}
              <div className="px-6 pb-6">
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                  {expandedCase === caseStudy.id ? "بستن جزئیات" : "مشاهده مطالعه موردی"}
                  <ArrowRight className={cn(
                    "mr-2 h-4 w-4 transition-transform duration-300",
                    expandedCase === caseStudy.id && "rotate-90"
                  )} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section - invites conversation, not comparison */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            چالش مشابهی دارید؟ بیایید با هم بررسی کنیم.
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            ما علاقه‌مند به شنیدن مشکلات شما هستیم، حتی اگر قصد همکاری نداشته باشید. گاهی یک گفتگوی صادقانه می‌تواند چیزهای زیادی روشن کند.
          </p>
          <Button variant="gradient" size="lg" className="group">
            گفتگوی بدون تعهد
            <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Section>
  )
}