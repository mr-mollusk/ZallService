import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './button';
import { headingTheme } from './heading';
import { inputTheme } from './input';

export const theme = extendTheme({
  colors: {
    primary: '#E74362',
    secondary: '#17283F',
    background: '#0C1622',
    inputBackground: '#D9D9D9',
    inputPlaceholder: '#00344F66',
  },
  fonts: { body: 'WixMadeforDisplay', heading: 'WixMadeforDisplay' },
  fontSizes: {
    sm: '12px',
    md: '16px',
    lg: '30px',
    xl: '40px',
    '2xl': '50px',
    '3xl': '70px',
  },
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
    Input: inputTheme,
  },
});
