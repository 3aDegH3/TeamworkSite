// src/components/layout/footer.tsx
'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils' // Add this import
import { useState, useEffect } from 'react'

// Minimal essential links only
const essentialLinks = [
  { name: 'خدمات', href: '/services' },
  { name: 'نمونه کارها', href: '/portfolio' },
  { name: 'درباره ما', href: '/about' },
  { name: 'تماس', href: '/contact' },
]

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
]

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const footer = document.getElementById('footer')
    if (footer) observer.observe(footer)
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (footer) observer.unobserve(footer)
    }
  }, [])

  return (
    <footer id="footer" className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Creative top divider with curve */}
      <div className="relative h-20 bg-white dark:bg-gray-800">
        <svg
          className="absolute bottom-0 left-0 w-full h-20"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="rgb(249 250 251)"
            className="dark:fill-gray-900"
          />
        </svg>
      </div>
      
      {/* Layered background with subtle gradient and abstract shapes */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10"></div>
        
        {/* Abstract SVG shapes for artistic touch */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#2a9d8f"
              d="M44.7,-76.4C58.8,-69.1,71.9,-60.3,79.1,-47.1C86.3,-33.9,87.6,-16.3,86.3,0.2C85,16.7,81.1,33.1,72.5,46.2C63.9,59.3,50.6,69.1,36.5,73.6C22.4,78.1,7.5,77.3,-5.7,73.1C-18.9,68.9,-30.4,61.3,-40.1,51.2C-49.8,41.1,-57.7,28.5,-61.5,14.6C-65.3,0.7,-65,-14.5,-59.1,-27.1C-53.2,-39.7,-41.7,-49.7,-30.6,-58.9C-19.5,-68.1,-8.8,-76.5,3.9,-79.1C16.6,-81.7,30.6,-83.7,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#f4a261"
              d="M44.7,-76.4C58.8,-69.1,71.9,-60.3,79.1,-47.1C86.3,-33.9,87.6,-16.3,86.3,0.2C85,16.7,81.1,33.1,72.5,46.2C63.9,59.3,50.6,69.1,36.5,73.6C22.4,78.1,7.5,77.3,-5.7,73.1C-18.9,68.9,-30.4,61.3,-40.1,51.2C-49.8,41.1,-57.7,28.5,-61.5,14.6C-65.3,0.7,-65,-14.5,-59.1,-27.1C-53.2,-39.7,-41.7,-49.7,-30.6,-58.9C-19.5,-68.1,-8.8,-76.5,3.9,-79.1C16.6,-81.7,30.6,-83.7,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        
        <div className="relative z-10 py-16 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Asymmetrical layout with brand focus */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Brand Section - 7 columns on large screens */}
              <div className="lg:col-span-7 space-y-8">
                <div className={cn(
                  "space-y-6 transition-all duration-1000 transform",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}>
                  {/* Large brand name with gradient effect */}
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="relative">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                        و
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 blur-xl opacity-50"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      وب‌تری
                    </h2>
                  </div>
                  
                  {/* Short tagline */}
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                    طراحی دیجیتال با تمرکز بر کیفیت
                  </p>
                  
                  {/* Minimal icon-based navigation */}
                  <div className="flex flex-wrap gap-6">
                    {essentialLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {link.name}
                        <ArrowUpRight className="mr-1 h-4 w-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact & Social Section - 5 columns on large screens */}
              <div className={cn(
                "lg:col-span-5 space-y-8 transition-all duration-1000 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )} style={{ transitionDelay: "200ms" }}>
                {/* Minimal contact info */}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail className="h-5 w-5 ml-3 text-primary-600" />
                    <span>info@webtree.ir</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="h-5 w-5 ml-3 text-primary-600" />
                    <span>۰۲۱-۸۹۰۱۲۳۴۵</span>
                  </div>
                </div>
                
                {/* Styled social icons */}
                <div className="flex space-x-3 space-x-reverse">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="group relative"
                    >
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                        <social.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-primary-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Bottom copyright line - small and quiet */}
            <div className="pt-12 mt-12 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} وب‌تری. تمامی حقوق محفوظ است.
                </p>
                <div className="flex items-center space-x-6 space-x-reverse mt-4 md:mt-0">
                  <Link href="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    شرایط استفاده
                  </Link>
                  <Link href="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    حریم خصوصی
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}