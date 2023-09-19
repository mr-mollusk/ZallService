import { defineStyleConfig } from '@chakra-ui/react';

export const inputTheme = defineStyleConfig({
  baseStyle: {
    background: 'inputBackground',
    fontFamily: 'WixMadeforDisplay',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '23px',
    _placeholder: {
      fontFamily: 'WixMadeforDisplay',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '23px',
      color: 'inputPlaceholder',
    },
  },
});
