"use client";
import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";

export default function nintendo() {
  return (
    <>
      <div className="m-12">
        <h1 className="font-kanit text-4xl border-b-2 border-b-red-400 dark:border-b-indigo-500">
          Nintendo Clone
        </h1>
        <div className="my-10 flex gap-2 flex-col">
          <p className={`font-abel text-2xl`}>
            Este fue mi primer proyecto, desarrollado en grupo, con mi equipo de
            DevelHope, donde aprendimos a trabajar en equipo, usando Trello
            paraF la division de tareas y GitHub para el control de versiones.
          </p>
          <p className="font-abel text-2xl">
            El proyecto trata de clonar la pagina principal de Nintendo con el
            fin de mejorar nuestras habilidades como desarrolladores novatos y
            aprender a utilizar HTML y CSS, que eran los conocimientos que
            estabamos adquiriendo en ese momento.
          </p>
          <p className="font-abel text-2xl">
            Las dos partes que elegi yo fueron Characters y el Footer de la
            pagina, donde hay acceso directo a todos los directorios de la
            pagina de nintendo y temas legales.
          </p>
        </div>

        <h1 className="font-kanit text-3xl">Characters</h1>
        <div className="my-3 flex flex-col">
          <p className={`font-abel text-2xl`}>
            En este segmento de la pagina se puede ver los principales
            personajes de la franquicia, como Mario, Link, y Pikachu, entre
            otros. Cuenta con un efecto hover en cada imagen que da una
            sensación de profundidad.
          </p>
        </div>

        <ScreenShotComp
          src={"/nintendo/charactersnintendo.png"}
          videoSrc={"/nintendo/nintendovid.mp4"}
          alt="Nintendo Clone Characters"
        />

        <h1 className="font-kanit text-3xl">Footer</h1>
        <div className="my-3 flex flex-col">
          <p className={`font-abel text-2xl`}>
            En este otro segmento se pueden distinguir 3 partes, la primera,
            roja, que cuenta con el logo y un acceso directo a las redes
            sociales de la compañía. La segunda, en fondo blanco, cuenta con los
            enlaces a todas las rutas de la pagina, separado por secciones para
            una mejor navegación.
          </p>
        </div>

        <ScreenShotComp
          src={"/nintendo/nintendofooter.png"}
          videoSrc={"/nintendo/footernintendovideo.mp4"}
          alt="Nintendo Clone Footer"
        />
      </div>
    </>
  );
}
