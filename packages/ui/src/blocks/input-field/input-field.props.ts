import type { BoxProps, MantineStyleProp } from '@mantine/core';

export interface InputFieldBlockProps extends BoxProps {
  value: string;
  label: string;
  placeholder?: string;
  error?: string;
  valueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: MantineStyleProp;
}
