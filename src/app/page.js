"use client";
import Image from "next/image";
import TitleText from "@/components/TitleText/TitleText";
import ParaText from "@/components/ParaText/ParaText";
import info from "@/data/info.js";
import { useLocalization } from "../app/context/LocalizationContext.js";
import GitRepos from "@/components/GitRepos/GitRepos.js";
import Spline from "@splinetool/react-spline/next";

export default function Dev() {
  const { localizationData } = useLocalization();

  return (
    <>
      <div className="m-12 flex flex-col gap-8">
        <TitleText text={localizationData.home.about_me} />

        <div className="flex flex-col 2xl:flex-row gap-8 w-full justify-around">
          <div className="flex flex-col 2xl:flex-row items-center gap-8">
            <Image
              src="/cara.png"
              width={200}
              height={200}
              className="bg-red-400 dark:bg-indigo-500 rounded-xl shadow-lg flex-shrink-0"
            />
            <ParaText
              text={localizationData.home.about_text}
              className="flex-grow hidden lg:relative"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-around gap-10">
            <div className="flex flex-col w-fit">
              <TitleText text={localizationData.home.skills.title} />
              <ul className="list-disc ml-8 text-2xl m-4 w-max">
                {localizationData.home.skills.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-around gap-10">
            <div className="flex flex-col w-fit">
              <TitleText text={localizationData.home.abilities.title} />
              <ul className="list-disc ml-8 text-2xl m-4 w-max">
                {localizationData.home.abilities.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <TitleText text={localizationData.home.academic_info.title} />

        {localizationData.home.academic_info.items.map((study, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h1 className="font-pop text-2xl underline bold">{study.title}</h1>
            <div className="flex flex-col gap-2">
              <ParaText text={study.course} />
              {study.description && <ParaText text={study.description} />}
            </div>
          </div>
        ))}
      </div>
      <div className="h-[400px] w-full justify-center items-center">
        <Spline scene="https://prod.spline.design/eEfiI6MyxGekbWNU/scene.splinecode" />
      </div>
      <GitRepos />
    </>
  );
}
