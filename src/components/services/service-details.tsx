// src/components/services/service-details.tsx
import { Service } from './types';
import { Button } from '@/src/components/ui/button';

interface ServiceDetailsProps {
  service: Service;
}

export function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <div className="transition-all duration-300 ease-in-out opacity-100 translate-y-0">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
          {service.title}
        </h2>
        <p className="text-lg text-muted-foreground">
          {service.short}
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">برای چه کسی مناسب است؟</h3>
          <p className="text-muted-foreground">{service.forWho}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-foreground">چه چیزهایی تحویل می‌گیرید</h3>
          <ul className="space-y-2">
            {service.deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-foreground">شامل نمی‌شود</h3>
          <ul className="space-y-2">
            {service.notIncluded.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground/70">
                <span className="text-muted-foreground mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a 
        href={`/contact?service=${service.id}`}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 text-sm md:text-base"
      >
        {service.ctaLabel || "مشاوره درباره این سرویس"}
      </a>
    </div>
  );
}