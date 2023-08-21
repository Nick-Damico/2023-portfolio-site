import { ReactNode } from 'react'
import Image from 'next/image'

export default function ProjectItem({
  name,
  img,
  onClick
}: {
  name: string
  img: string
  onClick: Function
}): ReactNode {
  const handleClick = (name: string) => {
    onClick(name)
  }

  return (
    <div
      onClick={() => handleClick(name)}
      className='relative flex items-center justify-center'
    >
      <Image fill src={img} quality={100} alt='HikeIt application' />
    </div>
  )
}
