import { createContext, useContext, useEffect, useState } from "react";
import en from "./content/en";
import he from "./content/he";

const CONTENT = { en, he };
const ONCE_KEY = "portfolio-lang-once";
const Ctx = createContext({ lang: "en", setLang: () => {} });

// The site ALWAYS starts in English.
// The only exception: the "Back to portfolio" links reload the home page, so they call
// rememberLanguageOnce() first, which keeps the current language for that single reload.
export function rememberLanguageOnce(lang) {
  try { sessionStorage.setItem(ONCE_KEY, lang); } catch (e) { /* ignore */ }
}

function startLanguage() {
  try {
    const once = sessionStorage.getItem(ONCE_KEY);
    sessionStorage.removeItem(ONCE_KEY);
    if (once === "he") return "he";
  } catch (e) { /* storage not available */ }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(startLanguage);

  useEffect(() => {
    const c = CONTENT[lang];
    document.documentElement.lang = c.lang;
    document.documentElement.dir = c.dir;
    document.title = c.title;
  }, [lang]);

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
export const useContent = () => CONTENT[useContext(Ctx).lang];
