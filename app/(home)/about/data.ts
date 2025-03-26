// src/data/specializedAreas.ts

export interface DataType {
    title: string;
    description: string;
}

export const specializedAreas: DataType[] = [
    {
        title: "AI",
        description: "Designing workflows using LLM, customization of Diffusion models"
    },
    {
        title: "Web Development",
        description: "Building responsive web applications with modern frameworks"
    },
    {
        title: "UX Design",
        description: "Creating intuitive user experiences focused on usability"
    }
];