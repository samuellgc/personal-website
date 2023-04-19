import { StaticImageData } from 'next/image';

export type ProfileImage = {
  size: 'small' | 'normal' | 'large'
  imagePath: StaticImageData
  className?: string 
}