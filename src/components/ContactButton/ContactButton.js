import React from 'react'
import Link from 'next/link'
import { Mail } from "lucide-react"

const ContactButton = ( {text} ) => {
  return (
    <Link href="/contact" className="block w-fit shadow2">
      <div className="flex items-center justify-start px-4 py-2 text-left font-medium bg-red-400 hover:bg-red-600 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white border border-gray-600 hover:border-gray-500 rounded-md transition-colors duration-200">
        <Mail className="mr-2 h-4 w-4" />
        {text}
      </div>
    </Link>
  )
}

export default ContactButton