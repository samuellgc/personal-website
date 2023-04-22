import { FaNode, FaReact, FaVuejs } from 'react-icons/fa';
import { DiScrum } from 'react-icons/di';
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb';
import { SiExpress, SiMysql, SiNextdotjs, SiPhp, SiSass, SiTailwindcss } from 'react-icons/si';
import { CardSkills } from '../ui/cards';
import { titleSkillPt } from '../../utils/data/skill';
import Title from '../ui/title';

export default function Skill() {
  return (
    <section className='flex flex-col gap-8 justify-center mb-20'>
      <Title title={titleSkillPt} />
      <div className='flex gap-10 max-w-[560px] justify-center flex-wrap mx-auto'>
        <CardSkills icon={<FaReact />} title='React' />
        <CardSkills icon={<SiNextdotjs />} title='Next' />
        <CardSkills icon={<FaVuejs />} title='Vue' />
        <CardSkills icon={<SiTailwindcss />} title='Tailwind' />
        <CardSkills icon={<SiSass />} title='SASS' />
        <CardSkills icon={<TbBrandJavascript />} title='JavaScript' />
        <CardSkills icon={<TbBrandTypescript />} title='TypeScript' />
        <CardSkills icon={<FaNode />} title='Node' />
        <CardSkills icon={<SiExpress />} title='Express' />
        <CardSkills icon={<SiPhp />} title='PHP' />
        <CardSkills icon={<SiMysql />} title='MySQL' />
        <CardSkills icon={<DiScrum />} title='Scrum' />
      </div>
    </section>
  );
}