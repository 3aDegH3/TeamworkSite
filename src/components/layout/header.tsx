'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sparkles, Zap, Shield, Home, MessageSquare, LogIn, Rocket } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'

const navigation = [
  { name: 'خانه', href: '/', icon: Home },
  { name: 'خدمات', href: '/services', icon: Zap },
  { name: 'نمونه کارها', href: '/portfolio', icon: Sparkles },
  { name: 'درباره ما', href: '/about', icon: Shield },
  { name: 'تماس با ما', href: '/contact', icon: MessageSquare },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500',
          isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/30' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  و
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <span className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                وب‌تری
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-4 py-2 rounded-xl text-base font-medium transition-all duration-300',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary hover:bg-surface/50'
                  )}
                >
                  {item.icon && <item.icon className="ml-2 h-5 w-5" />}
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3 space-x-reverse">
              <Link href="/auth">
                <Button
                  variant="outline"
                  size="sm"
                  className="relative overflow-hidden group border-2 border-primary/30 bg-primary/10 text-primary hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <LogIn className="ml-2 h-5 w-5" />
                    ورود
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="gradient" size="sm" className="group relative overflow-hidden text-base">
                  <span className="relative z-10 flex items-center">
                    شروع پروژه
                    <Rocket className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-xl hover:bg-surface/50 transition-colors"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="باز کردن منو"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-40 lg:hidden transition-all duration-500',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

        <div
          className={cn(
            'fixed top-0 right-0 h-full w-80 bg-card shadow-2xl transform transition-transform duration-500 overflow-y-auto border-l border-border/40',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  و
                </div>
                <span className="text-2xl font-bold text-foreground">وب‌تری</span>
              </div>

              <button
                type="button"
                className="p-2 rounded-xl hover:bg-surface transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="بستن منو"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center p-3 rounded-xl font-medium transition-colors text-base',
                    isActive(item.href) ? 'text-primary bg-primary/10' : 'text-foreground/70 hover:bg-surface/50'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="ml-2 h-5 w-5" />}
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-3">
              <Link href="/auth">
                <Button
                  variant="outline"
                  fullWidth
                  className="border-2 border-primary/30 bg-primary/10 text-primary hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <LogIn className="ml-2 h-5 w-5" />
                  ورود
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="gradient" fullWidth className="text-base">
                  شروع پروژه
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
