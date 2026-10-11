import SectionHeading from "./SectionHeading";
import { Ic } from "./Icons";
import { timelineIcons, whyIcons } from "../data";
import { useContent } from "../i18n";

export default function Background() {
  const c = useContent().background;
  return (
    <section id="background">
      <div className="w two">
        <div>
          <SectionHeading n="04" t={c.title} />
          <p className="sub">{c.sub}</p>
          <div className="tl">
            {c.items.map(([year, title, lines], i) => (
              <div key={year} className="tli">
                <Ic n={timelineIcons[i]} p /><h4><bdi dir="ltr">{year}</bdi></h4><strong>{title}</strong>
                {lines.map((l) => <small key={l}>{l}</small>)}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading n="05" t={c.whyTitle} />
          <p className="sub">{c.whySub}</p>
          <div className="grid why">
            {c.why.map(([title, text], i) => (
              <div key={title} className="card"><Ic n={whyIcons[i]} p /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
