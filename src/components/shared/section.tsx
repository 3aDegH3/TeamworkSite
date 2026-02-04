import React from 'react'

type SectionProps = {
  children: React.ReactNode
  muted?: boolean
  grid?: boolean
  className?: string
}

export default function Section({ children, muted = false, grid = false, className = '' }: SectionProps) {
  return (
    <section className={`section ${muted ? 'section-muted' : ''} ${grid ? 'bg-grid-subtle' : ''} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}
