import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b1ff',
          400: '#3397ff',
          500: '#0055A5', // Brand deep blue
          600: '#004488',
          700: '#003366',
          800: '#002244',
          900: '#001122',
        },
        accent: {
          50: '#fffaeb',
          100: '#fff4d6',
          200: '#ffe9ad',
          300: '#ffde84',
          400: '#ffd35b',
          500: '#FFB600', // Brand gold
          600: '#cc9200',
          700: '#996d00',
          800: '#664900',
          900: '#332400',
        },
        light: {
          bg: '#FFFFFF',
          text: '#1A1A1A',
          accent: '#0055A5',
          highlight: '#FFB600',
        },
        dark: {
          bg: '#111111',
          text: '#EAEAEA',
          accent: '#3399FF',
          highlight: '#FFD960',
        },
      },
      fontFamily: {
        headline: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(14, 165, 233, 0.5), 0 0 10px rgba(14, 165, 233, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.8), 0 0 30px rgba(14, 165, 233, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
