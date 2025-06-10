import AuthLayout from '@/components/layout/AuthLayout';
import Link from 'next/link';

const EmailSentPage = () => {
  return (
    <AuthLayout>
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold">📬 Check Your Inbox</h1>
        <p className="text-muted-foreground text-sm">
          We’ve sent a confirmation email to the address you provided. To
          complete your sign-up process, please open the email and click the
          confirmation link.
        </p>
        <p className="text-muted-foreground text-sm">
          It may take a few minutes to arrive. Be sure to check your{' '}
          <strong>Spam</strong> or <strong>Promotions</strong> folder if you
          don’t see it in your inbox.
        </p>
        <p className="text-muted-foreground text-sm">
          Didn’t get the email? You can try resending it from the Sign Up page.
        </p>
        <div className="mt-4 text-center text-sm">
          Back to{' '}
          <Link href="/signup" className="underline underline-offset-4">
            Sign Up
          </Link>{' '}
          or{' '}
          <Link href="/login" className="underline underline-offset-4">
            Log In
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default EmailSentPage;
