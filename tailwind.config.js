/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      variants: {
        extend: {
          opacity: ['hover', 'focus'],
        },
      },
      colors: {
        'custom-orange-color': '#f1b43f',
        'custom-orange-hover-color': '#ff9900', // Custom hover color
        'custom-gradient-bg-dark': '#2E3192',
        'custom-gradient-bg-light': '#3438a5',
        'custum-bg-dark': '#161616',
        'custom-fontColor-Dark':'#9b9b9b',
        'custom-fontColor-Green':'#2a7624',
        'custom-buttonColor-Green':'#7cc04f',
        'custom-buttonColor-GreenDark':'#4a732f',
      },
      fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },},
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
