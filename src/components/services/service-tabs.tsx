// src/components/services/service-tabs.tsx
import { Service, ServiceId } from './types';

interface ServiceTabsProps {
  services: Service[];
  value: ServiceId;
  onChange: (id: ServiceId) => void;
}

export function ServiceTabs({ services, value, onChange }: ServiceTabsProps) {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex gap-3 md:gap-4 min-w-max md:min-w-0 md:flex-wrap">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onChange(service.id)}
            aria-pressed={service.id === value}
            className={`
              px-4 py-2 rounded-full text-sm md:text-base transition-all duration-200 whitespace-nowrap
              ${service.id === value 
                ? 'bg-primary/10 text-primary border border-primary/30' 
                : 'bg-surface text-foreground border border-transparent hover:bg-surface/80'
              }
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
            `}
          >
            {service.title}
          </button>
        ))}
      </div>
    </div>
  );
}