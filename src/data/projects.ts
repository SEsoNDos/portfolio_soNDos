export type Project = {
  title: string
  description: string
  tags: string[]
  live: string
  repo: string
}

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description: "A simple task management dashboard for organizing daily work.",
    tags: ["React", "TypeScript", "Tailwind"],
    live: "https://example.com/taskflow",
    repo: "https://github.com/example/taskflow",
  },
  {
    title: "Weatherly",
    description: "A responsive weather app with location-based forecasts.",
    tags: ["Vite", "React", "API"],
    live: "https://example.com/weatherly",
    repo: "https://github.com/example/weatherly",
  },
]
