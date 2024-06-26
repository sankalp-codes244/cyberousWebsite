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
        'custom-bg-violet': '#a497ff',
        'custom-fontColor-Dark': '#9b9b9b',
        'custom-fontColor-grey': '#9ba6c1',
        'custom-fontColor-violet': '#6957df',
        'custom-fontColor-violetLight': '#a497ff',
        'custom-fontColor-Green': '#22c55e',
        'custom-buttonColor-Green': '#7cc04f',
        'custom-buttonColor-GreenDark': '#4a732f',
        'custom-greyLightColor': '#f5f5f5',
        'custom-greyBorderColor': '#f5f5f5',
        'custom-greycolor1': '#f3f6f9',
        'custom-black-color': '#222222',
        'custom-orange-color':'#a02c0c',
        'custom-orange-colorlight':'#af3009',
        'custom-gold-color':'#ffc221',
        'custom-button-colorgrey':'#b9b9b9',
        'custom-custom-blackbg':'#141414',


      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        // Add Permanent Marker font to fontFamily
        arbutus: ['Arbutus', 'sans-serif'],
        holtwood: ['Queering', 'sans-serif'],
        stylish: ['Stylish', 'sans-serif'],
        __Inter_aaf875:['Inter'],
        Roboto:['Roboto'],
      },
    },
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
