'use client'

import { useMemo, useState } from 'react'
import { Search, Linkedin, Twitter, Globe, X } from 'lucide-react'
import { TEAM, TeamMember } from '@/src/components/team'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'

export default function TeamGrid() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<TeamMember | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return TEAM
    return TEAM.filter((m) => {
      return (
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.skills.join(' ').toLowerCase().includes(q)
      )
    })
  }, [query])

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            تیم ما
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            یک تیم کوچک و دقیق—متمرکز روی کیفیت، شفافیت و همکاری.
          </p>
        </div>

        <div className="w-full md:w-80">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              fullWidth
              placeholder="جستجو (نام، نقش، مهارت...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pr-10"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((m) => (
          <Card
            key={m.id}
            hover
            padding="lg"
            className="group cursor-pointer relative overflow-hidden"
            onClick={() => setActive(m)}
          >
            <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full blur-2xl bg-primary-500/10" />
            <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full blur-2xl bg-secondary-500/10" />

            <CardHeader>
              <div className="flex items-center justify-between">
                <AvatarFallback text={m.avatarFallback} />
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {m.socials?.linkedin && (
                    <IconLink href={m.socials.linkedin} label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </IconLink>
                  )}
                  {m.socials?.twitter && (
                    <IconLink href={m.socials.twitter} label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </IconLink>
                  )}
                  {m.socials?.website && (
                    <IconLink href={m.socials.website} label="Website">
                      <Globe className="h-4 w-4" />
                    </IconLink>
                  )}
                </div>
              </div>

              <CardTitle className="mt-4">{m.name}</CardTitle>
              <div className="text-sm text-gray-600 dark:text-gray-300">{m.role}</div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-comfy line-clamp-3">
                {m.bio}
              </p>

              <div className="flex flex-wrap gap-2">
                {m.skills.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white/70 dark:bg-gray-900/60 px-3 py-1 text-xs text-gray-700 dark:text-gray-200"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                مشاهده جزئیات
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-border bg-white dark:bg-gray-900 shadow-xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <AvatarFallback text={active.avatarFallback} />
                  <div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">
                      {active.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {active.role}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-comfy">
                  {active.bio}
                </p>
              </div>

              <button
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setActive(null)}
                aria-label="بستن"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">مهارت‌ها</div>
              <div className="flex flex-wrap gap-2">
                {active.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white/70 dark:bg-gray-900/60 px-3 py-1 text-xs text-gray-700 dark:text-gray-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" onClick={() => setActive(null)}>
                بستن
              </Button>
              <Button variant="primary">
                همکاری با این تیم
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function AvatarFallback({ text }: { text: string }) {
  return (
    <div className="h-11 w-11 rounded-2xl border border-border bg-white/70 dark:bg-gray-900/60 flex items-center justify-center text-sm font-semibold text-gray-900 dark:text-white">
      {text}
    </div>
  )
}

function IconLink({
  href,
  label,
  children
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-xl border border-border bg-white/70 dark:bg-gray-900/60 hover:shadow-sm transition"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </a>
  )
}
