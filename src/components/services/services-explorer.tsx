"use client";

// src/components/services/services-explorer.tsx
import * as React from "react";
import type { Service, ServiceId } from "./types";
import { services as defaultServices } from "./data/services";
import { ServiceTabs } from "./service-tabs";
import { ServiceDetails } from "./service-details";
import { Card } from "@/src/components/ui/card";

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

  if (!services?.length) return null;

  return (
    <section className="container mx-auto px-4 py-10 md:py-14" dir="rtl">
      <div className="mb-6">
        <h2 className="text-right text-xl font-semibold text-foreground md:text-2xl">
          حوزه‌های اصلی خدمات
        </h2>
        <p className="mt-2 text-right text-sm leading-7 text-muted-foreground">
          سرویس را انتخاب کنید تا جزئیات، خروجی‌ها و محدوده هر مورد را ببینید.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-12 md:gap-6">
        {/* Tabs (RTL: right column) */}
        <div className="md:col-span-4 md:order-2">
          <ServiceTabs services={services} value={activeId} onChange={handleChange} />
        </div>

        {/* Details */}
        <div className="md:col-span-8 md:order-1">
          <Card className="rounded-2xl border-border bg-card p-4 md:p-6">
            {activeService ? <ServiceDetails service={activeService} /> : null}
          </Card>
        </div>
      </div>
    </section>
  );
}
