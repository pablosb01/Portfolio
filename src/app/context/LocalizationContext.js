"use client";
import React, { createContext, useContext, useState } from 'react';
import es from "../../data/locate.es.json";
import en from "../../data/locate.en.json";

const LocalizationContext = createContext();

const languages = { es, en,};

export const LocalizationProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    const localizationData = languages[language] || languages['es']

    return (
        <LocalizationContext.Provider value={{ localizationData, toggleLanguage, language }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = () => {
    return useContext(LocalizationContext);
};