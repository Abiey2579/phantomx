'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import AuthLayout from '@/components/layout/AuthLayout';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

const VerifyEmailPage = () => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [status, setStatus] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.slice(1));

    const access_token = params.get('access_token');
    const refresh_token = params.get('refresh_token');

    const verifyUser = async () => {
      if (!access_token || !refresh_token) {
        toast.error('Invalid verification link');
        setIsVerifying(false);
        return;
      }

      const { error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (error) {
        toast.error('Verification failed');
        setIsVerifying(false);
        setStatus('If verification fails, try again or contact support.');
      } else {
        toast.success('Email verified successfully!');
        setIsVerifying(false);
        setStatus(
          '🎉🎉🎉🎉 Congratulations, your email address has been successfully verified',
        );
      }
    };

    verifyUser();
  }, []);

  return (
    <AuthLayout>
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold">📬 Email Verification</h1>
        <p className="text-muted-foreground text-sm">
          {isVerifying && 'Verifying your email, please wait...'}
          {status !== '' && status}
        </p>
        {isVerifying && <Spinner />}
        {!isVerifying && (
          <Button onClick={() => router.push('/login')}>Go to Login</Button>
        )}
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
