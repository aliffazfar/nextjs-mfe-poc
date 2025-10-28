import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('login/LoginForm'), {
  ssr: false,
  loading: () => <p>Loading login form...</p>,
});

const UserProfile = dynamic(() => import('profile/UserProfile'), {
  ssr: false,
  loading: () => <p>Loading user profile...</p>,
});

export default function Home() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Host Application</h1>
      </div>

      <div className="my-12 border-2 border-red-500 ">
        <Suspense fallback={<p>Loading...</p>}>
          <LoginForm />
        </Suspense>
      </div>

      <div className="my-12 border-2 border-indigo-500">
        <Suspense fallback={<p>Loading...</p>}>
          <UserProfile user={user} />
        </Suspense>
      </div>
    </main>
  );
}