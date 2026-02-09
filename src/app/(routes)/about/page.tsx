// src/app/(routes)/about/page.tsx
import { Metadata } from 'next'
import HeroSection from '@/src/components/about/hero-section'
import IdentitySection from '@/src/components/about/identity-section'
import MindsetSection from '@/src/components/about/mindset-section'
import ProcessSection from '@/src/components/about/process-section'
import QualitySection from '@/src/components/about/quality-section'
import TeamSection from '@/src/components/about/team-section'
import CtaSection from '@/src/components/about/cta-section'
import VisualSignature from '@/src/components/about/visual-signature'

export const metadata: Metadata = {
  title: 'درباره ما | وب‌تری',
  description: 'شناخت تیم، نگرش و فرآیندهای کاری وب‌تری - آژانس طراحی دیجیتال با تمرکز بر کیفیت',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IdentitySection />
      <MindsetSection />
      <ProcessSection />
      <QualitySection />
      <CtaSection />
      <VisualSignature />
    </main> 
  )
}