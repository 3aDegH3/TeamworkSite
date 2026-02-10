"use client";

// src/components/services/services-page.tsx
import * as React from "react";
import type { ServiceId } from "./types";
import { services } from "./data/services";
import { ServicesHero } from "./services-hero";
import { ServicesExplorer } from "./services-explorer";
import { Outcomes } from "./outcomes";
import { Faq } from "./faq";
import { Card } from "@/src/components/ui/card";

export function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = React.useState<ServiceId>(services[0].id);

  return (
    <div className="flex flex-col gap-0" dir="rtl">
      <ServicesHero />

      <ServicesExplorer
        services={services}
        value={activeServiceId}
        onChange={setActiveServiceId}
      />

      <Outcomes />

      <Faq />

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Card className="border-border bg-card p-8 text-center md:p-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
            برای برآورد دقیق، چند سوال کوتاه کافی است.
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              شروع گفتگو
            </a>

            <a
              href="/portfolio"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              نمونه‌کارها
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}
