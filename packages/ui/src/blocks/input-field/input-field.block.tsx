import React from 'react';
import { Input } from '@mantine/core';

import type { InputFieldBlockProps } from './input-field.props';

export const InputFieldBlock: React.FC<InputFieldBlockProps> = ({
  error,
  value,
  valueChange,
  label,
  placeholder,
  ...boxProps
}) => {
  return (
    <Input.Wrapper
      {...boxProps}
      label={label}
      error={error}
      styles={{
        root: {
          position: 'relative',
          paddingBottom: error ? '15px' : '20px',
        },
        error: { position: 'absolute', bottom: '0' },
      }}
    >
      <Input
        value={value}
        onChange={valueChange}
        error={!!error}
        placeholder={placeholder}
      />
    </Input.Wrapper>
  );
};
