import { ReactNode } from 'react'
import Image from 'next/image'

export default function SkillItem({
  imgSrc,
  imgAlt,
  width,
  height
}: {
  imgSrc: string
  imgAlt: string
  width: number
  height: number
}): ReactNode {
  return (
    <div className='flex flex-col col-start-1 col-span-1 items-center p-1 bg-zinc-900 border border-zinc-950 hover:border-emerald-500'>
      <Image
        className=''
        src={imgSrc}
        alt={imgAlt}
        width={width}
        height={width}
      />
    </div>
  )
}
