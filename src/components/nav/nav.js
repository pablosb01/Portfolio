"use client";

import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import { Cutive_Mono } from "next/font/google";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ImageNavbar from "../ImageNavbar/ImageNavbar";
import { useEffect, useState } from "react";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

const cutive = Cutive_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function LeftNav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  
  return (
    <div className="sticky hidden lg:flex w-fit h-screen flex flex-col border-r-2 border-black dark:border-gray-600 transition-colors duration-300 bg-white dark:bg-zinc-800">
      <div className="relative w-fit h-fit p-2">
        <div className="group relative flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-48 h-48 bg-slate-400 dark:bg-slate-50 transition-colors duration-300 rounded-full opacity-50 transition-transform duration-300 ease-in-out transform group-hover:scale-90"></div>
          </div>
          <ImageNavbar theme={theme} />
        </div>
      </div>
      <div className="h-full pl-4 flex flex-col justify-around">
        <div className="border-t-2 border-black dark:border-gray-600 py-2 h-full">
          <h1
            className={`${garamond.className} text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300`}
          >
            About me
          </h1>
          <p
            className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
          >
            Development
          </p>
        </div>
        <div className="border-t-2 border-black dark:border-gray-600 py-2 h-full">
          <h1
            className={`${garamond.className} text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300`}
          >
            Projects
          </h1>
          <p
            className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
          >
            Nintendo Clone
          </p>
          <p
            className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
          >
            SCORE tracker
          </p>
          <p
            className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
          >
            AquaReloaded
          </p>
        </div>
        <div className="border-t-2 border-black dark:border-gray-600 py-2 h-full">
          <h1
            className={`${garamond.className} text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300`}
          >
            Social Media
          </h1>
          <p
            className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
          >
            LinkedIn
          </p>
          <p
            className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
          >
            GitHub
          </p>
          <p
            className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
          >
            Twitter
          </p>
        </div>
        <ThemeToggle toggleTheme={toggleTheme} theme={theme}/>
      </div>
    </div>
  );
}
