// src/components/portfolio/data/projects.ts
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'فروشگاه مینیمال (E-commerce)',
    summary:
      'طراحی و توسعه یک فروشگاه مینیمال با تمرکز روی تجربه خرید سریع، UI تمیز و ساختار مقیاس‌پذیر.',
    category: 'فروشگاه اینترنتی',
    stack: ['Next.js', 'Tailwind', 'Stripe', 'Headless CMS'],
    cover: '/images/portfolio/shop/cover.jpg',
    screens: [
      { label: 'خانه', src: '/images/portfolio/shop/home.jpg' },
      { label: 'محصول', src: '/images/portfolio/shop/product.jpg' },
      { label: 'سبد خرید', src: '/images/portfolio/shop/cart.jpg' },
    ],
    liveUrl: 'https://example.com',
    year: '2025',
    role: 'UI/UX + Front-End',
    duration: '۳ هفته',
    highlights: ['سرعت لود بالا', 'فلو خرید ساده', 'طراحی واکنش‌گرا'],
  },

  {
    id: 'p2',
    title: 'داشبورد SaaS (Analytics)',
    summary:
      'داشبورد مدیریتی برای گزارش‌ها و تحلیل داده با تمرکز روی خوانایی، سلسله‌مراتب بصری و تعاملات نرم.',
    category: 'SaaS / داشبورد',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Charts'],
    cover: '/images/portfolio/saas/cover.jpg',
    screens: [
      { label: 'نمای کلی', src: '/images/portfolio/saas/overview.jpg' },
      { label: 'گزارش‌ها', src: '/images/portfolio/saas/reports.jpg' },
      { label: 'تنظیمات', src: '/images/portfolio/saas/settings.jpg' },
    ],
    liveUrl: 'https://example.com',
    year: '2025',
    role: 'UI System + Front-End',
    duration: '۴ هفته',
    highlights: ['کامپوننت‌محور', 'فیلترهای سریع', 'حس SaaS مدرن'],
  },

  {
    id: 'p3',
    title: 'وب‌سایت شرکتی (Brand Website)',
    summary:
      'وب‌سایت شرکتی با روایت واضح، ساختار دقیق و تصویرسازی حرفه‌ای برای اعتمادسازی و تبدیل بهتر.',
    category: 'سایت شرکتی',
    stack: ['Next.js', 'Tailwind', 'SEO', 'Motion'],
    cover: '/images/portfolio/corporate/cover.jpg',
    screens: [
      { label: 'خانه', src: '/images/portfolio/corporate/home.jpg' },
      { label: 'درباره ما', src: '/images/portfolio/corporate/about.jpg' },
      { label: 'تماس', src: '/images/portfolio/corporate/contact.jpg' },
    ],
    liveUrl: 'https://example.com',
    year: '2024',
    role: 'Design + Front-End',
    duration: '۲ هفته',
    highlights: ['مینیمال و حرفه‌ای', 'سئو پایه قوی', 'ساختار تمیز'],
  },
]
