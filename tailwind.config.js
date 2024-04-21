/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        'desktop': '753px',
        'mobile': '509px',
        'wrapper': '752.5px',
      },
      colors: {
        'cg-1': "#BDBDBD",
        'cg-2': "#1f1f28",
        'cg-3': "#A4A4A4",
        'cg-4': "#DBDBDB",
        'cg-5': "#292929",
      }
    },
  },
  plugins: []
};