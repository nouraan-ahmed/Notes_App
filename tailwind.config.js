
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'app':"url('/src/images/bg1.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}