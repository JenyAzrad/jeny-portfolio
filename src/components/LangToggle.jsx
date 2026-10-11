import { useLang, useContent } from "../i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  const c = useContent();
  return (
    <button type="button" className="lang-btn" lang={lang === "en" ? "he" : "en"} aria-label={c.switchLabel} onClick={() => setLang(lang === "en" ? "he" : "en")}>
      {c.switchTo}
    </button>
  );
}
