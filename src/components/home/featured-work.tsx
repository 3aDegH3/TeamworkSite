import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import Section from '@/src/components/shared/section'

const items = [
  {
    title: 'وب‌سایت شرکتی + برندینگ',
    desc: 'طراحی مینیمال، سرعت بالا، و ساختار سئو محور برای رشد ورودی ارگانیک.',
    tags: ['UI/UX', 'Next.js', 'SEO'],
    metric: '+38% لید'
  },
  {
    title: 'داشبورد مدیریتی',
    desc: 'تجربه کاربری سریع و قابل فهم برای تیم‌های عملیاتی و تصمیم‌گیری.',
    tags: ['Design System', 'Dashboard', 'Performance'],
    metric: '-22% زمان عملیات'
  },
  {
    title: 'صفحه فرود کمپین',
    desc: 'فوکوس روی تبدیل با ساختار محتوا و CTAهای دقیق.',
    tags: ['Landing', 'CRO', 'Analytics'],
    metric: '2.4x تبدیل'
  }
]

export default function FeaturedWork() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-3">
          <h2 className="text-gray-900 dark:text-white">نمونه‌کارهای منتخب</h2>
          <p className="max-w-2xl">
            چند نمونه از پروژه‌هایی که با رویکرد تیم‌محور و استانداردهای حرفه‌ای اجرا شده‌اند.
          </p>
        </div>

        <Link href="/portfolio" className="hidden md:inline-flex">
          <Button variant="outline">
            مشاهده همه
            <ArrowLeft className="ms-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {items.map((it) => (
          <Card key={it.title} hover padding="lg" className="relative overflow-hidden">
            <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full blur-2xl bg-primary-500/10" />

            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                  <Sparkles className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  کیس استادی
                </span>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {it.metric}
                </span>
              </div>

              <CardTitle className="mt-3">{it.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <p className="text-gray-600 dark:text-gray-300 leading-comfy">{it.desc}</p>

              <div className="flex flex-wrap gap-2">
                {it.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-white/70 dark:bg-gray-900/60 px-3 py-1 text-xs text-gray-700 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link href="/portfolio" className="inline-flex">
                <Button variant="ghost" className="px-0">
                  جزئیات بیشتر
                  <ArrowLeft className="ms-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link href="/portfolio">
          <Button variant="outline" fullWidth>
            مشاهده همه نمونه‌کارها
            <ArrowLeft className="ms-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  )
}
