import MfeContainer from "@/components/MfeContainer";

export default function Home() {
  return (
    <main style={{ backgroundColor: 'white', color: 'black', padding: '2em' }}>
      <h1 className="text-4xl font-bold">Next.js Host Application</h1>
      <div className="my-12">
        <MfeContainer />
      </div>
    </main>
  );
}
