import { Button } from '@/src/components/ui/button'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Section } from '@/src/components/shared/section'

export default function FinalCTA() {
  return (
    <Section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-card border border-border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">بیایید گفتگو کنیم</h2>
            <p className="opacity-90 mb-8">بدون تعهد، بدون فشار فروش</p>

            <Button variant="secondary" size="lg" className="bg-white text-primary">
              شروع گفتگو
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>

            <div className="mt-8 space-y-3 opacity-90">
              <div className="flex items-center"><Mail className="ml-2 h-5 w-5" /> sadeghox@gmail.com</div>
              <div className="flex items-center"><Phone className="ml-2 h-5 w-5" /> 09017382848</div>
            </div>
          </div>

          <div className="p-12 bg-background">
            <h3 className="text-2xl font-semibold text-foreground mb-6">ارسال پیام</h3>
            <form className="space-y-4">
              <input className="w-full px-4 py-3 rounded-xl border border-border bg-card" placeholder="نام" />
              <input className="w-full px-4 py-3 rounded-xl border border-border bg-card" placeholder="ایمیل" />
              <textarea className="w-full px-4 py-3 rounded-xl border border-border bg-card" rows={4} placeholder="پیام شما" />
              <Button variant="outline" fullWidth>ارسال پیام</Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}
