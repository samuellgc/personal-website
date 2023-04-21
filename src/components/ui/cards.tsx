import { CardSkillType, ProjectType, Projects } from '@/@types/types';
import { FaFolderOpen, FaGithub } from 'react-icons/fa';

export function CardSkills({ ...props }: CardSkillType) {
  return (
    <div className='px-10 py-2 h-max bg-slate-200 text-black rounded sm:w-40'>
      <span className='flex gap-2 justify-center items-center'>
        {props.icon}{props.title}
      </span>
    </div>
  );
}

export function CardProject({ projects }: Projects) {
  return (
    <div className='flex gap-10 flex-wrap'>
      {
        projects.map((project: ProjectType, index: number) => {
          return (
            <div className='flex flex-col w-80 h-72 border border-white rounded p-8 gap-3' key={index}>
              <div className='flex justify-between'>
                <FaFolderOpen className='text-2xl' />
                <a href={project.url} target='_blank'>
                  <FaGithub className='text-2xl' />
                </a>
              </div>
              <div className='flex flex-col'>
                <p className='font-semibold text-lg'>{project.title}</p>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}