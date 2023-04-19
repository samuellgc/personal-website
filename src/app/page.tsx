import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10">
      <Hero />
      <About />
    </main>
  );
}
