import ResumeButton from "./ResumeButton";
import { NAV } from "../data";

export default function Navbar() {
  return (
    <nav>
      <div className="w">
        <a className="brand" href="#home">
          <span className="av">JA</span>
          <span><b>Jeny Azrad</b><small>Data Analyst</small></span>
        </a>
        <div className="links">
          {NAV.map(([name, id]) => <a key={id} href={"#" + id}>{name}</a>)}
        </div>
        <span className="nav-cta"><ResumeButton small /></span>
      </div>
    </nav>
  );
}
