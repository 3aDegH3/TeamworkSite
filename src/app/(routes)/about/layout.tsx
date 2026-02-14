// src/app/(routes)/about/layout.tsx
import type { ReactNode } from "react";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
