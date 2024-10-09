'use client';
import Link from "next/link";
import { Cutive_Mono } from "next/font/google";

const cutive = Cutive_Mono({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function LinkNav({ href, text }) {
    return (
        <>
            <Link
              href={href}
              className={`font-cutive text-2xl hover:font-bold text-black dark:text-gray-300 dark:hover:text-indigo-500 hover:text-zinc-900 transition-colors duration-300 hover:cursor-pointer`}
            >
              {text}
            </Link>
        </>
    );
}
