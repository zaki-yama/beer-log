'use client';

import Link from 'next/link';
import { useAuth } from '../hooks/use-auth';
import { LoginButton } from './auth/login-button';
import { Button } from '../components/ui/button';
import { signOut } from 'next-auth/react';

export function Header() {
  const { user, isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">🍺 Beer Log</span>
          </Link>
          {isAuthenticated && (
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/beers"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Beers
              </Link>
              <Link
                href="/add"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Add Beer
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm">{user?.name}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                ログアウト
              </Button>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
}
