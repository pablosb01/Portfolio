import React from 'react';
import { useLocalization } from '../../app/context/LocalizationContext.js';

const LanguageSwitcher = () => {
  const { toggleLanguage, language } = useLocalization();

  return (
    <button
      onClick={toggleLanguage}
      className="p-3 bg-gradient-to-r from-red-400 to-red-500 dark:from-indigo-500 dark:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-red-800 dark:hover:from-indigo-600 dark:hover:to-indigo-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out flex items-center space-x-2"
    >
      <img
        src={language === 'en' ? '/eng.png' : '/es.png'}
        alt={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
        className="w-6 h-6"
      />
      <span>{language === 'en' ? 'ENG' : 'ES'}</span>
    </button>
  );
};

export default LanguageSwitcher;