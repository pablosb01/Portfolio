import Image from 'next/image';

export default function ImageNavbar({ theme }) {
  return (
    <Image
      src={theme === 'dark' ? '/yoliteral.png' : '/yoliteral.png'}
      alt="Ddev Logo"
      width={300}
      height={170}
      className="relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110"
    />
  );
}
