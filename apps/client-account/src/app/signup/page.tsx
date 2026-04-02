import { CenteredLayout } from '@repo/ui';
import Link from 'next/link';

export default function SignupPage(): React.JSX.Element {
  return (
    <CenteredLayout>
      <h1>SignupPage</h1>
      <p>
        Already have an account? <Link href="/signin">Sign In</Link>
      </p>
    </CenteredLayout>
  );
}
