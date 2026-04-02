'use client';

import React from 'react';
import { AppShell, Flex } from '@mantine/core';

import type { CenteredLayoutProps } from './centered.props';
// import { LogoBrick } from '../../bricks';

export const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <AppShell padding="md">
      {/* <AppShell.Header>
        <Flex align="center" h={60} ml="lg">
          <LogoBrick />
        </Flex>
      </AppShell.Header> */}

      <AppShell.Main>
        <Flex
          h="calc(100dvh - var(--app-shell-header-height, 0px) - var(--app-shell-padding, 0px) * 2)"
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {children}
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};
