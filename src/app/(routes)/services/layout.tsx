import type { ReactNode } from "react";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";

export const metadata = {
  title: "خدمات وب‌تری",
  description:
    "طراحی و توسعه وب‌سایت‌های حرفه‌ای متناسب با نیاز کسب‌وکار شما",
};

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* فاصله دقیقاً مثل Portfolio */}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}
