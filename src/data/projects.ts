// src/data/projects.ts
import { Project } from "@/lib/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Sample Project",
        description: "A sample project description",
        image: "/images/project1.jpg",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/example",
    },
    // Add more projects here with your real data
];
