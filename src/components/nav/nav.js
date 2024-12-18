"use client";

import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ImageNavbar from "../ImageNavbar/ImageNavbar";
import { useEffect, useState } from "react";
import LinkNav from "../LinkNav/LinkNav";
import ContactButton from "../ContactButton/ContactButton";
import { useLocalization } from "../../app/context/LocalizationContext";

export default function LeftNav() {
  const [theme, setTheme] = useState("light");
  const { localizationData } = useLocalization();
  const pathname = usePathname();

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

  const isActive = (url) => {
    return pathname === url;
  };

  return (
    <div className="sticky top-0 h-[100vh] flex-row hidden lg:flex">
      <div className="group w-10 hover:w-80 h-full flex flex-row-reverse border-r-2 rounded-br-3xl border-black dark:border-gray-600 transition-all duration-300 bg-zinc-400 dark:bg-zinc-800 overflow-hidden">
        <div className="flex items-center justify-center w-10 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            fill="none"
            className="stroke-current text-black dark:text-white"
          >
            <polyline points="16 16 32 32 16 48" />
            <polyline points="32 16 48 32 32 48" />
          </svg>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-[200ms] group-hover:duration-[600ms] ease-linear group-hover:ease-in flex flex-col h-full w-full pl-4">
          <div className="relative w-fit h-fit p-2 flex flex-col gap-5 items-center">
            <div className="group relative flex justify-center h-48 items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-48 h-48 shadow2 bg-red-400 dark:bg-indigo-500 transition-colors duration-500 rounded-full"></div>
              </div>
              <ImageNavbar />
            </div>
          </div>

          {localizationData.navigation.items.map((item, index) => (
            <div
              key={index}
              className="h-full pl-4 w-64 flex flex-col justify-around"
            >
              <div className="border-t-2 border-black dark:border-gray-600 py-2 h-fit">
                <h1 className="font-garamond text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300">
                  {item.part.title}
                </h1>

                {item.part.items.map((section, subIndex) => (
                  <div key={subIndex} className="">
                    {section.url && section.url[0] === "h" ? (
                      <div>
                        <a
                          href={section.url}
                          target={section.target}
                          rel="noopener noreferrer"
                          className={`font-cutive text-2xl hover:font-bold text-black dark:text-gray-300 dark:hover:text-indigo-500 transition-colors duration-300 hover:cursor-pointer ${
                            isActive(section.url) ? "bg-red-500" : ""
                          }`}
                        >
                          {section.title}
                        </a>
                      </div>
                    ) : (
                      <div>
                        <LinkNav href={section.url} text={section.title} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-center p-4 mt-14">
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}
