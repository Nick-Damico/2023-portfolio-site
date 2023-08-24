import Image from 'next/image'
import { Project } from './data'
import { techIcons } from './data'

export default function ProjectShow({ project }: { project: Project }) {
  const { id, name, techList, info, src } = project

  return (
    <section className='flex flex-col'>
      <Image className='pb-2' src={src} height={250} width={400} alt='' />
      <div className='flex gap-1 flex-wrap pb-4'>
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
      <p className=''> {info} </p>

      <div className='mt-auto border border-emerald-500'>
        <button>Github</button>
        <button>Video</button>
      </div>
    </section>
  )
}
