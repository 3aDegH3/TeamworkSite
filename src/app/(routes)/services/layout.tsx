// src/app/(routes)/services/layout.tsx
import type { ReactNode } from "react";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";

export const metadata = {
  title: "خدمات وب‌تری",
  description: "طراحی و توسعه وب‌سایت‌های حرفه‌ای متناسب با نیاز کسب‌وکار شما",
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">{children}</main>
      <Footer />
    </>
  );
}
