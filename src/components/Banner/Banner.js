"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useLocalization } from "@/app/context/LocalizationContext";

export default function Banner() {
  const { localizationData } = useLocalization();

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row relative z-10 transition-transform duration-300 ease-in-out shadow2">
        <Image
          src="/diazlogoclean2.png"
          alt="Ddev Logo"
          width={400}
          height={50}
        />
      </div>

      <div className="flex flex-col  items-center justify-center rounded-lg shadow2 text-center">
        
        <LanguageSwitcher />
      </div>
    </div>
  );
}