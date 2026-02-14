'use client';

import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  Clock, 
  Target,
  CheckCircle,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  Globe,
  MessageSquare,
  Star,
  ArrowRight
} from 'lucide-react';

// Badge component replacement
const Badge = ({ 
  children, 
  variant = "default", 
  className = "" 
}: { 
  children: React.ReactNode; 
  variant?: "default" | "secondary" | "outline";
  className?: string;
}) => {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background text-foreground"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Extended Project interface
interface ExtendedProject {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  previewImage?: string;
  links?: {
    website?: string;
    github?: string;
    caseStudy?: string;
    demo?: string;
  };
  technologies?: string[];
  services?: string[];
  highlights?: string[];
}

interface DrawerMetaProps {
  project: ExtendedProject;
  onClose: () => void;
}

export default function DrawerMeta({ project, onClose }: DrawerMetaProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('technologies');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleViewWebsite = () => {
    if (project.links?.website) {
      window.open(project.links?.website, '_blank');
    }
  };

  const handleContact = () => {
    // In a real app, this would navigate to a contact form or open a modal
    window.location.href = '/contact?project=' + project.id;
  };

  // Sample team members data (in a real app, this would come from the project data)
  const teamMembers = [
    { name: 'علی رضایی', role: 'توسعه‌دهنده ارشد', avatar: '/images/team/ali-rezaei.jpg' },
    { name: 'مریم احمدی', role: 'طراح UI/UX', avatar: '/images/team/maryam-ahmadi.jpg' },
    { name: 'امیر حسینی', role: 'مدیر پروژه', avatar: '/images/team/amir-hosseini.jpg' },
  ];

  // Sample timeline data (in a real app, this would come from the project data)
  const timeline = [
    { phase: 'تحلیل و طراحی', date: 'فروردین ۱۴۰۲', status: 'completed' },
    { phase: 'توسعه اولیه', date: 'اردیبهشت ۱۴۰۲', status: 'completed' },
    { phase: 'تست و بازبینی', date: 'خرداد ۱۴۰۲', status: 'completed' },
    { phase: 'راه‌اندازی', date: 'تیر ۱۴۰۲', status: 'completed' },
  ];

  // Sample metrics data (in a real app, this would come from the project data)
  const metrics = [
    { label: 'افزایش فروش', value: '35%', icon: TrendingUp },
    { label: 'رضایت مشتری', value: '95%', icon: Star },
    { label: 'کاهش زمان پاسخ', value: '60%', icon: Clock },
    { label: 'کاربران فعال', value: '10K+', icon: Users },
  ];

  return (
    <div className="rtl space-y-6">
      {/* Tabs Navigation */}
      <div className="flex border-b border-border">
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'technologies'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('technologies')}
        >
          تکنولوژی‌ها
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'services'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('services')}
        >
          خدمات
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'results'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('results')}
        >
          نتایج
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'team'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('team')}
        >
          تیم
        </button>
      </div>

      {/* Tab Content */}
      <div className="pt-4">
        {/* Technologies Tab */}
        {activeTab === 'technologies' && (
          <div className="space-y-4 animate-in fade-in-50 duration-300">
            <h3 className="text-lg font-semibold text-foreground">تکنولوژی‌ها</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech: string, index: number) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-4 animate-in fade-in-50 duration-300">
            <h3 className="text-lg font-semibold text-foreground">خدمات انجام‌شده</h3>
            <ul className="space-y-3">
              {project.services?.map((service: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary ml-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="space-y-4 animate-in fade-in-50 duration-300">
            <h3 className="text-lg font-semibold text-foreground">نتایج و دستاوردها</h3>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-4 bg-surface/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                      <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    </div>
                    <metric.icon className="h-8 w-8 text-primary/30" />
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Highlights List */}
            <div>
              <h4 className="font-medium mb-2">نکات برجسته</h4>
              <ul className="space-y-2">
                {project.highlights?.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Target className="h-4 w-4 text-primary ml-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-4 animate-in fade-in-50 duration-300">
            <h3 className="text-lg font-semibold text-foreground">تیم پروژه</h3>
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-2">
              <Users className="h-4 w-4 ml-2" />
              مشاهده تیم کامل
            </Button>
          </div>
        )}
      </div>

      {/* Timeline Section (Collapsible) */}
      <div className="border-t border-border pt-4">
        <button
          className="flex items-center justify-between w-full text-right"
          onClick={() => toggleSection('timeline')}
        >
          <h3 className="text-lg font-semibold text-foreground">زمان‌بندی پروژه</h3>
          {expandedSection === 'timeline' ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
        
        {expandedSection === 'timeline' && (
          <div className="mt-4 space-y-3 animate-in slide-in-from-top-5 duration-300">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'completed' ? 'bg-green-500' : 'bg-primary'
                }`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.phase}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <div className="w-full bg-surface rounded-full h-1.5 mt-1">
                    <div 
                      className={`h-1.5 rounded-full ${
                        item.status === 'completed' ? 'bg-green-500' : 'bg-primary'
                      }`}
                      style={{ width: item.status === 'completed' ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Testimonials Section (Collapsible) */}
      <div className="border-t border-border pt-4">
        <button
          className="flex items-center justify-between w-full text-right"
          onClick={() => toggleSection('testimonials')}
        >
          <h3 className="text-lg font-semibold text-foreground">نظرات مشتریان</h3>
          {expandedSection === 'testimonials' ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
        
        {expandedSection === 'testimonials' && (
          <div className="mt-4 space-y-4 animate-in slide-in-from-top-5 duration-300">
            <Card className="p-4 bg-surface/50">
              <div className="flex items-start gap-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm mt-2">
                "تجربه کار با این تیم فوق‌العاده بود. آنها به تمام نیازهای ما توجه کردند و محصولی تحویل دادند که فراتر از انتظارات ما بود."
              </p>
              <div className="flex items-center mt-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">م</span>
                </div>
                <div className="mr-2">
                  <p className="text-sm font-medium">مدیریت شرکت</p>
                  <p className="text-xs text-muted-foreground">مشتری</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <div className="flex items-center mb-4">
          <Award className="h-6 w-6 text-primary ml-2" />
          <h3 className="text-lg font-semibold">علاقه‌مند به پروژه مشابه؟</h3>
        </div>
        <p className="text-muted-foreground mb-6">
          ما می‌توانیم برای کسب‌وکار شما نیز راه‌حل‌های مشابهی طراحی و پیاده‌سازی کنیم.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button 
            className="w-full"
            onClick={handleContact}
          >
            <MessageSquare className="ml-2 h-4 w-4" />
            درخواست مشاوره
          </Button>
          {project.links?.website && (
            <Button
              variant="outline"
              className="w-full"
              onClick={handleViewWebsite}
            >
              <Globe className="ml-2 h-4 w-4" />
              مشاهده وب‌سایت
              <ExternalLink className="mr-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}