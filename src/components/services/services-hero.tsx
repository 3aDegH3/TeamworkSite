// src/components/services/services-hero.tsx
import { Card } from '@//src/components/ui/card';

export function ServicesHero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <Card className="p-8 md:p-12 text-right bg-card border-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            خدمات وب‌تری
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            طراحی و توسعه وب‌سایت‌هایی سریع، قابل توسعه و متناسب با نیاز کسب‌وکار.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 text-sm md:text-base"
            >
              مشاوره و برآورد
            </a>
            
            <a 
              href="/portfolio"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2 text-sm md:text-base"
            >
              مشاهده نمونه‌کارها
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}