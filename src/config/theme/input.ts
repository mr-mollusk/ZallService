import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(['addon', 'field', 'element']);

export const styledVariant = helpers.definePartsStyle(() => ({
  field: {
    padding: '15px 26px',
    color: 'inputPlaceholder',
    backgroundColor: 'white',
    fontWeight: 600,
    lineHeight: '23px',
    _placeholder: {
      fontWeight: 600,
      lineHeight: '23px',
      color: 'inputPlaceholder',
    },
  },
}));

export const inputTheme = helpers.defineMultiStyleConfig({
  variants: { register: styledVariant },
  sizes: {
    md: {
      // field: { fontSize: '18px' },
    },
  },
  defaultProps: { variant: 'register', size: 'md' },
});
