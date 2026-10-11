// The PDF lives in /public so it is served as a normal file
export default function ResumeButton({ outline, small }) {
  return (
    <a
      className={"btn" + (outline ? " o" : "") + (small ? " s" : "")}
      href={import.meta.env.BASE_URL + "Jeny_Azrad_Data_Analyst.pdf"}
      download="Jeny_Azrad_Data_Analyst.pdf"
    >
      Download Resume {outline ? "↓" : ""}
    </a>
  );
}
