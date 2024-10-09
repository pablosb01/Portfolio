"use client";

import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";

export default function score() {
  return (
    <>
      <div className="m-12">
        <h1 className="font-kanit text-4xl border-b-2 border-b-red-400 dark:border-b-indigo-500">
          Score Tracker
        </h1>
        <div className="my-10 flex gap-2 flex-col">
          <p className={`font-abel text-2xl`}>
            Primer proyecto creado desde cero por nuestro equipo, donde usamos
            Figma para el diseño, Trello para la división de tareas y GitHub
            para el control de versiones.
          </p>
          <p className="font-abel text-2xl">
            La base del proyecto es crear una plataforma dedicada a los Gamers
            donde puedan ver las estadisticas de sus juegos favoritos en el
            mismo sitio. Para esta pagina elegimos usar React y Tailwind, usando
            Vite.
          </p>
          <p className="font-abel text-2xl">
            Las partes desarrolladas por mi fueron la home, navbar y distintos
            componentes de la parte de Valorant asi como toda la logica aplicada
            para calcular las estadísticas.
          </p>
        </div>

        <h1 className="font-kanit text-3xl">Home</h1>
        <div className="my-3 flex flex-col">
          <p className={`font-abel text-2xl`}>
            En esta ruta se puede ver un acceso directo a los dos juegos que
            estan implementados en la web asi como otros dos que estan en
            proceso.
          </p>
        </div>

        <ScreenShotComp
          src={"/score/scorehome.png"}
          videoSrc={"/score/scorehome.mp4"}
          alt="Nintendo Clone Characters"
        />

        <h1 className="font-kanit text-3xl">Valorant Home</h1>
        <div className="my-3 flex flex-col">
          <p className={`font-abel text-2xl`}>
            En la pagina principal del Valorant se puede observar un buscador
            para introducir tu nombre de usuario, un apartado con los agentes
            que existen en el juego y los porcentajes de victorias y pick que
            tienen en las partidas, y una tabla donde se pueden ver los 3
            mejores jugadores de la región de Europa. Tambien se puede apreciar
            en esta imagen un detalle en la barra de navegación, que la pagina
            en la que te encuentras se pone del mismo color que el fondo de la
            pagina para que de un efecto de profundidad.
          </p>
        </div>

        <ScreenShotComp
          src={"/score/valohome.png"}
          videoSrc={"/score/valohome.mp4"}
          alt="Nintendo Clone Characters"
        />

        <h1 className="font-kanit text-3xl">Valorant Profile</h1>
        <div className="my-3 flex flex-col">
          <p className={`font-abel text-2xl`}>
            En la pagina del jugador de Valorant, puedes ver a la izquierda un
            resumen de tus estadisticas, la media de las ultimas 10 partidas
            jugadas en tu cuenta, y a la derecha el resumen de cada partida en
            concreto, con las estadisticas de esa partida en concreto, el agente
            jugado y la fecha en la cual este partido fue jugado. A dia de hoy
            esta parte es funcional, ya que estamos en comunicacion con riot
            para que nos brinden acceso a su API, en el momento que nos den
            acceso sera totalmente funcional ya que esta todo preparado para
            ello.
          </p>
        </div>

        <ScreenShotComp
          src={"/score/profileval.png"}
          videoSrc={"/score/playerval.mp4"}
          alt="Nintendo Clone Characters"
        />
      </div>
    </>
  );
}
