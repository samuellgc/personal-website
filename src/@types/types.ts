import { StaticImageData } from 'next/image';

// Image
export type ImagesTypes = {
  size: 'small' | 'normal' | 'large'
  imagePath: StaticImageData
  className?: string
  alt: string 
}

// Articles
export type ArticlesTypes = {
  title?: string
  body: string
}