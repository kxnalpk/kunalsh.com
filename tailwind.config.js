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
        inter: ['Inter']
      },
      height: {
        'b2': '120px',
      },
      maxWidth: {
        'desktop': '753px',
        'mobile': '509px',
        'wrapper': '752.5px',
      },
      margin: {
        'a2': '32px',
        'c1': '25px',
        'c2': '50px',
      },
      gap: {
        'd1': '9px',
        'c1': '25px',
      },
      padding: {
        'a1': '16px',
        'a2': '32px',
      },
      borderRadius: {
        'd1': '9px'
      },
      colors: {
        'cg-1': "#BDBDBD",
        'cg-2': "#232323",
        'cg-3': "#A4A4A4"
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