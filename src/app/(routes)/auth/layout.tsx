import type { ReactNode } from 'react'
import Header from '@/src/components/layout/header'
import Footer from '@/src/components/layout/footer'
import AnimatedBackground from '@/src/components/auth/animated-background'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main className="relative w-full pt-24">
        <AnimatedBackground />

        <div className="relative z-10 min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-10">
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}
