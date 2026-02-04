export const THEME_CONSTANTS = {
  // Breakpoints
  BREAKPOINTS: {
    xs: 475,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  
  // Colors
  COLORS: {
    // Brand
    BRAND: {
      PRIMARY: '#2a9d8f',
      SECONDARY: '#f4a261',
      ACCENT: '#e76f51',
    },
    
    // Dark Mode
    DARK: {
      BACKGROUND: '#0f1116',
      CARD: '#1a1d24',
      SURFACE: '#1f2937',
      BORDER: '#374151',
    },
    
    // Light Mode
    LIGHT: {
      BACKGROUND: '#ffffff',
      CARD: '#f8f9fa',
      SURFACE: '#f1f5f9',
      BORDER: '#e5e7eb',
    },
    
    // Status
    STATUS: {
      SUCCESS: '#10b981',
      WARNING: '#f59e0b',
      ERROR: '#ef4444',
      INFO: '#3b82f6',
    },
  },
  
  // Typography
  TYPOGRAPHY: {
    FONT_FAMILY: {
      SANS: 'var(--font-inter)',
      DISPLAY: 'var(--font-space-grotesk)',
      MONO: 'var(--font-jetbrains-mono)',
    },
    FONT_WEIGHTS: {
      THIN: 100,
      EXTRALIGHT: 200,
      LIGHT: 300,
      NORMAL: 400,
      MEDIUM: 500,
      SEMIBOLD: 600,
      BOLD: 700,
      EXTRABOLD: 800,
      BLACK: 900,
    },
  },
  
  // Spacing
  SPACING: {
    UNIT: 4, // Base unit in pixels
    SCALE: [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96],
  },
  
  // Borders
  BORDERS: {
    RADIUS: {
      SM: '0.125rem',
      DEFAULT: '0.25rem',
      MD: '0.375rem',
      LG: '0.5rem',
      XL: '0.75rem',
      '2XL': '1rem',
      FULL: '9999px',
    },
    WIDTH: {
      DEFAULT: '1px',
      THICK: '2px',
      THICKER: '3px',
    },
  },
  
  // Shadows
  SHADOWS: {
    ELEVATION: {
      0: 'none',
      1: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      2: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      3: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      4: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      5: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
  },
  
  // Animations
  ANIMATIONS: {
    DURATION: {
      FAST: '150ms',
      NORMAL: '300ms',
      SLOW: '500ms',
      VERY_SLOW: '1000ms',
    },
    TIMING: {
      LINEAR: 'linear',
      EASE: 'ease',
      EASE_IN: 'ease-in',
      EASE_OUT: 'ease-out',
      EASE_IN_OUT: 'ease-in-out',
    },
  },
  
  // Layout
  LAYOUT: {
    MAX_WIDTH: {
      SM: '640px',
      MD: '768px',
      LG: '1024px',
      XL: '1280px',
      '2XL': '1536px',
    },
    CONTAINER_PADDING: {
      MOBILE: '1rem',
      TABLET: '2rem',
      DESKTOP: '4rem',
    },
  },
} as const