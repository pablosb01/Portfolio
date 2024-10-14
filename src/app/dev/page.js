"use client";
import Image from "next/image";
import TitleText from "@/components/TitleText/TitleText";
import ParaText from "@/components/ParaText/ParaText";

export default function dev() {
  return (
    <>
      <div className="m-12 flex flex-col gap-8">
        <TitleText text="Sobre mí" />

        <div className="flex flex-col 2xl:flex-row gap-8 w-full justify-around">
          <div className="flex flex-col 2xl:flex-row items-center gap-8">
            <Image
              src="/cara.png"
              width={200}
              height={200}
              className="bg-red-400 dark:bg-indigo-500 rounded-xl shadow-lg flex-shrink-0"
            />
            <ParaText
              text="Soy un desarrollador web FullStack con formación en DevelHope, donde
      adquirí una sólida base en tecnologías como JavaScript, React y
      Express. Tengo experiencia en el desarrollo de aplicaciones web y el
      trabajo en equipo, aplicando metodologías ágiles como Scrum y
      gestionando proyectos con Git. Me considero una persona proactiva,
      con habilidades para resolver problemas y adaptarme a situaciones
      bajo presión."
              className="flex-grow hidden lg:relative"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-around gap-10">
            <div className="flex flex-col w-fit">
              <TitleText text="Aptitudes" />
              <ul className="list-disc ml-8 text-2xl m-4 w-max">
                <li>JavaScript</li>
                <li>SQL</li>
                <li>React</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>HTML + CSS</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="flex flex-col w-fit">
              <TitleText text="Habilidades" />
              <ul className="list-disc ml-8 text-2xl m-4 w-max">
                <li>Buena comunicación</li>
                <li>Resolución de problemas</li>
                <li>Trabajo en equipo</li>
                <li>Creatividad</li>
                <li>Capacidad de liderazgo</li>
                <li>Español (nativo)</li>
                <li>Inglés (avanzado)</li>
              </ul>
            </div>
          </div>
        </div>

        <TitleText text="Información Académica" />

        <div className="flex flex-col gap-2">
          <h1 className="font-pop text-2xl underline bold">DevelHope</h1>
          <div className="flex flex-col gap-2">
            <ParaText text="FullStack Web Developer | Octubre 2023 - Julio 2024" />
            <ParaText
              text="Bootcamp la cual me brindo la oportunidad de conocer a fondo
              lenguajes como JavaScript y TypeScript asi como enfrentar desafios
              laborales reales usando HTML, CSS, React y Node.js."
            />
          </div>
          <h1 className="font-pop text-2xl underline bold">IES Infiesto</h1>
          <div className="flex flex-col gap-2">
            <ParaText text="Bachillerato Científico Tecnológico | Septiembre 2019 - Julio 2021" />
          </div>
        </div>
      </div>
    </>
  );
}
