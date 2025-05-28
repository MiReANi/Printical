import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: '#ff671aff',
      blue: '#00aaffff',
      darkblue: '#020d13ff',
      white: '#ffffff'
    },
    fontFamily: {
      rubik : ['Rubik', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        // vaihda myöhemmin tausta.png
        'printicalBG': "url('/png_osat/tausta.png')"
      }
    },
  },
  plugins: [],
}
export default config
