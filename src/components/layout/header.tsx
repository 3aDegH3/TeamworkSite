// src/components/layout/header.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Sparkles, Zap, Shield, Rocket, Home, Users, MessageSquare } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'

const navigation = [
  { name: 'خانه', href: '/', icon: Home },
  { 
    name: 'خدمات', 
    href: '/services',
    icon: Zap,
    children: [
      { name: 'طراحی وب‌سایت', href: '/services/web-design', description: 'وب‌سایت‌های مدرن و واکنش‌گرا' },
      { name: 'توسعه اپلیکیشن', href: '/services/app-development', description: 'اپلیکیشن‌های موبایل و وب' },
      { name: 'مشاوره دیجیتال', href: '/services/digital-consulting', description: 'راهکارهای دیجیتال برای کسب‌وکار شما' },
      { name: 'برندینگ', href: '/services/branding', description: 'هویت بصری برند شما' },
    ]
  },
  { name: 'نمونه کارها', href: '/portfolio', icon: Sparkles },
  { name: 'تیم ما', href: '/team', icon: Users },
  { name: 'درباره ما', href: '/about', icon: Shield },
  { name: 'تماس با ما', href: '/contact', icon: MessageSquare },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdownOpen = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setOpenDropdown(itemName)
  }

  const handleDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
  }

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled 
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-800/20" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  و
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-500 transition-all duration-300">
                وب‌تری
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
              {navigation.map((item) => (
                <div key={item.name} className="relative" onMouseLeave={handleDropdownClose}>
                  {item.children ? (
                    <button
                      className={cn(
                        "flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                        pathname.startsWith(item.href) || openDropdown === item.name
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-primary-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                      )}
                      onMouseEnter={() => handleDropdownOpen(item.name)}
                    >
                      {item.icon && <item.icon className="ml-2 h-4 w-4" />}
                      {item.name}
                      <ChevronDown className={cn(
                        "mr-1 h-4 w-4 transition-transform duration-300",
                        openDropdown === item.name && "rotate-180"
                      )} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                        pathname === item.href
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-primary-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                      )}
                    >
                      {item.icon && <item.icon className="ml-2 h-4 w-4" />}
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Enhanced Dropdown Menu */}
                  {item.children && (
                    <div className={cn(
                      "absolute top-full right-0 mt-2 w-80 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border border-gray-200/30 dark:border-gray-800/30 overflow-hidden transition-all duration-300",
                      openDropdown === item.name 
                        ? "opacity-100 translate-y-0 visible" 
                        : "opacity-0 -translate-y-2 invisible"
                    )}
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current)
                        }
                      }}
                    >
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-colors group"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mr-3">
                                <div className="w-4 h-4 rounded bg-gradient-to-br from-primary-500 to-secondary-500"></div>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                  {child.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {child.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-3 space-x-reverse">
              {/* فقط لینک اضافه شد */}
              <Link href="/auth">
                <Button variant="ghost" size="sm" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  ورود
                </Button>
              </Link>

              <Button variant="gradient" size="sm" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  شروع پروژه
                  <Rocket className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <div className={cn(
        "fixed inset-x-0 top-0 z-40 lg:hidden transition-all duration-500",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className={cn(
          "fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-500 overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                  و
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">وب‌تری</span>
              </div>
              <button
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors font-medium"
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      >
                        <div className="flex items-center">
                          {item.icon && <item.icon className="ml-2 h-5 w-5" />}
                          {item.name}
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.name && "rotate-180"
                        )} />
                      </button>
                      
                      <div className={cn(
                        "pr-4 mt-2 space-y-1 overflow-hidden transition-all duration-300",
                        openDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                            onClick={() => {
                              setOpenDropdown(null)
                              setIsMenuOpen(false)
                            }}
                          >
                            <div className="font-medium">{child.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center p-3 rounded-xl font-medium transition-colors",
                        pathname === item.href
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-primary-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon && <item.icon className="ml-2 h-5 w-5" />}
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-8 space-y-3">
              {/* فقط لینک اضافه شد */}
              <Link href="/auth">
                <Button variant="outline" fullWidth>
                  ورود
                </Button>
              </Link>

              <Button variant="gradient" fullWidth>
                شروع پروژه
              </Button>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <div className="flex items-center mb-2">
                <Sparkles className="h-5 w-5 text-primary-600 dark:text-primary-400 ml-2" />
                <div className="font-medium text-gray-900 dark:text-white">ویژگی برتر</div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                با وب‌تری، پروژه بعدی خود را به سطح جدیدی از کیفیت و نوآوری برسانید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
