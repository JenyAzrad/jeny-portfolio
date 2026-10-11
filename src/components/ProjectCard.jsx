import { Ic } from "./Icons";
import { tagColors } from "../data";

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
);

export default function ProjectCard({ icon, title, subtitle, tags, desc, keywords, img, url, cta }) {
  return (
    <article className="pc">
      <div className="ph">
        <Ic n={icon} />
        <div><h3>{title}</h3><small>{subtitle}</small></div>
      </div>
      <div className="tags">{tags.map((t) => <span key={t} style={{ "--c": tagColors[t] }}>{t}</span>)}</div>
      <div className="shot"><img src={img} alt={`${title} – ${subtitle} preview`} loading="lazy" /></div>
      <p>{desc}</p>
      <ul className="kw">{keywords.map((k) => <li key={k}><Check />{k}</li>)}</ul>
      <div className="cta">
        <a className="btn s" href={url} target="_blank" rel="noopener">{cta} →</a>
      </div>
    </article>
  );
}
