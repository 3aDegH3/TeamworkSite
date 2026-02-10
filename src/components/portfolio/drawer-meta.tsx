'use client';

import { Project } from './types';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';

interface DrawerMetaProps {
  project: Project;
  onClose: () => void;
}

export default function DrawerMeta({ project, onClose }: DrawerMetaProps) {
  const handleViewWebsite = () => {
    if (project.links?.website) {
      window.open(project.links?.website, '_blank');
    }
  };

  return (
    <div className="rtl space-y-6">
      {/* Technologies Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-foreground">تکنولوژی‌ها</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-foreground">خدمات انجام‌شده</h3>
        <ul className="space-y-2">
          {project.services.map((service, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary ml-2">•</span>
              <span className="text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Results/Features Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-foreground">نتیجه / ویژگی‌ها</h3>
        <ul className="space-y-2">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary ml-2">•</span>
              <span className="text-sm">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <Card className="p-5 bg-surface">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={handleViewWebsite}
            disabled={!project.links?.website}
            className="w-full sm:w-auto"
          >
            مشاهده سایت
          </Button>
          <Button onClick={onClose} className="w-full sm:w-auto">
            بستن
          </Button>
        </div>
      </Card>
    </div>
  );
}