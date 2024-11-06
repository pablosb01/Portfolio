'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LinkNav({ href, text }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`font-cutive text-2xl hover:font-bold transition-colors duration-300 hover:cursor-pointer ${
        isActive
          ? "text-zinc-900 dark:text-indigo-400 font-bold"
          : "text-black dark:text-gray-300 hover:text-zinc-900 dark:hover:text-indigo-500"
      }`}
    >
      {text}
    </Link>
  )
}