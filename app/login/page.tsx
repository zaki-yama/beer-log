'use client';

import { LoginButton } from '../components/auth/login-button';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            ビールログにログイン
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            お気に入りのビールを記録しましょう
          </p>
        </div>
        <div className="mt-8">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
