import { Button } from '@/components/ui/button';
import { getCurrentSession } from '@/services/auth';
import { CalendarIcon, HomeIcon, Plus, Sparkle } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Layout({ children }) {
  const session = await getCurrentSession();

  return (
    <div className="h-screen w-full space-y-12 bg-gradient-to-b from-indigo-200 to-transparent to-20% pb-12">
      <header className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Sparkle size={16} />
          <div>eventmakers</div>
        </Link>
        {session ? (
          <div className="flex items-center gap-2">
            <Link href="/dashboard/create-event">
              <Button size="sm" variant="ghost">
                <Plus size={16} />
                Create Event
              </Button>
            </Link>
            <div className="text-sm font-bold tracking-tight">{session.user.name}</div>
          </div>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </header>
      <div className="m-auto max-w-5xl pb-12">{children}</div>
    </div>
  );
}
