'use client'

import { useEffect, useRef, useState } from 'react'

// Configuration parameters for easy tweaking
const CONFIG = {
  // Particle settings
  MAX_PARTICLES: 300, // Increased for desktop
  PARTICLE_LIFETIME: 5000, // ms
  MIN_SPAWN_RATE: 6, // minimum particles per mouse move event
  MAX_SPAWN_RATE: 20, // maximum particles per mouse move event
  SPAWN_RADIUS: 300, // radius of spawning area around mouse
  
  // Visual settings
  BASE_SIZE: 6, // minimum particle size
  SIZE_VARIANCE: 24, // size variance
  BASE_SPEED: 0.1, // base movement speed
  SPEED_VARIANCE: 0.15, // speed variance
  OUTWARD_FORCE: 0.03, // gentle outward dispersal force
  
  // Mouse interaction
  MOUSE_INFLUENCE_RADIUS: 150, // pixels
  MOUSE_INFLUENCE_STRENGTH: 0.015, // how much mouse affects particles
  
  // Performance
  TARGET_FPS: 60,
  RESIZE_DEBOUNCE: 200, // ms
}

// Updated color palette with the requested soft colors
const COLOR_PALETTE = [
  { r: 77, g: 208, b: 225, a: 0.15 },  // teal
  { r: 165, g: 241, b: 215, a: 0.15 }, // mint
  { r: 129, g: 212, b: 250, a: 0.12 }, // soft blue
  { r: 255, g: 204, b: 188, a: 0.15 }, // peach
  { r: 255, g: 171, b: 145, a: 0.15 }, // warm coral
  { r: 206, g: 147, b: 216, a: 0.12 }, // subtle purple
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
    
    // Log-normal distribution for size (more small, few large)
    const normalRandom = () => {
      let u = 0, v = 0
      while(u === 0) u = Math.random()
      while(v === 0) v = Math.random()
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    }
    
    const sizeFactor = Math.max(0.3, Math.min(2.0, 1.0 + 0.4 * normalRandom()))
    this.radius = CONFIG.BASE_SIZE + Math.random() * CONFIG.SIZE_VARIANCE * sizeFactor
    
    // Gentle drift with mild scatter velocity
    const angle = Math.random() * Math.PI * 2
    const speed = CONFIG.BASE_SPEED + Math.random() * CONFIG.SPEED_VARIANCE
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    
    this.color = { ...color }
    this.createdAt = Date.now()
    this.depth = Math.random()
    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.01 // Slower rotation for luxury feel
  }
  
  // Update particle position and properties
  update(deltaTime: number, mouseX: number, mouseY: number, canvasWidth: number, canvasHeight: number) {
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
    
    // Apply gentle outward dispersal from center
    const centerX = canvasWidth / 2
    const centerY = canvasHeight / 2
    const centerDx = this.x - centerX
    const centerDy = this.y - centerY
    const centerDistance = Math.sqrt(centerDx * centerDx + centerDy * centerDy)
    
    if (centerDistance > 0) {
      const outwardForce = CONFIG.OUTWARD_FORCE * (1 - lifeProgress * 0.5)
      this.vx += (centerDx / centerDistance) * outwardForce
      this.vy += (centerDy / centerDistance) * outwardForce
    }
    
    // Update position
    this.x += this.vx * deltaTime
    this.y += this.vy * deltaTime
    
    // Update rotation
    this.rotation += this.rotationSpeed * deltaTime
    
    // Apply friction for luxurious smooth motion
    this.vx *= 0.995
    this.vy *= 0.995
    
    // Fade out based on age
    this.color.a *= 0.995
    
    return true  // Particle is still alive
  }
  
  // Draw particle on canvas
  draw(ctx: CanvasRenderingContext2D) {
    const age = Date.now() - this.createdAt
    const lifeProgress = age / CONFIG.PARTICLE_LIFETIME
    
    // Scale based on depth
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

interface AnimatedBackgroundProps {
  backgroundColor?: string
  className?: string
}

export default function AnimatedBackground({ 
  backgroundColor = '#ffffff', 
  className = '' 
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const lastMousePositionRef = useRef({ x: 0, y: 0 })
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
    
    // Function to spawn a particle (defined before handleMouseMove to fix hoisting issue)
    function spawnParticle(x: number, y: number, pool: Particle[]) {
      // Find unused particle from pool
      let particle: Particle | null = null
      for (let j = 0; j < pool.length; j++) {
        const p = pool[j]
        if (Date.now() - p.createdAt > CONFIG.PARTICLE_LIFETIME) {
          particle = p
          break
        }
      }
      
      // If no unused particle found, reuse the oldest one
      if (!particle && pool.length > 0) {
        let oldestAge = 0
        let oldestIndex = 0
        
        for (let j = 0; j < pool.length; j++) {
          const age = Date.now() - pool[j].createdAt
          if (age > oldestAge) {
            oldestAge = age
            oldestIndex = j
          }
        }
        
        particle = pool[oldestIndex]
      }
      
      // Initialize particle
      if (particle) {
        const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]
        
        // Create circular spawning area with center bias
        const angle = Math.random() * Math.PI * 2
        const radiusBias = Math.random() * Math.random() // Squared for center bias
        const radius = radiusBias * CONFIG.SPAWN_RADIUS
        
        const spawnX = x + Math.cos(angle) * radius
        const spawnY = y + Math.sin(angle) * radius
        
        particle.reset(spawnX, spawnY, color)
      }
    }
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse speed for dynamic spawn rate
      const dx = e.clientX - lastMousePositionRef.current.x
      const dy = e.clientY - lastMousePositionRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      lastMousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      }
      
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      }
      
      // Dynamic spawn rate based on mouse speed
      const speed = Math.min(distance, 100) / 100
      const spawnCount = Math.floor(CONFIG.MIN_SPAWN_RATE + 
        speed * (CONFIG.MAX_SPAWN_RATE - CONFIG.MIN_SPAWN_RATE))
      
      // Spawn new particles
      for (let i = 0; i < spawnCount; i++) {
        spawnParticle(e.clientX, e.clientY, particlePool)
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
      
      // Clear canvas with background color
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      for (let i = 0; i < particlePool.length; i++) {
        const particle = particlePool[i]
        const isAlive = particle.update(
          deltaTime / 16.67,  // Normalize to 60fps
          mousePositionRef.current.x,
          mousePositionRef.current.y,
          canvas.width,
          canvas.height
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
  }, [isClient, backgroundColor])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 ${className}`}
      style={{ background: backgroundColor }}
    />
  )
}