import { MantineProvider } from '@mantine/core';

import { theme } from './theme';

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      {children}
    </MantineProvider>
  );
};
