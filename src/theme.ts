import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

/* To style the theme refer to the Chakra webside 'default theme'. They
show you how you can implement your own color schemes */
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3c',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#636363',
      700: '#202020',
      800: '#121212',
      900: '#111',
    },
  },
});

export default theme;
