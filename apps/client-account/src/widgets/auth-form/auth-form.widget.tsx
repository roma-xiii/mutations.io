'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Button, Divider, Text } from '@mantine/core';
import { InputFieldBlock } from '@repo/ui';

export const AuthFormWidget = (): React.JSX.Element => {
  const [isError, setIsError] = React.useState('');
  const [inputValue, inputValueSet] = React.useState('');

  const inputValueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    inputValueSet(event.target.value);
  };

  const submitHandler = (): void => {
    setIsError((prev) => (prev === '' ? 'Please enter your valid email' : ''));
  };

  return (
    <Box w={{ base: '100%' }} maw={320} style={{ position: 'relative' }}>
      <InputFieldBlock
        label="Email"
        placeholder="Enter email"
        value={inputValue}
        error={isError}
        valueChange={inputValueChangeHandler}
      />
      <InputFieldBlock
        label="Password"
        placeholder="Enter password"
        value={inputValue}
        error={isError}
        valueChange={inputValueChangeHandler}
        mb="sm"
      />
      <Divider mb="lg" mt="sm" />
      <Button onClick={submitHandler} fullWidth mb="xs">
        Sign In
      </Button>
      <Button
        variant="light"
        fullWidth
        component={Link}
        href="/forgot-password"
      >
        Forgot password?
      </Button>
      <Box
        style={{
          position: 'absolute',
          bottom: -45,
          left: 0,
          right: 0,
          textAlign: 'center',
        }}
      >
        <Text size="xs">
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </Text>
      </Box>
    </Box>
  );
};
