import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: '#f26d0c',
      blue: '#198cff',
      darkblue: '#051019',
      white: '#ffffff'
    },
    extend: {
      backgroundImage: {
        'printicalBG': "url('/printicalbg.png')"
      }
    },
  },
  plugins: [],
}
export default config
