/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        //192,192,192,0.3  0, 0, 0, 0.25
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
      },
      margin: {
        '70px': '70px',
      },
      borderRadius: {
        extraLarge: '12rem',
      },
      colors: {
        rightyell: '#FFBB5C',
      },
    },
  },
  plugins: [],
}
