"use client";

import * as React from "react";
import type { Service, ServiceId } from "./types";
import { services as defaultServices } from "./data/services";
import { ServiceTabs } from "./service-tabs";
import { ServiceDetails } from "./service-details";
import { Card } from "@/src/components/ui/card";
import { Sparkles, Code, Zap, Shield, CheckCircle, Clock, Award } from "lucide-react";
import { cn } from "@/src/lib/utils";

type ServicesExplorerProps = {
  services?: Service[];
  value?: ServiceId;
  onChange?: (id: ServiceId) => void;
};

export function ServicesExplorer({
  services = defaultServices,
  value,
  onChange,
}: ServicesExplorerProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const isControlled = value !== undefined && typeof onChange === "function";

  const [internalValue, setInternalValue] = React.useState<ServiceId>(
    services[0]?.id ?? ("uiux" as ServiceId)
  );

  const activeId = isControlled ? (value as ServiceId) : internalValue;

  const activeService = React.useMemo(() => {
    return services.find((s) => s.id === activeId) ?? services[0];
  }, [services, activeId]);

  const handleChange = (id: ServiceId) => {
    if (isControlled) onChange?.(id);
    else setInternalValue(id);
  };

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!services?.length) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20" dir="rtl">
      {/* Background pattern */}
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={cn(
          "mb-8 md:mb-12 transition-all duration-1000",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 text-primary text-sm font-medium backdrop-blur-sm border border-border/60 mb-6">
            <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
            خدمات تخصصی ما
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            حوزه‌های اصلی
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {' '}خدمات
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            سرویس مورد نظر خود را انتخاب کنید تا جزئیات، خروجی‌ها و محدوده هر مورد را مشاهده کنید.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-12">
          {/* Service Details (RTL: left column) */}
          <div className={cn(
            "lg:col-span-8 transition-all duration-1000 delay-200",
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <Card className="rounded-3xl border-border/30 bg-card/80 backdrop-blur-xl shadow-xl overflow-hidden relative">
              {/* Gradient accent at the top */}
              <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary/70"></div>
              
              <div className="p-6 md:p-8">
                {activeService ? <ServiceDetails service={activeService} /> : null}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-50" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl opacity-50" />
            </Card>
          </div>

          {/* Service Tabs (RTL: right column) */}
          <div className={cn(
            "lg:col-span-4 transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="sticky top-24">
              <Card className="rounded-3xl border-border/30 bg-card/60 backdrop-blur-xl shadow-xl p-4 md:p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">انتخاب سرویس</h3>
                <ServiceTabs services={services} value={activeId} onChange={handleChange} />
              </Card>

              {/* Features list */}
              <Card className="rounded-3xl border-border/30 bg-card/60 backdrop-blur-xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">ویژگی‌های کلیدی</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 space-x-reverse p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base">کد تمیز</h4>
                      <p className="text-sm text-muted-foreground">ساختار منظم و قابل توسعه</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 space-x-reverse p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base">عملکرد سریع</h4>
                      <p className="text-sm text-muted-foreground">بهینه‌سازی سرعت بارگذاری</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 space-x-reverse p-4 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base">امنیت بالا</h4>
                      <p className="text-sm text-muted-foreground">حفاظت از داده‌های شما</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}