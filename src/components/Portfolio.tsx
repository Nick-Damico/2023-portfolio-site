import Project from './portfolio/Project'

export default function Portfolio({ title }: { title: string }) {
  return (
    <section className='mb-6'>
      <h2 className='section-title'>{title}</h2>
      <div className='grid gap-1 grid-cols-2 grid-rows-2 box-border h-80'>
        <Project name='Front-End' img='/hikeit-app-full.jpg' />
        <Project name='Ruby On Rails' img='' />
        <Project name='Ruby' img='' />
        <Project name='TypeScript' img='' />
      </div>
    </section>
  )
}
