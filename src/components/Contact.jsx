import SectionHeading from "./SectionHeading";
import { GitHubIcon } from "./Icons";
import { EMAIL, GITHUB_PROFILE, LINKEDIN, NAV_IDS } from "../data";
import { useContent } from "../i18n";

export default function Contact() {
  const all = useContent();
  const c = all.contact;
  return (
    <section id="contact" className="dark">
      <div className="w">
        <SectionHeading n="06" t={c.title} />
        <div className="conn">
          <p>{c.text}</p>
          <div className="cta">
            <a className="btn o" href={GITHUB_PROFILE} dir="ltr" target="_blank" rel="noopener"><GitHubIcon />{c.github}</a>
            <a className="btn o" href={LINKEDIN} dir="ltr" target="_blank" rel="noopener">{c.linkedin}</a>
            <a className="btn o" href={"mailto:" + EMAIL}>{c.email}</a>
          </div>
        </div>
        <p className="sign">{c.sign}</p>
        <footer>
          <span><b style={{ color: "#fff" }}>{all.name}</b> | {all.role}</span>
          <nav>{NAV_IDS.map((id, i) => <a key={id} href={"#" + id}>{all.nav[i]}</a>)}</nav>
        </footer>
      </div>
    </section>
  );
}
