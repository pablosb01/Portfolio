"use client"; // Para Next.js 13 si usas app directory
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import { Cutive_Mono } from "next/font/google";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ContactButton from "../ContactButton/ContactButton";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

const cutive = Cutive_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
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

  const toggleMenu = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative lg:hidden">
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
        className={`fixed top-0 left-0 w-max h-screen bg-amber-500 dark:bg-cyan-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <nav className="flex flex-col p-4 h-full bg-gradient-to-b from-red-300 to-red-600 dark:bg-gradient-to-t dark:from-zinc-800 dark:to-indigo-800 relative z-50">
          <div className="h-full pl-4 flex flex-col justify-around">
            <img src="/yoliteral.png" className="w-36 h-36 self-center pr-4" />
            <div className='flex mx-auto p-4'>
              <ContactButton />
            </div>
            <div className="border-t-2 border-black dark:border-gray-600 h-full">
              <div>
                <h1
                  className={`font-garamond text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300`}
                >
                  Projects
                </h1>
              </div>
              <Link href="/nintendo">
                <p
                  className={`font-cutive text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  Nintendo Clone
                </p>
              </Link>
              <Link href="/score">
                <p
                  className={`font-cutive text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  SCORE Tracker
                </p>
              </Link>
              <Link href="/aqs">
                <p
                  className={`font-cutive text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  AquaReloaded
                </p>
              </Link>
            </div>
            <div className="border-t-2 border-black dark:border-gray-600 py-2 h-full">
              <div>
                <h1
                  className={`font-garamond text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300`}
                >
                  Social Media
                </h1>
              </div>
              <Link href="https://www.linkedin.com">
                <p
                  className={`font-cutive text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  LinkedIn
                </p>
              </Link>
              <Link href="https://github.com">
                <p
                  className={`font-cutive text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  GitHub
                </p>
              </Link>
            </div>
            <div className="flex flex-row justify-center w-full">
              <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
