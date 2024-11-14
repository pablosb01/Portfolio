"use client";
import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";
import { useLocalization } from "../context/LocalizationContext";
import { motion } from "framer-motion";

export default function Nintendo() {
  const { localizationData } = useLocalization();

  // Configuración de animación para aparición desde abajo
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <div className="m-12">
        <motion.h1
          className="font-kanit text-4xl border-b-2 border-b-red-400 dark:border-b-indigo-500"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          {localizationData.nintendo_clone.title}
        </motion.h1>

        <div className="my-10 flex gap-2 flex-col">
          {localizationData.nintendo_clone.description &&
            localizationData.nintendo_clone.description.map((p, index) => (
              <motion.p
                key={index}
                className={`font-abel text-2xl`}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
              >
                {p}
              </motion.p>
            ))}
        </div>

        {localizationData.nintendo_clone.section &&
          localizationData.nintendo_clone.section.map((section, index) => (
            <motion.section
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="font-kanit text-3xl">{section.title}</h1>

              <div className="my-3 flex flex-col">
                {section.description &&
                  section.description.map((p, pIndex) => (
                    <motion.p
                      key={pIndex}
                      className={`font-abel text-2xl`}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUp}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {p}
                    </motion.p>
                  ))}
              </div>

              {section.img ? (
                <ScreenShotComp
                  src={section.img.src}
                  videoSrc={section.img.vid}
                  alt={section.img.alt}
                />
              ) : null}
            </motion.section>
          ))}
      </div>
    </>
  );
}
