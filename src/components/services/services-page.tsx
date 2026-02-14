"use client";

import * as React from "react";
import type { ServiceId } from "./types";
import { services } from "./data/services";
import { ServicesHero } from "./services-hero";
import { ServicesExplorer } from "./services-explorer";
import { Outcomes } from "./outcomes";
import { Faq } from "./faq";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, MessageSquare, Briefcase } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = React.useState<ServiceId>(services[0].id);

  return (
    <div className="flex flex-col gap-0" dir="rtl">
      <ServicesHero />

      {/* Services Explorer Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, rgba(37, 99, 235, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(37, 99, 235, 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-20">
          <ServicesExplorer
            services={services}
            value={activeServiceId}
            onChange={setActiveServiceId}
          />
        </div>
      </section>

      <Outcomes />
      <Faq />

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, rgba(37, 99, 235, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(37, 99, 235, 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Card className="border-border/30 bg-card/80 backdrop-blur-xl p-8 md:p-12 text-center shadow-2xl overflow-hidden relative">
            {/* Gradient accent at the top */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-primary/70"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 text-primary text-sm font-medium backdrop-blur-sm border border-border/60 mb-6">
                <Briefcase className="ml-2 h-4 w-4" />
                آماده شروع هستید؟
              </div>
              
              <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground">
                برای برآورد دقیق، چند سوال کوتاه کافی است.
              </h2>

              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                تیم متخصص ما آماده است تا بهترین راهکار را برای کسب‌وکار شما طراحی کند. همین حالا شروع کنید.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="gradient"
                  size="lg"
                  className="group relative overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <a href="/contact" className="flex items-center">
                    شروع گفتگو
                    <MessageSquare className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-surface transition-all duration-300"
                  asChild
                >
                  <a href="/portfolio" className="flex items-center">
                    مشاهده نمونه‌کارها
                    <ArrowRight className="mr-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-50" />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl opacity-50" />
          </Card>
        </div>
      </section>
    </div>
  );
}