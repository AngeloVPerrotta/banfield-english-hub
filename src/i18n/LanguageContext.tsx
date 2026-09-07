import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "./translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  tList: (key: string) => string[];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("cib_lang");
    return saved === "en" ? "en" : "es";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("cib_lang", l);
  };

  const resolve = (key: string): unknown => {
    let value: unknown = translations[lang];
    for (const k of key.split(".")) {
      if (value === null || typeof value !== "object") return undefined;
      value = (value as Record<string, unknown>)[k];
    }
    return value;
  };

  const t = (key: string): string => {
    const value = resolve(key);
    return typeof value === "string" ? value : key;
  };

  // Para las claves que guardan listas (párrafos, diferenciales de cada curso).
  const tList = (key: string): string[] => {
    const value = resolve(key);
    return Array.isArray(value) ? (value as string[]) : [];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tList }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
