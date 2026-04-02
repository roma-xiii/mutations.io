import { AuthFormWidget } from '@/src/widgets/auth-form';
import { CenteredLayout } from '@repo/ui';

export default function SigninPage(): React.JSX.Element {
  return (
    <CenteredLayout>
      <AuthFormWidget />
    </CenteredLayout>
  );
}
