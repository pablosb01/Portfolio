"use client";

import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";
import Image from "next/image";
import { useLocalization } from "../context/LocalizationContext";

export default function Score() {
  const { localizationData } = useLocalization();
  return (
    <>
      
      <div className="m-12">
        <h1 className="font-kanit text-4xl border-b-2 border-b-red-400 dark:border-b-indigo-500">
          {localizationData.score_tracker.title}
        </h1>
        <div className="my-10 flex gap-2 flex-col">
          {localizationData.score_tracker.description &&
            localizationData.score_tracker.description.map((des, index) => (
              <p key={index} className={`font-abel text-2xl`}>
                {des}
              </p>
            ))}
          {localizationData.score_tracker.section &&
            localizationData.score_tracker.section.map((section, sIndex) => (
              <section index={sIndex}>
                <h1 className="font-kanit text-3xl">{section.title}</h1>
                <div className="my-3 flex flex-col">
                  {section.description &&
                    section.description.map((p, pIndex) => (
                      <p key={pIndex} className={`font-abel text-2xl`}>
                        {p}
                      </p>
                    ))}
                </div>

                <ScreenShotComp
                  src={section.img.src}
                  videoSrc={section.img.vid}
                  alt={section.img.alt}
                />
              </section>
            ))}
          <div className="my-3 flex flex-col">
            <p className={`font-abel text-2xl`}>
              {localizationData.score_tracker.final.p1}{" "}
              <a
                className="text-red-400 dark:text-indigo-500 hover:underline"
                href={localizationData.score_tracker.final.link}
                target="_blank"
              >
                {localizationData.score_tracker.final.p2}
              </a>
              {} {localizationData.score_tracker.final.p3}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
