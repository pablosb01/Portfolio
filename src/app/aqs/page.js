"use client";

import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";

export default function aqs() {
  return (
    <>
      <div className="m-12">
        <h1 className="font-kanit text-4xl border-b-2 border-b-red-400 dark:border-b-indigo-500">
          AquaReloaded
        </h1>
        <div className="my-10 flex gap-2 flex-col">
          <p className={`font-abel text-2xl`}>
            Primer proyecto personal, de la mano de mi compañero{" "}
            <a
              className="text-red-500 dark:text-indigo-400 hover:underline"
              href="https://portafolio-toni-lluesma.vercel.app/"
              target="_blank"
            >
              {" "}
              Antonio Martínez
            </a>
            , en el que intentamos darle una nueva visión a la pagina web del
            festival Aquasella, dandole un enfoque mas creativo y visual, con el
            fin de organizar mejor el espacio para brindar informacion de forma
            efectiva
          </p>
          <p className="font-abel text-2xl">
            Las tecnologías usadas en este proyecto, fueron una vez mas, Figma
            para el diseño de la pagina, GitHub para el control de versiones, y
            React. Decidimos optar por el framework Next.js, ya que investigando
            nos dimos cuenta que era la biblioteca de react que mas facilidades
            te brindaba y una de las mas avanzadas.
          </p>
          <p className="font-abel text-2xl">
            Casi todo el proyecto esta desarrollado en conjunto entre mi
            compañero Antonio y yo, apoyandonos en todo momento el uno en el
            otro, aportando ideas y trabajando como una sola persona.
          </p>
        </div>

        <ScreenShotComp
          src={"/aqs/aquahome.png"}
          videoSrc={"/aqs/aquahome.mp4"}
          alt="Nintendo Clone Characters"
        />

        <div className="my-3 flex flex-col gap-5">
          <p className={`font-abel text-2xl`}>
            Podeis acceder a la pagina completa haciendo click{" "}
            <a
              className="text-red-400 dark:text-indigo-500 hover:underline"
              href="https://aqua-reloaded.vercel.app"
              target="_blank"
            >
              aquí
            </a>
            {} y navegar a través de ella, la pagina cuenta con todas las rutas
            que tenia la original, mas alguna adicional que decidimos
            implementar para complementar la información que brindan en
            Instagram sobre el festival.
          </p>

          <p className={`font-abel text-2xl`}>
            También podeis acceder a la pagina web oficial del festival haciendo click {" "}
            <a
              className="text-red-400 dark:text-indigo-500 hover:underline"
              href="https://aquasella.com"
              target="_blank"
            >
              aquí
            </a>
            {}. 
          </p>
        </div>
      </div>
    </>
  );
}
