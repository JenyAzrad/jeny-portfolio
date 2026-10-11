import SectionHeading from "./SectionHeading";
import { Ic, FigmaLogo } from "./Icons";
import { skillIcons } from "../data";
import { useContent } from "../i18n";

export default function Skills() {
  const c = useContent().skills;
  return (
    <div id="skills">
      <SectionHeading n="02" t={c.title} />
      <p className="sub">{c.sub}</p>
      <div className="grid">
        {c.items.map(([title, lines], i) => (
          <div key={title} className="card sk">
            <div className="skh"><Ic n={skillIcons[i]} /><h3>{title}</h3></div>
            {lines.map((l) => <p key={l}>{l}</p>)}
          </div>
        ))}
      </div>
      <div className="card also">
        <b>{c.also}</b>
        <span className="fg"><FigmaLogo />Figma</span>
        {c.alsoItems.map((x) => <span key={x}>{x}</span>)}
      </div>
    </div>
  );
}
