// src/components/team/team-grid.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, CheckCircle } from 'lucide-react'
import { Section } from '@/src/components/shared/section'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'

// Company values
const companyValues = [
  { id: 1, title: 'کیفیت', description: 'تعهد به بهترین نتیجه در هر پروژه' },
  { id: 2, title: 'نوآوری', description: 'راه‌حل‌های خلاقانه و مدرن' },
  { id: 3, title: 'شفافیت', description: 'ارتباط شفاف و صادقانه' },
  { id: 4, title: 'همکاری', description: 'قدرت تیمی و همدلی' }
]

// Team capabilities
const capabilities = [
  { id: 1, title: 'طراحی وب‌سایت', description: 'وب‌سایت‌های مدرن و واکنش‌گرا' },
  { id: 2, title: 'توسعه اپلیکیشن', description: 'اپلیکیشن‌های موبایل و وب' },
  { id: 3, title: 'مشاوره دیجیتال', description: 'راهکارهای دیجیتال برای کسب‌وکار شما' },
  { id: 4, title: 'برندینگ', description: 'هویت بصری برند شما' },
  { id: 5, title: 'بهینه‌سازی', description: 'بهبود عملکرد و سرعت' },
  { id: 6, title: 'پشتیبانی', description: 'پشتیبانی فنی مستمر' }
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Full Page Header */}
      <div className="relative bg-gradient-to-br from-primary-600 to-secondary-500 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              درباره وب‌تری
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              ما باور داریم که طراحی دیجیتال باید نه تنها زیبا، بلکه معنادار و مؤثر باشد
            </p>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-20 sm:h-24"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="rgb(249 250 251)"
              className="dark:fill-gray-900"
            />
          </svg>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              داستان ما
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              وب‌تری در سال ۲۰۱۹ با یک愿景 ساده آغاز شد: ایجاد تجربه‌های دیجیتال که نه تنها زیبا به نظر می‌رسند، بلکه واقعاً کاربردی و مؤثر هستند. ما با یک تیم کوچک اما پرشور شروع کردیم و با هر پروژه، دانش و تخصص خود را عمیق‌تر کردیم.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              امروز، وب‌تری به یک تیم متخصص از طراحان، توسعه‌دهندگان و استراتژیست‌ها تبدیل شده است که با همکاری یکدیگر، راه‌حل‌های دیجیتال خلق می‌کنند که کسب‌وکارها را به سطح جدیدی از موفقیت می‌رسانند.
            </p>
            <Button variant="gradient" size="lg" className="group">
              دیدن نمونه کارها
              <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/webtree-team/800/450.jpg" 
                alt="تیم وب‌تری"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              مأموریت ما
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              مأموریت ما خلق تجربه‌های دیجیتال است که نه تنها زیبا، بلکه معنادار و مؤثر هستند. ما با ترکیب خلاقیت، فناوری و استراتژی، راه‌حل‌هایی ارائه می‌دهیم که به کسب‌وکارها کمک می‌کند تا به اهداف خود دست یابند و با مخاطبان خود ارتباط عمیق برقرار کنند.
            </p>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ارزش‌های ما
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              اصولی که راهنمای کار ما هستند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div
                key={value.id}
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-500",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-md mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Capabilities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              خدمات ما
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              آنچه ما به بهترین شکل انجام می‌دهیم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability.id}
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-500 hover:shadow-lg",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Full Page Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">وب‌تری</h3>
              <p className="text-gray-400 mb-6">
                طراحی دیجیتال با تمرکز بر کیفیت
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                    خدمات
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                    نمونه کارها
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    تماس
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">اطلاعات تماس</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 ml-3" />
                  info@webtree.ir
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 ml-3" />
                  ۰۲۱-۸۹۰۱۲۳۴۵
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 ml-3" />
                  تهران، خیابان ولیعصر
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} وب‌تری. تمامی حقوق محفوظ است.
              </p>
              <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  شرایط استفاده
                </a>
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  حریم خصوصی
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}