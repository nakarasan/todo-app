/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontSize: {
        h1: '15px',
        h2: '14px',
        p1: '13px',
        p2: '12px',
        p3: '11px',
      },
      fontFamily: {
        poppins: ['PoppinsRegular', 'serif'],
      },
      colors: {
        darkBlue: '#001e77',
      },
    },
  },
  plugins: [],
};
