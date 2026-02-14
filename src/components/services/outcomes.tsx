"use client";

import * as React from "react";
import { outcomes } from "./data/services";
import { Card } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import { 
  CheckCircle, 
  Zap, 
  Target, 
  Shield, 
  Award,
  TrendingUp,
  Rocket,
  Lightbulb
} from "lucide-react";

// Icon mapping for outcomes
const outcomeIcons = [
  CheckCircle, Zap, Target, Shield, Award, TrendingUp, Rocket, Lightbulb
];

export function Outcomes() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-20" dir="rtl">
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
          "mb-12 transition-all duration-1000",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 text-primary text-sm font-medium backdrop-blur-sm border border-border/60 mb-6">
            <Award className="ml-2 h-4 w-4" />
            نتایج تضمین شده
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            آنچه
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {' '}دریافت می‌کنید
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            با خدمات ما، کسب‌وکار خود را به سطح جدیدی از موفقیت برسانید و از مزایای زیر بهره‌مند شوید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = outcomeIcons[index % outcomeIcons.length];
            const gradientClass = [
              "from-primary/10 to-primary/5 border-primary/20",
              "from-secondary/10 to-secondary/5 border-secondary/20",
              "from-accent/10 to-accent/5 border-accent/20"
            ][index % 3];
            
            return (
              <div
                key={index}
                className={cn(
                  "group transition-all duration-700",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  { "delay-100": index % 3 === 0, "delay-200": index % 3 === 1, "delay-300": index % 3 === 2 }
                )}
              >
                <Card className={cn(
                  "h-full p-6 bg-card/80 backdrop-blur-xl border-border/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative",
                  "hover:border-border/50"
                )}>
                  {/* Gradient accent at the top */}
                  <div className={cn(
                    "h-1 w-full bg-gradient-to-r",
                    index % 3 === 0 && "from-primary to-primary/70",
                    index % 3 === 1 && "from-secondary to-secondary/70",
                    index % 3 === 2 && "from-accent to-accent/70"
                  )}></div>
                  
                  <div className="flex items-start space-x-3 space-x-reverse mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                      gradientClass
                    )}>
                      <Icon className={cn(
                        "w-6 h-6",
                        index % 3 === 0 && "text-primary",
                        index % 3 === 1 && "text-secondary",
                        index % 3 === 2 && "text-accent"
                      )} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                        {outcome.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className={cn(
                    "absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20",
                    index % 3 === 0 && "bg-gradient-to-br from-primary to-primary/50",
                    index % 3 === 1 && "bg-gradient-to-br from-secondary to-secondary/50",
                    index % 3 === 2 && "bg-gradient-to-br from-accent to-accent/50"
                  )}></div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}