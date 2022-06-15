

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
      backgroundImage: {
        'hero-bg-home': "url('../src/images/bg-hero-home.png')",
        'hero-bg-produtos': "url('../src/images/bg-hero-produtos.png')",
        'hero-bg-quem-somos': "url('../src/images/bg-hero-quem-somos.png')",
        'hero-bg-business-scan': "url('../src/images/bg-hero-business-scan.png')",
        'hero-bg-soluções': "url('../src/images/bg-hero-solucoes.png')",
        'hero-bg-revendas': "url('../src/images/bg-hero-revendas.png')",
        'hero-bg-contato': "url('../src/images/bg-hero-contato.png')",
        'bg-tarja-quemsomos': "url('../src/images/tarjaquemsomos.png')",
        'bg-tarja-produtos' : "url('../src/images/tarjaprodutos.png')",
        'bg-tarja-home' : "url('../src/images/tarjahome.png')",
        'bg-form' : "url('../src/images/bg-form.png')",
        'GED' : "url('../src/images/BusinessScan/GED.png')"
      },

      spacing: {
        '100': '6.25rem',
        '200': '12.5rem',
        '300': '18.75rem',
        '400': '25rem',
        '500': '31.25rem',
        '600': '37.5rem',
        '700': '43.75rem',
        '800': '50rem',
        '900': '56.25rem',
        '1000': '62.5rem',

      },

      backgroundColor: {
        'gradiente-blue' : "transparent linear-gradient(90deg, #0F5197 0%, #0088FF 100%) 0% 0% no-repeat padding-box",
        'grayColor' : '#F8F8FA',
      },

     


    },
  },
  plugins: [],
}
