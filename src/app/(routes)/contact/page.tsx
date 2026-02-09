// src/app/contact/page.tsx
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, Sparkles, Calendar, Globe, Instagram, Linkedin, Twitter, Facebook, ArrowRight, Users, Shield } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { cn } from '@/src/lib/utils';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Enhanced Artistic Hero Section */}
      <div className="relative overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-pink-600/20"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-300/30 to-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-300/30 to-red-400/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-white/20 transform rotate-12"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-4 border-white/20 rounded-lg transform -rotate-12"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-1 h-1 bg-white rounded-full animate-pulse",
                i % 3 === 0 && "w-2 h-2",
                i % 5 === 0 && "w-0.5 h-0.5"
              )}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Main content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center relative z-10">
            {/* Floating icon container */}
            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl">
                <MessageCircle className="w-10 h-10 text-primary-600" />
              </div>
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 translate-y-1"></div>
                <div className="absolute left-0 top-1/2 w-3 h-3 bg-pink-400 rounded-full -translate-y-1/2 -translate-x-1"></div>
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2 translate-x-1"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              تماس با
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                ما
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              ما به دنبال ایجاد ارتباطات معنادار هستیم. برای شروع گفتگو، لطفاً فرم زیر را پر کنید یا از راه‌های ارتباطی دیگر استفاده کنید.
            </p>
            
            {/* Enhanced feature badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
                  <Clock className="w-5 h-5 ml-2 text-yellow-300" />
                  <span className="font-medium">پاسخ در ۲۴ ساعت</span>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
                  <Sparkles className="w-5 h-5 ml-2 text-yellow-300" />
                  <span className="font-medium">مشاوره رایگان</span>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
                  <Users className="w-5 h-5 ml-2 text-yellow-300" />
                  <span className="font-medium">تخصص بالا</span>
                </div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                شروع گفتگو
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                مشاهده نمونه کارها
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced bottom wave with multiple layers */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L60 50C120 40 240 20 360 25C480 30 600 60 720 70C840 80 960 70 1080 60C1200 50 1320 40 1380 35L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" fill="white" fillOpacity="0.1"/>
            <path d="M0 80L60 75C120 70 240 60 360 65C480 70 600 80 720 85C840 90 960 85 1080 80C1200 75 1320 70 1380 68L1440 65V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z" fill="white" fillOpacity="0.2"/>
            <path d="M0 100L60 95C120 90 240 85 360 87C480 90 600 95 720 97C840 100 960 97 1080 95C1200 92 1320 90 1380 88L1440 87V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V100Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              {/* Enhanced decorative accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-200/40 to-secondary-200/40 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary-200/30 to-transparent rounded-full blur-2xl"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center ml-4 shadow-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">ارسال پیام</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">فرم زیر را تکمیل کرده و ما در اسرع وقت پاسخ خواهیم داد</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        نام و نام خانوادگی
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="نام خود را وارد کنید"
                        className="text-right"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        ایمیل
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ایمیل خود را وارد کنید"
                        className="text-right"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      موضوع
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="موضوع پیام خود را وارد کنید"
                      className="text-right"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      پیام شما
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="پیام خود را اینجا بنویسید..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none transition-all duration-200 text-right"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Shield className="w-4 h-4 ml-2 text-green-600" />
                      <span>اطلاعات شما محرمانه باقی می‌ماند</span>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                    >
                      <Send className="h-5 w-5 ml-2" />
                      ارسال پیام
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="relative overflow-hidden border-0 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-200/40 to-transparent rounded-full blur-2xl"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center ml-3 shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">اطلاعات تماس</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <div className="space-y-4">
                  <a href="mailto:info@webtree.ir" className="group flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-200">
                      <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">ایمیل</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">info@webtree.ir</p>
                    </div>
                  </a>
                  
                  <a href="tel:02189012345" className="group flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-200">
                      <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">تلفن</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">۰۲۱-۸۹۰۱۲۳۴۵</p>
                    </div>
                  </a>
                  
                  <div className="group flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-200">
                      <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">آدرس</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center ml-3 shadow-lg">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">ساعات کاری</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 ml-2 animate-pulse"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">شنبه تا چهارشنبه</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">۹:۰۰ - ۱۸:۰۰</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 ml-2 animate-pulse"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">پنج‌شنبه</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">۹:۰۰ - ۱۶:۰۰</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 ml-2"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">جمعه</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">تعطیل</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 ml-2 text-primary-600" />
                    بهترین زمان برای تماس: ۱۰:۰۰ تا ۱۶:۰۰
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">۵+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">سال تجربه</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">۱۰۰+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">مشتری راضی</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Social Media Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-200/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 shadow-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ما را در شبکه‌های اجتماعی دنبال کنید
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              برای آخرین اخبار و به‌روزرسانی‌ها، ما را در شبکه‌های اجتماعی دنبال کنید.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a href="#" className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">توییتر</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">@webtree</p>
              </div>
            </a>
            
            <a href="#" className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">لینکدین</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">webtree</p>
              </div>
            </a>
            
            <a href="#" className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">اینستاگرام</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">@webtree_ir</p>
              </div>
            </a>
            
            <a href="#" className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">فیسبوک</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">webtree</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}