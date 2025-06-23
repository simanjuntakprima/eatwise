'use client';

import Link from 'next/link';
import { useActionState } from 'react';

import { AlertState } from '@/app/_components/alert-state';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { registerAction } from '../action';

export default function Page() {
  const [state, action, pending] = useActionState(registerAction, null);

  return (
    <div className="flex flex-col gap-4">
      <section>
        <h1>Register</h1>
        <p>Create an account</p>
      </section>
      <form className="flex flex-col gap-2" action={action}>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button type="submit" disabled={pending}>
          {pending ? 'Registering...' : 'Register'}
        </Button>
        <AlertState success={state?.success} error={state?.error} />
      </form>
      <section>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </section>
    </div>
  );
}
