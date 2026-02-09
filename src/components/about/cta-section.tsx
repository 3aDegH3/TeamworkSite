// src/components/about/cta-section.tsx
'use client'

import { Button } from '@/src/components/ui/button'
import { ArrowLeft, MessageSquare, Mail, Phone, MapPin, Star, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function CtaSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const testimonials = [
    { name: "شرکت فناوری X", rating: 5 },
    { name: "استارتاپ Y", rating: 5 },
    { name: "برند Z", rating: 5 }
  ]

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-primary-600 to-secondary-500 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full transform rotate-45 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full transform rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  بیایید با هم کار کنیم
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  آماده‌اید تا ایده‌های خود را به واقعیت تبدیل کنید؟ با ما تماس بگیرید تا در مورد پروژه بعدی خود صحبت کنیم.
                </p>
              </div>
              
              {/* Contact information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>info@webtree.ir</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>۰۲۱-۸۹۰۱۲۳۴۵</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>تهران، خیابان ولیعصر</span>
                </div>
              </div>
              
              {/* Testimonials */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">چه می‌گویند</h3>
                <div className="space-y-3">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{testimonial.name}</span>
                      <div className="flex space-x-reverse space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">شروع پروژه</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xl text-white">پیام شما با موفقیت ارسال شد!</p>
                  <p className="text-white/80 mt-2">به زودی با شما تماس خواهیم گرفت.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">نام و نام خانوادگی</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="نام خود را وارد کنید"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm mb-2">ایمیل</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="ایمیل خود را وارد کنید"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm mb-2">پیام</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                      rows={4}
                      placeholder="در مورد پروژه خود به ما بگویید"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <input type="checkbox" id="privacy" className="rounded" required />
                    <label htmlFor="privacy" className="text-white/80 text-sm">
                      با <a href="#" className="underline">شرایط استفاده</a> و <a href="#" className="underline">حریم خصوصی</a> موافقم
                    </label>
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="secondary" 
                    size="lg" 
                    className="w-full bg-white text-primary-600 hover:bg-gray-100 font-medium"
                  >
                    ارسال درخواست
                  </Button>
                </form>
              )}
              
              <div className="mt-6 text-center">
                <p className="text-white/80 text-sm mb-4">یا مستقیماً با ما تماس بگیرید</p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  icon={<Phone className="h-5 w-5" />}
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary-600 w-full"
                >
                  تماس تلفنی
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA buttons */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white">همچنین می‌توانید:</span>
              <Button 
                variant="ghost" 
                size="sm"
                icon={<ArrowLeft className="h-4 w-4" />}
                iconPosition="right"
                className="text-white hover:bg-white/20"
              >
                مشاهده نمونه‌کارها
              </Button>
              <span className="text-white/60">یا</span>
              <Button 
                variant="ghost" 
                size="sm"
                icon={<MessageSquare className="h-4 w-4" />}
                iconPosition="left"
                className="text-white hover:bg-white/20"
              >
                چت آنلاین
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}