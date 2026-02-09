// src/app/(routes)/contact/layout.tsx
import { ReactNode } from 'react';
import Header from '@/src/components/layout/header';
import Footer from '@/src/components/layout/footer';

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}