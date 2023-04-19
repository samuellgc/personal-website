import IconLinks from '../ui/icon-links';

export default function Hero() {
  return (
    <main className="flex w-full flex-col sm:gap-2 sm:justify-center sm:items-center md:h-screen">
      <h2 className="text-2xl font-bold ">Dev. Samuel Carneiro</h2>
      <p>Desenvolvedor full-stack com foco em Front-end e gestão de equipes.</p>
      <IconLinks />
    </main>
  );
}