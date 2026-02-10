import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'پلتفرم فروشگاهی دیجی‌کالا',
    summary: 'طراحی و توسعه پلتفرم فروشگاهی جامع با قابلیت‌های مدیریت محصولات، پرداخت آنلاین و تحلیل داده‌ها.',
    category: 'فروشگاهی',
    coverImage: '/images/hero-team.jpg',
    previewImage: '/images/quality-process.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    services: ['طراحی UI/UX', 'توسعه وب', 'یکپارچه‌سازی پرداخت'],
    highlights: [
      'افزایش 35٪ نرخ تبدیل کاربران',
      'بهینه‌سازی سرعت بارگذاری صفحات',
      'طراحی واکنش‌گرا برای تمام دستگاه‌ها'
    ],
    links: {
      website: 'https://example.com/digikala'
    }
  },
  {
    id: '2',
    title: 'وب‌سایت شرکتی پارس‌خودرو',
    summary: 'طراحی وب‌سایت رسمی شرکت پارس‌خودرو با معرفی محصولات، نمایندگی‌ها و خدمات پس از فروش.',
    category: 'شرکتی',
    coverImage: '/images/quality-process.jpg',
    previewImage: '/images/hero-team.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    services: ['طراحی وب‌سایت', 'توسعه فرانت‌اند', 'بهینه‌سازی سئو'],
    highlights: [
      'بهبود 50٪ رتبه سئو در نتایج جستجو',
      'طراحی مدرن و حرفه‌ای مطابق با هویت برند',
      'سیستم مدیریت محتوا برای به‌روزرسانی آسان'
    ],
    links: {
      website: 'https://example.com/parskhodro'
    }
  },
  {
    id: '3',
    title: 'نرم‌افزار مدیریت مشتریان (CRM)',
    summary: 'توسعه پلتفرم مدیریت ارتباط با مشتریان با قابلیت‌های پیگیری فروش، گزارش‌گیری و تحلیل داده.',
    category: 'SaaS',
    coverImage: '/images/hero-team.jpg',
    previewImage: '/images/quality-process.jpg',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
    services: ['توسعه اپلیکیشن', 'معماری نرم‌افزار', 'تحلیل داده'],
    highlights: [
      'کاهش 25٪ زمان پاسخ به مشتریان',
      'داشبورد تحلیلی برای تصمیم‌گیری بهتر',
      'یکپارچه‌سازی با سیستم‌های موجود'
    ],
    links: {}
  },
  {
    id: '4',
    title: 'لندینگ پیج کمپین بازاریابی',
    summary: 'طراحی لندینگ پیج جذاب برای کمپین بازاریابی محصول جدید با تمرکز بر نرخ تبدیل بالا.',
    category: 'لندینگ',
    coverImage: '/images/quality-process.jpg',
    previewImage: '/images/hero-team.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    services: ['طراحی لندینگ', 'بهینه‌سازی نرخ تبدیل', 'انیمیشن‌های تعاملی'],
    highlights: [
      'نرخ تبدیل 12٪ بالاتر از میانگین صنعت',
      'طراحی کاملاً واکنش‌گرا',
      'بارگذاری سریع با بهینه‌سازی تصاویر'
    ],
    links: {
      website: 'https://example.com/marketing-campaign'
    }
  },
  {
    id: '5',
    title: 'پلتفرم آموزش آنلاین فرادرس',
    summary: 'توسعه پلتفرم آموزش آنلاین با قابلیت‌های ویدیو، آزمون، گواهی و مدیریت دوره‌ها.',
    category: 'محصولی',
    coverImage: '/images/hero-team.jpg',
    previewImage: '/images/quality-process.jpg',
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
    services: ['توسعه پلتفرم', 'یکپارچه‌سازی پرداخت', 'هاستینگ ابری'],
    highlights: [
      'پشتیبانی از بیش از 10,000 کاربر همزمان',
      'سیستم ارزیابی و گواهی‌دهی خودکار',
      'تحلیل پیشرفت یادگیری دانشجویان'
    ],
    links: {
      website: 'https://example.com/faradars'
    }
  },
  {
    id: '6',
    title: 'داشبورد تحلیلی برای استارت‌آپ',
    summary: 'طراحی و توسعه داشبورد تحلیلی برای نمایش داده‌های کلان و ارائه گزارش‌های مدیریتی.',
    category: 'SaaS',
    coverImage: '/images/quality-process.jpg',
    previewImage: '/images/hero-team.jpg',
    technologies: ['Angular', 'Python', 'PostgreSQL', 'Chart.js'],
    services: ['تحلیل داده', 'توسعه داشبورد', 'مشاوره فنی'],
    highlights: [
      'نمایش داده‌های زنده در زمان واقعی',
      'قابلیت سفارشی‌سازی گزارش‌ها',
      'رابط کاربری ساده برای کاربران غیرفنی'
    ],
    links: {}
  },
  {
    id: '7',
    title: 'وب‌سایت فروشگاهی زنجیره‌ای',
    summary: 'طراحی وب‌سایت فروشگاهی برای زنجیره‌های فروشگاهی با قابلیت‌های جستجوی پیشرفته و مقایسه محصولات.',
    category: 'فروشگاهی',
    coverImage: '/images/hero-team.jpg',
    previewImage: '/images/quality-process.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Elasticsearch'],
    services: ['توسعه وب', 'بهینه‌سازی جستجو', 'یکپارچه‌سازی انبار'],
    highlights: [
      'جستجوی سریع در میان هزاران محصول',
      'سیستم پیشنهاد محصولات مشابه',
      'پشتیبانی از چندین زبان'
    ],
    links: {
      website: 'https://example.com/chain-stores'
    }
  },
  {
    id: '8',
    title: 'پورتال مشتریان شرکت خدماتی',
    summary: 'توسعه پورتال مشتریان برای ارائه خدمات، پیگیری درخواست‌ها و ارتباط با تیم پشتیبانی.',
    category: 'شرکتی',
    coverImage: '/images/quality-process.jpg',
    previewImage: '/images/hero-team.jpg',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io'],
    services: ['توسعه پورتال', 'یکپارچه‌سازی سیستم‌ها', 'بهبود تجربه کاربری'],
    highlights: [
      'کاهش 40٪ درخواست‌های تلفنی به پشتیبانی',
      'پیگیری لحظه‌ای وضعیت درخواست‌ها',
      'سیستم اطلاع‌رسانی خودکار'
    ],
    links: {}
  }
];