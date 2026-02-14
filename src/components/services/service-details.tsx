"use client";

import * as React from "react";
import type { Service } from "./types";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import { 
  ArrowRight, 
  CheckCircle, 
  XCircle,
  Users,
  Package
} from "lucide-react";

interface ServiceDetailsProps {
  service: Service;
}

export function ServiceDetails({ service }: ServiceDetailsProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={cn(
      "transition-all duration-700 ease-in-out",
      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    )}>
      {/* Header */}
      <div className="mb-8 space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-sm font-medium">
          {service.id}
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {service.title}
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {service.short}
        </p>
      </div>

      {/* Target Audience */}
      <Card className="p-6 mb-6 bg-gradient-to-br from-surface/50 to-surface/30 border-border/30">
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">برای چه کسی مناسب است؟</h3>
            <p className="text-muted-foreground">{service.forWho}</p>
          </div>
        </div>
      </Card>

      {/* Deliverables */}
      <Card className="p-6 mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-center space-x-2 space-x-reverse mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Package className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">چه چیزهایی تحویل می‌گیرید</h3>
        </div>
        
        <div className="space-y-3">
          {service.deliverables.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 space-x-reverse">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
              </div>
              <p className="text-sm text-foreground/90">{item}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Not Included */}
      <Card className="p-6 mb-8 bg-gradient-to-br from-surface/50 to-surface/30 border-border/30">
        <div className="flex items-center space-x-2 space-x-reverse mb-4">
          <div className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center">
            <XCircle className="w-5 h-5 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">شامل نمی‌شود</h3>
        </div>
        
        <div className="space-y-3">
          {service.notIncluded.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 space-x-reverse">
              <div className="w-6 h-6 rounded-full bg-muted/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <XCircle className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground/70">{item}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button 
          variant="gradient" 
          size="lg" 
          className="group relative overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          asChild
        >
          <a href={`/contact?service=${service.id}`} className="flex items-center">
            {service.ctaLabel || "مشاوره درباره این سرویس"}
            <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="border-2 hover:bg-surface transition-all duration-300"
          asChild
        >
          <a href="/portfolio">
            مشاهده نمونه‌کارها
          </a>
        </Button>
      </div>
    </div>
  );
}