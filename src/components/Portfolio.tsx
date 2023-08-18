import ProjectList from './portfolio/ProjectList'

export default function Portfolio({ title }: { title: string }) {
  return (
    <section className='mb-6'>
      <h2 className='section-title'>{title}</h2>
      <ProjectList />
    </section>
  )
}
