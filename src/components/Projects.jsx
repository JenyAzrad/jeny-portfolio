import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="dark">
      <div className="w">
        <SectionHeading n="03" t="Featured Projects" />
        <p className="sub">Explore my data analysis and visualization projects. Each project includes real data, clean analysis and interactive dashboards (where applicable).</p>
        <div className="proj">
          {projects.map((p) => <ProjectCard key={p.title + p.subtitle} {...p} />)}
        </div>
      </div>
    </section>
  );
}
