import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <main className="flex w-full flex-col sm:gap-2 sm:justify-center sm:items-center md:h-screen">
      <h2 className="text-2xl font-bold ">Dev. Samuel Carneiro</h2>
      <p>Desenvolvedor full-stack com foco em Front-end e gestão de equipes.</p>
      <div className='flex gap-2'>
        <a href="https://github.com/samuellgc" target='_blank'><FaGithub /></a>
        <a href="https://wa.me/5585999194330" target='_blank'><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/samuel-lopes-galrao-carneiro-0a748a115/" target='_blank'><FaLinkedin /></a>
        <a href="mailto:samuellgc@hotmail.com" target='_blank'><FaEnvelope /></a>
      </div>
    </main>
  );
}