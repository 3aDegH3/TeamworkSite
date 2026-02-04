import Link from 'next/link'
import { ArrowLeft, Sparkles, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Card } from '@/src/components/ui/card'
import Section from '@/src/components/shared/section'

export default function Hero() {
  return (
    <Section grid className="pt-20 md:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Right (RTL): Copy */}
        <div className="lg:col-span-7 space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 dark:bg-gray-900/60 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm text-gray-700 dark:text-gray-200">
              تیم‌محور، دقیق، سریع • طراحی تا اجرا
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="text-gray-900 dark:text-white">
              ما تجربه‌های دیجیتال
              <span className="block mt-2 text-primary-600 dark:text-primary-400">
                اثرگذار و قابل اعتماد می‌سازیم
              </span>
            </h1>

            <p className="max-w-2xl">
              از طراحی رابط کاربری تا توسعه وب و رشد—با ارتباط شفاف، اسپرینت‌های منظم و
              خروجی قابل ارائه. همکاری طولانی‌مدت، نه فقط یک پروژه.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="sm:inline-flex">
              <Button size="lg" variant="primary" className="text-base px-7 w-full sm:w-auto">
                شروع پروژه
                <ArrowLeft className="ms-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/portfolio" className="sm:inline-flex">
              <Button size="lg" variant="outline" className="text-base px-7 w-full sm:w-auto">
                مشاهده نمونه‌کارها
              </Button>
            </Link>
          </div>

          {/* Trust row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <Metric
              icon={<Users className="h-5 w-5" />}
              label="همکاری"
              value="اسپرینت‌های هفتگی"
              desc="گزارش شفاف پیشرفت"
            />
            <Metric
              icon={<TrendingUp className="h-5 w-5" />}
              label="کیفیت"
              value="سریع و SEO-ready"
              desc="استانداردهای روز"
            />
            <Metric
              icon={<Sparkles className="h-5 w-5" />}
              label="طراحی"
              value="سیستم‌محور"
              desc="UI یکدست و حرفه‌ای"
            />
          </div>
        </div>

        {/* Left: Visual */}
        <div className="lg:col-span-5">
          <Card className="relative overflow-hidden" padding="lg">
            {/* Subtle geometry */}
            <div className="absolute inset-0 opacity-70">
              <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full blur-3xl bg-primary-500/20" />
              <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full blur-3xl bg-secondary-500/20" />
              <div className="absolute top-10 right-10 h-24 w-24 rounded-2xl rotate-12 border border-border bg-white/50 dark:bg-gray-900/40 backdrop-blur" />
              <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full border border-border bg-white/50 dark:bg-gray-900/40 backdrop-blur" />
            </div>

            <div className="relative space-y-6">
              <div className="space-y-2">
                <h3 className="text-gray-900 dark:text-white">مینیمال، اما قدرتمند</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-comfy">
                  تایپوگرافی قوی، فاصله‌گذاری هدفمند و اجزای محدود—با هندسه‌ی ظریف که حس اتصال و تیم‌ورک را منتقل می‌کند.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <MiniCard title="Design System" subtitle="Tokens + Components" />
                <MiniCard title="Dark/Light" subtitle="حالت شب/روز" />
                <MiniCard title="Animations" subtitle="نرم و سبک" />
                <MiniCard title="SEO" subtitle="آماده سئو" />
              </div>

              <div className="rounded-xl border border-border bg-white/60 dark:bg-gray-900/60 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-200">گام بعدی</span>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    تکمیل صفحه اصلی
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-2 w-[72%] rounded-full bg-primary-600 dark:bg-primary-500" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}

function Metric({
  icon,
  label,
  value,
  desc,
}: {
  icon: React.ReactNode
  label: string
  value: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-white/60 dark:bg-gray-900/60 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
        <span className="text-primary-600 dark:text-primary-400">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{desc}</div>
    </div>
  )
}

function MiniCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white/60 dark:bg-gray-900/60 p-4 backdrop-blur">
      <div className="text-sm font-semibold text-gray-900 dark:text-white">{title}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</div>
    </div>
  )
}
