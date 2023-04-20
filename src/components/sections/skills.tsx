import { FaNode, FaReact, FaVuejs } from 'react-icons/fa';
import { SiExpress, SiMysql, SiNextdotjs, SiSass, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { CardSkills } from '../ui/cards';
import { titleSkillPt } from '../../utils/data/skill';
import Title from '../ui/title';

export default function Skill() {
  return (
    <section className='flex flex-col gap-8 justify-center'>
      <Title title={titleSkillPt} />
      <div className='flex gap-3 justify-center w-1/2 flex-wrap mx-auto'>
        <CardSkills icon={<FaReact />} title='React' />
        <CardSkills icon={<SiNextdotjs />} title='Next' />
        <CardSkills icon={<SiTailwindcss />} title='Tailwind' />
        <CardSkills icon={<FaVuejs />} title='Vue' />
        <CardSkills icon={<FaNode />} title='Node' />
        <CardSkills icon={<SiExpress />} title='Express' />
        <CardSkills icon={<SiTypescript />} title='TypeScript' />
        <CardSkills icon={<SiSass />} title='SASS' />
        <CardSkills icon={<SiMysql />} title='MySQL' />
      </div>
    </section>
  );
}