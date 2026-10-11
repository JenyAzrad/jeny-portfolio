import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { Ic, ChipIcon, Check } from "./Icons";
import { chips, dashboardKpis, dashboardPages, dashboardAbout, PBIX_BLOB, PBIX_RAW, EMAIL } from "../data";

const tools = chips.filter(([n]) => n === "Power BI").concat([["DAX", "#1A5B8A"], ["Power Query", "#1D6F42"], ["SQL Server", "#9B2C2C"]]);

export default function DashboardPage() {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const p = dashboardPages[i];

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
            <span><b>Jeny Azrad</b><small>Data Analyst</small></span>
          </a>
          <a className="back" href="#projects">← Back to portfolio</a>
        </div>
      </nav>

      <header className="dp-hero dark">
        <div className="w">
          <p className="hi">FEATURED PROJECT · POWER BI</p>
          <h1>Amazon E-Commerce<span>Power BI Dashboard</span></h1>
          <p className="lead">An interactive 6-page dashboard analyzing sales, customers, products, delivery and trends, with DAX measures, KPI analysis and a sales forecast.</p>
          <div className="chips">
            {tools.map(([name, bg, fg]) => (
              <span key={name} className="chip" style={{ background: bg, color: fg || "#fff" }}>
                {name === "Power BI" && <ChipIcon name="Power BI" />}{name}
              </span>
            ))}
          </div>
          <div className="cta">
            <a className="btn" href={PBIX_RAW}>Download .pbix ↓</a>
            <a className="btn o" href={PBIX_BLOB} target="_blank" rel="noopener">View on GitHub →</a>
          </div>
          <p className="dp-note">Opening the .pbix file requires Power BI Desktop (Windows). Browse the pages below, no download needed.</p>
          <div className="dp-kpis">
            {dashboardKpis.map(([v, l]) => <div key={l} className="dp-kpi"><b>{v}</b><span>{l}</span></div>)}
          </div>
        </div>
      </header>

      <section>
        <div className="w">
          <SectionHeading n="01" t="Dashboard Pages" />
          <p className="sub">Choose a page to explore it. Select the image to view it full size.</p>
          <div className="dp-tabs" role="tablist">
            {dashboardPages.map((d, k) => (
              <button key={d.label} role="tab" aria-selected={k === i} className={"dp-tab" + (k === i ? " on" : "")} onClick={() => setI(k)}>
                <i>{k + 1}</i>{d.label}
              </button>
            ))}
          </div>
          <div className="dp-view">
            <div className="dp-info">
              <span className="dp-num">PAGE {i + 1} / {dashboardPages.length}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>{p.points.map((x) => <li key={x}><Check />{x}</li>)}</ul>
            </div>
            <button className="dp-shot" onClick={() => setZoom(true)} aria-label="View full size">
              <img src={p.img} alt={`${p.title} – Power BI dashboard page`} />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <SectionHeading n="02" t="About the Analysis" />
          <div className="dp-about">
            {dashboardAbout.map(([icon, title, text]) => (
              <div key={title} className="card"><Ic n={icon} p /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
          <p className="dp-note2">The insights summarize patterns observed in the report and are not causal conclusions.</p>
        </div>
      </section>

      <section className="dark">
        <div className="w conn">
          <p>Want to explore the data model and DAX measures? Download the .pbix file, or get in touch and I will walk you through it.</p>
          <div className="cta">
            <a className="btn" href={PBIX_RAW}>Download .pbix ↓</a>
            <a className="btn o" href={"mailto:" + EMAIL}>Email →</a>
            <a className="btn o" href="#projects">← Back to portfolio</a>
          </div>
        </div>
      </section>

      {zoom && (
        <div className="dp-zoom" role="dialog" aria-modal="true" onClick={() => setZoom(false)}>
          <img src={p.img} alt={p.title} />
          <button aria-label="Close">×</button>
        </div>
      )}
    </div>
  );
}
