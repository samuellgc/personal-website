import Image from 'next/image';
import { ImagesTypes } from '@/@types/types';

export default function ImageComponent({ ...props }: ImagesTypes) {
  return (
    <>
      <Image
        src={props.imagePath}
        alt={props.alt}
        className={`
          border 
          border-white 
          ${props.size === 'small' && 'w-10 h-10'} 
          ${props.size === 'normal' && 'w-40 h-40'}
          ${props.size === 'large' && 'w-auto h-[500px]'}
          ${props.size === 'large' ? 'rounded-lg' : 'rounded-full'}
          ${props.className && props.className}
        `}
      />
    </>
  );
}