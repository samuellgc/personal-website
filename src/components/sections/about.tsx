import ImageComponent from '../ui/image';
import NebulosaImagem from '../../utils/images/nebulosa.jpg';
import { aboutPtBr, quemSouEu, tituloCard } from '@/utils/data/about';
import Articles from '../composition/articles';

export default function About() {
  return (
    <section className='flex gap-8 flex-col'>
      <h2 className='font-bold text-3xl w-full text-center uppercase'>{tituloCard}</h2>
      <div className='flex gap-4'>
        <ImageComponent size='large' imagePath={NebulosaImagem} alt='Capa Espaço' />
        <Articles body={aboutPtBr} title={quemSouEu} />
      </div>
    </section>
  );
}