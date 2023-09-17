import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  background: 'transparent',
  border: '1px solid',
  borderColor: 'primary',
  color: 'primary',
});

const solid = defineStyle({
  background: 'primary',
  color: 'white',
  _hover: { background: 'primary', opacity: 0.9 },
  _active: { background: 'primary', opacity: 0.8 },
});

export const buttonTheme = defineStyleConfig({
  sizes: {
    md: {
      padding: '12px 83px',
    },
  },
  variants: { solid, outline },
  defaultProps: {
    variant: 'solid',
    size: 'md',
  },
});
