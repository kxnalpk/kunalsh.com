/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik']
      },
      maxWidth: {
        'desktop': '753px',
        'mobile': '509px',
        'wrapper': '752.5px',
      },
      colors: {
        'cg-1': "#BDBDBD",
        'cg-2': "#232323",
        'cg-3': "#A4A4A4",
        'cg-4': "#DBDBDB",
      }
    },
  },
  plugins: [],
}

//Custom CSS Classes:
 //a = 16px
 //b = 60px
 //c = 25px
 //d = 9px