import { LoginForm } from '@/pages/Auth/LoginForm';
import AuthLayout from '@/components/layout/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
