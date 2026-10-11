import ResumeButton from "./ResumeButton";
import LangToggle from "./LangToggle";
import { NAV_IDS } from "../data";
import { useContent } from "../i18n";

export default function Navbar() {
  const c = useContent();
  return (
    <nav>
      <div className="w">
        <a className="brand" href="#home">
          <span className="av">JA</span>
          <span><b>{c.name}</b><small>{c.role}</small></span>
        </a>
        <div className="links">
          {NAV_IDS.map((id, i) => <a key={id} href={"#" + id}>{c.nav[i]}</a>)}
        </div>
        <div className="nav-right">
          <LangToggle />
          <span className="nav-cta"><ResumeButton small /></span>
        </div>
      </div>
    </nav>
  );
}
