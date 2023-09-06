import { ReactNode } from 'react'
import Image from 'next/image'

export default function SkillItem({
  imgSrc,
  imgAlt,
  width,
  height,
  active
}: {
  imgSrc: string
  imgAlt: string
  width: number
  height: number
  active: boolean
}): ReactNode {
  const activeClass = () => {
    return active ? 'border-emerald-500' : 'border-zinc-950'
  }

  return (
    <div
      className={`flex flex-col col-start-1 col-span-1 items-center p-1 bg-zinc-900 border ${activeClass()}`}
    >
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
