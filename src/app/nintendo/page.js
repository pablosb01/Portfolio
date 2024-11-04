"use client";
import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";
import { useLocalization } from "../context/LocalizationContext";

export default function Nintendo() {
  const { localizationData } = useLocalization();

  return (
    <>
      

      <div className="m-12">
        <h1 className="font-kanit text-4xl border-b-2 border-b-red-400 dark:border-b-indigo-500">
          {localizationData.nintendo_clone.title}
        </h1>
        <div className="my-10 flex gap-2 flex-col">
          {localizationData.nintendo_clone.description &&
            localizationData.nintendo_clone.description.map((p, index) => (
              <p index={index} className={`font-abel text-2xl`}>
                {p}
              </p>
            ))}
        </div>

        {localizationData.nintendo_clone.section &&
          localizationData.nintendo_clone.section.map((section, index) => (
            <section index={index}>
              <h1 className="font-kanit text-3xl">{section.title}</h1>
              <div className="my-3 flex flex-col">
                {section.description &&
                  section.description.map((p, pIndex) => (
                    <p index={pIndex} className={`font-abel text-2xl`}>
                      {p}
                    </p>
                  ))}
              </div>

              {section.img ? (
                <ScreenShotComp
                  src={section.img.src}
                  videoSrc={section.img.vid}
                  alt={section.img.alt}
                />
              ) : null}
            </section>
          ))}
      </div>
    </>
  );
}
