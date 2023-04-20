import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import Skill from '@/components/sections/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-5 px-10 gap-10">
      <Hero />
      <About />
      <Skill />
    </main>
  );
}
