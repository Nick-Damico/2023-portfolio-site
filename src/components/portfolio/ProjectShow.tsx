import Image from 'next/image'
import { Project } from './data'
import { techIcons } from './data'

export default function ProjectShow({ project }: { project: Project }) {
  const { id, name, techList, info, imgSrc, githubSrc, youtubeSrc } = project

  return (
    <section className='flex flex-col'>
      <Image className='pb-2' src={imgSrc} height={250} width={400} alt='' />
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
      <p className='mb-8 md:mb-12'> {info} </p>

      <div className='flex space-x-2'>
        <a href={githubSrc} target='_blank' className='button'>
          <Image
            className=''
            src='/github-original.svg'
            height={16}
            width={16}
            alt='github'
          />
          <span className='ml-2'>Github</span>
        </a>
        <a href={youtubeSrc} target='_blank' className='button'>
          <Image
            className='fill-white'
            src='/youtube.svg'
            height={18}
            width={18}
            alt='github'
          />
          <span className='ml-2'>Demo</span>
        </a>
      </div>
    </section>
  )
}
