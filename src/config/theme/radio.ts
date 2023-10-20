import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(['control', 'container', 'label']);

export const styledVariant = helpers.definePartsStyle(() => ({
  container: { alignItems: 'start' },
  //   icon: { backgroundColor: 'primary' },
  control: {
    _checked: {
      background: 'primary',
      borderColor: 'var(--chakra-colors-primary)',
      _hover: { background: 'primary', borderColor: 'var(--chakra-colors-primary)' },
    },
  },
}));

export const radioTheme = helpers.defineMultiStyleConfig({
  variants: { register: styledVariant },
  sizes: {
    md: {
      label: { fontSize: '18px', fontWeight: 400 },
    },
  },
  defaultProps: { variant: 'register', size: 'md' },
});
