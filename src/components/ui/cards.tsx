import { CardSkillType } from '@/@types/types';

export function CardSkills({ ...props }: CardSkillType) {
  return (
    <div className='px-10 py-2 bg-slate-200 text-black rounded sm:w-40'>
      <span className='flex gap-2 justify-center items-center'>
        {props.icon}{props.title}
      </span>
    </div>
  );
}

export function CardProject() {
  return (
    <div></div>
  );
}