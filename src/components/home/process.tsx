import { Card, CardContent } from '@/src/components/ui/card'
import Section from '@/src/components/shared/section'

const steps = [
  {
    n: '01',
    title: 'کشف و برنامه‌ریزی',
    desc: 'هدف، مخاطب، محتوا و معیارهای موفقیت را شفاف می‌کنیم.'
  },
  {
    n: '02',
    title: 'طراحی و سیستم',
    desc: 'Design System سبک و مینیمال + UI/UX دقیق برای مسیرهای اصلی.'
  },
  {
    n: '03',
    title: 'توسعه و تحویل',
    desc: 'توسعه تمیز، تست، بهینه‌سازی و تحویل مرحله‌ای با گزارش.'
  }
]

export default function Process() {
  return (
    <Section muted>
      <div className="space-y-3">
        <h2 className="text-gray-900 dark:text-white">فرآیند همکاری</h2>
        <p className="max-w-2xl">
          یک مسیر مشخص که باعث می‌شود پروژه سریع‌تر، شفاف‌تر و با کیفیت‌تر جلو برود.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps.map((s) => (
          <Card key={s.n} padding="lg" className="relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl bg-secondary-500/10" />

            <CardContent className="space-y-4">
              <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {s.n}
              </div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white">{s.title}</div>
              <p className="text-gray-600 dark:text-gray-300 leading-comfy">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
