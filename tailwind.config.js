

module.exports = {
  important: true,
  content: ["./src/components/*.{html,js}",
            "./src/pages/*.{html,js}"],
  theme: {
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

      colors: {
        'comabeblue' : "#0F5197",
        'comabeorange' : '#ECA918',
      },

      backgroundColor: {
        'gradiente-blue' : "transparent linear-gradient(90deg, #0F5197 0%, #0088FF 100%) 0% 0% no-repeat padding-box"
      },

      boxShadow: {
        'shadow-card' : '0px 3px 30px 5px rgba(0,0,0,0.1);'
      }


    },
  },
  plugins: [],
}
