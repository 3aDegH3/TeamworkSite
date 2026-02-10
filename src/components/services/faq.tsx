"use client";

import * as React from "react";
import type { FaqItem } from "./types";
import { faqs as defaultFaqs } from "./data/services";
import { Card } from "@/src/components/ui/card";

interface FaqProps {
  faqs?: FaqItem[];
}

export function Faq({ faqs: externalFaqs }: FaqProps) {
  const allFaqs = externalFaqs ?? defaultFaqs;
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16" dir="rtl">
      <h2 className="mb-8 text-right text-2xl font-bold text-foreground md:text-3xl">
        سوالات پرتکرار
      </h2>

      <div className="space-y-4">
        {allFaqs.map((faq, index) => (
          <Card key={index} className="overflow-hidden border-border bg-card">
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-4 text-right transition-colors duration-200 hover:bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset"
              onClick={() => toggleItem(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="font-medium text-foreground">{faq.q}</span>

              <span
                className={`text-primary transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <div
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-4 text-right">
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
