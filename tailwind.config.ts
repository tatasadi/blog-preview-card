import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        grey: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)',
      },
    },
    fontFamily: {
      figtree: ['Figtree', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
