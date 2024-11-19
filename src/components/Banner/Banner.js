"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useLocalization } from "@/app/context/LocalizationContext";

export default function Banner() {
  const { localizationData } = useLocalization();

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row relative z-10 transition-transform duration-300 ease-in-out shadow2">
        <Image
          src="/diazlogoclean2.png"
          alt="Ddev Logo"
          width={896}
          height={102}
        />
      </div>

      <div className="absolute right-0 p-4 flex flex-col items-center justify-center rounded-lg shadow2 text-center bg-zinc-200 dark:bg-zinc-600 m-6">
        <p>{localizationData.navigation.change_language}</p>
        <LanguageSwitcher />
      </div>
    </div>
  );
}