/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  /*Tokens personalizados*/
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    /*
      Caso as novas propriedades sejam definidas dentro do "theme" ex:

      colors: {
        black: '#000',
        white: '#fff'
      }

      estas sobrescreverão as que o tailwind disponibiliza para implementação
    */

    extend: {
      // Com uso do "extend" o tailwind mantém seus estilos próprios e adiciona os informados nesta propriedade
      fontFamily: {
        sans: 'Inter, sans-serif'
      },

      colors: {
        black: '#000',
        white: '#fff'
      }

    },

  },

  plugins: [],
}
