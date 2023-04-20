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

// Cards
export type CardSkillType = {
  icon?: JSX.Element
  title?: string
}

// Skill
export type SkillType = {
  title: string
}

// Types
export type TitleType = {
  title: string
}