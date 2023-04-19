import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function IconLinks() {
  return (
    <div className='flex gap-2'>
      <a href="https://github.com/samuellgc" target='_blank'><FaGithub /></a>
      <a href="https://wa.me/5585999194330" target='_blank'><FaWhatsapp /></a>
      <a href="https://www.linkedin.com/in/samuel-lopes-galrao-carneiro-0a748a115/" target='_blank'><FaLinkedin /></a>
      <a href="mailto:samuellgc@hotmail.com" target='_blank'><FaEnvelope /></a>
    </div>
  );
}