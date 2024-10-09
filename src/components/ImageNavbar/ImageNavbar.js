import Image from "next/image";
import Link from "next/link";

export default function ImageNavbar() {
  return (
    <Link href="/">
      <Image
        src="/yoliteral.png"
        alt="Ddev Logo"
        width={300}
        height={170}
        className="relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110 shadow2"
      />
    </Link>
  );
}
