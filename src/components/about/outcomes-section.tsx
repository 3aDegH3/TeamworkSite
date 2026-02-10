// src/components/about/outcomes-section.tsx
import { Card, CardContent } from '@/src/components/ui/card'

export function OutcomesSection() {
  const outcomes = [
    { title: 'شفافیت کامل', description: 'شما همیشه در جریان پیشرفت کار هستید' },
    { title: 'نتیجه قابل اتکا', description: 'تحویل به موقع با کیفیت بالا' },
    { title: 'ارزش واقعی', description: 'راه‌حل‌هایی که واقعاً کار می‌کنند' },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
        این برای شما چه معنایی دارد
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {outcomes.map((outcome, index) => (
          <Card key={index} variant="elevated" hover>
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">{outcome.title}</h3>
              <p className="text-muted-foreground">{outcome.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
