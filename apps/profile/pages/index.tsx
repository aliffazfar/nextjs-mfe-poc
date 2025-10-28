import UserProfile from '../components/UserProfile';

export default function Home() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Profile Application</h1>
      </div>

      <div className="my-12">
        <UserProfile user={user} />
      </div>
    </main>
  );
}