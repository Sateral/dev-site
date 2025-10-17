import About from '@/app/_sections/about';

export default function Home() {
  return (
    <div className="grainy font-sans min-h-screen">
      <main className="flex flex-col p-6">
        <About />
      </main>
    </div>
  );
}
