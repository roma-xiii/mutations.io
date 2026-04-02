'use client';

import { createTheme } from '@mantine/core';
import { orangeColors, violetColors } from './colors';

export const theme = createTheme({
  primaryColor: 'violet',
  colors: {
    orange: orangeColors,
    violet: violetColors,
  },
});
