import { themes } from '@storybook/theming';

import '../src/styles/global.css'; // Importação do estilo global para persistencia das alterações no preview do storybook

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    theme: themes.dark
  }
}