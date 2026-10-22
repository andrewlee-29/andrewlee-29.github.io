import { projects } from '../data/projects';
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
