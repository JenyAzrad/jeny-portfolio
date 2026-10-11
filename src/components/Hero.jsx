import ResumeButton from "./ResumeButton";
import { ChipIcon } from "./Icons";
import { chips } from "../data";
import { useContent } from "../i18n";
import photo from "../assets/photo.jpg";

export default function Hero() {
  const c = useContent();
  return (
    <header className="hero dark">
      <div className="dots" aria-hidden="true">
        {Array.from({ length: 25 }, (_, i) => <i key={i} />)}
      </div>
      <div className="w hg">
        <div>
          <p className="hi">{c.hero.hello}</p>
          <h1>{c.name}<span>{c.role}</span></h1>
          <p className="lead">{c.hero.lead}</p>
          <div className="chips">
            {chips.map(([name, bg, fg]) => (
              <span key={name} className="chip" style={{ background: bg, color: fg || "#fff" }}>
                <ChipIcon name={name} />{name}
              </span>
            ))}
          </div>
          <div className="cta">
            <a className="btn" href="#projects">{c.hero.view}</a>
            <ResumeButton outline />
          </div>
        </div>
        <div className="pw">
          <div className="blob" aria-hidden="true" />
          <div className="frame"><img src={photo} alt={c.hero.alt} /></div>
          <div className="note" aria-hidden="true">
            {c.hero.note.map((x, i) => <span key={x}>{i > 0 && <br />}{x}</span>)}
          </div>
          <i className="sq" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
