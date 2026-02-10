// src/components/services/types.ts

export type ServiceId = "uiux" | "corporate" | "ecommerce" | "landing" | "performance" | "support";

export interface Service {
  id: ServiceId;
  title: string; // Persian
  short: string; // 1-line Persian summary
  forWho: string; // 1 sentence Persian
  deliverables: string[]; // 4-6 items
  notIncluded: string[]; // 1-2 items
  ctaLabel?: string; // default: "مشاوره درباره این سرویس"
}

export interface OutcomeItem {
  title: string;
  description: string; // short
}

export interface FaqItem {
  q: string; // Persian
  a: string; // Persian
}

// Removed the redundant export line at the bottom
// All types are already exported at their point of declaration