import { Project, ProjectCategory } from "../types";

export const projects: Project[] = [
  {
    id: "digikala",
    title: "پلتفرم فروشگاهی دیجی‌کالا",
    category: "فروشگاهی" as ProjectCategory,
    coverImage: "/images/portfolio/marketing-landing/cover.png",
    previewImage: "/images/portfolio/marketing-landing/preview.png"
  },
  {
    id: "pars-khodro",
    title: "وب‌سایت شرکتی پارس‌خودرو",
    category: "شرکتی" as ProjectCategory,
    coverImage: "/images/portfolio/pars-khodro/cover.jpg",
    previewImage: "/images/portfolio/pars-khodro/preview.jpg"
  },
  {
    id: "crm",
    title: "نرم‌افزار مدیریت مشتریان (CRM)",
    category: "SaaS" as ProjectCategory,
    coverImage: "/images/portfolio/crm/cover.jpg",
    previewImage: "/images/portfolio/crm/preview.png"
  },
  {
    id: "marketing-landing",
    title: "لندینگ پیج کمپین بازاریابی",
    category: "لندینگ" as ProjectCategory,
    coverImage: "/images/portfolio/marketing-landing/cover.jpg",
    previewImage: "/images/portfolio/marketing-landing/preview.jpg"
  },
  {
    id: "faradars",
    title: "پلتفرم آموزش آنلاین فرادرس",
    category: "محصولی" as ProjectCategory,
    coverImage: "/images/portfolio/faradars/cover.jpg",
    previewImage: "/images/portfolio/faradars/preview.jpg"
  },
  {
    id: "startup-analytics",
    title: "داشبورد تحلیلی برای استارت‌آپ",
    category: "SaaS" as ProjectCategory,
    coverImage: "/images/portfolio/startup-analytics/cover.jpg",
    previewImage: "/images/portfolio/startup-analytics/preview.jpg"
  },
  {
    id: "chain-stores",
    title: "وب‌سایت فروشگاهی زنجیره‌ای",
    category: "فروشگاهی" as ProjectCategory,
    coverImage: "/images/portfolio/chain-stores/cover.jpg",
    previewImage: "/images/portfolio/chain-stores/preview.png"
  },
  {
    id: "customer-portal",
    title: "پورتال مشتریان شرکت خدماتی",
    category: "شرکتی" as ProjectCategory,
    coverImage: "/images/portfolio/customer-portal/cover.jpg",
    previewImage: "/images/portfolio/customer-portal/preview.png"
  }
];

// Helper functions for getting projects
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};