// LanguageSwitcher.js
import React, { useState } from 'react';
import { useLocalization } from '../../app/context/LocalizationContext.js';

const LanguageSwitcher = () => {
  const { toggleLanguage, language } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', label: 'Español', flag: '/es.png' }, // Usando la ruta desde public
    { code: 'en', label: 'English', flag: '/eng.png' }, // Usando la ruta desde public
  ];

  const selectedLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gradient-to-r from-red-400 to-red-500 dark:from-indigo-500 dark:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-red-800 dark:hover:from-indigo-600 dark:hover:to-indigo-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out flex items-center space-x-2"
      >
        <img src={selectedLanguage.flag} alt={selectedLanguage.label} className="w-5 h-5 mr-2" />
        <span>{selectedLanguage.label}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                toggleLanguage(lang.code);
                setIsOpen(false);
              }}
              className="flex items-center p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg w-full text-left"
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5 mr-2" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
