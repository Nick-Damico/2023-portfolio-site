import ProjectList from './portfolio/ProjectList'

export default function Portfolio({
  title,
  onMouseOver,
  onMouseOut
}: {
  title: string
  onMouseOver: Function
  onMouseOut: Function
}) {
  return (
    <section className='mb-6'>
      <h2 className='section-title'>{title}</h2>
      <ProjectList onMouseOver={onMouseOver} onMouseOut={onMouseOut} />
    </section>
  )
}
