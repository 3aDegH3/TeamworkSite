// src/app/(routes)/team/page.tsx
import Header from '@/src/components/layout/header'
import Footer from '@/src/components/layout/footer'
import { Section } from '@/src/components/shared/section'
import TeamGrid from '@/src/components/team/team-grid'

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section className="pt-24 pb-16">
          <TeamGrid />
        </Section>
      </main>
      <Footer />
    </>
  )
}