import Image from 'next/image'
import { Project } from './data'
import { techIcons } from './data'

export default function ProjectShow({ project }: { project: Project }) {
  const { id, name, techList, info, src } = project

  return (
    <section>
      <Image className='pb-2' src={src} height={250} width={400} alt='' />
      <div className='flex space-x-0.5 pb-4'>
        {techList.map((tech, idx) => (
          <img
            className=''
            key={idx}
            src={techIcons[tech]}
            alt='static badge'
          />
        ))}
      </div>
      <h2 className='text-2xl pb-2'>{name}</h2>
      <p> {info} </p>
    </section>
  )
}
