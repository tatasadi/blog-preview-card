import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      figtree: ['Figtree', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
