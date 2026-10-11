import { Ic, Check } from "./Icons";
import Slider from "./Slider";
import { tagColors } from "../data";

export default function ProjectCard({ icon, title, subtitle, tags, desc, keywords, img, images, url, cta }) {
  // links that start with "#/" open a page inside this site
  const internal = url.startsWith("#/");
  return (
    <article className="pc">
      <div className="ph">
        <Ic n={icon} />
        <div><h3>{title}</h3><small>{subtitle}</small></div>
      </div>
      <div className="tags">{tags.map((t) => <span key={t} style={{ "--c": tagColors[t] }}>{t}</span>)}</div>
      {images && images.length > 1 ? (
        <Slider images={images} alt={`${title} – ${subtitle}`} />
      ) : (
        <div className="shot"><img src={img} alt={`${title} – ${subtitle}`} loading="lazy" /></div>
      )}
      <p>{desc}</p>
      <ul className="kw">{keywords.map((k) => <li key={k}><Check />{k}</li>)}</ul>
      <div className="cta">
        <a className="btn s" href={url} {...(internal ? {} : { target: "_blank", rel: "noopener" })}>{cta}</a>
      </div>
    </article>
  );
}
