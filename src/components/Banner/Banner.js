"use client";
import Image from "next/image";

export default function Banner() {
  return (
    
      <Image
        src="/diazlogoclean2.png"
        alt="Ddev Logo"
        width={896}
        height={102}
        className="relative z-10 transition-transform duration-300 ease-in-out"
      />
    
  );
}
