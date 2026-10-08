export type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  live: string
  repo: string
}

function ProjectCard(_props: ProjectCardProps) {
  return (
    <section>
      <h2>Project Card</h2>
    </section>
  )
}

export default ProjectCard
