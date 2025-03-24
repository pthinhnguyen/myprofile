// src/lib/types.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl?: string;
    repoUrl?: string;
}
