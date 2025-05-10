'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase/client';

type ProtectedAreaProps = {
  children: React.ReactNode;
};

export default function ProtectedArea({ children }: ProtectedAreaProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace('/login'); // redirect if not authenticated
      } else {
        setSession(session);
      }

      setLoading(false);
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <div className="p-6 text-center">Checking authentication...</div>;
  }

  return <>{session && children}</>;
}
