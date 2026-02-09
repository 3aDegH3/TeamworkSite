// src/components/portfolio/types.ts
export type ProjectScreen = {
  label: string
  src: string
}

export type Project = {
  id: string
  title: string
  summary: string
  category: string
  stack: string[]
  cover: string
  screens: ProjectScreen[]
  liveUrl?: string
  year?: string
  role?: string
  duration?: string
  highlights?: string[]
}
