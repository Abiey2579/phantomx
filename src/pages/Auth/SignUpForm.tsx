'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const isReady =
    !email ||
    !password ||
    !confirmPassword ||
    password.length < 8 ||
    confirmPassword !== password;

  const handleCreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: 'http://localhost:3000/verify-email',
        },
      });

      if (error) {
        toast.error(error.message);
        setIsLoading(false);
        return;
      }

      toast.success(
        'Account created! Please check your email for confirmation.',
      );

      setEmail('');
      setPassword('');
      setConfirmPassword('');

      setTimeout(() => router.push('/email-sent'), 3000);
    } catch (error) {
      toast.error(`Something went wrong. ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleCreateAccount}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@company-name.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="**********"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="**********"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <Button disabled={isReady} type="submit" className="w-full">
          {isLoading ? <Spinner /> : 'Sign Up'}
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link href="/login" className="underline underline-offset-4">
          Log In
        </Link>
      </div>
    </form>
  );
}
