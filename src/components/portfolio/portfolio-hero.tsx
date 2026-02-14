"use client";

import { Briefcase } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

export default function PortfolioHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(37, 99, 235, 0.03) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(37, 99, 235, 0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* TEXT (Right on desktop) */}
          <div
            className={cn(
              "order-2 space-y-6 text-right transition-all duration-1000 delay-300 lg:order-1",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-border/60 bg-gradient-to-r from-primary/15 to-secondary/15 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Briefcase className="ml-2 h-4 w-4 animate-pulse" />
              نمونه‌کارهای ما
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              پروژه‌های
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                موفق ما
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              مجموعه‌ای از پروژه‌های برجسته که در همکاری با مشتریان ارزشمندمان به نتیجه رسانده‌ایم. هر پروژه نشان‌دهنده تعهد ما به کیفیت و نوآوری است.
            </p>
          </div>

          {/* IMAGE (Left on desktop) */}
          <div
            className={cn(
              "order-1 relative transition-all duration-1000 lg:order-2",
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}
          >
            <div className="group relative aspect-square overflow-hidden rounded-3xl border border-border/40 bg-card shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/10 to-secondary/10" />

              <Image
                src="https://sfile.chatglm.cn/images-ppt/a506bb7928ce.jpg"
                alt="نمونه‌کارهای وب‌تری"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-t from-foreground/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="text-primary-foreground text-right">
                  <h3 className="mb-2 text-2xl font-bold">پروژه‌های برجسته</h3>
                  <p className="text-primary-foreground/90">
                    با همکاری مشتریان ارزشمندمان
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -bottom-8 -right-8 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-secondary/40 to-secondary opacity-20 blur-2xl" />
            <div
              className="absolute -left-8 -top-8 h-40 w-40 animate-pulse rounded-full bg-gradient-to-br from-primary/40 to-primary opacity-20 blur-2xl"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="h-12 w-full text-surface md:h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
