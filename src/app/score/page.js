"use client";

import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";
import Image from "next/image";
import { useLocalization } from "../context/LocalizationContext";
import { motion } from "framer-motion";

export default function Score() {
  const { localizationData } = useLocalization();

  // Configuración de animación para aparecer desde abajo
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
          {localizationData.score_tracker.title}
        </motion.h1>

        <div className="my-10 flex gap-2 flex-col">
          {localizationData.score_tracker.description &&
            localizationData.score_tracker.description.map((des, index) => (
              <motion.p
                key={index}
                className={`font-abel text-2xl`}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
              >
                {des}
              </motion.p>
            ))}

          {localizationData.score_tracker.section &&
            localizationData.score_tracker.section.map((section, sIndex) => (
              <motion.section
                key={sIndex}
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

                <ScreenShotComp
                  src={section.img.src}
                  videoSrc={section.img.vid}
                  alt={section.img.alt}
                />
              </motion.section>
            ))}

          <motion.div
            className="my-3 flex flex-col"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
          >
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
          </motion.div>
        </div>
      </div>
    </>
  );
}
