import ImageComponent from '../ui/image';
import NebulosaImagem from '../../utils/images/nebulosa.jpg';
import { aboutPtBr, quemSouEu, tituloCard } from '@/utils/data/about';
import Articles from '../composition/articles';
import Title from '../ui/title';

export default function About() {
  return (
    <section className='flex gap-8 flex-col md:h-screen'>
      <Title title={tituloCard} />
      <div className='flex justify-between'>
        <Articles body={aboutPtBr} title={quemSouEu} className='w-full md:max-w-md'/>
        <ImageComponent className='hidden md:flex' size='large' imagePath={NebulosaImagem} alt='Capa Espaço' />
      </div>
    </section>
  );
}