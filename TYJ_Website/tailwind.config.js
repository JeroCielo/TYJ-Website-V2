/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', '.**/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    color: {
      'darkBlue': '#0e2752',
      'lightBlue': '#6690D9',
      'pastelBlue': '#1b4b9e',
      'blue': '#2463d1',
      'darkPastelBlue': '#263652',
    },
    extend: {

    },
  },
  plugins: [],
}
