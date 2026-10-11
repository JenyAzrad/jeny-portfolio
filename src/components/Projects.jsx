import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";
import { useContent } from "../i18n";

export default function Projects() {
  const c = useContent().projects;
  return (
    <section id="projects" className="dark">
      <div className="w">
        <SectionHeading n="03" t={c.title} />
        <p className="sub">{c.sub}</p>
        <div className="proj">
          {projects.map((p, i) => <ProjectCard key={i} {...p} {...c.items[i]} />)}
        </div>
      </div>
    </section>
  );
}
