module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'location': "url('/src/assets/location.JPG')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
