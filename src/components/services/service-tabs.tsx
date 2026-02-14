"use client";

import * as React from "react";
import type { Service, ServiceId } from "./types";
import { cn } from "@/src/lib/utils";
import { Zap, Code, Palette, Smartphone, Globe, Search, BarChart, Shield } from "lucide-react";

// Icon mapping for services
const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "uiux": Palette,
  "corporate": Globe,
  "ecommerce": Globe,
  "landing": Zap,
  "performance": BarChart,
  "support": Shield,
};

interface ServiceTabsProps {
  services: Service[];
  value: ServiceId;
  onChange: (id: ServiceId) => void;
}

export function ServiceTabs({ services, value, onChange }: ServiceTabsProps) {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex gap-3 md:gap-4 min-w-max md:min-w-0 md:flex-wrap">
        {services.map((service) => {
          const Icon = serviceIcons[service.id] || Zap;
          const isActive = value === service.id;
          
          return (
            <button
              key={service.id}
              onClick={() => onChange(service.id)}
              className={cn(
                "group relative px-6 py-3 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap flex items-center space-x-2 space-x-reverse",
                isActive
                  ? "bg-gradient-to-r from-primary/15 to-secondary/15 text-primary border border-primary/30 shadow-md"
                  : "bg-surface/50 text-foreground border border-transparent hover:bg-surface hover:border-border/30"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 -z-10" />
              )}
              
              <Icon className={cn(
                "w-4 h-4 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )} />
              
              <span>{service.title}</span>
              
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}