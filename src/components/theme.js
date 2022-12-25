import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const overridesDefault = extendTheme({
  styles: {
    global: props => ({
      body: {
        h: '100%',
      },
      html: { height: '100%' },
    }),
  },
});
