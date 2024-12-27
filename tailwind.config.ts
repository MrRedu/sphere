import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2600E3',
        dark: '#111111',
        light: '#efefef',
      },
      backgroundImage: {
        gradiantLeft:
          'linear-gradient(90deg, rgba(0,0,0,0.9002320185614849) 0%, rgba(0,0,0,0) 70%)',
        gradiantBotton:
          'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0) 70%)',
        gradiantTop:
          'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
        gradiantBottonCard:
          'linear-gradient(0deg, rgba(0,0,0,0.6951155462184874) 0%, rgba(0,0,0,0) 80%)',
        gradiantTop2:
          'linear-gradient(180deg, rgba(0,0,0,0.5914740896358543) 0%, rgba(0,0,0,0) 34%)',
        footerGradiant:
          'linear-gradient(180deg,#0000,oklch(61.64% 0.111 222.57 / 23.53%))',
      },
    },
  },
  plugins: [],
} satisfies Config
