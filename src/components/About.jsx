import SectionHeading from "./SectionHeading";
import Skills from "./Skills";
import { Ic } from "./Icons";
import { facts } from "../data";

export default function About() {
  return (
    <section id="about">
      <div className="w two">
        <div className="about">
          <SectionHeading n="01" t="About Me" />
          <p className="k">I am a Data Analyst with a strong background in technology, UX/UI and frontend development.</p>
          <p>After more than 20 years in the tech industry, I expanded my expertise into data analytics, combining technical knowledge with a strong visual and user-focused approach.</p>
          <p>I recently completed the John Bryce Data Analyst course with honors, developing hands-on skills in SQL, Python, Pandas, Excel and Power BI.</p>
          <p>My background in UX/UI and frontend design gives me a unique advantage when building dashboards — I care not only about the numbers, but also about how insights are presented and understood.</p>
          <div className="facts">
            {facts.map(([icon, title, sub]) => (
              <div key={title} className="card">
                <Ic n={icon} p /><h3>{title}</h3><p>{sub}</p>
              </div>
            ))}
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
}
