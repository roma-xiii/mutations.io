import { Box, Button } from '@mantine/core';
import { DefaultLayout } from '@repo/ui';

export default function Home(): React.JSX.Element {
  return (
    <DefaultLayout>
      <Box style={{ width: '420px' }}>
        <Button>Next link butddton</Button>
      </Box>
    </DefaultLayout>
  );
}
