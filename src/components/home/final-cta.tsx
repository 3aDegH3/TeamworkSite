// src/components/home/final-cta.tsx
import { Button } from '@/src/components/ui/button'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Section } from '@/src/components/shared/section'
import { cn } from '@/src/lib/utils'

export default function FinalCTA() {
  return (
    <Section className="py-24 relative overflow-hidden">
      {/* Enhanced background with subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a9d8f' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="lg:col-span-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Content - CTA */}
              <div className="p-12 lg:p-16 bg-gradient-to-br from-primary-600 to-secondary-500 text-white relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                <div className="relative z-10 space-y-8">
                  {/* Short, confident headline */}
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    بیایید گفتگو کنیم
                  </h2>
                  
                  {/* Minimal supporting sentence */}
                  <p className="text-lg opacity-90">
                    بدون تعهد، بدون فروش، فقط شفافیت
                  </p>
                  
                  {/* Primary CTA Button - visually dominant */}
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-primary-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group"
                  >
                    <span className="flex items-center justify-center">
                      شروع گفتگو
                      <ArrowRight className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                  
                  {/* Contact Info - minimal and clean */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                      <Mail className="h-5 w-5 ml-3" />
                      <span>info@webtree.ir</span>
                    </div>
                    <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                      <Phone className="h-5 w-5 ml-3" />
                      <span>۰۲۱-۸۹۰۱ۢ۳۴۵</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Form */}
              <div className="p-12 lg:p-16 bg-gray-50 dark:bg-gray-800">
                <div className="space-y-6">
                  {/* Form Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    ارسال پیام
                  </h3>
                  
                  {/* Form Fields - visually light and friendly */}
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="نام"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                      />
                      <input
                        type="email"
                        placeholder="ایمیل"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                      />
                    </div>
                    
                    <input
                      type="text"
                      placeholder="موضوع"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    />
                    
                    <textarea
                      placeholder="پیام شما"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 resize-none"
                    ></textarea>
                    
                    {/* Secondary Button - feels optional */}
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-gray-300 dark:border-gray-600 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                    >
                      ارسال پیام
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}