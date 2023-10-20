import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './button';
import { headingTheme } from './heading';
import { inputTheme } from './input';
import { chekboxTheme } from './chekbox';
import { radioTheme } from './radio';

export const theme = extendTheme({
  colors: {
    primary: '#E74362',
    secondary: '#17283F',
    background: '#0C1622',
    inputBackground: '#D9D9D9',
    inputPlaceholder: '#00344F66',
  },
  styles: {
    global: { '#root': { backgroundColor: 'background', minHeight: '100vh', color: 'white' } },
  },
  fonts: { body: `"WixMadeforDisplay", sans-serif`, heading: `"WixMadeforDisplay", sans-serif` },
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
    Checkbox: chekboxTheme,
    Radio: radioTheme,
  },
});
