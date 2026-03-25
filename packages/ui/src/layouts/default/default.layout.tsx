'use client';

import React from 'react';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import type { DefaultLayoutProps } from './default.props';

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: false },
      }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar>Navbar</AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
