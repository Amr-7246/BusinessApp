/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
    colors: {
        Color1: '#e21056',
        secondary: '#aaa6c3',
        customPurple: 'rgb(144 89 255)',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
    },
  },
  plugins: [],
}

