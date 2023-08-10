import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'secondaryBlue':'#617ABC'
      },
      screens:{
        'mm':'375px',
        '3xl':'1900px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hidlogo':
          'url("/logos/hid_gold.svg")',
          'ink1000card':
          'url("/ink1000/ink10007.png")',
          
      },
    },
  },
  plugins: [],
}
export default config
