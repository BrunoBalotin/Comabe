

module.exports = {
  important: true,
  content: ["./src/components/*.{html,js}",
            "./src/pages/*.{html,js}"],
  theme: {

    fontSize: {
      'xs': '.875rem',
      'sm': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '2rem',
      '3xl': '2.625rem',
      '4xl': '3rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },



    extend: {
      spacing: {
        '100': '6.25rem',
        '200': '12.5rem',
        '300': '18.75rem',
        '400': '25',
        '500': '31.25rem',
        '600': '37.5rem',
        '700': '43.75rem',
        '800': '50rem',
        '900': '56.25rem',
        '1000': '62.5rem',

      },

      colors: {
        'comabeblue' : "#0F5197",
        'comabeorange' : '#ECA918',
        'titles' : '#343434',
        'paragraphs' : '#575757'
      },

      backgroundColor: {
        'gradiente-blue' : "transparent linear-gradient(90deg, #0F5197 0%, #0088FF 100%) 0% 0% no-repeat padding-box",
        'grayColor' : '#F8F8FA',
      },

      boxShadow: {
        'shadow-card' : '0px 3px 30px 5px rgba(0,0,0,0.1);'
      }


    },
  },
  plugins: [],
}
