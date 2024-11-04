"use client";

import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";
import { useLocalization } from "../context/LocalizationContext";

export default function Aqs() {
  const { localizationData } = useLocalization();

  return (
    <>
      <div className="m-12">
        <h1 className="font-kanit text-4xl border-b-2 border-b-red-400 dark:border-b-indigo-500">
          {localizationData.aqua_reloaded.title}
        </h1>
        <div className="my-10 flex gap-2 flex-col">

          {localizationData.aqua_reloaded.description.map((p, index) => (
            <p key={index} className="font-abel text-2xl">
              {p}
            </p>
          ))}
        </div>

        {localizationData.aqua_reloaded.section.map((section, index) => (
          <ScreenShotComp
            index={index}
            src={section.img.src}
            videoSrc={section.img.vid}
            alt={section.img.alt}
          />
        ))}

        <div className="my-3 flex flex-col gap-5">
          <p className={`font-abel text-2xl`}>
            {localizationData.aqua_reloaded.final.p1}{" "}
            <a
              className="text-red-400 dark:text-indigo-500 hover:underline"
              href="https://aqua-reloaded.vercel.app"
              target="_blank"
            >
              {localizationData.aqua_reloaded.final.p2}
            </a>
            {} {localizationData.aqua_reloaded.final.p3}
          </p>

          <p className={`font-abel text-2xl`}>
            {localizationData.aqua_reloaded.final.p4}{" "}
            <a
              className="text-red-400 dark:text-indigo-500 hover:underline"
              href="https://aquasella.com"
              target="_blank"
            >
              {localizationData.aqua_reloaded.final.p2}
            </a>
            {' '}
            {localizationData.aqua_reloaded.final.p5}{" "}
            <a
              className="text-red-400 dark:text-indigo-500 hover:underline"
              href="https://aquasella.com"
              target="_blank"
            >
              {localizationData.aqua_reloaded.final.p2}
            </a>
            {}.
          </p>
        </div>
      </div>
    </>
  );
}
