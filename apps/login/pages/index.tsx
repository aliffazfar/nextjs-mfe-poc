import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Login Application</h1>
      </div>

      <div className="my-12 ">
        <LoginForm />
      </div>
    </main>
  );
}