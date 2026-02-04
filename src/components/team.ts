export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  skills: string[]
  avatarFallback: string
  socials?: {
    linkedin?: string
    twitter?: string
    website?: string
  }
}

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'علی رضایی',
    role: 'Front-end Engineer',
    bio: 'تمرکز روی رابط کاربری سریع، دسترس‌پذیر و مقیاس‌پذیر با Next.js و Design System.',
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'UX'],
    avatarFallback: 'AR',
    socials: { linkedin: '#', website: '#' }
  },
  {
    id: '2',
    name: 'نگار احمدی',
    role: 'UI/UX Designer',
    bio: 'طراحی مینیمال با تایپوگرافی قوی و سیستم‌محور برای تجربه کاربری روان و قابل اعتماد.',
    skills: ['UI', 'UX', 'Figma', 'Design System'],
    avatarFallback: 'NA',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: '3',
    name: 'محمد کریمی',
    role: 'Full-stack Developer',
    bio: 'معماری تمیز، APIهای پایدار و توسعه سریع با تمرکز روی کیفیت و نگهداشت.',
    skills: ['Node.js', 'DB', 'API', 'Performance'],
    avatarFallback: 'MK',
    socials: { linkedin: '#', website: '#' }
  },
  {
    id: '4',
    name: 'سارا حسینی',
    role: 'Growth & SEO',
    bio: 'بهینه‌سازی سئو، تحلیل داده و بهبود نرخ تبدیل برای رشد قابل اندازه‌گیری.',
    skills: ['SEO', 'CRO', 'Analytics', 'Content'],
    avatarFallback: 'SH',
    socials: { linkedin: '#', twitter: '#' }
  }
]
