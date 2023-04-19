import Image from 'next/image';
import { ProfileImage } from '@/@types/types';

export default function ProfileImg({ ...props }: ProfileImage) {
  return (
    <>
      <Image
        className={`
          border 
          border-white 
          ${props.size === 'small' && 'w-10 h-10'} 
          ${props.size === 'normal' && 'w-40 h-40'}
          ${props.size === 'large' && 'w-auto h-[500px]'}
          ${props.size === 'large' ? 'rounded-lg' : 'rounded-full'}
          ${props.className && props.className}
          `}
        src={props.imagePath}
        alt={'Imagem de perfil Samuel Carneiro'}
      />
    </>
  );
}