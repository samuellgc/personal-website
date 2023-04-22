import IconLinks from '../ui/icon-links';
import ImageComponent from '../ui/image';
import Perfil from '../../utils/images/perfil.jpg';

export default function Hero() {
  return (
    <main className="flex w-full flex-col gap-2 justify-center items-center md:h-screen">
      <ImageComponent size='normal' imagePath={Perfil} alt='Foto de perfil do Samuel Carneiro'/>
      <h2 className="font-bold text-center sm:text-2xl">Dev. Samuel Carneiro</h2>
      <p className='text-center'>Desenvolvedor full-stack com foco em Front-end e gestão de equipes.</p>
      <IconLinks />
    </main>
  );
}