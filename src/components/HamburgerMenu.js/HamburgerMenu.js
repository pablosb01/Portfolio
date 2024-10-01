"use client"; // Para Next.js 13 si usas app directory
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import { Cutive_Mono } from "next/font/google";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

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
        setIsOpen(false)
    } else {
        setIsOpen(true)
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
    <div className="relative lg:hidden pr-5 z-50">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="hamburger-menu"
        className="p-2 text-white bg-gradient-to-b from-amber-400 to-amber-600 rounded-md focus:outline-none z-50"
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
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col p-4 h-full bg-gradient-to-b from-amber-400 to-amber-600 dark:bg-gradient-to-b dark:from-zinc-600 dark:to-zinc-800">
          <div className="h-full pl-4 flex flex-col justify-around">
            <img src='/smalllogonav.png' className='w-36 h-36 self-center pr-4'/> 
            <div className="border-t-2 border-black dark:border-gray-600 py-2 h-full">
              <Link href="/about">
                <h1
                  className={`${cutive.className} text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300`}
                >
                  About Me
                </h1>
              </Link>
              <Link href="/development">
                <p
                  className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  Development
                </p>
              </Link>
            </div>
            <div className="border-t-2 border-black dark:border-gray-600 py-2 h-full">
              <Link href="/projects">
                <h1
                  className={`${garamond.className} text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300`}
                >
                  Projects
                </h1>
              </Link>
              <Link href="/projects/nintendo-clone">
                <p
                  className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  Nintendo Clone
                </p>
              </Link>
              <Link href="/projects/score-tracker">
                <p
                  className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  SCORE Tracker
                </p>
              </Link>
              <Link href="/projects/aqua-reloaded">
                <p
                  className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  AquaReloaded
                </p>
              </Link>
            </div>
            <div className="border-t-2 border-black dark:border-gray-600 py-2 h-full">
              <Link href="/social-media">
                <h1
                  className={`${garamond.className} text-3xl font-semibold text-black dark:text-gray-300 transition-colors duration-300`}
                >
                  Social Media
                </h1>
              </Link>
              <Link href="https://www.linkedin.com">
                <p
                  className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  LinkedIn
                </p>
              </Link>
              <Link href="https://github.com">
                <p
                  className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  GitHub
                </p>
              </Link>
              <Link href="https://twitter.com">
                <p
                  className={`${cutive.className} text-2xl text-black dark:text-gray-300 dark:hover:text-violet-400 transition-colors duration-300 hover:cursor-pointer`}
                >
                  Twitter
                </p>
              </Link>
            </div>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </div>
        </nav>
      </div>
    </div>
  );
}
