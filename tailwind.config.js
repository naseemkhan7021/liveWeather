module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html}"
  ],
  theme: {
    // screens: {
    //   'my_md': { 'max': '1542px' },
    // },
    extend: {
      darkMode: false,
      colors: {
        // Configure your color palette here
        // primary secondary and tertiary  1542
        primary: {
          link: '#EB6E4B',
          btn: '#EB6E4B',
        },
      },
    },
  },
  plugins: [],
}
