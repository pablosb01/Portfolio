"use client";

import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu.js/HamburgerMenu";

export default function NavBarMobile() {
  return (
    <div className="sticky flex lg:hidden min-w-full h-fit">
      <div className='flex flex-row items-center w-full bg-white dark:bg-zinc-800 justify-center p-4 bg-'>
        <HamburgerMenu />
        <Image 
          src="/2ddevgrande.png" 
          width={330} 
          height={40} 
          layout="responsive"
          className="pt-2 object-contain"
          />
      </div>
    </div>
  );
}
