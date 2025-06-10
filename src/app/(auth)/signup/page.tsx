import { SignUpForm } from '@/pages/Auth/SignUpForm';
import AuthLayout from '@/components/layout/AuthLayout';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
