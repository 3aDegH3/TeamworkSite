// src/components/about/team-section.tsx
'use client'

import Image from 'next/image'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'علی رضایی',
      role: 'مدیرعامل و بنیان‌گذار',
      image: '/images/team/ali-rezaei.jpg',
      bio: 'با بیش از ۱۰ سال تجربه در صنعت دیجیتال، علی استراتژی‌های خلاقانه را با فناوری‌های نوین ترکیب می‌کند.',
    },
    {
      name: 'سارا محمدی',
      role: 'مدیر طراحی',
      image: '/images/team/sara-mohammadi.jpg',
      bio: 'سارا با تمرکز بر تجربه کاربری، رابط‌هایی خلق می‌کند که هم زیبا و هم کاربردی هستند.',
    },
    {
      name: 'امیر حسینی',
      role: 'تیم‌لید فنی',
      image: '/images/team/amir-hosseini.jpg',
      bio: 'امیر با تخصص در معماری نرم‌افزار، زیرساخت‌های مقیاس‌پذیر و پایدار برای پروژه‌ها ایجاد می‌کند.',
    },
    {
      name: 'مریم احمدی',
      role: 'مدیر پروژه',
      image: '/images/team/maryam-ahmadi.jpg',
      bio: 'مریم با رویکردی منظم و دقیق، تضمین می‌کند که پروژه‌ها به صورت روان و به موقع پیش بروند.',
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            تیم ما
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            تیم ما از متخصصان باانگیزه و با تجربه تشکیل شده است که هر کدام در حوزه تخصص خود بهترین هستند. با هم،
            ما راه‌حل‌های دیجیتال خلق می‌کنیم که تفاوت ایجاد می‌کنند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-900/50 p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* hover chip */}
                <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/20">
                    {member.role}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>

              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                {member.role}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
