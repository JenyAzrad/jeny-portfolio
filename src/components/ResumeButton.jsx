import { useContent, useLang } from "../i18n";

// Two resume PDFs live in /public (served as normal files): ..._EN.pdf and ..._HE.pdf.
// The button downloads the one that matches the current site language.
export default function ResumeButton({ outline, small }) {
  const { lang } = useLang();
  const c = useContent();
  const file = `Jeny_Azrad_Data_Analyst_${lang.toUpperCase()}.pdf`;
  return (
    <a
      className={"btn" + (outline ? " o" : "") + (small ? " s" : "")}
      href={import.meta.env.BASE_URL + file}
      download={file}
    >
      {c.resume} {outline ? "↓" : ""}
    </a>
  );
}
