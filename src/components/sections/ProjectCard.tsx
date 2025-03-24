// src/components/sections/ProjectCard.tsx
import { Project } from "@/lib/types";
import Card from "@/components/ui/Card";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card>
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </Card>
    );
}
