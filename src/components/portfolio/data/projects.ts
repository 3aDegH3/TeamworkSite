import { Project, ProjectCategory } from "../types";

export const projects: Project[] = [
  {
    id: "digikala",
    title: "پلتفرم فروشگاهی دیجی‌کالا",
    category: "فروشگاهی" as ProjectCategory,
    coverImage: "/images/portfolio/digikala/cover.png",
    previewImage: "/images/portfolio/digikala/preview.png",
    links: { website: "https://example.com/digikala" },
  },
  {
    id: "pars-khodro",
    title: "وب‌سایت شرکتی پارس‌خودرو",
    category: "شرکتی" as ProjectCategory,
    coverImage: "/images/portfolio/pars-khodro/cover.jpg",
    previewImage: "/images/portfolio/pars-khodro/preview.jpg",
    links: { website: "https://example.com/pars-khodro" },
  },
  {
    id: "crm",
    title: "نرم‌افزار مدیریت مشتریان (CRM)",
    category: "SaaS" as ProjectCategory,
    coverImage: "/images/portfolio/crm/cover.jpg",
    previewImage: "/images/portfolio/crm/preview.png",
    links: { website: "https://example.com/crm" },
  },
  {
    id: "marketing-landing",
    title: "لندینگ پیج کمپین بازاریابی",
    category: "لندینگ" as ProjectCategory,
    coverImage: "/images/portfolio/marketing-landing/cover.png",
    previewImage: "/images/portfolio/marketing-landing/preview.png",
    links: { website: "https://example.com/marketing-landing" },
  },
  {
    id: "faradars",
    title: "پلتفرم آموزش آنلاین فرادرس",
    category: "محصولی" as ProjectCategory,
    coverImage: "/images/portfolio/faradars/cover.jpg",
    previewImage: "/images/portfolio/faradars/preview.jpg",
    links: { website: "https://example.com/faradars" },
  },
  {
    id: "startup-analytics",
    title: "داشبورد تحلیلی برای استارت‌آپ",
    category: "SaaS" as ProjectCategory,
    coverImage: "/images/portfolio/startup-analytics/cover.jpg",
    previewImage: "/images/portfolio/startup-analytics/preview.jpg",
    links: { website: "https://example.com/startup-analytics" },
  },
  {
    id: "chain-stores",
    title: "وب‌سایت فروشگاهی زنجیره‌ای",
    category: "فروشگاهی" as ProjectCategory,
    coverImage: "/images/portfolio/chain-stores/preview.png",
    previewImage: "/images/portfolio/chain-stores/preview.png",
    links: { website: "https://example.com/chain-stores" },
  },
  {
    id: "customer-portal",
    title: "پورتال مشتریان شرکت خدماتی",
    category: "شرکتی" as ProjectCategory,
    coverImage: "/images/portfolio/customer-portal/cover.jpg",
    previewImage: "/images/portfolio/customer-portal/preview.png",
    links: { website: "https://example.com/customer-portal" },
  },
];

export const getProjectById = (id: string): Project | undefined =>
  projects.find((project) => project.id === id);

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projects.filter((project) => project.category === category);
