import About from '@/components/sections/about';
import ExperiencesAndStudies from '@/components/sections/experiences-studies';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import Project from '@/components/sections/projects';
import Skill from '@/components/sections/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-5 px-36 gap-28">
      <Hero />
      <About />
      <Project />
      <ExperiencesAndStudies />
      <Skill />
      <Footer />
    </main>
  );
}
