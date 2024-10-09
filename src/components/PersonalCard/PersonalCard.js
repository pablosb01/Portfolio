import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function PersonalCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow2 overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="relative md:shrink-0">
          <div className="absolute inset-0 bg-red-500 opacity-80 dark:bg-indigo-500 transition-colors duration-300 ease-in-out"></div>

          <Image
            className="relative h-48 w-full object-cover md:h-full md:w-48 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-3"
            src="/cara.png?height=200&width=200"
            alt="Foto de perfil"
            width={200}
            height={200}
          />
        </div>

        <div className="p-8 z-50 bg-zinc-200 dark:bg-zinc-200">
          <div className="uppercase font-kanit tracking-wide text-md text-red-500 dark:text-indigo-400 font-semibold">
            Desarrollador Web
          </div>
          <h1
            className={`font-kanit block mt-1 text-lg leading-tight font-bold text-black`}
          >
            Pablo Diaz Cardin
          </h1>
          <p className={`font-pop mt-2 text-slate-800`}>
            Soy un apasionado desarrollador web con conocimientos en React,
            Next.js y Tailwind CSS. Me encanta crear experiencias web atractivas
            y funcionales. Quiero unirme a un proyecto para continuar con mi
            desarrollo profesional y aportar todo mi conocimiento y experiencia
            a la empresa.
          </p>
          <div className="mt-4 flex space-x-3">
            <a
              href="https://github.com/pablosb01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 dark:text-indigo-400 hover:dark:text-indigo-800 transform hover:scale-110 transition-transform"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/pablosb01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 dark:text-indigo-400 hover:dark:text-indigo-800 transform hover:scale-110 transition-transform"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="pablosb01@icloud.com"
              className="text-red-500 hover:text-red-700 dark:text-indigo-400 hover:dark:text-indigo-800 transform hover:scale-110 transition-transform"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
