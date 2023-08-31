import Image from 'next/image'
import { LinkIconMap } from './data'
import github from '/public/github-original.svg'
import youtube from '/public/youtube.svg'

export default function ProjectLink({
  type,
  href
}: {
  type: string
  href: string
}) {
  const capitalize = (name: string) => {
    return name[0].toUpperCase() + name.slice(1).toLocaleLowerCase()
  }

  const linkIconMap: LinkIconMap = {
    github,
    youtube
  }

  const linkIcon = (type: string) => {
    return linkIconMap[type]
  }

  return (
    <a href={href} target='_blank' className='button'>
      <Image
        className=''
        src={linkIcon(type)}
        height={16}
        width={16}
        alt='github'
      />
      <span className='ml-2'>{capitalize(type)}</span>
    </a>
  )
}
