import { createContext, useContext, ReactNode } from "react";
import ptTranslations from "@shared/translations/pt";

type LanguageContextType = {
  language: string;
  t: (key: string) => string;
};

const defaultContext: LanguageContextType = {
  language: "pt",
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function useLanguage() {
  return useContext(LanguageContext);
}

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Sempre português fixo
  const language = "pt";
  const translations = ptTranslations;

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
