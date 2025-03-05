'use client';

import { signIn } from 'next-auth/react';
import { Button } from '../ui/button';

export function LoginButton() {
  return (
    <Button
      onClick={() => signIn('google', { callbackUrl: '/' })}
      className="w-full"
    >
      Googleでログイン
    </Button>
  );
}
