import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import LangToggle from "./LangToggle";
import { Ic, ChipIcon, Check } from "./Icons";
import { chips, dashboardKpiValues, dashboardImages, dashboardAboutIcons, PBIX_BLOB, PBIX_RAW, EMAIL } from "../data";
import { useContent, useLang, rememberLanguageOnce } from "../i18n";

const tools = chips.filter(([n]) => n === "Power BI").concat([["DAX", "#1A5B8A"], ["Power Query", "#1D6F42"], ["SQL Server", "#9B2C2C"]]);

export default function DashboardPage() {
  const all = useContent();
  const { lang } = useLang();
  const c = all.dash;
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const p = c.pages[i];
  const img = dashboardImages[i];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id="dashboard">
      <nav>
        <div className="w">
          <a className="brand" href="#home">
            <span className="av">JA</span>
            <span><b>{all.name}</b><small>{all.role}</small></span>
          </a>
          <div className="nav-right">
            <LangToggle />
            <a className="back" href="./" onClick={() => rememberLanguageOnce(lang)}>{c.back}</a>
          </div>
        </div>
      </nav>

      <header className="dp-hero dark">
        <div className="w">
          <p className="hi">{c.kicker}</p>
          <h1>{c.title}<span>{c.subtitle}</span></h1>
          <p className="lead">{c.lead}</p>
          <div className="chips">
            {tools.map(([name, bg, fg]) => (
              <span key={name} className="chip" style={{ background: bg, color: fg || "#fff" }}>
                {name === "Power BI" && <ChipIcon name="Power BI" />}{name}
              </span>
            ))}
          </div>
          <div className="cta">
            <a className="btn" href={PBIX_RAW}>{c.download}</a>
            <a className="btn o" href={PBIX_BLOB} target="_blank" rel="noopener">{c.github}</a>
          </div>
          <p className="dp-note">{c.note}</p>
          <div className="dp-kpis">
            {dashboardKpiValues.map((v, k) => <div key={v} className="dp-kpi"><b>{v}</b><span>{c.kpis[k]}</span></div>)}
          </div>
        </div>
      </header>

      <section>
        <div className="w">
          <SectionHeading n="01" t={c.galleryTitle} />
          <p className="sub">{c.gallerySub}</p>
          <div className="dp-tabs" role="tablist">
            {c.pages.map((d, k) => (
              <button key={k} role="tab" aria-selected={k === i} className={"dp-tab" + (k === i ? " on" : "")} onClick={() => setI(k)}>
                <i>{k + 1}</i>{d.label}
              </button>
            ))}
          </div>
          <div className="dp-view">
            <div className="dp-info">
              <span className="dp-num">{c.pageOf(i + 1, c.pages.length)}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>{p.points.map((x) => <li key={x}><Check />{x}</li>)}</ul>
            </div>
            <button className="dp-shot" onClick={() => setZoom(true)} aria-label={all.ui.fullSize}>
              <img src={img} alt={p.title} />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <SectionHeading n="02" t={c.aboutTitle} />
          <div className="dp-about">
            {c.about.map(([title, text], k) => (
              <div key={title} className="card"><Ic n={dashboardAboutIcons[k]} p /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
          <p className="dp-note2">{c.aboutNote}</p>
        </div>
      </section>

      <section className="dark">
        <div className="w conn">
          <p>{c.ctaText}</p>
          <div className="cta">
            <a className="btn" href={PBIX_RAW}>{c.download}</a>
            <a className="btn o" href={"mailto:" + EMAIL}>{c.email}</a>
            <a className="btn o" href="./" onClick={() => rememberLanguageOnce(lang)}>{c.back}</a>
          </div>
        </div>
      </section>

      {zoom && (
        <div className="dp-zoom" role="dialog" aria-modal="true" onClick={() => setZoom(false)}>
          <img src={img} alt={p.title} />
          <button aria-label={all.ui.close}>×</button>
        </div>
      )}
    </div>
  );
}
