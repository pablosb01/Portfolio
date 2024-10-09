"use client";

import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu.js/HamburgerMenu";

export default function NavBarMobile() {
  return (
    <div className="sticky flex lg:hidden min-w-full h-fit">
      <nav className='flex flex-row min-w-full items-center w-full bg-zinc-400 dark:bg-zinc-800 justify-center p-4 pl-8 gap-4'>
        <HamburgerMenu />
        <Image 
          src="/diazlogoclean3.png" 
          width={330} 
          height={40}
          className="pt-2 object-contain shadow2"
          />
      </nav>
    </div>
  );
}
