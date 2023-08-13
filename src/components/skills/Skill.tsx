import { ReactNode } from 'react'
import Image from 'next/image'

export default function Skill({
  key,
  imgSrc,
  imgAlt,
  width,
  height
}: {
  key: number
  imgSrc: string
  imgAlt: string
  width: number
  height: number
}): ReactNode {
  return (
    <div className='flex flex-col col-start-1 col-span-1 items-center p-1 bg-zinc-900 border border-zinc-950'>
      <Image
        className=''
        key={key}
        src={imgSrc}
        alt={imgAlt}
        width={width}
        height={width}
      />
    </div>
  )
}
