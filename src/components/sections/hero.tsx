import IconLinks from '../ui/icon-links';
import ProfileImg from '../ui/profile-img';
import Perfil from '../../utils/images/perfil.jpg';

export default function Hero() {
  return (
    <main className="flex w-full flex-col sm:gap-2 sm:justify-center sm:items-center md:h-screen">
      <ProfileImg size='normal' imagePath={Perfil} alt='Foto de perfil do Samuel Carneiro'/>
      <h2 className="text-2xl font-bold ">Dev. Samuel Carneiro</h2>
      <p>Desenvolvedor full-stack com foco em Front-end e gestão de equipes.</p>
      <IconLinks />
    </main>
  );
}