import IconLinks from '../ui/icon-links';

export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-white p-10">
      <p>© {new Date().getFullYear()} Samuel Carneiro</p>
      <IconLinks />
    </footer>
  );
}