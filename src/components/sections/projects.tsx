import { projects, titleProject } from '@/utils/data/project';
import { CardProject } from '../ui/cards';
import Title from '../ui/title';

export default function Project() {
  return (
    <section className='flex flex-col gap-8'>
      <Title title={titleProject} />
      <CardProject projects={projects} />
    </section>
  );
}