'use client'

import { useEffect, useRef, useState } from 'react'

// Configuration parameters for easy tweaking
const CONFIG = {
  // Particle settings
  MAX_PARTICLES: 80,
  PARTICLE_LIFETIME: 4000, // ms
  SPAWN_RATE: 2, // particles per mouse move event
  
  // Visual settings
  BASE_SIZE: 4, // minimum particle size
  SIZE_VARIANCE: 12, // size variance
  BASE_SPEED: 0.15, // base movement speed
  SPEED_VARIANCE: 0.3, // speed variance
  
  // Mouse interaction
  MOUSE_INFLUENCE_RADIUS: 120, // pixels
  MOUSE_INFLUENCE_STRENGTH: 0.02, // how much mouse affects particles
  
  // Performance
  TARGET_FPS: 60,
  RESIZE_DEBOUNCE: 200, // ms
}

// Light color palette for white background
const COLOR_PALETTE = [
  { r: 42, g: 157, b: 143, a: 0.15 },  // primary
  { r: 244, g: 162, b: 97, a: 0.15 },   // secondary
  { r: 231, g: 111, b: 81, a: 0.15 },    // accent
  { r: 100, g: 200, b: 255, a: 0.12 },  // light blue
  { r: 255, g: 100, b: 200, a: 0.12 },  // pink
  { r: 100, g: 255, b: 200, a: 0.12 },  // mint
]

// Particle class for object pooling
class Particle {
  x: number = 0
  y: number = 0
  vx: number = 0
  vy: number = 0
  radius: number = 0
  color: { r: number; g: number; b: number; a: number } = { r: 0, g: 0, b: 0, a: 0 }
  createdAt: number = 0
  depth: number = 0  // 0-1, affects size and blur
  rotation: number = 0
  rotationSpeed: number = 0
  
  // Reset particle for reuse (object pooling)
  reset(x: number, y: number, color: { r: number; g: number; b: number; a: number }) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * CONFIG.BASE_SPEED
    this.vy = (Math.random() - 0.5) * CONFIG.BASE_SPEED
    this.radius = CONFIG.BASE_SIZE + Math.random() * CONFIG.SIZE_VARIANCE
    this.color = { ...color }
    this.createdAt = Date.now()
    this.depth = Math.random()
    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.02
  }
  
  // Update particle position and properties
  update(deltaTime: number, mouseX: number, mouseY: number) {
    const age = Date.now() - this.createdAt
    const lifeProgress = age / CONFIG.PARTICLE_LIFETIME
    
    // Kill old particles
    if (lifeProgress > 1) return false
    
    // Apply mouse influence
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < CONFIG.MOUSE_INFLUENCE_RADIUS) {
      const force = (1 - distance / CONFIG.MOUSE_INFLUENCE_RADIUS) * CONFIG.MOUSE_INFLUENCE_STRENGTH
      this.vx += dx * force
      this.vy += dy * force
    }
    
    // Update position
    this.x += this.vx * deltaTime
    this.y += this.vy * deltaTime
    
    // Update rotation
    this.rotation += this.rotationSpeed * deltaTime
    
    // Apply friction
    this.vx *= 0.99
    this.vy *= 0.99
    
    // Fade out based on age
    this.color.a *= 0.99
    
    return true  // Particle is still alive
  }
  
  // Draw particle on canvas
  draw(ctx: CanvasRenderingContext2D) {
    const age = Date.now() - this.createdAt
    const lifeProgress = age / CONFIG.PARTICLE_LIFETIME
    
    // Scale and blur based on depth
    const scale = 0.5 + this.depth * 0.5
    const actualRadius = this.radius * scale * (1 - lifeProgress * 0.5)
    
    // Calculate opacity based on age
    const opacity = this.color.a * (1 - lifeProgress)
    
    // Save context state
    ctx.save()
    
    // Apply rotation
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    
    // Create gradient for 3D effect
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, actualRadius)
    gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`)
    gradient.addColorStop(0.7, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity * 0.5})`)
    gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`)
    
    // Draw bubble
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(0, 0, actualRadius, 0, Math.PI * 2)
    ctx.fill()
    
    // Add highlight for 3D effect
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.4})`
    ctx.beginPath()
    ctx.arc(-actualRadius * 0.3, -actualRadius * 0.3, actualRadius * 0.3, 0, Math.PI * 2)
    ctx.fill()
    
    // Restore context state
    ctx.restore()
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const lastTimeRef = useRef<number>(0)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Initialize particle pool
    const particlePool: Particle[] = []
    for (let i = 0; i < CONFIG.MAX_PARTICLES; i++) {
      particlePool.push(new Particle())
    }
    particlesRef.current = particlePool

    // Set canvas size to cover entire viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    
    // Debounced resize handler
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      resizeTimeoutRef.current = setTimeout(resizeCanvas, CONFIG.RESIZE_DEBOUNCE)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      }
      
      // Spawn new particles at mouse position
      for (let i = 0; i < CONFIG.SPAWN_RATE; i++) {
        // Find unused particle from pool
        let particle: Particle | null = null
        for (let j = 0; j < particlePool.length; j++) {
          const p = particlePool[j]
          if (Date.now() - p.createdAt > CONFIG.PARTICLE_LIFETIME) {
            particle = p
            break
          }
        }
        
        // If no unused particle found, reuse the oldest one
        if (!particle && particlePool.length > 0) {
          let oldestAge = 0
          let oldestIndex = 0
          
          for (let j = 0; j < particlePool.length; j++) {
            const age = Date.now() - particlePool[j].createdAt
            if (age > oldestAge) {
              oldestAge = age
              oldestIndex = j
            }
          }
          
          particle = particlePool[oldestIndex]
        }
        
        // Initialize particle
        if (particle) {
          const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]
          particle.reset(
            mousePositionRef.current.x + (Math.random() - 0.5) * 20,
            mousePositionRef.current.y + (Math.random() - 0.5) * 20,
            color
          )
        }
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // Animation loop with frame rate control
    let lastFrameTime = 0
    const targetFrameTime = 1000 / CONFIG.TARGET_FPS
    
    const animate = (currentTime: number) => {
      // Calculate delta time
      const deltaTime = currentTime - lastFrameTime
      lastFrameTime = currentTime
      
      // Skip frames if running too fast
      if (deltaTime < targetFrameTime) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      
      // Clear canvas completely for white background
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      for (let i = 0; i < particlePool.length; i++) {
        const particle = particlePool[i]
        const isAlive = particle.update(
          deltaTime / 16.67,  // Normalize to 60fps
          mousePositionRef.current.x,
          mousePositionRef.current.y
        )
        
        if (isAlive) {
          particle.draw(ctx)
        }
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [isClient])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: 'white' }}
    />
  )
}