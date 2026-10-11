import SectionHeading from "./SectionHeading";
import { GitHubIcon } from "./Icons";
import { EMAIL, GITHUB_PROFILE, LINKEDIN, NAV } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="dark">
      <div className="w">
        <SectionHeading n="06" t="Let's Connect" />
        <div className="conn">
          <p>I'm currently looking for opportunities as a Data Analyst / BI Analyst where I can combine data analysis, technology and visualization.</p>
          <div className="cta">
            <a className="btn o" href={GITHUB_PROFILE} target="_blank" rel="noopener"><GitHubIcon />GitHub →</a>
            <a className="btn o" href={LINKEDIN} target="_blank" rel="noopener">LinkedIn →</a>
            <a className="btn o" href={"mailto:" + EMAIL}>Email →</a>
          </div>
        </div>
        <p className="sign">Thanks for visiting! Jeny</p>
        <footer>
          <span><b style={{ color: "#fff" }}>Jeny Azrad</b> | Data Analyst</span>
          <nav>{NAV.map(([name, id]) => <a key={id} href={"#" + id}>{name}</a>)}</nav>
        </footer>
      </div>
    </section>
  );
}
