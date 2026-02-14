"use client";

import * as React from "react";
import type { FaqItem } from "./types";
import { faqs as defaultFaqs } from "./data/services";
import { Card } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";

interface FaqProps {
  faqs?: FaqItem[];
}

export function Faq({ faqs: externalFaqs }: FaqProps) {
  const allFaqs = externalFaqs ?? defaultFaqs;
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-24" dir="rtl">
      {/* Artistic background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)`,
          }}></div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl transform -rotate-6"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={cn(
          "mb-16 transition-all duration-1000",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Creative badge with animation */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 text-primary text-sm font-medium backdrop-blur-sm border border-border/60 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 animate-pulse"></div>
            <HelpCircle className="ml-2 h-4 w-4 relative z-10" />
            <span className="relative z-10">سوالات متداول</span>
            <Sparkles className="mr-2 h-4 w-4 relative z-10 animate-pulse" />
          </div>
          
          {/* Artistic heading with gradient */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative">
            <span className="relative">
              سوالات
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                {' '}پرتکرار
              </span>
              {/* Decorative underline */}
              <div className="absolute -bottom-2 right-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            پاسخ به سوالات رایجی که ممکن است در مورد خدمات ما داشته باشید. هر سوالی دارید؟ ما اینجا هستیم تا کمک کنیم.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {allFaqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            
            // Create unique gradient for each item
            const gradientColors = [
              "from-primary/10 via-primary/5 to-transparent",
              "from-secondary/10 via-secondary/5 to-transparent",
              "from-accent/10 via-accent/5 to-transparent",
              "from-primary/10 via-secondary/5 to-accent/5"
            ];
            const currentGradient = gradientColors[index % gradientColors.length];
            
            return (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 relative",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  { "delay-100": index % 3 === 0, "delay-200": index % 3 === 1, "delay-300": index % 3 === 2 }
                )}
              >
                {/* Decorative element behind card */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
                  isHovered && "opacity-100"
                )}>
                  <div className={cn(
                    "h-full w-full rounded-2xl bg-gradient-to-r",
                    currentGradient
                  )}></div>
                </div>
                
                <Card 
                  className={cn(
                    "overflow-hidden bg-card/90 backdrop-blur-xl border-border/30 transition-all duration-500 relative z-10",
                    isActive && "shadow-2xl border-primary/20",
                    isHovered && "shadow-xl -translate-y-1"
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Creative accent line */}
                  <div className={cn(
                    "h-1 w-full transition-all duration-500",
                    index % 4 === 0 && "bg-gradient-to-r from-primary to-primary/70",
                    index % 4 === 1 && "bg-gradient-to-r from-secondary to-secondary/70",
                    index % 4 === 2 && "bg-gradient-to-r from-accent to-accent/70",
                    index % 4 === 3 && "bg-gradient-to-r from-primary via-secondary to-accent"
                  )}></div>
                  
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between px-6 py-6 text-right transition-all duration-300",
                      isActive ? "bg-gradient-to-r " + currentGradient : ""
                    )}
                    onClick={() => toggleItem(index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-content-${index}`}
                  >
                    <div className="flex items-center space-x-3 space-x-reverse">
                      {/* Creative icon container */}
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                        isActive ? "bg-gradient-to-br " + currentGradient : "bg-surface/50"
                      )}>
                        <MessageCircle className={cn(
                          "w-6 h-6 transition-all duration-300",
                          index % 4 === 0 && "text-primary",
                          index % 4 === 1 && "text-secondary",
                          index % 4 === 2 && "text-accent",
                          index % 4 === 3 && "text-foreground"
                        )} />
                      </div>
                      
                      <span className="font-medium text-foreground text-lg md:text-xl">{faq.q}</span>
                    </div>

                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                      isActive ? "bg-gradient-to-br " + currentGradient : "bg-surface/50"
                    )}>
                      <ChevronDown
                        className={cn(
                          "w-6 h-6 transition-transform duration-300",
                          isActive ? "rotate-180" : "",
                          index % 4 === 0 && "text-primary",
                          index % 4 === 1 && "text-secondary",
                          index % 4 === 2 && "text-accent",
                          index % 4 === 3 && "text-foreground"
                        )}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  <div
                    id={`faq-content-${index}`}
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-in-out",
                      isActive ? "max-h-96" : "max-h-0"
                    )}
                  >
                    <div className="px-6 pb-6 pt-2 text-right">
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{faq.a}</p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Creative CTA section */}
        <div className="mt-20 text-center relative">
          {/* Decorative background for CTA */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-2xl h-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <p className="text-muted-foreground mb-6 text-lg">
              هنوز سوال دارید؟
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-8 py-4 text-base font-medium text-primary-foreground shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Animated sparkle effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 flex items-center">
                <MessageCircle className="ml-2 h-5 w-5" />
                تماس با ما
                <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}