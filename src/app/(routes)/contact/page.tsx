// src/app/contact/page.tsx
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Clock,
  Sparkles,
  Calendar,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Users,
  Shield,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card'
import { cn } from '@/src/lib/utils'

// 🔒 deterministic "random" (to avoid SSR/client mismatch headaches)
function prand(i: number, salt = 1) {
  const x = Math.sin(i * 999 + salt * 123.456) * 10000
  return x - Math.floor(x) // 0..1
}

export default function ContactPage() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    i,
    top: `${prand(i, 1) * 100}%`,
    left: `${prand(i, 2) * 100}%`,
    delay: `${prand(i, 3) * 3}s`,
    duration: `${2 + prand(i, 4) * 3}s`,
    sizeClass:
      i % 5 === 0 ? 'w-0.5 h-0.5' : i % 3 === 0 ? 'w-2 h-2' : 'w-1 h-1',
  }))

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-secondary" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-pink-600/20" />

        {/* blobs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-300/30 to-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-300/30 to-red-400/30 rounded-full blur-3xl animate-pulse delay-500" />

        {/* geometry */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-lg rotate-45" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-white/20 rotate-12" />
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-4 border-white/20 rounded-lg -rotate-12" />
        </div>

        {/* particles */}
        <div className="absolute inset-0">
          {particles.map((p) => (
            <div
              key={p.i}
              className={cn('absolute bg-white rounded-full animate-pulse', p.sizeClass)}
              style={{
                top: p.top,
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>

        {/* content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center relative z-10">
            {/* icon */}
            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>

              {/* orbit */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1" />
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 translate-y-1" />
                <div className="absolute left-0 top-1/2 w-3 h-3 bg-pink-400 rounded-full -translate-y-1/2 -translate-x-1" />
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2 translate-x-1" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              تماس با
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                ما
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              ما به دنبال ایجاد ارتباطات معنادار هستیم. برای شروع گفتگو، لطفاً فرم زیر را پر کنید یا از راه‌های ارتباطی
              دیگر استفاده کنید.
            </p>

            {/* badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Clock, text: 'پاسخ در ۲۴ ساعت' },
                { icon: Sparkles, text: 'مشاوره رایگان' },
                { icon: Users, text: 'تخصص بالا' },
              ].map((b, idx) => {
                const Icon = b.icon
                return (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="relative flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
                      <Icon className="w-5 h-5 ml-2 text-yellow-300" />
                      <span className="font-medium">{b.text}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                شروع گفتگو
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                مشاهده نمونه کارها
              </Button>
            </div>
          </div>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L60 50C120 40 240 20 360 25C480 30 600 60 720 70C840 80 960 70 1080 60C1200 50 1320 40 1380 35L1440 30V120H0V60Z"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M0 80L60 75C120 70 240 60 360 65C480 70 600 80 720 85C840 90 960 85 1080 80C1200 75 1320 70 1380 68L1440 65V120H0V80Z"
              fill="white"
              fillOpacity="0.2"
            />
            <path
              d="M0 100L60 95C120 90 240 85 360 87C480 90 600 95 720 97C840 100 960 97 1080 95C1200 92 1320 90 1380 88L1440 87V120H0V100Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl" />

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center ml-4 shadow-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">ارسال پیام</CardTitle>
                    <p className="text-muted-foreground mt-1">
                      فرم زیر را تکمیل کرده و ما در اسرع وقت پاسخ خواهیم داد
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                        نام و نام خانوادگی
                      </label>
                      <Input id="name" type="text" placeholder="نام خود را وارد کنید" className="text-right" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                        ایمیل
                      </label>
                      <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" className="text-right" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                      موضوع
                    </label>
                    <Input id="subject" type="text" placeholder="موضوع پیام خود را وارد کنید" className="text-right" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                      پیام شما
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="پیام خود را اینجا بنویسید..."
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border',
                        'bg-card border-border text-foreground placeholder:text-muted-foreground',
                        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
                        'resize-none transition-colors duration-200 text-right'
                      )}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 ml-2 text-green-600" />
                      <span>اطلاعات شما محرمانه باقی می‌ماند</span>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="gradient"
                      className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                    >
                      <Send className="h-5 w-5 ml-2" />
                      ارسال پیام
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="relative overflow-hidden border-0 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl" />

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center ml-3 shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">اطلاعات تماس</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                <div className="space-y-4">
                  <a
                    href="mailto:info@webtree.ir"
                    className="group flex items-start p-3 rounded-lg hover:bg-surface/60 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-200">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-foreground">ایمیل</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-primary">info@webtree.ir</p>
                    </div>
                  </a>

                  <a
                    href="tel:02189012345"
                    className="group flex items-start p-3 rounded-lg hover:bg-surface/60 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-200">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-foreground">تلفن</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-primary">۰۲۱-۸۹۰۱۲۳۴۵</p>
                    </div>
                  </a>

                  <div className="group flex items-start p-3 rounded-lg hover:bg-surface/60 transition-colors duration-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-200">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-foreground">آدرس</h3>
                      <p className="text-sm text-muted-foreground">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working hours */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-1">
              <div className="relative bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center ml-3 shadow-lg">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">ساعات کاری</h3>
                </div>

                <div className="space-y-2">
                  {[
                    { day: 'شنبه تا چهارشنبه', time: '۹:۰۰ - ۱۸:۰۰', ok: true },
                    { day: 'پنج‌شنبه', time: '۹:۰۰ - ۱۶:۰۰', ok: true },
                    { day: 'جمعه', time: 'تعطیل', ok: false },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-surface/60"
                    >
                      <div className="flex items-center">
                        <div
                          className={cn(
                            'w-2 h-2 rounded-full ml-2',
                            row.ok ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                          )}
                        />
                        <span className="text-sm text-foreground/80">{row.day}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{row.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-border/60">
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="w-3 h-3 ml-2 text-primary" />
                    بهترین زمان برای تماس: ۱۰:۰۰ تا ۱۶:۰۰
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl p-4 text-center border border-border">
                <div className="text-2xl font-bold text-primary">۵+</div>
                <div className="text-sm text-muted-foreground">سال تجربه</div>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl p-4 text-center border border-border">
                <div className="text-2xl font-bold text-secondary">۱۰۰+</div>
                <div className="text-sm text-muted-foreground">مشتری راضی</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="relative overflow-hidden bg-surface py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-4">
              ما را در شبکه‌های اجتماعی دنبال کنید
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              برای آخرین اخبار و به‌روزرسانی‌ها، ما را در شبکه‌های اجتماعی دنبال کنید.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'توییتر', handle: '@webtree', icon: Twitter, bg: 'bg-blue-600', wash: 'from-blue-500/10 to-blue-600/10' },
              { name: 'لینکدین', handle: 'webtree', icon: Linkedin, bg: 'bg-blue-700', wash: 'from-blue-700/10 to-indigo-600/10' },
              { name: 'اینستاگرام', handle: '@webtree_ir', icon: Instagram, bg: 'bg-gradient-to-br from-pink-500 to-purple-600', wash: 'from-pink-500/10 to-purple-600/10' },
              { name: 'فیسبوک', handle: 'webtree', icon: Facebook, bg: 'bg-blue-600', wash: 'from-blue-600/10 to-blue-700/10' },
            ].map((s, idx) => {
              const Icon = s.icon
              return (
                <a
                  key={idx}
                  href="#"
                  className="group relative overflow-hidden rounded-xl bg-card p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className={cn('absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300', s.wash)} />
                  <div className="relative">
                    <div className={cn('w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300', s.bg)}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{s.name}</h3>
                    <p className="text-sm text-muted-foreground">{s.handle}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
