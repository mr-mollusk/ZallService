import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './button';

export const theme = extendTheme({
  colors: {
    primary: '#E74362',
    secondary: '#17283F',
    background: '#0C1622',
  },
  fonts: { body: 'WixMadeforDisplay', heading: 'WixMadeforDisplay' },
  components: {
    Button: buttonTheme,
  },
});
