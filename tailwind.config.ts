import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',

        primary: {
          50: '#e6f7f5',
          100: '#ccefeb',
          200: '#99dfd7',
          300: '#66cfc3',
          400: '#33bfaf',
          500: '#2fb3a4',
          600: '#2a9d8f',
          700: '#238678',
          800: '#1c6f62',
          900: '#15584c',
          DEFAULT: '#2a9d8f',
        },
        secondary: {
          50: '#fff3ea',
          100: '#fee6d4',
          200: '#fdcca9',
          300: '#fbb37e',
          400: '#f69953',
          500: '#f4a261',
          600: '#e88c45',
          700: '#cc7633',
          800: '#a85f29',
          900: '#7b451f',
          DEFAULT: '#f4a261',
        },
        accent: {
          DEFAULT: '#e76f51',
        },
      },
      borderRadius: {
        xl: 'var(--radius)',
        '2xl': 'calc(var(--radius) + 4px)',
      },
      letterSpacing: {
        tightish: '-0.02em',
        airy: '0.02em',
      },
      lineHeight: {
        comfy: '1.75',
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}

export default config
