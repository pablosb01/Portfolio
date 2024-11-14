"use client";

import ScreenShotComp from "@/components/ScreenShotComp/ScreenShotComp";
import { useLocalization } from "../context/LocalizationContext";
import { motion } from "framer-motion";

export default function Aqs() {
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
          {localizationData.aqua_reloaded.title}
        </motion.h1>

        <div className="my-10 flex gap-2 flex-col">
          {localizationData.aqua_reloaded.description.map((p, index) => (
            <motion.p
              key={index}
              className="font-abel text-2xl"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {localizationData.aqua_reloaded.section.map((section, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ScreenShotComp
              index={index}
              src={section.img.src}
              videoSrc={section.img.vid}
              alt={section.img.alt}
            />
          </motion.div>
        ))}

        <div className="my-3 flex flex-col gap-5">
          <motion.p
            className="font-abel text-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            {localizationData.aqua_reloaded.final.p1}{" "}
            <a
              className="text-red-400 dark:text-indigo-500 hover:underline"
              href="https://aqua-reloaded.vercel.app"
              target="_blank"
            >
              {localizationData.aqua_reloaded.final.p2}
            </a>{" "}
            {localizationData.aqua_reloaded.final.p3}
          </motion.p>

          <motion.p
            className="font-abel text-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            {localizationData.aqua_reloaded.final.p4}{" "}
            <a
              className="text-red-400 dark:text-indigo-500 hover:underline"
              href="https://aquasella.com"
              target="_blank"
            >
              {localizationData.aqua_reloaded.final.p2}
            </a>{" "}
            {localizationData.aqua_reloaded.final.p5}{" "}
            <a
              className="text-red-400 dark:text-indigo-500 hover:underline"
              href="https://aquasella.com"
              target="_blank"
            >
              {localizationData.aqua_reloaded.final.p2}
            </a>.
          </motion.p>
        </div>
      </div>
    </>
  );
}
