import { createContext, useState, useContext, ReactNode } from "react";
import enTranslations from "@shared/translations/en";
import ptTranslations from "@shared/translations/pt";

type LanguageContextType = {
  language: string;
  t: (key: string) => string;
  changeLanguage: (lang: string) => void;
};

const defaultContext: LanguageContextType = {
  language: "en",
  t: (key: string) => key,
  changeLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function useLanguage() {
  return useContext(LanguageContext);
}

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(enTranslations);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setTranslations(lang === "en" ? enTranslations : ptTranslations);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
