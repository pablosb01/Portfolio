"use client";

import { useState } from "react";

const ContactForm = () => {
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
    <div className="h-full flex">
      <div className="max-w-[50%] w-full min-w-[16rem] mx-auto my-4 bg-white dark:bg-zinc-300 shadow-lg rounded-md p-8 self-center">
        <h2
          className={`font-kanit text-4xl font-bold mb-6 text-gray-800 text-center`}
        >
          Contáctame!
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
              Nombre
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
              Email
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
              Mensaje
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
      </div>
    </div>
  );
};

export default ContactForm;
