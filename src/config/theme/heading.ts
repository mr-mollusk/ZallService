import { defineStyleConfig } from '@chakra-ui/react';

export const headingTheme = defineStyleConfig({
  sizes: {
    md: {
      fontSize: '30px',
    },
    lg: {
      fontSize: '40px',
    },
    xl: {
      fontSize: '50px',
    },
    '2xl': {
      fontSize: '70px',
    },
  },
  defaultProps: {
    size: 'md',
  },
});
