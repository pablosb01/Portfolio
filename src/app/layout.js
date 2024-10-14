import localFont from "next/font/local";
import "./globals.css";
import LeftNav from "@/components/nav/nav";
import NavBarMobile from "@/components/NavBarMobile/NavBarMobile";
import Banner from "@/components/Banner/Banner";
import '@fontsource/eb-garamond'; // EB Garamond
import '@fontsource/cutive-mono'; // Cutive Mono
import '@fontsource/kanit'; // Kanit
import '@fontsource/poppins'; // Poppins
import '@fontsource/abel'; // Abel

export const metadata = {
  title: "Diaz Developer",
  description: "Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-abel h-full w-full antialiased transition-colors duration-300 bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-white`}
      >

        <div className='flex flex-col h-screen lg:hidden m-x-auto'>
         <NavBarMobile />
         {children}
        </div>

        <div className="h-full flex-row hidden lg:flex">
          <LeftNav />
          <div className="min-h-screen w-full flex flex-col">
            <div className="h-fit w-full flex justify-center p-10 border-b-2 border-black dark:border-gray-600 bg-zinc-400 dark:bg-zinc-800 transition-colors duration-300">
              <Banner />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
