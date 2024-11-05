"use client";
import React, { createContext, useContext, useState } from 'react';
import es from "../../data/locate.es.json";
import en from "../../data/locate.en.json";

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    const localizationData = language === 'es' ? es : en;

    return (
        <LocalizationContext.Provider value={{ localizationData, toggleLanguage, language }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = () => {
    return useContext(LocalizationContext);
};