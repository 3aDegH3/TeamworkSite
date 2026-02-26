import Header from '@/src/components/layout/header'
import Footer from '@/src/components/layout/footer'
import Hero from '@/src/components/home/hero'
import Trust from '@/src/components/home/trust'
import Process from '@/src/components/home/process'
import FinalCta from '@/src/components/home/final-cta'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Trust />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
