import About from '@/components/sections/about';
import ExperiencesAndStudies from '@/components/sections/experiences-studies';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import Project from '@/components/sections/projects';
import Skill from '@/components/sections/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-10 gap-28 px-10 sm:pt-5 lg:px-36">
      <Hero />
      <About />
      <Project />
      <ExperiencesAndStudies />
      <Skill />
      <Footer />
    </main>
  );
}
