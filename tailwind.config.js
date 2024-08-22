/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        success: '#266000',
        danger: '#800000',
      },
      backgroundColor: {
        success: '#ceefb1',
        danger: '#f1b4b0',
      },
    },
  },
  plugins: [],
};
