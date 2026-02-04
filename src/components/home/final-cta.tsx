import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Card, CardContent } from '@/src/components/ui/card'
import Section from '@/src/components/shared/section'

export default function FinalCta() {
  return (
    <Section>
      <Card padding="lg" className="overflow-hidden">
        <CardContent className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-gray-900 dark:text-white">آماده‌ای شروع کنیم؟</h2>
            <p className="max-w-2xl">
              یک جلسه کوتاه برای شناخت نیازها—بعدش مسیر، زمان‌بندی و هزینه را شفاف اعلام می‌کنیم.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link href="/contact" className="sm:inline-flex">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                درخواست مشاوره
                <ArrowLeft className="ms-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/services" className="sm:inline-flex">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                خدمات
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}
