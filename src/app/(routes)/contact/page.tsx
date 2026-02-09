// src/app/(routes)/contact/page.tsx
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, Sparkles, Calendar, Globe, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { THEME_CONSTANTS } from '@/src/constants/theme';
import { cn } from '@/src/lib/utils';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/30 dark:via-gray-900 dark:to-secondary-900/30">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-200/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              تماس با ما
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              ما به دنبال ایجاد ارتباطات معنادار هستیم. برای شروع گفتگو، لطفاً فرم زیر را پر کنید یا از راه‌های ارتباطی دیگر استفاده کنید.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="w-5 h-5 ml-2 text-primary-600" />
                <span>پاسخ در ۲۴ ساعت</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Sparkles className="w-5 h-5 ml-2 text-primary-600" />
                <span>مشاوره رایگان</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 55C1200 50 1320 50 1380 50L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="currentColor" className="text-gray-50 dark:text-gray-900" />
          </svg>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card variant="elevated" padding="lg" className="relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-2xl"></div>
              
              <CardHeader>
                <CardTitle>ارسال پیام</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <form className="space-y-6">
                  <div>
                    <Input
                      id="name"
                      type="text"
                      label="نام و نام خانوادگی"
                      placeholder="نام خود را وارد کنید"
                      fullWidth
                    />
                  </div>
                  <div>
                    <Input
                      id="email"
                      type="email"
                      label="ایمیل"
                      placeholder="ایمیل خود را وارد کنید"
                      fullWidth
                    />
                  </div>
                  <div>
                    <Input
                      id="subject"
                      type="text"
                      label="موضوع"
                      placeholder="موضوع پیام خود را وارد کنید"
                      fullWidth
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      پیام شما
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="پیام خود را اینجا بنویسید..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    fullWidth
                    icon={<Send className="h-5 w-5" />}
                  >
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card variant="elevated" padding="lg" className="relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-200/30 to-transparent rounded-full blur-2xl"></div>
              
              <CardHeader>
                <CardTitle>اطلاعات تماس</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center ml-4">
                      <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">ایمیل</h3>
                      <p className="text-gray-600 dark:text-gray-400">info@webtree.ir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center ml-4">
                      <Phone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">تلفن</h3>
                      <p className="text-gray-600 dark:text-gray-400">۰۲۱-۸۹۰۱۲۳۴۵</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center ml-4">
                      <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">آدرس</h3>
                      <p className="text-gray-600 dark:text-gray-400">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Working Hours Section */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center ml-4 shadow-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">ساعات کاری</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mt-6">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 ml-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">شنبه تا چهارشنبه</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">۹:۰۰ - ۱۸:۰۰</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 ml-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">پنج‌شنبه</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">۹:۰۰ - ۱۶:۰۰</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 ml-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">جمعه</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">تعطیل</span>
                  </div>
                </div>
                
                <div className="mt-6 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 ml-2 text-primary-600" />
                    بهترین زمان برای تماس: ۱۰:۰۰ تا ۱۶:۰۰
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Social Media Section */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center ml-4 shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">شبکه‌های اجتماعی</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  برای آخرین اخبار و به‌روزرسانی‌ها، ما را در شبکه‌های اجتماعی دنبال کنید.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center ml-3">
                        <Twitter className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">توییتر</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">@webtree</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </a>
                  
                  <a href="#" className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-800/20 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center ml-3">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">لینکدین</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">webtree</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </a>
                  
                  <a href="#" className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-50 to-purple-100 dark:from-pink-900/20 dark:to-purple-800/20 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center ml-3">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">اینستاگرام</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">@webtree_ir</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </a>
                  
                  <a href="#" className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center ml-3">
                        <Facebook className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">فیسبوک</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">webtree</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Additional Info Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 py-16">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-200/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Decorative top wave */}
        <div className="absolute top-0 left-0 right-0 transform rotate-180">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 55C1200 50 1320 50 1380 50L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="currentColor" className="text-white dark:text-gray-900" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              آماده شروع گفتگو هستیم
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              ما به پیام شما در ۲۴ ساعت کاری پاسخ خواهیم داد. برای مسائل فوری، لطفاً با ما تماس بگیرید.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="w-5 h-5 ml-2 text-primary-600" />
                <span>پاسخ سریع</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Sparkles className="w-5 h-5 ml-2 text-primary-600" />
                <span>مشاوره تخصصی</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 ml-2 text-primary-600" />
                <span>پشتیبانی مستمر</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 55C1200 50 1320 50 1380 50L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="currentColor" className="text-white dark:bg-gray-900" />
          </svg>
        </div>
      </div>
    </div>
  );
}