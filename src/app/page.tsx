// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
    return (
        <>
            <Hero />
            <section className="container mx-auto my-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </>
    );
}
