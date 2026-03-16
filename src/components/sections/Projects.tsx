import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-screen py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
