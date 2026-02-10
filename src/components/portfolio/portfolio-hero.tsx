'use client';

export default function PortfolioHero() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="rtl text-right max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          نمونه‌کارها
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          مجموعه‌ای از پروژه‌های موفق که در همکاری با مشتریان ارزشمندمان به نتیجه رسانده‌ایم.
        </p>
      </div>
    </div>
  );
}