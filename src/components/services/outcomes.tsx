// src/components/services/outcomes.tsx
import { Card } from '@/src/components/ui/card';
import { outcomes } from './data/services';

export function Outcomes() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-right text-foreground">
        آنچه دریافت می‌کنید
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((outcome, index) => (
          <Card key={index} className="p-6 bg-card border-border hover:shadow-sm transition-shadow duration-200">
            <h3 className="text-lg font-semibold mb-3 text-foreground text-right">
              {outcome.title}
            </h3>
            <p className="text-muted-foreground text-right">
              {outcome.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}