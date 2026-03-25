'use client';

import React from 'react';
import { AppShell, Flex } from '@mantine/core';

import type { CenteredLayoutProps } from './centered.props';

export const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Main>
        <Flex
          h="calc(100dvh - var(--app-shell-header-height, 0px) - var(--app-shell-padding, 0px) * 2)"
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <div>{children}</div>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};
