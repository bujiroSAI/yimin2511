/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        'serif-jp': ['var(--font-noto-serif)', 'var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'vintage': {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#ebe2d5',
          300: '#dccdb8',
          400: '#c9b399',
          500: '#b89d7d',
          600: '#a88d6d',
          700: '#8b7359',
          800: '#735f4d',
          900: '#5f5042',
        },
        'cream': {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf4e8',
          300: '#f5ead4',
          400: '#eed9b8',
          500: '#e4c59a',
          600: '#d4a574',
          700: '#c08a5a',
          800: '#9f714b',
          900: '#825e41',
        },
      },
    },
  },
  plugins: [],
}

