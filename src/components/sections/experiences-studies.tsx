import List from '../composition/lists';
import Title from '../ui/title';

export default function ExperiencesAndStudies() {
  return (
    <section className='flex flex-col gap-7'>
      <Title title='Estudo e experiências'/>
      <List />
    </section>
  );
}