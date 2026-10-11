import SectionHeading from "./SectionHeading";
import { Ic, FigmaLogo } from "./Icons";
import { skills } from "../data";

export default function Skills() {
  return (
    <div id="skills">
      <SectionHeading n="02" t="Skills" />
      <p className="sub">A combination of technical skills and visual thinking.</p>
      <div className="grid">
        {skills.map(([icon, title, lines]) => (
          <div key={title} className="card sk">
            <div className="skh"><Ic n={icon} /><h3>{title}</h3></div>
            {lines.map((l) => <p key={l}>{l}</p>)}
          </div>
        ))}
      </div>
      <div className="card also">
        <b>Also experienced in:</b>
        <span className="fg"><FigmaLogo />Figma</span>
        <span>UX/UI</span>
        <span>Visual Design</span>
      </div>
    </div>
  );
}
