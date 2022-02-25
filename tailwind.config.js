module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', //media,class ,bool
  theme: {
    // screens: {
    //   'my_md': { 'max': '1542px' },
    // },
    extend: {
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
