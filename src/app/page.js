"use client";
import Image from "next/image";
import TitleText from "@/components/TitleText/TitleText";
import ParaText from "@/components/ParaText/ParaText";
import { useLocalization } from "../app/context/LocalizationContext.js";
import GitRepos from "@/components/GitRepos/GitRepos.js";
import { motion } from "framer-motion";
import CarouselInfinite from "@/components/CarouselInfinite/CarouselInfinite.js";
import ContactButton from "@/components/ContactButton/ContactButton.js";

export default function Dev() {
  const { localizationData } = useLocalization();

  // Configuración de animaciones para aparición desde abajo
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="">
      <div className="py-12 px-12 dark:bg-[url('/back1.jpg')] bg-cover bg-center flex flex-col gap-8 -z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-row justify-between items-center px-4"
        >
          <h1 className="text-8xl font-bold font-kanit border-b-2 border-b-red-400 dark:border-b-indigo-500 w-fit ">
            {localizationData.home.name}
          </h1>
          <ContactButton text={localizationData.navigation.contact} />
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row 2xl:flex-row bg-zinc-600 rounded-xl bg-opacity-80 p-4 gap-8 w-full justify-around"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col 2xl:flex-row items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src="/cara.png"
                width={200}
                height={200}
                className="bg-red-400 dark:bg-indigo-500 rounded-xl shadow-lg flex-shrink-0"
              />

              <div className="flex flex-col gap-4">
                <h1 className="text-6xl font-bold font-kanit border-b-2 border-b-red-400 dark:border-b-indigo-500 w-fit ">
                  Quien soy yo?
                </h1>
                <ParaText
                  text={localizationData.home.about_text}
                  className="flex-grow hidden lg:relative"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-around">
              <motion.div
                className="flex flex-col md:flex-row justify-around gap-10"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex flex-col w-fit">
                  <TitleText text={localizationData.home.skills.title} />
                  <ul className="list-disc ml-8 text-2xl m-4 w-max">
                    {localizationData.home.skills.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row justify-around gap-10"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex flex-col w-fit">
                  <TitleText text={localizationData.home.abilities.title} />
                  <ul className="list-disc ml-8 text-2xl m-4 w-max">
                    {localizationData.home.abilities.items.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full grid"
        >
          <CarouselInfinite icons={localizationData.carousel} />
        </motion.div>

        <motion.section
          className="bg-zinc-400 dark:bg-opacity-80 dark:bg-zinc-600 rounded-xl flex flex-col border-zinc-500 p-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TitleText text={localizationData.home.academic_info.title} />

          {localizationData.home.academic_info.items.map((study, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="font-pop text-2xl underline bold">
                {study.title}
              </h1>
              <div className="flex flex-col gap-2">
                <ParaText text={study.course} />
                {study.description && <ParaText text={study.description} />}
              </div>
            </div>
          ))}
        </motion.section>
      </div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <GitRepos />
      </motion.section>

      <motion.section>
        <p>niga</p>
      </motion.section>
    </div>
  );
}
