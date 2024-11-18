"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ContactButton from "../ContactButton/ContactButton";
import { useLocalization } from "../../app/context/LocalizationContext";
import LinkNav from "../LinkNav/LinkNav";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const { localizationData } = useLocalization();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="hamburger-menu"
        className="p-2 text-white bg-gradient-to-b from-red-400 to-red-600 dark:bg-gradient-to-b dark:from-indigo-400 dark:to-indigo-600 rounded-md focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      <div
        id="hamburger-menu"
        ref={menuRef}
        className={`fixed top-0 left-0 w-max z-[150] h-screen dark:bg-cyan-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col h-full bg-gradient-to-b from-red-300 to-red-600 dark:bg-gradient-to-t dark:from-zinc-800 dark:to-indigo-800 border-r-2 border-black dark:border-gray-600">
          <div className="h-full pl-4 flex flex-col justify-around">
            <Link href="/" className='w-36 h-36 self-center pr-4 shadow2' onClick={closeMenu}>
              <img
                src="/yoliteral.png"
                alt="Logo"
                className=""
              />
            </Link>
            <div className="flex mx-auto p-4" onClick={closeMenu}>
              <ContactButton text={localizationData.navigation.contact} />
            </div>

            {localizationData.navigation.items.map((item, index) => (
              <div
                key={index}
                className="h-full md:pl-4 flex flex-col md:justify-around justify-start"
              >
                <div className="border-t-2 border-black dark:border-gray-600 py-2 h-fit">
                  <h1 className="font-garamond text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300">
                    {item.part.title}
                  </h1>

                  {item.part.items.map((section, subIndex) => (
                    <div key={subIndex} onClick={closeMenu}>
                      {section.url && section.url[0] === "h" ? (
                        <div className="pr-3">
                          <Link href={section.url}>
                            <div className="font-cutive text-2xl hover:font-bold text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300">
                              {section.title}
                            </div>
                          </Link>
                        </div>
                      ) : (
                        <div className="pr-3">
                          <LinkNav href={section.url} text={section.title} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-row justify-center w-full p-10">
              <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
