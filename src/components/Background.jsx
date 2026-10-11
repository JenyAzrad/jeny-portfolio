import SectionHeading from "./SectionHeading";
import { Ic } from "./Icons";
import { timeline, why } from "../data";

export default function Background() {
  return (
    <section id="background">
      <div className="w two">
        <div>
          <SectionHeading n="04" t="My Background" />
          <p className="sub">20+ years of experience in technology, with a journey from engineering to data analytics.</p>
          <div className="tl">
            {timeline.map(([icon, year, title, lines]) => (
              <div key={year} className="tli">
                <Ic n={icon} p /><h4>{year}</h4><strong>{title}</strong>
                {lines.map((l) => <small key={l}>{l}</small>)}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading n="05" t="Why Me" />
          <p className="sub">What I bring to the table</p>
          <div className="grid why">
            {why.map(([icon, title, text]) => (
              <div key={title} className="card"><Ic n={icon} p /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
