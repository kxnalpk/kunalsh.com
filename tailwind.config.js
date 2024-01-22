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
        'header': '752.5px',
      },
      margin: {
        'a2': '32px',
        'c1': '25px',
        'c2': '50px',
      },
      gap: {
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
      }
    },
  },
  plugins: [],
}

//Custom CSS Classes:120px
 //a = 16px
 //b = 60px
 //c = 25px
 //d = 9px