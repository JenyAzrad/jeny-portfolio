import SectionHeading from "./SectionHeading";
import Skills from "./Skills";
import { Ic } from "./Icons";
import { factIcons } from "../data";
import { useContent } from "../i18n";

export default function About() {
  const c = useContent().about;
  return (
    <section id="about">
      <div className="w two">
        <div className="about">
          <SectionHeading n="01" t={c.title} />
          <p className="k">{c.lead}</p>
          {c.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="facts">
            {c.facts.map(([title, sub], i) => (
              <div key={title} className="card">
                <Ic n={factIcons[i]} p /><h3>{title}</h3><p>{sub}</p>
              </div>
            ))}
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
}
