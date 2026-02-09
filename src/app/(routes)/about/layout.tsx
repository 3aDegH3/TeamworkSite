// src/app/(routes)/about/layout.tsx
import Header from '@/src/components/layout/header'
import Footer from '@/src/components/layout/footer'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}