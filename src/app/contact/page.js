"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocalization } from "../../app/context/LocalizationContext";
import { Link } from "lucide-react";

const ContactForm = () => {
  const { localizationData } = useLocalization();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrbgzeow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setError(
        "There was a problem sending your message. Please try again later."
      );
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <div className="w-[50%] flex justify-end p-4">
        <a href="/" className="block w-fit shadow2">
          <div className="flex items-center gap-4 justify-start px-4 py-2 text-left font-medium bg-red-400 hover:bg-red-600 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white border border-gray-600 hover:border-gray-500 rounded-md transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="text-black dark:text-white"
            >
              <path d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z" />
            </svg>
            <h2 className='text-xl'>{localizationData.navigation.back}</h2>
          </div>
        </a>
      </div>
      <motion.div
        className="max-w-[50%] w-full min-w-[16rem] mx-auto my-4 bg-white dark:bg-zinc-300 shadow-lg rounded-md p-8"
        initial={{ opacity: 0, y: 50 }} // Inicializa con opacidad 0 y desplazado hacia abajo
        animate={{ opacity: 1, y: 0 }} // Cuando entra en vista, muestra con opacidad 1 y sin desplazamiento
        transition={{ duration: 0.8 }} // Duración de la animación
      >
        <h2
          className={`font-kanit text-4xl font-bold mb-6 text-gray-800 text-center`}
        >
          {localizationData.contact.title}
        </h2>

        {isSubmitted && (
          <div className="mb-4 text-green-600 text-center">
            Gracias por contactar conmigo, te responderé lo antes posible!
          </div>
        )}

        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className={`font-abel block text-xl text-gray-700`}
            >
              {localizationData.contact.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 text-black rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`font-abel block text-xl text-gray-700`}
            >
              {localizationData.contact.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`font-abel block text-xl text-gray-700`}
            >
              {localizationData.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className={`font-kanit shadow-lg text-xl w-full text-white bg-red-400 dark:bg-indigo-500 dark:hover:bg-indigo-700 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Enviar
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
