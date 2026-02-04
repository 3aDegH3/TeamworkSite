import { Card, CardContent } from '@/src/components/ui/card'
import Section from '@/src/components/shared/section'

export default function Trust() {
  const brands = ['TechVision', 'NovaLabs', 'AriaCommerce', 'PixelWorks', 'DataNest']

  return (
    <Section muted>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-gray-900 dark:text-white">اعتماد، نتیجه‌ی شفافیت و کیفیت است</h2>
          <p className="max-w-xl">
            ما با فرآیند مشخص، مستندسازی، و تحویل مرحله‌ای کار می‌کنیم تا شما همیشه بدانید پروژه دقیقاً کجاست و قدم بعدی چیست.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <Stat value="+32" label="پروژه" />
            <Stat value="4.9/5" label="رضایت" />
            <Stat value="24h" label="پاسخ‌گویی" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <Card padding="lg">
            <CardContent className="space-y-5">
              <div className="text-sm text-gray-700 dark:text-gray-200">
                برندهایی که با ما کار کرده‌اند (نمونه)
              </div>

              <div className="flex flex-wrap gap-3">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border bg-white/70 dark:bg-gray-900/60 px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">تعهد ما</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-comfy">
                  طراحی مینیمال + تجربه کاربری دقیق + توسعه تمیز + استانداردهای عملکرد و سئو.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white/70 dark:bg-gray-900/60 p-4">
      <div className="text-xl font-semibold text-gray-900 dark:text-white">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  )
}
