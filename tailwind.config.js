import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'tw-',
  future: {
    // Les styles :hover ne s'appliquent que sur les appareils qui gèrent le survol
    // (évite les cartes « bloquées » en état hover après un tap sur mobile/tablette).
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: '420px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk Variable"', '"Inter Variable"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ink: {
          950: '#020617',
          900: '#0b1222',
        },
      },
    },
  },
  plugins: [],
}
