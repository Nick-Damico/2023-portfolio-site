import ProjectItem from './ProjectItem'
import projects, { Project } from './data'

export default function ProjectList() {
  return (
      {projects.map(({ id, name, src }) => (
        <ProjectItem
          key={id}
          name={name}
          img={src}
          onClick={renderProjectInModal}
        />
      ))}
    </div>
  )
}
