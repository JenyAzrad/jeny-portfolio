import ResumeButton from "./ResumeButton";
import { ChipIcon } from "./Icons";
import { chips } from "../data";
import photo from "../assets/photo.jpg";

export default function Hero() {
  return (
    <header className="hero dark">
      <div className="dots" aria-hidden="true">
        {Array.from({ length: 25 }, (_, i) => <i key={i} />)}
      </div>
      <div className="w hg">
        <div>
          <p className="hi">HELLO, I'M</p>
          <h1>Jeny Azrad<span>Data Analyst</span></h1>
          <p className="lead">Turning data into clear insights and actionable dashboards.</p>
          <div className="chips">
            {chips.map(([name, bg, fg]) => (
              <span key={name} className="chip" style={{ background: bg, color: fg || "#fff" }}>
                <ChipIcon name={name} />{name}
              </span>
            ))}
          </div>
          <div className="cta">
            <a className="btn" href="#projects">View My Projects →</a>
            <ResumeButton outline />
          </div>
        </div>
        <div className="pw">
          <div className="blob" aria-hidden="true" />
          <div className="frame"><img src={photo} alt="Jeny Azrad at her desk with two monitors" /></div>
          <div className="note" aria-hidden="true">Data<br />Technology<br />Visual Thinking</div>
          <i className="sq" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
