import { TitleType } from '@/@types/types';

export default function Title({ ...props }: TitleType) {
  return (
    <h2 className='font-bold text-3xl w-full text-center uppercase'>{props.title}</h2>
  );
}