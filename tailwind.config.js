module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./assets/images/hhh.jpg')",
        'dog-bg': "url('./assets/images/dog-bg.jpg')",
      },
      backgroundSize: {
        'sm-bg': '3rem',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
