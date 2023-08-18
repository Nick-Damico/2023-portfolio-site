import { ReactNode } from 'react'
import Image from 'next/image'

export default function ProjectItem({
  name,
  img
}: {
  name: string
  img: string
}): ReactNode {
  return (
    <div className='relative flex items-center justify-center'>
      <Image fill src={img} quality={100} alt='HikeIt application' />
    </div>
  )
}
