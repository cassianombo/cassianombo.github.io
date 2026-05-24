import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import en from "./locales/en";
import pt from "./locales/pt";
import { getProfile } from "../data/profile";

export const LOCALE_STORAGE_KEY = "portfolio-locale";
export const LOCALES = ["en", "pt"];

const messages = { en, pt };

const getMessage = (tree, path) => {
  const value = path.split(".").reduce((node, key) => node?.[key], tree);
  return typeof value === "string" ? value : path;
};

const detectLocale = () => {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (LOCALES.includes(saved)) return saved;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(detectLocale);

  const setLocale = useCallback((next) => {
    if (!LOCALES.includes(next)) return;
    setLocaleState(next);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.title = getMessage(messages[locale], "meta.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        getMessage(messages[locale], "meta.description"),
      );
    }
  }, [locale]);

  const t = useCallback(
    (key) => getMessage(messages[locale] ?? messages.en, key),
    [locale],
  );

  const profile = useMemo(() => getProfile(locale), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t, profile }),
    [locale, setLocale, t, profile],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLocale must be used within LanguageProvider");
  }
  return context;
}
