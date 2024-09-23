/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ppformula': ['ppformula'],
      'neuemontreal':['neuemontreal'],
      'ppformula-light': ['ppformula-light'],
    },
    extend: {
      spacing: {
        '599.725': '599.725px',
        '298.196': '298.196px',
        '324.928': '324.928px',
        '360':'360px',
        '3.375' : '3.375rem',
      }
    },
  },
  plugins: [],
}

