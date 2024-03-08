import Image from 'next/image'
import ProjectLink from './ProjectLink'
import { Project } from './data'
import { techIcons } from './data'

export default function ProjectShow({ project }: { project: Project }) {
  const { name, techList, info, imgSrc, links } = project

  return (
    <section className='flex flex-col'>
      <h2 className='font-bold text-2xl pb-1'>{name}</h2>
      <hr className='mb-6' />
      <Image className='pb-2' src={imgSrc} height={250} width={400} alt='' />
      <div className='flex gap-1 flex-wrap pb-4'>
        {techList.map((tech, idx) => (
          <img className='' key={idx} src={techIcons[tech]} alt='' />
        ))}
      </div>
      <div
        className='mb-8 md:mb-12'
        dangerouslySetInnerHTML={{ __html: info }}
      ></div>

      <div className='flex space-x-2'>
        {links &&
          links.map(({ type, href }) => (
            <ProjectLink key={type} type={type} href={href} />
          ))}
      </div>
    </section>
  )
}
