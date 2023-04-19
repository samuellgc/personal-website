import { ArticlesTypes } from '../../@types/types';

export default function Articles({...props}: ArticlesTypes) {
  return (
    <div className="flex flex-col p-5 gap-3 sm:max-w-xs">
      <h3 className='text-xl font-semibold'>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}